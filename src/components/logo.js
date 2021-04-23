import React, { Component } from "react";

class Logo extends Component {
  render() {
    const size = {
      height: this.props.size ? this.props.size : 65,
      width: this.props.size ? this.props.size : 65
    };
    return (
      <div className="logo-main">
        <img
          style={size}
          alt="daily smarty ui image logo big"
          src="../assets/dailysmartylogo.png"
        />
      </div>
    );
  }
}

export default Logo;
