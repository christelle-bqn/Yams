import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #121212;
  display: flex;
  flex-direction: column;
`;

export const Ul = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  list-style: none;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  & a {
    text-decoration: none;
    color: white;
    font-size: 12px;
  }
`;

export const Logo = styled.p`
  margin: 0;
  color: #fff;
  font-weight: bold;
  margin-right: 100px;
  font-size: 15px;
`;

export const Line = styled.div`
  border-bottom-style: solid;
  border-bottom-width: 0.5px;
  border-bottom-color: #fff;
  width: 90%;
`;
