import React, {Component} from 'react';
import {Box, Flex, Text, Button} from 'rebass';
import {Canvases} from '../api/canvases';
import PropTypes from 'prop-types';
import Input from './Input';
import bikeshed from '@jxnblk/bikeshed';
import hello from 'hello-color';

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
        <Text mb={2}>New Canvas</Text>
        <Box mb={2}>
          <Input
            label="Problem statement"
            autoFocus
            onChange={event =>
              this.setState({problemStatement: event.target.value})
            }
          />
        </Box>
        <Button
          onClick={() => {
            this.props.onSubmit();
            Canvases.insert({
              createdAt: Date.now(),
              modifiedAt: Date.now(),
              problemStatement: this.state.problemStatement,
              style: hello(bikeshed()),
              timerStarted: false,
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
