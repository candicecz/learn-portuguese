import React from "react";
import {StyledPageLayout} from "./styles";
import {useTheme} from "@emotion/react";

interface PageLayoutProps {}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
  const theme = useTheme();
  return (
    <StyledPageLayout bg={theme.colors.gradient}>{children}</StyledPageLayout>
  );
};

export default PageLayout;
