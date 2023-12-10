import React, { ReactNode } from "react";
import { BodyText } from "../Text";
import styled from "styled-components";

interface IProps {
  label: string;
  children?: ReactNode;
}

export const TableHeadCell: React.FC<IProps> = ({ label, children }) => {
  return (
    <StyledTableHeadCell>
      <StyledTableHeadCellContent>
        <BodyText textColor="grayScaleGray6" size="sMedium">
          {label}
        </BodyText>
        {children}
      </StyledTableHeadCellContent>
    </StyledTableHeadCell>
  );
};

const StyledTableHeadCellContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const StyledTableHeadCell = styled.th`
  padding: 14px 20px;
`;
