import { HelpCircle } from "react-feather";
import { Text, Flex, Box } from "rebass";
import Input from "./Input";
import PropTypes from "prop-types";
import React, { Component } from "react";
import User from "./User";

class NewItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: ""
    };
  }

  render() {
    return (
      <Flex mt={2} justifyContent="space-between" alignItems="center">
        <Box mr={2}>
          <HelpCircle />
        </Box>
        <Input
          placeholder={`Add a ${this.props.name} and press Enter...`}
          value={this.state.newText}
          onChange={event => this.setState({ newText: event.target.value })}
          color={this.props.canvas.style.base}
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.props.collection.insert(
                {
                  createdAt: Date.now(),
                  modifiedAt: Date.now(),
                  text: this.state.newText,
                  canvasId: this.props.canvas._id,
                  ownerId: Meteor.userId(),
                  ...this.props.options
                },
                (error, success) => success && this.setState({ newText: "" })
              );
            }
          }}
        />
        <User id={Meteor.userId()} ml={2} />
      </Flex>
    );
  }
}

NewItem.propTypes = {
  canvas: PropTypes.object,
  collection: PropTypes.object,
  name: PropTypes.string,
  options: PropTypes.object
};

export default NewItem;
