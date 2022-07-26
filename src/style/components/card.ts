import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 300px;
  border-bottom: 1px solid ${(props) => props.theme.text};
  border-top: 1px solid ${(props) => props.theme.text};
  display: flex;
  flex: 100;
  flex-direction: column;
`;

export const Title = styled.h1`
  flex: 20;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 2rem;
  color: ${(props) => props.theme.text};
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  flex: 50;
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.4rem;
  color: ${(props) => props.theme.text};
  opacity: 0.5;
`;

export const Tags = styled.div`
  flex: 30;
`;
