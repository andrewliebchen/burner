import React from "react";
import { Box } from "rebass";
import PropTypes from "prop-types";
import styled from "styled-components";

const Unknown = styled.div`
  height: 24px;
  width: 24px;
  background-color: #ccc;
`;

const User = props => {
  const user = Meteor.users.findOne(props.id);
  console.log(user);
  return (
    <Box {...props}>
      {props.id ? (
        <img src={user.services.facebook.picture.data.url} height={24} />
      ) : (
        <Unknown />
      )}
    </Box>
  );
};

User.propTypes = {
  id: PropTypes.string
};

export default User;
