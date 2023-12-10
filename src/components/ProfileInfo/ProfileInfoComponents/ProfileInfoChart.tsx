import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
  Brush,
} from "recharts";
import styled from "styled-components";
import { CustomLegend, CustomTooltip } from "@/shared/Chart";
import { ITransaction, IUser } from "@/types";
import { formatToTextDate } from "@/utils";

interface IProps {
  transactionsList: ITransaction[];
  userData: IUser;
}

export const ProfileInfoChart: React.FC<IProps> = ({
  transactionsList,
  userData,
}) => {
  const email = userData.email;
  const formatTransactionsData = () => {
    return transactionsList.map((transaction) => ({
      date: transaction.created_at,
      [email]: transaction.amount,
    }));
  };

  return (
    <StyledProfileInfoChartWrapper>
      <ResponsiveContainer width="100%" height={300}>
        <StyledAreaChart data={formatTransactionsData()} barCategoryGap={"32px"}>
          <defs>
            <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#1C64F2" stopOpacity={0.5} />
              <stop offset="95%" stopColor="rgb(28, 99, 242)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="#222B44" vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            axisLine={false}
            tickFormatter={formatToTextDate}
          />
          <YAxis
            type="number"
            orientation="right"
            tickCount={6}
            tickLine={false}
            axisLine={false}
            style={{marginBottom: 12}}
          />
          <Area
            type="monotone"
            dataKey={email}
            stroke="#1C64F2"
            fill="url(#colorSpending)"
            strokeWidth={3}
          />
          <Tooltip
            content={(data) => {
              return (
                <CustomTooltip
                  {...data}
                  label={formatToTextDate(data.label)}
                  currency={userData.subscription.plan.currency}
                />
              );
            }}
          />
          <Brush
            data={formatTransactionsData()}
            dataKey="date"
            travellerWidth={3}
            height={24}
            stroke="white"
            tickFormatter={formatToTextDate}
            startIndex={Math.round(transactionsList.length / 3)}
            endIndex={Math.round(
              transactionsList.length - transactionsList.length / 3,
            )}
            style={{paddingTop: 20}}
          />
          <Legend content={CustomLegend} wrapperStyle={{paddingTop: 12}}/>
        </StyledAreaChart>
      </ResponsiveContainer>
    </StyledProfileInfoChartWrapper>
  );
};

const StyledProfileInfoChartWrapper = styled.div`
  position: relative;
`;

const StyledAreaChart = styled(AreaChart)`
  .recharts-cartesian-axis-tick {
    ${(props) => props.theme.textStyles.desktop.sMedium}

    @media screen and (max-width: ${(props) => props.theme.mediaStyles.tablet}) {
      ${(props) => props.theme.textStyles.tablet.sMedium}
    }
    @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
      ${(props) => props.theme.textStyles.mobile.sMedium}
    }
    tspan {
      fill: ${(props) => props.theme.colors.grayScaleGray1};
    }
  }

  .recharts-brush {
    rect:nth-child(1) {
      fill: ${(props) => props.theme.colors.grayScaleGray3};
      stroke: none;
    }
    .recharts-brush-slide {
      fill: ${(props) => props.theme.colors.accentPrimary};
    }
    .recharts-brush-traveller {
      rect {
        fill: ${(props) => props.theme.colors.accentPrimary};
        fill-opacity: 0.6;
      }
      line {
        display: none;
      }
    }
  }
  .recharts-brush-texts {
    ${(props) => props.theme.textStyles.desktop.xsRegular}

    @media screen and (max-width: ${(props) =>props.theme.mediaStyles.tablet}) {
        ${(props) => props.theme.textStyles.tablet.xsRegular}
    }
    @media screen and (max-width: ${(props) => props.theme.mediaStyles.mobile}) {
        ${(props) => props.theme.textStyles.mobile.xsRegular}
    }
  }
`;
