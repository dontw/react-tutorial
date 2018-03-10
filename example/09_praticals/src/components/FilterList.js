import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FilterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
      filteredItems: props.items,
    };
  }
  onChangeFilter = (e) => {
    const filter = e.target.value;
    const needle = filter.toLowerCase();
    const filteredItems = this.props.items.filter(item => (
      item.toLowerCase().indexOf(needle) !== -1
    ));
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
            this.state.filteredItems.map(item => 
              <li key={item}>{item}</li>)
          }
        </ul>
      </section>
    );
  }
}
FilterList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
}
export default FilterList;
