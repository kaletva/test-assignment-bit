import { ColorsType } from "@/types";
import styled from "styled-components";

export const HorizontalDivider = styled.hr<{ color: ColorsType }>`
  height: 1px;
  border: none;
  background-color: ${(props) => props.theme.colors[props.color]};
`;
