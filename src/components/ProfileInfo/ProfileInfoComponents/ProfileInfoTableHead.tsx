import { TableHead, TableHeadCell } from "@/shared/Table";
import React from "react";

export const ProfileInfoTableHead: React.FC = () => {
  return (
    <TableHead>
      <tr>
        <TableHeadCell label="Тип" />
        <TableHeadCell label="Сумма" />
        <TableHeadCell label="Дата" />
      </tr>
    </TableHead>
  );
};
