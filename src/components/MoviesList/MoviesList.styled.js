import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export const Li = styled.li`
  list-style: none;
  margin: 0;
`;

export const Links = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    color: red;
  }
`;

