import styled from "@emotion/styled";

type StyledPageLayoutProps = {
  bg: string;
};

export const StyledPageLayout = styled.div<StyledPageLayoutProps>`
  width: 100%;
  height: 100%;
  background: ${props => props.bg};
  display: flex;
  flex-direction: column;
`;
