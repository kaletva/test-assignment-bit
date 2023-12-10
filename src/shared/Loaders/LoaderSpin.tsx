import { motion } from "framer-motion";
import React from "react";
import LoaderIcon from "/public/icons/loader.svg";
import styled from "styled-components";

export const LoaderSpin = () => {
  return (
    <StyledLoaderWrapper>
      <StyledLoaderBox>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
        >
          <LoaderIcon />
        </motion.div>
      </StyledLoaderBox>
    </StyledLoaderWrapper>
  );
};

const StyledLoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
`;
const StyledLoaderBox = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.grayScaleGray3};
  color: ${(props) => props.theme.colors.accentPrimary};

  div {
    display: flex;
  }
`;
