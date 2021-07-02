import React from "react";
import PropTypes from "prop-types";
import { StyledError } from "./Error.styled";

const Error = ({ children }) => (
  <StyledError>
    {children}
  </StyledError>
);

Error.propTypes = {
  children: PropTypes.string,
};

Error.defaultProps = {
  children: "",
};

export default Error;
