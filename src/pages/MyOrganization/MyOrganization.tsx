import {
  MyOrganizationContent,
  MyOrganizationHead,
} from "@/components/MyOrganization";
import { HorizontalDivider } from "@/shared/Dividers";
import React from "react";
import styled from "styled-components";

export const MyOrganization = () => {
  return (
    <StyledMyOrganizationContainer>
      <MyOrganizationHead />
      <HorizontalDivider color="grayScaleGray3" />
      <MyOrganizationContent />
    </StyledMyOrganizationContainer>
  );
};

const StyledMyOrganizationContainer = styled.section`
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background: ${(props) => props.theme.colors.grayScaleGray4};
`;
