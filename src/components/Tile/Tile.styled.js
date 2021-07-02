import styled from "styled-components";

export const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
  min-width: 200px;
  min-height: 200px;
  border-radius: 24px;
  padding: 12px;
  margin: 5px;
  transition: transform 500ms;
  background-color: gray;
  overflow-y: auto;
  
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

export const Normalization = styled.p`
  font-size: 12px;
  font-weight: bolder;
`;

export const Notes = styled.p`
  font-size: 12px;
  font-weight: 400;
`;
