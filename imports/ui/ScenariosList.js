import { createContainer } from "react-meteor-data";
import { PlayCircle } from "react-feather";
import { Scenarios } from "../api/scenarios";
import { Text, Flex, Box } from "rebass";
import Block from "./Block";
import Input from "./Input";
import PropTypes from "prop-types";
import React from "react";
import NewItem from "./NewItem";
import User from "./User";

const ScenariosList = props => (
  <Block title="Scenarios">
    {props.scenarios.length > 0 ? (
      props.scenarios.map(scenario => (
        <Flex
          key={scenario._id}
          alignItems="center"
          justifyContent="space-between"
          mt={2}
        >
          <Flex alignItems="center">
            <Flex mr={2} alignItems="center">
              <PlayCircle />
            </Flex>
            <Text>{scenario.text}</Text>
          </Flex>
          <User id={scenario.ownerId} />
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
