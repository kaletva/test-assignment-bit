import { styled } from "styled-components";

export const ContentWrapper = styled.div`
  max-width: ${(props) => props.theme.mediaStyles.desktop};
  width: 100%;
  padding: 0 25px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    padding: 0 40px;
  }

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
    padding: 0;
  }
`;
