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
`;
