import { createContainer } from "react-meteor-data";
import { HelpCircle } from "react-feather";
import { Scenarios } from "../api/scenarios";
import { Text, Flex, Box } from "rebass";
import Block from "./Block";
import Input from "./Input";
import PropTypes from "prop-types";
import React from "react";
import NewItem from "./NewItem";

const ScenariosList = props => (
  <Block title="Scenarios">
    {props.scenarios.length > 0 ? (
      props.scenarios.map(scenario => (
        <Flex key={scenario._id} alignItems="center" mt={2}>
          <Text>{scenario.text}</Text>
        </Flex>
      ))
    ) : (
      <Text>No Scenarios</Text>
    )}
    <NewItem
      name="scenario"
      canvasId={props.canvas._id}
      collection={Scenarios}
    />
  </Block>
);

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
