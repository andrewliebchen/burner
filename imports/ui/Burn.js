import {Flex, Button} from 'rebass';
import React, {Component} from 'react';
import CanvasList from './CanvasList';
import NewCanvas from './NewCanvas';
import Block from './Block';

class Burn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCanvas: false,
    };
    this._handleNewCanvasToggle = this._handleNewCanvasToggle.bind(this);
  }

  _handleNewCanvasToggle() {
    this.setState({showNewCanvas: !this.state.showNewCanvas});
  }

  render() {
    return (
      <Flex flexDirection="column" width={1} p={3}>
        {this.state.showNewCanvas ? (
          <Block>
            <NewCanvas onSubmit={this._handleNewCanvasToggle} />
          </Block>
        ) : (
          <Button onClick={this._handleNewCanvasToggle}>New Canvas</Button>
        )}

        <CanvasList />
      </Flex>
    );
  }
}

export default Burn;
