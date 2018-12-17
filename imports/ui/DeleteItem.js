import React from "react";
import { Box } from "rebass";
import { Trash } from "react-feather";
import PropTypes from "prop-types";
import styled from "styled-components";

const Root = styled(Box)`
  opacity: 0.3;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

const DeleteItem = props => (
  <Root onClick={() => props.collection.remove(props.id)} {...props}>
    <Trash size={16} />
  </Root>
);

DeleteItem.propTypes = {
  collection: PropTypes.object,
  id: PropTypes.string
};

export default DeleteItem;
