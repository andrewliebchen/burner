import React from "react";
import Block from "./Block";
import { Text, Flex, Box } from "rebass";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import { Trash } from "react-feather";
import PropTypes from "prop-types";
import { Canvases } from "../api/canvases";

const CanvasListItem = props => (
  <Link to={`canvases/${props._id}`}>
    <Block bg={props.style.base}>
      <Flex justifyContent="space-between">
        <Box>
          {props.title ? (
            <Text mb={1} color={props.style.color} fontWeight="bold">
              Problem Statement
            </Text>
          ) : (
            <Text color={props.style.color}>
              <TimeAgo date={props.modifiedAt} />
            </Text>
          )}

          <Text fontSize={4} color={props.style.color}>
            {props.problemStatement}
          </Text>
        </Box>
        <Trash
          color={props.style.color}
          onClick={event => {
            event.preventDefault();
            window.confirm("Are you sure you want to delete this canvas?") &&
              Canvases.remove(props._id);
          }}
        />
      </Flex>
    </Block>
  </Link>
);

CanvasListItem.propTypes = {
  title: PropTypes.string,
  modifiedAt: PropTypes.number,
  problemStatement: PropTypes.string,
  style: PropTypes.shape({
    base: PropTypes.string,
    color: PropTypes.string
  })
};

export default CanvasListItem;
