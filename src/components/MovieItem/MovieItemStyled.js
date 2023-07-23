import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(228 228 228 / 84%);
  padding: 8px;
`;
export const BtnStyled = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #560000bd;
  background-color: #ff000024;
  font-size: 15px;
  font-weight: 700;
  color: #01155b;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #a70000;
    color: white;
    transition: 250ms;
  }
`;
export const MovieInfo = styled.div`
  display: flex;
  gap: 30px;
`;
export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
