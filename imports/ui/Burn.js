import {Flex, Button} from 'rebass';
import React, {Component} from 'react';
import CanvasList from './CanvasList';
import NewCanvas from './NewCanvas';

class Burn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewCanvas: false,
    };
  }

  render() {
    return (
      <Flex flexDirection="column" width={1} p={3}>
        {this.state.showNewCanvas ? (
          <NewCanvas />
        ) : (
          <Button
            onClick={() =>
              this.setState({showNewCanvas: !this.state.showNewCanvas})
            }>
            New Canvas
          </Button>
        )}

        <CanvasList />
      </Flex>
    );
  }
}

export default Burn;
