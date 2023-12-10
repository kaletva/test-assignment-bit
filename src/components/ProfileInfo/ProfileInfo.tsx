import { BodyText } from "@/shared/Text";
import { motion } from "framer-motion";
import React, { Dispatch, SetStateAction, useRef } from "react";
import styled from "styled-components";
import CloseIcon from "/public/icons/close.svg";
import { HorizontalDivider } from "@/shared/Dividers";
import { ProfileInfoChart, ProfileInfoTable } from "./ProfileInfoComponents";
import { useUserListQuery } from "@/api/services/userService";
import { useUserTransactionsQuery } from "@/api/services/transactionService";
import { useClickOutside } from "@/hooks";

interface IProps {
  setProfileInfoOpened: Dispatch<SetStateAction<boolean>>;
}

export const ProfileInfo: React.FC<IProps> = ({ setProfileInfoOpened }) => {
  const { data: usersList } = useUserListQuery({
    orderBy: "tokens:desc",
    page: 1,
    search: "",
  });

  const userData = usersList?.data[0];

  const {
    data: transactionsList,
    isFetching,
    isError,
  } = useUserTransactionsQuery(userData?.id, {
    skip: userData?.id === undefined,
  });

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
        <BodyText size="xlSemibold">{userData?.email}</BodyText>
        <button onClick={() => setProfileInfoOpened(false)}>
          <CloseIcon />
        </button>
      </StyledProfileInfoHead>

      {isFetching && <BodyText size="xlSemibold">Загрузка...</BodyText>}
      
      {isError && (
        <BodyText size="xlSemibold">Произошла неизвестная ошибка</BodyText>
      )}

      {transactionsList && userData && (
        <>
          <BodyText size="xlSemibold">Использование токенов</BodyText>
          <ProfileInfoChart
            transactionsList={transactionsList}
            userData={userData}
          />
          <HorizontalDivider color="grayScaleGray3" />
          <BodyText size="xlSemibold">История операций</BodyText>
          <ProfileInfoTable
            transactionsList={transactionsList}
            userData={userData}
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
`;
