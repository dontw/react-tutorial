import React, { Component } from 'react';

class Password extends Component {
  state = {
    value: '',
    strength: '',
    number: '',
  }
  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      value,
      number: this.numberWithCommas(value),
    });
    // this.setState({ value, strength: this.calcStrength(value) });
  }
  numberWithCommas = x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

  calcStrength = (value) => {
    let score = value.length;

    if (/[A-Z]/.test(value)) score *= 1.25;
    if (/[a-z]/.test(value)) score *= 1.25;
    if (/[0-9]/.test(value)) score *= 1.25;
    // if (/[^A-Za-z0-9]/.test(value)) score *= 1.25;

    if (score > 40) return 'Perfect';
    if (score > 20) return 'Great';
    if (score > 10) return 'Good';
    return 'Weak';
  }
  render() {
    const { value, strength, number } = this.state;
    return (
      <section>
        <input type="text" className="form-control" value={value} onChange={this.onChange} />
        <p>{number}</p>
        <span>{strength }</span>
      </section>
    );
  }
}
export default Password;
