import React, { useState } from "react";
import styled from "styled-components";
import DefaultAvatar from "/public/icons/defaultAvatar.svg";
import { BodyText } from "@/shared/Text";
import { MainPortal } from "@/shared/Portal/MainPortal";
import { AnimatePresence } from "framer-motion";
import { ProfileInfo } from "@/components/ProfileInfo";
export const HeaderProfileInfo = () => {
  const [profileInfoOpened, setProfileInfoOpened] = useState(false);
  return (
    <>
      <StyledHeaderProfileInfoContainer
        onClick={() => setProfileInfoOpened((state) => !state)}
      >
        <DefaultAvatar />
        <StyledHeaderProfileInfo>
          <BodyText size={"xsRegular"} textColor="grayScaleGray1">
            Вы авторизованы
          </BodyText>
          <BodyText size={"sMedium"}>Администратор</BodyText>
        </StyledHeaderProfileInfo>
      </StyledHeaderProfileInfoContainer>
      <AnimatePresence>
        <MainPortal portalOpened={profileInfoOpened}>
          <ProfileInfo setProfileInfoOpened={setProfileInfoOpened} />
        </MainPortal>
      </AnimatePresence>
    </>
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
`;
