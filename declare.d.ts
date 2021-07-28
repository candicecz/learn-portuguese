declare module "facepaint";

import "@emotion/react";
import {ThemeProps} from "src/styles/theme";

declare module "@emotion/react" {
  export interface Theme extends ThemeProps {}
}
