import React, {Component} from 'react';
import {Box, Flex, Text, Button} from 'rebass';
import {Canvases} from '../api/canvases';
import PropTypes from 'prop-types';

class NewCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      problemStatement: '',
    };
  }

  render() {
    return (
      <Flex flexDirection="column">
        <Text>New Canvas</Text>
        <input
          type="text"
          autoFocus
          onChange={event =>
            this.setState({problemStatement: event.target.value})
          }
        />
        <Button
          onClick={() => {
            this.props.onSubmit();
            Canvases.insert({
              createdAt: Date.now(),
              modifiedAt: Date.now(),
              problemStatement: this.state.problemStatement,
            });
          }}>
          Create canvas
        </Button>
      </Flex>
    );
  }
}

NewCanvas.propTypes = {
  onSubmit: PropTypes.func,
};

export default NewCanvas;
