import { TableBodyCell, TableRow } from "@/shared/Table";
import React, { useState } from "react";
import EditIcon from "/public/icons/edit.svg";
import TrashIcon from "/public/icons/trash.svg";
import { IUser } from "@/types";
import { AnimatePresence } from "framer-motion";
import { MainPortal } from "@/shared/Portal/MainPortal";
import { ProfileInfo } from "@/components/ProfileInfo";
import styled from "styled-components";

interface IProps {
  user: IUser;
}

export const MyOrganizationUsersTableRow: React.FC<IProps> = ({ user }) => {
  const [profileInfoOpened, setProfileInfoOpened] = useState(false);
  return (
    <>
      <StyledUserTabelRow onClick={() => setProfileInfoOpened(true)}>
        <TableBodyCell label={user.email} />
        <TableBodyCell label={user.name} />
        <TableBodyCell label={user.role} />
        <TableBodyCell label={user.subscription.plan.type} />
        <TableBodyCell
          label={`${user.subscription.tokens} ${user.subscription.plan.currency}`}
        />
        <TableBodyCell>
          <button>
            <EditIcon />
          </button>
          <button>
            <TrashIcon />
          </button>
        </TableBodyCell>
      </StyledUserTabelRow>
      <AnimatePresence>
        <MainPortal portalOpened={profileInfoOpened}>
          <ProfileInfo user={user} setProfileInfoOpened={setProfileInfoOpened} />
        </MainPortal>
      </AnimatePresence>
    </>
  );
};

const StyledUserTabelRow = styled(TableRow)`
  cursor: pointer;
`;
