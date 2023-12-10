import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { IUsersSearchParams } from "@/types";
import { MyOrganizationUsersTableHead } from "./MyOrganizationUsersTableHead";
import { useUserListQuery } from "@/api/services/userService";
import { MyOrganizationUsersTableRow } from "./MyOrganizationUsersTableRow";
import { LoaderError, LoaderSpin } from "@/shared/Loaders";

interface IProps {
  searchParams: IUsersSearchParams;
  setSearchParams: Dispatch<SetStateAction<IUsersSearchParams>>;
}

export const MyOrganizationUsersTable: React.FC<IProps> = ({
  searchParams,
  setSearchParams,
}) => {
  const {
    data: usersList,
    isError,
    isFetching,
  } = useUserListQuery(searchParams);

  if (isFetching) return <LoaderSpin />;

  if (isError) return <LoaderError />;

  if (usersList) {
    return (
      <StyledTableWrapper>
        <StyledMyOrganizationUsersTable>
          <MyOrganizationUsersTableHead
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
          <tbody>
            {usersList.data.map((user) => (
              <MyOrganizationUsersTableRow key={user.id} user={user} />
            ))}
          </tbody>
        </StyledMyOrganizationUsersTable>
      </StyledTableWrapper>
    );
  }
  return null;
};

const StyledTableWrapper = styled.div`
  overflow-x: scroll;
`;
const StyledMyOrganizationUsersTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;
