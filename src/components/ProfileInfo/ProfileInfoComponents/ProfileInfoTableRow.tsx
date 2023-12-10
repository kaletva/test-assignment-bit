import { TableBodyCell, TableRow } from "@/shared/Table";
import { ITransaction, IUser } from "@/types";
import { dateTimeToTableFormat } from "@/utils";
import React from "react";

interface IProps {
  transaction: ITransaction;
  userData: IUser;
}
export const ProfileInfoTableRow: React.FC<IProps> = ({
  transaction,
  userData,
}) => {
  const isReplenish = transaction.type === "REPLENISH";
  const formattedDate = dateTimeToTableFormat(transaction.created_at);
  return (
    <TableRow>
      <TableBodyCell label={isReplenish ? "Пополнение" : "Списание"} />
      <TableBodyCell
        textColor={isReplenish ? "otherGreen" : "otherCritic"}
        label={`${isReplenish ? "" : "-"}${transaction.amount} ${
          userData.subscription.plan.currency
        }`}
      />
      <TableBodyCell label={formattedDate} />
    </TableRow>
  );
};
