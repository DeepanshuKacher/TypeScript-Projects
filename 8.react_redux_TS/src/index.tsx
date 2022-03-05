import react from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color?: string;
}

class App extends react.Component<AppProps> {
  state = { counter: 0 };

  increment = (): void => {
    this.setState({ counter: this.state.counter + 1 });
  };
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        {this.state.counter}
      </div>
    );
  }
}

ReactDOM.render(<App color="red" />, document.getElementById("root"));
