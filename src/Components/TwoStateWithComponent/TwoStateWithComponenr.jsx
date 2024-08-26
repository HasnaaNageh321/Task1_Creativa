import React from "react";
import { Component } from "react";

class TwoStateWithComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloggedIn: false,
      subscription: "Guest",
    };
  }
  handleSubscription = () => {
    this.setState({
      isLoggedIn: true,
      subscription: "You now have a subscription",
    });
  };
  render() {
    const { isLoggedIn, subscription } = this.state;
    return (
      <>
        <div>
          <h2>Subscription Status</h2>
          <p>
            <strong>Logged In:</strong> {isLoggedIn ? "True" : "False"}
          </p>
          <p>
            <strong>Subscription:</strong> {subscription}
          </p>
          <button onClick={this.handleSubscription}>Subscribe</button>
        </div>
      </>
    );
  }
}
export default TwoStateWithComponent;
