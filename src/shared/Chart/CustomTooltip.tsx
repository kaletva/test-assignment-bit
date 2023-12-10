import React from "react";
import { TooltipProps } from "recharts";
import {
  ValueType,
  NameType,
} from "recharts/types/component/DefaultTooltipContent";
import styled from "styled-components";
import { BodyText } from "../Text";
import LegendLabel from "/public/icons/chartLegendItem.svg";

export const CustomTooltip: React.FC<
  TooltipProps<ValueType, NameType> & { currency: string }
> = ({ active, payload, label, currency }) => {
  if (active) {
    return (
      <StyledTooltipContainer>
        <BodyText textColor="grayScaleGray1">{label}</BodyText>
        <StyledTooltipInfo>
          <TooltipInfoLabel labelColor={payload?.[0].stroke}>
            <LegendLabel />
            <BodyText size="mRegular">{payload?.[0].name}</BodyText>
          </TooltipInfoLabel>
          <BodyText size="mSemibold">{payload?.[0].value} {currency}</BodyText>
        </StyledTooltipInfo>
      </StyledTooltipContainer>
    );
  }

  return null;
};

const TooltipInfoLabel = styled.div<{ labelColor?: string }>`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${(props) => props.labelColor};
  }
`;
const StyledTooltipInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

const StyledTooltipContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-radius: 4px;
  padding: 12px;
  background: ${(props) => props.theme.colors.grayScaleGray3};
`;
