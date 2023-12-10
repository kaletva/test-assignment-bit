import { ColorsType } from "@/types/textTypes";
import { styled } from "styled-components";


interface IHeading {
    textColor?: ColorsType;
}

export const H1 = styled.h1<IHeading>`
  font-size: 46px;
  font-weight: 700;
  line-height: 60px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 40px;
    line-height: 52px;
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

export const H2 = styled.h2<IHeading>`
  font-size: 34px;
  font-weight: 600;
  line-height: 44px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 24px;
    line-height: 32px;
  }
`;
export const H3 = styled.h3<IHeading>`
  font-size: 30px;
  font-weight: 600;
  line-height: 40px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 26px;
    line-height: 34px;
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 22px;
    line-height: 30px;
  }
`;
export const H4 = styled.h4<IHeading>`
  font-size: 26px;
  font-weight: 600;
  line-height: 34px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 22px;
    line-height: 30px;
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 20px;
    line-height: 26px;
  }
`;
export const H5 = styled.h5<IHeading>`
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 20px;
    line-height: 26px;
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const H6 = styled.h6<IHeading>`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 18px;
    line-height: 24px;
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    font-size: 16px;
    line-height: 22px;
  }
`;
