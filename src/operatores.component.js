import React, { Component } from "react";

class OperatorsComponent extends Component {
  constructor(props) {
    super(props);
    this.operators = ["+", "-", "*", "/"];
  }
 

  render() {
    return (
      <div className="operator-bar col-md-4 pull-left">
        {this.operators.map((item, index) => {
          return (
            <button
              key={index}
              className="button"
              onClick= {this.props.onButtonClick}
              value={item}
            >
              {item}
            </button>
          );
        })}
        <button onClick={this.props.calculateResult} className="button sum" >=</button>
      </div>
    );
  }
}

export default OperatorsComponent;
