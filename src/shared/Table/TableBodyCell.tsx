import React, { ReactNode } from "react";
import { BodyText } from "../Text";
import styled from "styled-components";
import { ColorsType } from "@/types";

interface IProps {
  label?: string;
  children?: ReactNode;
  textColor?: ColorsType;
}

export const TableBodyCell: React.FC<IProps> = ({
  label,
  children,
  textColor,
}) => {
  return (
    <StyledTableBodyCell>
      <StyledTableBodyCellContent>
        {label && (
          <BodyText textColor={textColor} size="sMedium">
            {label}
          </BodyText>
        )}
        {children}
      </StyledTableBodyCellContent>
    </StyledTableBodyCell>
  );
};

const StyledTableBodyCellContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const StyledTableBodyCell = styled.td`
  padding: 23px 20px;
`;
