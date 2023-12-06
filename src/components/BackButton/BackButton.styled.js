import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled.button`
cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  width: 100px;
  margin: 10px;
  padding: 5px;
  border: none;
  background: transparent;
  border-radius: 4px;
 
`;

export const LinkBack = styled(Link)`
  text-decoration: none;
  :hover {
    color: white;
    background-color: darkgrey;
  }
`;