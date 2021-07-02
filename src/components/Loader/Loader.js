import React from "react";
import PropTypes from "prop-types";
import { StyledLoader } from "./Loader.styled";

const Loader = ({ children }) => (
  <StyledLoader>
    {children}
  </StyledLoader>
);

Loader.propTypes = {
  children: PropTypes.string,
};

Loader.defaultProps = {
  children: "",
};

export default Loader;
