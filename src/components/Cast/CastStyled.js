import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;
export const CastItem = styled.li`
  text-align: center;
  width: 180px;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  scale: 1;
  transition: scale 150ms;
  &:hover,
  &:focus {
    cursor: pointer;
    background-color: rgb(236, 236, 236);
    scale: 1.05;
  }
`;
