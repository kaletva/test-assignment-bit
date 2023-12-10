import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { IUsersSearchParams } from "@/types";
import { MyOrganizationUsersTableHead } from "./MyOrganizationUsersTableHead";
import { useUserListQuery } from "@/api/services/userService";
import { BodyText } from "@/shared/Text";
import { MyOrganizationUsersTableRow } from "./MyOrganizationUsersTableRow";

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

  if (isFetching)
    return <BodyText textColor="accentPrimary">Fetching</BodyText>;

  if (isError)
    return <BodyText textColor="otherCritic">Unknown error</BodyText>;

  if (usersList) {
    return (
      <StyledMyOrganizationUsersTable>
        <MyOrganizationUsersTableHead
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
        <tbody>
          {usersList.data.map((user) => (
            <MyOrganizationUsersTableRow key={user.id} user={user}/>
          ))}
        </tbody>
      </StyledMyOrganizationUsersTable>
    );
  }
  return null;
};

const StyledMyOrganizationUsersTable = styled.table`
  border-collapse: collapse;
`;
