import React from "react";
import { BodyText } from "../Text";
import styled from "styled-components";

interface IProps {
  isLoading: boolean;
}

export const Loader: React.FC<IProps> = ({ isLoading }) => {
  
  if (!isLoading) return null;

  return (
    <StyledLoaderContainer>
      <BodyText size="xlSemibold">Загрузка...</BodyText>
    </StyledLoaderContainer>
  );
};

const StyledLoaderContainer = styled.div``;
