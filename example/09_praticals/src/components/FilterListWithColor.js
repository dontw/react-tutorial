import React, { Component } from 'react';
import PropTypes from 'prop-types';

const FilterItem = ({ data }) => (
  <li>
    <span>{data[0]}</span>
    <span style={{ color: 'red' }}>{data[1]}</span>
    <span>{data[2]}</span>
  </li>
);

export default class FilterListWithColor extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      filteredItems: [],
    };
  }
  onChangeFilter = (e) => {
    const filter = e.target.value;
    const needle = filter.toLowerCase();
    const filteredItems = [];
    if (filter !== '') {
      this.props.items.forEach((item) => {
        const index = item.toLowerCase().indexOf(needle);
        if (index !== -1) {
          filteredItems.push([
            item.substr(0, index),
            item.substr(index, 1),
            item.substr(index + 1, item.length),
          ]);
        }
      });
    }
    this.setState({ filter, filteredItems });
  }
  render() {
    return (
      <section>
        <input
          className="form-control"
          value={this.state.filter}
          onChange={this.onChangeFilter}
        />
        <ul>
          {
            this.state.filteredItems.map((item, index) =>
              <FilterItem key={index.toString()} data={item} />)
          }
        </ul>
      </section>
    );
  }
}

