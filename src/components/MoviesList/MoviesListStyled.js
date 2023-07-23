import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieTitle = styled.h3`
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin: 5px 0;
`;
export const MovieItem = styled.li`
  scale: 1;
  transition: scale 250ms;
  overflow: unset;
  &:hover {
    scale: 1.02;
    z-index: 1;
  }
`;
export const List = styled.ul`
  list-style: none;
  font-size: 18px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
`;
export const LinkStyled = styled(Link)`
  text-decoration: none;
`;
