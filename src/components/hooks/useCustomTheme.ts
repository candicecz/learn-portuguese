import {useState} from "react";

const getRandomColor = (group: string[]) => {
  return group[Math.floor(Math.random() * group.length)];
};

export const useCustomTheme = (initialConfig: any) => {
  const [theme, setTheme] = useState(initialConfig);

  const updateGradient = () => {
    let primary = getRandomColor(theme.colors.palette.lt);
    let secondary = getRandomColor(theme.colors.palette.dk);

    setTheme({
      ...theme,
      colors: {
        ...theme.colors,
        primary,
        secondary,
        gradient: `linear-gradient(226deg, ${primary}, ${secondary})`,
      },
    });
  };
  return {theme: {...theme, colors: {...theme.colors, updateGradient}}};
};
