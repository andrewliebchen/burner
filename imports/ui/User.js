import React from "react";
import { Box, Flex } from "rebass";
import PropTypes from "prop-types";
import styled from "styled-components";
import { User as UserIcon } from "react-feather";

const Unknown = styled(Flex)`
  height: 24px;
  width: 24px;
  background-color: #ccc;
`;

const User = props => {
  const user = Meteor.users.findOne(props.id);
  return (
    <Box {...props}>
      {props.id ? (
        <img src={user.services.facebook.picture.data.url} height={24} />
      ) : (
        <Unknown alignItems="center" justifyContent="center">
          <UserIcon size={16} />
        </Unknown>
      )}
    </Box>
  );
};

User.propTypes = {
  id: PropTypes.string
};

export default User;
