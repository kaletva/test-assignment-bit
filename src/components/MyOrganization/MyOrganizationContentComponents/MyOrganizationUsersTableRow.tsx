import { TableBodyCell, TableRow } from "@/shared/Table";
import React from "react";
import EditIcon from "/public/icons/edit.svg";
import TrashIcon from "/public/icons/trash.svg";
import { IUser } from "@/types";

interface IProps {
  user: IUser;
}

export const MyOrganizationUsersTableRow: React.FC<IProps> = ({ user }) => {
  return (
    <TableRow>
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
    </TableRow>
  );
};
