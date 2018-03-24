/* eslint react/prefer-stateless-function:0, react/no-multi-comp:0 */
import React, { Component, PureComponent } from 'react';
// import PropTypes from 'prop-types';

// https://github.com/facebook/fbjs/blob/c69904a511b900266935168223063dd8772dfc40/packages/fbjs/src/core/shallowEqual.js#L39
// PureComponent shallowEqual source Code
// class MyPureComponent extends PureComponent {

let a = [0, 1, 2];
let b = a;
b.push(3);
console.log(a);
let c = [...a];
let d = a.concat();

class ChildComponent extends Component {
  state = { list: [{ name: 'milkmidi', id: 0 }] };
  componentDidUpdate() {
    console.log('ChildComponent componentDidUpdate ');
  }
  clickHandler = () => {
    const { list } = this.state;
    const value = Date.now().toString();
    list.push({ name: value, id: value });
    this.setState({
      list,
    });
  }
  render() {
    return (
      <section>
        <h2>Component</h2>
        <button onClick={this.clickHandler}>Add</button>
        { this.state.list.map(({ name, id }) => <p key={id}>{name}</p>) }
      </section>
    );
  }
}


class ChildPureComponent extends PureComponent {
  state = { list: [{ name: 'milkmidi', id: 0 }] };
  componentDidUpdate() {
    console.log('ChildPureComponent componentDidUpdate ');
  }
  clickHandler = () => {
    console.log('123');
    const { list } = this.state;
    const value = Date.now().toString();
    list.push({ name: value, id: value });

    const newList = [...list];
    this.setState({
      list: newList,
      // list,
    });
  }
  render() {
    return (
      <section>
        <h2>PureComponent</h2>
        <button onClick={this.clickHandler}>Add</button>
        { this.state.list.map(({ name, id }) => <p key={id}>{name}</p>) }
      </section>
    );
  }
}

export default class PureComponentExample extends Component {
  state = {
    teamMember: [],
  };
  componentWillMount() {
    setInterval(() => {
      const { teamMember } = this.state;
      teamMember.push(teamMember.length + 1);
      this.setState({
        teamMember,
      });
    }, 2000);
  }
  render() {
    const { teamMember } = this.state;
    return (
      <section>
        <p>Parent state teamMember count:{teamMember.length}</p>
        <ChildComponent teamMember={teamMember} />
        <ChildPureComponent teamMember={teamMember} />
      </section>
    );
  }
}
