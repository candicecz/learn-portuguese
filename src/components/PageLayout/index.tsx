import React from "react";
import {StyledPageLayout} from "./styles";

interface PageLayoutProps {}

const PageLayout: React.FC<PageLayoutProps> = ({children}) => {
  const gradients = {
    group_01: ["#e88b6d", "#00bcd4", "#ff93b8", "#cddc39"],
    group_02: ["#f30086", "#009688", "#960065", "#008e83"],
  };

  const randomColor = (group: string[]) => {
    return group[Math.floor(Math.random() * group.length)];
  };

  return (
    <StyledPageLayout
      bg={`linear-gradient(226deg, ${randomColor(
        gradients.group_01,
      )}, ${randomColor(gradients.group_02)})`}
    >
      {children}
    </StyledPageLayout>
  );
};

export default PageLayout;
