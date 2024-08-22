import React from "react";

class Contador extends React.Component{
  render() {
    return(
      <div className="counter">
        {this.props.count}
      </div>
    );
  }
}

export { Contador }