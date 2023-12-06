import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  padding: 8px 20px;
  background: transparent;

 
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
   :hover {
    color: white;
    background-color:darkgrey;
  }
`;

export const Input = styled.input`
  margin-right: 10px;
  color: black;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px 25px;
  background: transparent;
  max-width: 190px;
  :hover {
    box-shadow: 2px 2px 15px #8707ff inset;
  }
`;