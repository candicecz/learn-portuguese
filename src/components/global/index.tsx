import facepaint from "facepaint";

export const breakpoints = [576, 768, 992, 1200];

// facepaint allows for media queries in this format:
// css={mq({color: ['green', 'gray', 'hotpink']})}

export const mq = facepaint(
  breakpoints.map(bp => `@media (min-width: ${bp}px)`),
);

export {default as Box} from "./Box";
export {default as Loading} from "./Loading";
export {Button, IconButton} from "./Button/";
export {Text, Heading} from "./Text";
export type {ButtonProps} from "./Button/";
export {StyledIconWrapper} from "./IconWrapper";
