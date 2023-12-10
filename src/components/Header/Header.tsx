import React from "react";
import styled from "styled-components";
import LogoIcon from "/public/icons/mainLogo.svg";
import { HeaderNav, HeaderProfileInfo } from "./components";
import { ContentWrapper } from "@/shared/Containers";

export const Header: React.FC = () => {
  return (
    <StyledHeaderWrapper>
      <ContentWrapper>
        <StyledHeader>
          <LogoIcon />
          <HeaderNav />
          <HeaderProfileInfo />
        </StyledHeader>
      </ContentWrapper>
    </StyledHeaderWrapper>
  );
};

const StyledHeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledHeader = styled.header`
  display: flex;
  gap: 44px;
  align-items: center;

  border-radius: 17px;
  padding: 16px 24px;

  background-color: ${(props) => props.theme.colors.grayScaleGray4};
`;
