import styled from "styled-components";
import React from "react";
import LegendLabel from "/public/icons/chartLegendItem.svg";
import { BodyText } from "../Text";
import {
  Payload,
  Props as LegendProps,
} from "recharts/types/component/DefaultLegendContent";

export const CustomLegend: React.FC<LegendProps> = ({ payload }) => {
  return (
    <StyledLegendContainer>
      {payload?.map((entry: Payload, index: number) => (
        <StyledLegendItem
          key={`legend-item-${index}`}
          labelColor={entry.color}
        >
          <LegendLabel />
          <BodyText textColor="grayScaleGray1" size="sMedium">
            {entry.value}
          </BodyText>
        </StyledLegendItem>
      ))}
    </StyledLegendContainer>
  );
};

const StyledLegendItem = styled.div<{ labelColor?: string }>`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${(props) => props.labelColor};
  }
`;
const StyledLegendContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
