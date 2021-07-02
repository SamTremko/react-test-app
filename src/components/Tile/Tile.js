import React from "react";
import { tilePropTypes } from "../../constants/propTypes";
import { Normalization, Notes, StyledTile, Title } from "./Tile.styled";

const Tile = ({ entry }) => {
  const { Title: title, Notes: notes, Normalization: normalization  } = entry;

  return (
    <StyledTile>
      <Title>
        {title}
      </Title>
      <Normalization>
        {normalization}
      </Normalization>
      <Notes>
        {notes}
      </Notes>
    </StyledTile>
  );
};

Tile.propTypes = {
  entry: tilePropTypes
};

Tile.defaultProps = {
  entry: {}
};

export default Tile;
