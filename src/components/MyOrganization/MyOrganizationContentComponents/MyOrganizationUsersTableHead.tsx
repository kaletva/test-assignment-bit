import { TableHead, TableHeadCell } from "@/shared/Table";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import ArrowDownIcon from "/public/icons/arrowNarrowDown.svg";
import { motion } from "framer-motion";
import { IUsersSearchParams } from "@/types";

interface IProps {
  searchParams: IUsersSearchParams;
  setSearchParams: Dispatch<SetStateAction<IUsersSearchParams>>;
}

export const MyOrganizationUsersTableHead: React.FC<IProps> = ({
  searchParams,
  setSearchParams,
}) => {
  const handleChangeSort = (searchKey: "tokens") => {
    setSearchParams((params) => ({
      ...params,
      orderBy:
        params.orderBy === `${searchKey}:asc`
          ? `${searchKey}:desc`
          : `${searchKey}:asc`,
    }));
  };

  return (
    <TableHead>
      <tr>
        <TableHeadCell label="Email" />
        <TableHeadCell label="Имя" />
        <TableHeadCell label="Роль" />
        <TableHeadCell label="Подписка" />
        <TableHeadCell label="Токены">
          <StyledOrderByButton
            initial={{ rotateZ: 0 }}
            animate={
              searchParams.orderBy === "tokens:asc"
                ? { rotateZ: 180 }
                : { rotateZ: 0 }
            }
            value={"tokens"}
            onClick={(e) => handleChangeSort(e.currentTarget.value as "tokens")}
          >
            <ArrowDownIcon />
          </StyledOrderByButton>
        </TableHeadCell>
        <TableHeadCell label="Действия" />
      </tr>
    </TableHead>
  );
};

const StyledOrderByButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
