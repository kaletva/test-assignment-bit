import { motion } from "framer-motion";
import React from "react";
import ErrorIcon from "/public/icons/error.svg";
import styled from "styled-components";
import { BodyText } from "../Text";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { formatClientApiError } from "@/utils/formatError";

interface IProps {
  error: FetchBaseQueryError | SerializedError;
}
export const LoaderError: React.FC<IProps> = ({ error }) => {
  return (
    <StyledErrorWrapper>
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
        <ErrorIcon />
      </motion.div>
      <BodyText size="xsRegular">{formatClientApiError(error)}</BodyText>
    </StyledErrorWrapper>
  );
};

const StyledErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  height: 200px;
`;
