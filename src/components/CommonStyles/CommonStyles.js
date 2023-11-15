import styled from "styled-components";

export const StyledLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const TransparentDiv = styled.div`
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.7;
  }
`;

export const ShadowStaticDiv = styled.div`
  border-radius: 5px;
  box-shadow: 1px 17px 24px -13px rgba(0, 0, 0, 0.66);
  -webkit-box-shadow: 1px 17px 24px -13px rgba(0, 0, 0, 0.66);
  -moz-box-shadow: 1px 17px 24px -13px rgba(0, 0, 0, 0.66);
`;

export const ShadowOnHoverDiv = styled.div`
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    z-index: 1000;
    transform: scale(1.02);
    box-shadow: 1px 17px 24px -13px rgba(0, 0, 0, 0.66);
    -webkit-box-shadow: 1px 17px 24px -13px rgba(0, 0, 0, 0.66);
    -moz-box-shadow: 1px 17px 24px -13px rgba(0, 0, 0, 0.66);
  }
`;

export const PageTitleDiv = styled.div`
  background: linear-gradient(
    to right,
    rgb(0, 0, 255, 1),
    rgb(255, 255, 0, 0.7)
  );
  color: white;
  padding: 20px;
`;

export const AlignCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
