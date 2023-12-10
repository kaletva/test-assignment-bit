import styled from "styled-components";

export const TableHead = styled.thead`
  th {
    background-color: ${(props) => props.theme.colors.baseBlack};
    &:nth-last-child(1) {
      border-radius: 0 10px 10px 0;
    }
    &:nth-child(1) {
      border-radius: 10px 0 0 10px;
    }
  }
`;
