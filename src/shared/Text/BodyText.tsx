import { ColorsType, TextStylesType } from "@/types/textTypes";
import React, { HTMLAttributes, ReactNode } from "react";
import styled, { css } from "styled-components";

interface IProps extends HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
  size?: TextStylesType;
  textColor?: ColorsType;
}

export const BodyText: React.FC<IProps> = ({
  children,
  size = "mMedium",
  textColor = "baseWhite",
  ...rest
}) => {
  return (
    <StyledText textColor={textColor} size={size} {...rest}>
      {children}
    </StyledText>
  );
};

const defineTextColor = ({ textColor }: { textColor: ColorsType }) => css`
  color: ${(props) => props.theme.colors[textColor]};
`;

const StyledText = styled.p<{
  size: TextStylesType;
  textColor: ColorsType;
}>`
  ${(props) => props.theme.textStyles.desktop[props.size]}

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    ${(props) => props.theme.textStyles.tablet[props.size]}
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
    ${(props) => props.theme.textStyles.mobile[props.size]}
  }
  ${defineTextColor}
`;
