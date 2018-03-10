import React, { Component } from 'react';

class Password extends Component {
  state = {
    value: '',
    strength: '',
  }
  onChange = (e) => {
    const { value } = e.target;
    this.setState({ value, strength: this.calcStrength(value) });
  }
  getValue = () => this.state.value

  calcStrength = (value) => {
    let score = value.length;

    if (/[A-Z]/.test(value)) score *= 1.25;
    if (/[a-z]/.test(value)) score *= 1.25;
    if (/[0-9]/.test(value)) score *= 1.25;
    if (/[^A-Za-z0-9]/.test(value)) score *= 1.25;

    if (score > 40) return 'Perfect';
    if (score > 20) return 'Great';
    if (score > 10) return 'Good';
    return 'Weak';
  }
  render() {
    const { value, strength } = this.state;
    return (
      <section>
        <input type="password" className="form-control" value={value} onChange={this.onChange} />
        <span>{strength }</span>
      </section>
    );
  }
}

export default Password;
