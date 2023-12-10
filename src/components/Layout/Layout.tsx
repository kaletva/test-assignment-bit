import React from "react";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import { ContentWrapper } from "@/shared/Containers";
import { Header } from "..";

export const Layout: React.FC = () => {
  return (
    <StyledLayout>
      <Header />
      <StyledOutletWrapper>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </StyledOutletWrapper>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;

  padding: 34px 0;
  gap: 34px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    gap: 32px;
  }

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
    padding: 0;
    padding-top: 24px;
    gap: 27px;
  }
`;

const StyledOutletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
