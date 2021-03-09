import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Demo extends Component {
  myFunc() {
    const cntr = document.getElementById('myId');
    var el = <h1>I'm Nuru and am from Bangladesh</h1>;

    var clbk = function () {
      alert("Hi I'm CallBack");
    };
    ReactDOM.hydrate(el, cntr, clbk);
  }

  render() {
    return (
      <div>
        <button onClick={this.myFunc}>Click Me</button>
        <h1 id='myId'>I'm Nuruzzaman</h1>
      </div>
    );
  }
}

export default Demo;
