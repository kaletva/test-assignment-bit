import React from "react";
import styled from "styled-components";
import DefaultAvatar from "/public/icons/defaultAvatar.svg";
import { BodyText } from "@/shared/Text";

export const HeaderProfileInfo = () => {
  return (
    <StyledHeaderProfileInfoContainer>
      <DefaultAvatar />
      <StyledHeaderProfileInfo>
        <BodyText size={"xsRegular"} textColor="grayScaleGray1">
          Вы авторизованы
        </BodyText>
        <BodyText size={"sMedium"}>Администратор</BodyText>
      </StyledHeaderProfileInfo>
    </StyledHeaderProfileInfoContainer>
  );
};

const StyledHeaderProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHeaderProfileInfoContainer = styled.button`
  display: flex;
  padding: 8px 14px;
  align-items: center;
  gap: 14px;

  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.grayScaleGray3};

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
    display: none;
  }
`;
