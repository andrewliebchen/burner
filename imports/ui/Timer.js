import React, {Component} from 'react';
import TimerMachine from 'react-timer-machine';
import PropTypes from 'prop-types';
import {Button, Flex, Text} from 'rebass';
import {Play, Pause, Square} from 'react-feather';
import TimeFormat from 'hh-mm-ss';
import styled from 'styled-components';
import {Canvases} from '../api/canvases';

const Root = styled(Flex)`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 80px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: green;
  transition: 0.5s linear;
`;

const Content = styled(Flex)`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      started: false,
      paused: false,
      timeStart: 120000,
      currentTime: {m: 2, s: 0},
    };
    this._handleTimerToggle = this._handleTimerToggle.bind(this);
  }

  _handleTimerToggle() {
    Canvases.update(this.props.canvasId, {
      $set: {timerStarted: this.state.started},
    });
  }

  render() {
    const {currentTime, timeStart} = this.state;
    return (
      <Root justifyContent="center" alignItems="center" bg="#ccc" p={3}>
        <Background
          style={{
            width:
              (currentTime.s * 1000 + currentTime.m * 60000) / timeStart * 100 +
              '%',
          }}
        />
        <Content>
          <Text fontSize={6} width={140}>
            <TimerMachine
              formatTimer={(time, ms) => TimeFormat.fromS(ms / 1000, 'mm:ss')}
              countdown
              onStart={this._handleTimerToggle}
              onPause={this._handleTimerToggle}
              onTick={timer => this.setState({currentTime: timer})}
              {...this.state}
            />
          </Text>
          <Button onClick={() => this.setState({started: !this.state.started})}>
            {this.state.started ? <Pause /> : <Play />}
          </Button>
        </Content>
      </Root>
    );
  }
}

Timer.propTypes = {
  canvasId: PropTypes.string,
  // timerStarted: PropTypes.boolean,
};

export default Timer;
