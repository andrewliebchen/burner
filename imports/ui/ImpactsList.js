import {createContainer} from 'react-meteor-data';
import {HelpCircle, PlusCircle, MinusCircle} from 'react-feather';
import {Impacts} from '../api/impacts';
import {Text, Flex, Box} from 'rebass';
import Block from './Block';
import Input from './Input';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

class ImpactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newText: '',
      newTrend: false,
    };
  }

  render() {
    const {impacts} = this.props;

    return (
      <Block title="Impacts">
        {impacts.length > 0 ? (
          impacts.map(impact => (
            <Flex key={impact._id} alignItems="center" mt={2}>
              <Flex
                mr={2}
                alignItems="center"
                onClick={() =>
                  Impacts.update(impact._id, {
                    $set: {
                      negative: !impact.negative,
                    },
                  })
                }>
                {impact.negative ? (
                  <MinusCircle color="red" />
                ) : (
                  <PlusCircle color="green" />
                )}
              </Flex>
              <Text>{impact.text}</Text>
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
            placeholder="Add an impact and press Enter..."
            value={this.state.newText}
            onChange={event => this.setState({newText: event.target.value})}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                Impacts.insert(
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

ImpactsList.propTypes = {
  impacts: PropTypes.array,
  canvas: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

export default createContainer(props => {
  return {
    impacts: Impacts.find({canvasId: props.canvas._id}).fetch(),
  };
}, ImpactsList);
