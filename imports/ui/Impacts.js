import React, {Component} from 'react';
import {Text, Flex, Box, Button} from 'rebass';
import {HelpCircle, PlusCircle, MinusCircle} from 'react-feather';
import PropTypes from 'prop-types';
import Block from './Block';
import Input from './Input';
import {Elements} from '../api/elements';

class Impacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: '',
      newTrend: false,
    };
  }

  render() {
    const {elements} = this.props;
    const impacts = elements.filter(element => element.type === 'impact');

    return (
      <Block title="Impacts">
        {impacts.length > 0 ? (
          impacts.map(element => (
            <Flex key={element._id} alignItems="center" mt={2}>
              <Flex
                mr={2}
                alignItems="center"
                onClick={() =>
                  Elements.update(element._id, {
                    $set: {
                      negative: !element.negative,
                    },
                  })
                }>
                {element.negative ? (
                  <MinusCircle color="red" />
                ) : (
                  <PlusCircle color="green" />
                )}
              </Flex>
              <Text>{element.text}</Text>
            </Flex>
          ))
        ) : (
          <Text>No Impacts</Text>
        )}
        <Flex mt={2} justifyContent="space-between" alignItems="center">
          <Box mr={2}>
            <HelpCircle />
          </Box>
          <Input
            value={this.state.newText}
            onChange={event => this.setState({newText: event.target.value})}
          />
          {this.state.newText.length > 0 && (
            <Button
              onClick={() =>
                Elements.insert(
                  {
                    type: 'impact',
                    createdAt: Date.now(),
                    modifiedAt: Date.now(),
                    text: this.state.newText,
                    negative: false,
                    canvasId: this.props.canvas._id,
                  },
                  (error, success) => success && this.setState({newText: ''}),
                )
              }>
              Add
            </Button>
          )}
        </Flex>
      </Block>
    );
  }
}

Impacts.propTypes = {
  elements: PropTypes.array,
};

export default Impacts;
