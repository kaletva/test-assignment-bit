import React from "react";
import styled from "styled-components";
import { ProfileInfoTableHead } from "./ProfileInfoTableHead";
import { ProfileInfoTableRow } from "./ProfileInfoTableRow";
import { ITransaction, IUser } from "@/types";

interface IProps {
  transactionsList: ITransaction[];
  userData: IUser;
}

export const ProfileInfoTable: React.FC<IProps> = ({
  transactionsList,
  userData,
}) => {
  return (
    <StyledProfileInfoTable>
      <ProfileInfoTableHead />
      <tbody>
        {transactionsList.map((transaction) => (
          <ProfileInfoTableRow
            key={transaction.id}
            transaction={transaction}
            userData={userData}
          />
        ))}
      </tbody>
    </StyledProfileInfoTable>
  );
};

const StyledProfileInfoTable = styled.table`
  border-collapse: collapse;
`;
