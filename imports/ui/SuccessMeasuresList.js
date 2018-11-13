import {Box, Flex, Text} from 'rebass';
import {createContainer} from 'react-meteor-data';
import {SuccessMeasures} from '../api/successMeasures';
import {ThumbsUp, ThumbsDown, HelpCircle} from 'react-feather';
import Block from './Block';
import Input from './Input';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class SuccessMeasuresList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: '',
      newTrend: false,
    };
  }

  render() {
    const {successMeasures} = this.props;
    return (
      <Block title="Success Measures">
        {successMeasures.length > 0 ? (
          successMeasures.map(measure => (
            <Flex key={measure._id} alignItems="center" mt={2}>
              <Flex
                mr={2}
                alignItems="center"
                onClick={() =>
                  SuccessMeasures.update(measure._id, {
                    $set: {
                      negative: !measure.negative,
                    },
                  })
                }>
                {measure.negative ? <ThumbsDown /> : <ThumbsUp />}
              </Flex>
              <Text>{measure.text}</Text>
            </Flex>
          ))
        ) : (
          <Text>No success measures</Text>
        )}
        <Flex mt={2} justifyContent="space-between" alignItems="center">
          <Box mr={2}>
            <HelpCircle />
          </Box>
          <Input
            placeholder="Add an success measure and press Enter..."
            value={this.state.newText}
            onChange={event => this.setState({newText: event.target.value})}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                SuccessMeasures.insert(
                  {
                    createdAt: Date.now(),
                    modifiedAt: Date.now(),
                    text: this.state.newText,
                    negative: false,
                    canvasId: this.props.canvas._id,
                  },
                  (error, success) => success && this.setState({newText: ''}),
                );
              }
            }}
          />
        </Flex>
      </Block>
    );
  }
}

SuccessMeasuresList.propTypes = {
  successMeasures: PropTypes.array,
  canvas: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

export default createContainer(props => {
  return {
    successMeasures: SuccessMeasures.find({canvasId: props.canvas._id}).fetch(),
  };
}, SuccessMeasuresList);
