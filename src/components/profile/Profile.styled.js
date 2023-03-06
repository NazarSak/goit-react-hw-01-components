import styled from 'styled-components';

export const Container = styled.div`
  /* background-color: yellow; */
  margin-bottom: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  height: auto;
  flex-direction: column;
`;

export const Name = styled.div`
  display: flex;
  justify-content: center;
  font-weight: 700;
  margin-top: 20px;
`;

export const ListAbout = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 15px;
  width: 210px;
`;

export const Tag = styled.p`
  justify-content: center;
  display: flex;
  color: grey;
`;

export const Img = styled.img`
  padding-left: 30px;
`;

export const SpanLetter = styled.span`
  margin-bottom: 5px;
  color: grey;
`;
export const SpanNumber = styled.span`
  font-weight: 800;
  display: flex;
  justify-content: center;
`;

export const LiAbout = styled.li`
  display: flex;
  flex-direction: column;
`;
