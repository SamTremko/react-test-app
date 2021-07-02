import PropTypes from "prop-types";

export const tilePropTypes = PropTypes.shape({
  Notes: PropTypes.string,
  Hidden: PropTypes.bool,
  Name: PropTypes.string,
  DataType: PropTypes.string,
  Entity: PropTypes.string,
  Title: PropTypes.string,
  Unit: PropTypes.string,
  Normalization: PropTypes.string,
  Formatting: PropTypes.string
});