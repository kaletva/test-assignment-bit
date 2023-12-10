import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import OrganizationIcon from "/public/icons/organizationIcon.svg";
import { BodyText } from "@/shared/Text";

export const HeaderNav = () => {
  return (
    <StyledHeaderNav>
      <StyledHeaderLink to={"/"}>
        <OrganizationIcon />
        <BodyText>Моя организация</BodyText>
      </StyledHeaderLink>
    </StyledHeaderNav>
  );
};

const StyledHeaderLink = styled(Link)`
  display: flex;
  gap: 10px;

  align-items: center;
`;
const StyledHeaderNav = styled.nav`
  flex: 1;
`;
