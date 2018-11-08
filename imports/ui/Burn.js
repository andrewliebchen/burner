import {Canvases} from '../api/canvases';
import {Flex, Button} from 'rebass';
import React from 'react';
import CanvasGrid from './CanvasGrid';

const Burn = props => (
  <Flex flexDirection="column" width={1} p={3}>
    <Button
      onClick={() =>
        Canvases.insert({
          createdAt: Date.now(),
          modifiedAt: Date.now(),
        })
      }>
      New Canvas
    </Button>
    <CanvasGrid />
  </Flex>
);

export default Burn;
