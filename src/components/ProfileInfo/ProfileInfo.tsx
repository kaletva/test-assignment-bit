import { BodyText } from "@/shared/Text";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";
import CloseIcon from "/public/icons/close.svg";
import { HorizontalDivider } from "@/shared/Dividers";
import { ProfileInfoChart, ProfileInfoTable } from "./ProfileInfoComponents";
import { useUserTransactionsQuery } from "@/api/services/transactionService";
import { useClickOutside } from "@/hooks";
import { IUser } from "@/types";
import { LoaderError, LoaderSpin } from "@/shared/Loaders";

interface IProps {
  setProfileInfoOpened: Dispatch<SetStateAction<boolean>>;
  user: IUser;
}

export const ProfileInfo: React.FC<IProps> = ({
  setProfileInfoOpened,
  user,
}) => {
  const {
    data: transactionsList,
    isFetching,
    isError,
  } = useUserTransactionsQuery(user.id);

  const profileModalRef = useRef<HTMLDivElement>(null);
  useClickOutside(profileModalRef, () => setProfileInfoOpened(false));

  return (
    <StyledProfileInfo
      ref={profileModalRef}
      initial={{ x: "100%" }}
      animate={{ x: "0" }}
      transition={{ duration: 0.3 }}
    >
      <StyledProfileInfoHead>
        <BodyText size="xlSemibold">{user.email}</BodyText>
        <button onClick={() => setProfileInfoOpened(false)}>
          <CloseIcon />
        </button>
      </StyledProfileInfoHead>

      {isFetching && <LoaderSpin />}

      {isError && <LoaderError />}

      {transactionsList && (
        <>
          <BodyText size="xlSemibold">Использование токенов</BodyText>
          <ProfileInfoChart
            transactionsList={transactionsList}
            userData={user}
          />
          <HorizontalDivider color="grayScaleGray3" />
          <BodyText size="xlSemibold">История операций</BodyText>
          <ProfileInfoTable
            transactionsList={transactionsList}
            userData={user}
          />
        </>
      )}
    </StyledProfileInfo>
  );
};

const StyledProfileInfoHead = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

const StyledProfileInfo = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.grayScaleGray4};
  max-width: 470px;
  width: 100%;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 56px 20px;

  height: 100vh;
  overflow-x: scroll;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    padding: 56px 40px 56px 20px;
    gap: 18px;
  }

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    padding: 30px 16px;
    gap: 14px;
  }
`;
