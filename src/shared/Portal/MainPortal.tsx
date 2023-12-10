import { AnimatePresence, motion } from "framer-motion";
import React, { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

interface IProps {
  portalOpened: boolean;
  children: ReactNode;
}

export const MainPortal: React.FC<IProps> = ({ portalOpened, children }) => {
  document.body.style.overflow = portalOpened ? "hidden" : "scroll";
  return createPortal(
    <AnimatePresence>
      {portalOpened && (
        <StyledPortalContentWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </StyledPortalContentWrapper>
      )}
    </AnimatePresence>,
    document.body,
  );
};

const StyledPortalContentWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgb(0, 0, 0, 0.6);
`;
