import styled from "styled-components";

export const Wrapper = styled.div`
  width: 97vw;
  display: flex;
  justify-content: center;
`;

export const Container = styled.main`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.text};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 4rem;
  font-weight: 500;
`;

export const CDate = styled.h3`
  color: ${(props) => props.theme.text};
  font-family: "Noto Sans KR", sans-serif;
  font-size: 1.8rem;
  margin: 25px 0;
`;

export const TagsWapper = styled.div`
  width: 50%;
`;

export const Content = styled.section`
  font-size: 1.8rem;
  font-family: "Noto Sans KR", sans-serif;
  color: ${(props) => props.theme.text};
  line-height: 3rem;
`;

export const Line = styled.hr`
  width: 100%;
  border: none;
  border: 1px solid ${(props) => props.theme.text};
  margin: 50px 0;
`;

export const Footer = styled.footer`
  width: 100%;
`;

export const PageMoveContainer = styled.div<{ align?: string }>`
  width: 100%;
  border-radius: 10px;
  height: 60px;
  background-color: ${(props) => props.theme.backgroundOnUp};
  margin-bottom: 25px;
  display: flex;
  justify-content: ${(props) =>
    props.align === "left" ? `flex-start` : "flex-end"};
  color: ${(props) => props.theme.text};
`;

export const PageMoveTitle = styled.div<{ align: string }>`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.align === "left" ? `flex-start` : "flex-end"};
  margin: 0 25px;
`;

export const PostTitle = styled.h1`
  font-size: 2rem;
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  margin: 0 10px;
  line-height: 2.5rem;
`;
