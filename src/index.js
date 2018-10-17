import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const campuses = [
  {
    id: 1,
    name: "Mars Academy"
  }
];

function CoolThing(props) {
  return <h1>{props.type.campuses}</h1>;
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Hello"
    };
    this.sayGoodbye = this.sayGoodbye.bind(this);
  }
  sayGoodbye = () => {
    this.setState({ message: "Good Bye" });
  };
  render() {
    return (
      <div className="App">
        <h1>{this.state.message} CodeSandbox</h1>
        <button onClick={this.sayGoodbye}>Say goodbye</button>

        <CoolThing type={campuses} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
