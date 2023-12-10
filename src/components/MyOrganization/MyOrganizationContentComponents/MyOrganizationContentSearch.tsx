import { MainInput } from "@/shared/Inputs";
import React, { Dispatch, SetStateAction } from "react";
import SearchCircle from "/public/icons/searchCircle.svg";
import { IUsersSearchParams } from "@/types";

interface IProps {
  searchParams: IUsersSearchParams;
  setSearchParams: Dispatch<SetStateAction<IUsersSearchParams>>;
}

export const MyOrganizationContentSearch: React.FC<IProps> = ({
  searchParams,
  setSearchParams,
}) => {
  return (
    <MainInput
      placeholder="Поиск"
      icon={<SearchCircle />}
      value={searchParams.search}
      onChange={(e) =>
        setSearchParams((params) => ({
          ...params,
          search: e.target.value,
        }))
      }
    />
  );
};
