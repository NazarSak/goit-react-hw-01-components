import styled from 'styled-components';

export const List = styled.ul`
  /* background-color: lightgreen; */
  display: flex;
  align-items: center;
  flex-direction: column;
  list-style: none;
  row-gap: 15px;
  padding: 15px;
  margin-bottom: 100px;
`;

export const Friend = styled.li`
  display: flex;
padding-left: 15px;
  align-items: center;
  background-color: lightgray;
  width: 250px;
`;

export const Name = styled.span`
  margin-left: 15px;
  font-weight: 500;
`;

export const Img = styled.img`
  margin-right: 1px;
`;
 
