import { createContainer } from "react-meteor-data";
import { Scenarios } from "../api/scenarios";
import Block from "./Block";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, Flex, Box } from "rebass";

class ScenariosList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: ""
    };
  }
  render() {
    const { scenarios } = this.props;

    return (
      <Block title="Scenarios">
        {scenarios.length > 0 ? (
          scenarios.map(scenario => (
            <Flex key={scenario._id} alignItems="center" mt={2}>
              <Text>{scenario.text}</Text>
            </Flex>
          ))
        ) : (
          <Text>No Scenarios</Text>
        )}
      </Block>
    );
  }
}

ScenariosList.propTypes = {
  scenarios: PropTypes.array,
  canvas: PropTypes.shape({
    _id: PropTypes.string
  })
};

export default createContainer(props => {
  return {
    scenarios: Scenarios.find({ canvasId: props.canvas._id }).fetch()
  };
}, ScenariosList);
