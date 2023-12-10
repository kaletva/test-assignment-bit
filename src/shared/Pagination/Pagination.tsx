import { BodyText } from "@/shared/Text";
import React from "react";
import styled from "styled-components";
import ArrowLeftIcon from "/public/icons/arrowNarrowLeft.svg";
import ArrowRightIcon from "/public/icons/arrowNarrowRight.svg";
import ReactPaginate from "react-paginate";

interface IProps {
  onPageChange: (selected: number) => void;
  pageCount?: number;
}

export const Pagination: React.FC<IProps> = ({
  pageCount = 0,
  onPageChange,
}) => {
  return (
    <StyledMyOrganizationUsersPaginationContainer>
      <StyledReactPaginate
        breakLabel={<BodyText>...</BodyText>}
        onPageChange={({ selected }) => onPageChange(selected + 1)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousLabel={<ArrowLeftIcon />}
        nextLabel={<ArrowRightIcon />}
        pageClassName={"paginationPage"}
      />
    </StyledMyOrganizationUsersPaginationContainer>
  );
};

const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  list-style: none;

  color: ${(props) => props.theme.colors.baseWhite};

  a {
    cursor: pointer;
  }

  .paginationPage {
    display: flex;
    padding: 6px 14px;
    border-radius: 8px;
  }
  .selected {
    background-color: ${(props) => props.theme.colors.accentPrimary};
  }

  ${(props) => props.theme.textStyles.desktop.mMedium}

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    ${(props) => props.theme.textStyles.tablet.mMedium}
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
    ${(props) => props.theme.textStyles.mobile.mMedium}
  }
`;
const StyledMyOrganizationUsersPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
