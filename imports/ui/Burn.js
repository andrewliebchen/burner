import {Canvases} from '../api/canvases';
import {Flex, Button} from 'rebass';
import React from 'react';
import CanvasList from './CanvasList';

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
    <CanvasList />
  </Flex>
);

export default Burn;
