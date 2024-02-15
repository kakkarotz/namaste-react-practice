import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
  }

  render() {
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increment count
        </button>
        <h1>Count2: {count2}</h1>
        <h2>Name: {this.props.name}</h2>
        <h3>Location: Noida</h3>
        <h4>Contact: pandeykunal2097@gmail.com</h4>
      </div>
    );
  }
}

export default UserClass;
