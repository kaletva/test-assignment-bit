import { BodyText } from "@/shared/Text";
import React from "react";
import styled from "styled-components";

export const MyOrganizationHead = () => {
  return (
    <StyledMyOrganizationHead>
      <BodyText size="xlSemibold">Моя организация</BodyText>
    </StyledMyOrganizationHead>
  );
};

const StyledMyOrganizationHead = styled.div`
  padding: 24px 34px;

  @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
    padding: 24px 24px;
  }
  @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
    padding: 18px 16px;
  }
`;
