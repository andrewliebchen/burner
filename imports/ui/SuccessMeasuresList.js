import { Box, Flex, Text } from "rebass";
import { createContainer } from "react-meteor-data";
import { SuccessMeasures } from "../api/successMeasures";
import { ThumbsUp, ThumbsDown, HelpCircle } from "react-feather";
import Block from "./Block";
import DeleteItem from "./DeleteItem";
import Input from "./Input";
import NewItem from "./NewItem";
import PropTypes from "prop-types";
import React, { Component } from "react";
import User from "./User";

class SuccessMeasuresList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrend: false
    };
  }

  render() {
    const { successMeasures, canvas } = this.props;
    return (
      <Block title="Success Measures">
        {successMeasures.length > 0 ? (
          successMeasures.map(measure => (
            <Flex
              key={measure._id}
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <Flex alignItems="center">
                <Flex
                  mr={2}
                  alignItems="center"
                  onClick={() =>
                    SuccessMeasures.update(measure._id, {
                      $set: {
                        negative: !measure.negative
                      }
                    })
                  }
                >
                  {measure.negative ? <ThumbsDown /> : <ThumbsUp />}
                </Flex>
                <Text>{measure.text}</Text>
              </Flex>
              <Flex alignItems="center">
                <DeleteItem
                  id={measure._id}
                  collection={SuccessMeasures}
                  mr={2}
                />
                <User id={measure.ownerId} />
              </Flex>
            </Flex>
          ))
        ) : (
          <Text>No success measures</Text>
        )}
        <NewItem
          name="success measure"
          canvas={canvas}
          collection={SuccessMeasures}
          options={{ negative: false }}
        />
      </Block>
    );
  }
}

SuccessMeasuresList.propTypes = {
  successMeasures: PropTypes.array,
  canvas: PropTypes.shape({
    _id: PropTypes.string
  })
};

export default createContainer(props => {
  return {
    successMeasures: SuccessMeasures.find({
      canvasId: props.canvas._id
    }).fetch()
  };
}, SuccessMeasuresList);
