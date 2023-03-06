import styled from 'styled-components';

export const Table = styled.table`
  /* background-color:orange; */
  display: flex;
  padding: 15px;
  flex-direction: column;
`;

export const UpTable = styled.thead`
  display: flex;
  justify-content: center;
`;

export const ListTransaction = styled.tr`
  margin-bottom: 40px;
`;

export const Payments = styled.th`
  color: white;
  width: 300px;
  height: 50px;
  background-color: aqua;
`;

export const Details = styled.tbody`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Methods = styled.td`
  font-weight: 500;
  padding-left: 140px;
  width: 170px;
  color: grey;
  padding-bottom: 15px;
  background-color: orange;
`;
