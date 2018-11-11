import React, {Component} from 'react';
import TimerMachine from 'react-timer-machine';
import PropTypes from 'prop-types';
import {Button, Flex, Text} from 'rebass';
import {Play, Pause, Square} from 'react-feather';
import TimeFormat from 'hh-mm-ss';
import styled from 'styled-components';

const Root = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      paused: false,
      timeStart: this.props.timeStart,
    };
  }

  render() {
    return (
      <Root justifyContent="center" alignItems="center" p={3} bg="#CCC">
        <Text fontSize={6} width={140}>
          <TimerMachine
            formatTimer={(time, ms) => TimeFormat.fromS(ms / 1000, 'mm:ss')}
            countdown
            {...this.state}
          />
        </Text>
        <Button onClick={() => this.setState({started: !this.state.started})}>
          {this.state.started ? <Pause /> : <Play />}
        </Button>
      </Root>
    );
  }
}

Timer.defaultProps = {
  timeStart: 120000,
};

Timer.propTypes = {
  timeStart: PropTypes.number,
};

export default Timer;
