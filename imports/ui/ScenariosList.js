import { createContainer } from "react-meteor-data";
import { Scenarios } from "../api/scenarios";
import Block from "./Block";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, Flex, Box } from "rebass";
import Input from "./Input";
import { HelpCircle } from "react-feather";

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
        <Flex mt={2} justifyContent="space-between" alignItems="center">
          <Box mr={2}>
            <HelpCircle />
          </Box>
          <Input
            placeholder="Add an scenario and press Enter..."
            value={this.state.newText}
            onChange={event => this.setState({ newText: event.target.value })}
            onKeyPress={event => {
              if (event.key === "Enter") {
                Scenarios.insert(
                  {
                    createdAt: Date.now(),
                    modifiedAt: Date.now(),
                    text: this.state.newText,
                    canvasId: this.props.canvas._id
                  },
                  (error, success) => success && this.setState({ newText: "" })
                );
              }
            }}
          />
        </Flex>
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
