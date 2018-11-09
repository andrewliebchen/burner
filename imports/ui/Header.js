import React from 'react';
import {Flex, Text, Box} from 'rebass';
import {ChevronRight} from 'react-feather';
import {NavLink} from 'react-router-dom';

const Header = props => (
  <Flex width={1} p={2} alignItems="center" justifyContent="center">
    <Text p={2}>Burns</Text>
    <ChevronRight />
    <NavLink to="/">
      <Text p={2}>Canvases</Text>
    </NavLink>
    <ChevronRight />
    <Text p={2}>Canvas</Text>
    <Text p={2}>Workshop</Text>
    <Text p={2}>Pair & Share</Text>
  </Flex>
);

export default Header;
