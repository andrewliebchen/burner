import { createContainer } from "react-meteor-data";
import { HelpCircle, PlusCircle, MinusCircle } from "react-feather";
import { Impacts } from "../api/impacts";
import { Text, Flex, Box } from "rebass";
import Block from "./Block";
import DeleteItem from "./DeleteItem";
import Input from "./Input";
import PropTypes from "prop-types";
import React, { Component } from "react";
import NewItem from "./NewItem";
import User from "./User";

class ImpactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTrend: false
    };
  }

  render() {
    const { impacts, canvas } = this.props;

    return (
      <Block title="Impacts">
        {impacts.length > 0 ? (
          impacts.map(impact => (
            <Flex
              key={impact._id}
              alignItems="center"
              justifyContent="space-between"
              mt={2}
            >
              <Flex alignItems="center">
                <Flex
                  mr={2}
                  alignItems="center"
                  onClick={() =>
                    Impacts.update(impact._id, {
                      $set: {
                        negative: !impact.negative
                      }
                    })
                  }
                >
                  {impact.negative ? (
                    <MinusCircle color="red" />
                  ) : (
                    <PlusCircle color="green" />
                  )}
                </Flex>
                <Text>{impact.text}</Text>
              </Flex>
              <Flex alignItems="center">
                <DeleteItem id={impact._id} collection={Impacts} mr={2} />
                <User id={impact.ownerId} />
              </Flex>
            </Flex>
          ))
        ) : (
          <Text>No Impacts</Text>
        )}
        <NewItem
          name="impact"
          canvas={canvas}
          collection={Impacts}
          options={{ negative: false }}
        />
      </Block>
    );
  }
}

ImpactsList.propTypes = {
  impacts: PropTypes.array,
  canvas: PropTypes.shape({
    _id: PropTypes.string
  })
};

export default createContainer(props => {
  return {
    impacts: Impacts.find({ canvasId: props.canvas._id }).fetch()
  };
}, ImpactsList);
