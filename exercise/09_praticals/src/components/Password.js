import React, { Component } from 'react';

class Password extends Component {
  // constructor(props)簡寫
  state = {
    value: '',
    strength: '',
  }

  // 即時收值並計算
  onChange=(e) => {
    const { value } = e.target;
    this.setState({ value, strength: this.calcStrength(value) });
  }

  calcStrength=(value) => {
    let score = value.length;
    if (/[A-Z]/.test(value)) score *= 1.25;
    if (/[a-z]/.test(value)) score *= 1.25;
    if (/[0-9]/.test(value)) score *= 1.25;
    if (/[^A-Za-z0-9]/.test(value)) score *= 1.25;

    if (score > 40) return 'Perfect';
    if (score > 20) return 'GREAT';
    if (score > 10) return 'GOOD';
    if (score < 5) return 'BAD';
    return 'WEEEEEEAAK';
  }

  render() {
    const { value, strength } = this.state;
    return (
      <section>
        <input type="passowrd" className="form-control" value={value} onChange={this.onChange} />
        <span>{strength}</span>
      </section>
    );
  }
}

export default Password;
