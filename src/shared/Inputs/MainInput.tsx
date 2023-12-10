import React, { InputHTMLAttributes } from "react";
import styled from "styled-components";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const MainInput: React.FC<IProps> = ({
  icon,
  iconPosition = "left",
  ...rest
}) => {
  return (
    <StyledMainInputWrapper>
      {icon && iconPosition === "left" && (
        <StyledInputIconWrapper>{icon}</StyledInputIconWrapper>
      )}
      <StyledMainInput {...rest} />
      {icon && iconPosition === "right" && icon}
    </StyledMainInputWrapper>
  );
};
const StyledInputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.grayScaleGray1};
  transition: color 0.2s ease;
`;
const StyledMainInputWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.grayScaleGray2};
  background: ${(props) => props.theme.colors.grayScaleGray4};

  display: flex;
  gap: 10px;
  padding: 0 16px;

  transition: border 0.2s ease, background 0.2s ease;

  &:focus-within {
    background: ${(props) => props.theme.colors.grayScaleGray2};
    ${StyledInputIconWrapper}{
      color: white;
    }
  }
  &:hover {
    border-color: ${(props) => props.theme.colors.accentPrimary};
  }
`;

const StyledMainInput = styled.input`
  background-color: transparent;
  border: none;
  flex: 1;
  padding: 14px 0;
  color: ${(props) => props.theme.colors.baseWhite};

  &::placeholder {
    ${(props) => props.theme.inputTextStyles.md}
    color: ${(props) => props.theme.colors.grayScaleGray1};
  }
`;
