import styled from 'styled-components';

export const Section = styled.ul`
  /* background-color: aqua; */
  display: flex;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  padding: 15px;
`;

export const Title = styled.h2`
  color: #707070;
  font-weight: 500;
`;

export const ListColors = styled.ul`
  list-style: none;
  display: flex;
  margin-left: -35px;
`;

export const Color = styled.li`
  background-color: red;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Format = styled.span`
  margin-top: -10px;
  color: white;
  font-size: smaller;
`;

export const Percentage = styled.span`
  margin-top: 5px;
  color: white;
`;
