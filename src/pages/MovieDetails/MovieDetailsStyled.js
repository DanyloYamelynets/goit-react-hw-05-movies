import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(228 228 228 / 84%);
  padding: 8px;
`;
export const AddInfo = styled.h2`
  padding: 10px 0 20px 10px;
  padding-left: 10px;
  font-weight: 500;
`;
export const BtnStyled = styled.button`
  margin-right: 10px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #002a2ac9;
  background-color: #c8fffb9e;
  font-size: 15px;
  font-weight: 700;
  color: #01155b;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0d6000;
    color: white;
    transition: 250ms;
  }
`;
export const BtnCont = styled.div`
  margin-left: 45px;
`;
