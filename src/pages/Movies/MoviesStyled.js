import styled from 'styled-components';

export const Container = styled.div`
  background-color: rgb(228 228 228 / 84%);
`;
export const FormStyled = styled.form`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;
export const InputStyled = styled.input`
  height: 22px;
  border-radius: 10px;
  border: 2px solid #005c84bd;
  margin-right: 5px;
`;
export const BtnStyled = styled.button`
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 10px;
  border: 2px solid #005c84bd;
  background-color: #ddeefd;
  font-size: 15px;
  font-weight: 700;
  color: #01155b;
  transition: 250ms;
  &:hover,
  &:focus {
    background-color: #0051ab;
    color: white;
    transition: 250ms;
  }
`;
export const NoMovies = styled.p`
  padding: 20px 0;
  display: flex;
  justify-content: center;
  font-size: 40px;
  font-weight: 500;
`;
