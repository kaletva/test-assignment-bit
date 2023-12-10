import React, { useState } from "react";
import styled from "styled-components";
import {
  MyOrganizationContentSearch,
  MyOrganizationUsersTable,
} from "./MyOrganizationContentComponents";
import { BodyText } from "@/shared/Text";
import { IUsersSearchParams } from "@/types";
import { useUserListQuery } from "@/api/services/userService";
import { Pagination } from "@/shared/Pagination";

export const MyOrganizationContent = () => {
  const [searchParams, setSearchParams] = useState<IUsersSearchParams>({
    page: 1,
    search: "",
    orderBy: null,
  });

  const { data: usersList } = useUserListQuery(searchParams);

  return (
    <StyledMyOrganizationContent>
      <BodyText size="xlSemibold">Пользователи</BodyText>
      <MyOrganizationContentSearch
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <MyOrganizationUsersTable
        searchParams={searchParams}
        setSearchParams={setSearchParams}
      />
      <Pagination
        pageCount={usersList?.pages}
        onPageChange={(selected) =>
          setSearchParams((state) => ({ ...state, page: selected }))
        }
      />
    </StyledMyOrganizationContent>
  );
};

const StyledMyOrganizationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  padding: 29px 34px 45px 29px;
`;
