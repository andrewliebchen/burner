import { Box, Flex, Text } from "rebass";
import { Canvases } from "../api/canvases";
import { createContainer } from "react-meteor-data";
import Block from "./Block";
import ImpactsList from "./ImpactsList";
import PropTypes from "prop-types";
import React from "react";
import ScenariosList from "./ScenariosList";
import SuccessMeasuresList from "./SuccessMeasuresList";
import Timer from "./Timer";
import CanvasListItem from "./CanvasListItem";

const Canvas = props => (
  <div>
    {props.canvas ? (
      <Flex flexDirection="column">
        <CanvasListItem title="Problem Statement" {...props.canvas} />
        <ImpactsList {...props} />
        <SuccessMeasuresList {...props} />
        <ScenariosList {...props} />
        {/* <Timer
          canvasId={props.canvas._id}
          timerStarted={props.canvas.timerStarted}
        /> */}
      </Flex>
    ) : (
      <div>Loading</div>
    )}
  </div>
);

Canvas.propTypes = {
  canvas: PropTypes.shape({
    _id: PropTypes.string,
    modifiedAt: PropTypes.number,
    problemStatement: PropTypes.string,
    // timerStarted: PropTypes.boolean,
    style: PropTypes.shape({
      base: PropTypes.string,
      color: PropTypes.string
    })
  })
};

export default createContainer(props => {
  const canvasId = props.match.params.id;
  return {
    canvas: Canvases.findOne(canvasId)
  };
}, Canvas);
