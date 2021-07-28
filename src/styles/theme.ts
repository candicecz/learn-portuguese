const palette = {
  lt: ["#e88b6d", "#00bcd4", "#ff93b8", "#cddc39"],
  dk: ["#f30086", "#009688", "#960065", "#008e83"],
};

let primary = palette.lt[0];
let secondary = palette.dk[0];

export interface ThemeProps {
  colors: {
    palette: {lt: string[]; dk: string[]};
    primary: string;
    secondary: string;
    gradient: string;
    updateGradient: () => void;
  };
}

export const themeConfig: ThemeProps = {
  colors: {
    palette,
    primary,
    secondary,
    gradient: `linear-gradient(226deg, ${primary},${secondary})`,
    updateGradient: () => {
      console.log("this", this);
    },
  },
};