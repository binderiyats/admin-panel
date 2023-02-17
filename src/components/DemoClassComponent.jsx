import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
export class DemoClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increaseCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  componentWillUnmount() {
    toast.success("javkhaa zaaj ugsiin");
  }

  componentDidUpdate() {
    if (this.state.count === 10) {
      this.props.setShowButton(false);
    }
  }

  render() {
    return (
      <Button
        onClick={() => {
          this.increaseCount();
        }}
      >
        Hello{this.state.count}
      </Button>
    );
  }
}
