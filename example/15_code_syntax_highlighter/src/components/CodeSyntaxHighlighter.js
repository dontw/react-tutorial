import React, { Component } from 'react';
/* global dp:false */
class CodeSyntaxHighlighter extends Component {
  state = {
    code: '',
  }
  inputHandler = (e) => {
    const code = e.target.value;
    this.setState({ code }, this.nextTick);
  }
  nextTick = () => {
    const lastDOM = document.querySelector('.dp-highlighter');
    if (lastDOM) {
      lastDOM.remove();
    }
    dp.SyntaxHighlighter.HighlightAll('code', true, false);
  }
  render() {
    return (
      <div className="code">
        <textarea name="code1" id="input" cols="110" rows="10" onInput={this.inputHandler} />
        <br />
        <textarea name="code" id="code" className="javascript" value={this.state.code} />
      </div>
    );
  }
}

export default CodeSyntaxHighlighter;
