import React from "react";
import { Line, LineChart, ResponsiveContainer } from "recharts";
import styled from "styled-components";

interface IProps {
  data: any;
  email: string;
}

export const ChartDateRangePicker: React.FC<IProps> = ({ data, email }) => {
  return (
    <StyledChartDateRangePickerContainer>
      <ResponsiveContainer
        style={{
          position: "absolute",
          top: 0,
          paddingRight: 60,
          pointerEvents: "none",
        }}
      >
        <LineChart data={data} margin={{ left: 0, right: 0 }}>
          <Line
            type="monotone"
            dataKey={email}
            stroke="#616D8D"
            fill="url(#colorSpending)"
            strokeWidth={1}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </StyledChartDateRangePickerContainer>
  );
};

const StyledChartDateRangePickerContainer = styled.div`
  width: 100%;
  position: relative;
  padding-right: 60px;
`;
