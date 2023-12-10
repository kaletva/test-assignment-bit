import { motion } from "framer-motion";
import React from "react";
import ErrorIcon from "/public/icons/error.svg";
import styled from "styled-components";
import { BodyText } from "../Text";

interface IProps {
  errorName?: string;
}
export const LoaderError: React.FC<IProps> = ({ errorName }) => {
  return (
    <StyledErrorWrapper>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <ErrorIcon />
      </motion.div>
      {errorName && <BodyText>{errorName}</BodyText>}
    </StyledErrorWrapper>
  );
};

const StyledErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
`;
