import React, { Component } from "react";
import Auxilliary from "../../hoc/Auxiliary";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxilliary>
        <Burger />
      </Auxilliary>
    );
  }
}

export default BurgerBuilder;
