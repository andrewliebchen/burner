import { HelpCircle } from "react-feather";
import { Text, Flex, Box } from "rebass";
import Input from "./Input";
import PropTypes from "prop-types";
import React, { Component } from "react";

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
          onKeyPress={event => {
            if (event.key === "Enter") {
              this.props.collection.insert(
                {
                  createdAt: Date.now(),
                  modifiedAt: Date.now(),
                  text: this.state.newText,
                  canvasId: this.props.canvasId,
                  ...this.props.options
                },
                (error, success) => success && this.setState({ newText: "" })
              );
            }
          }}
        />
      </Flex>
    );
  }
}

NewItem.propTypes = {
  canvasId: PropTypes.string,
  collection: PropTypes.object,
  name: PropTypes.string,
  options: PropTypes.object
};

export default NewItem;
