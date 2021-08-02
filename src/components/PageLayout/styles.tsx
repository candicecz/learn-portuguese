import styled from "@emotion/styled";
import {Box} from "src/components/global";

type StyledPageLayoutProps = {
  bg: string;
};

export const StyledPageLayout = styled(Box)<StyledPageLayoutProps>`
  background: ${props => props.bg};
`;

StyledPageLayout.defaultProps = {
  width: "100%",
  minHeight: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "unset",
};
