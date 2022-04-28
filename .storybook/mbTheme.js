// .storybook/YourTheme.js

import { create } from "@storybook/theming";

export default create({
  base: "light",

  colorPrimary: "#1B1D27",
  colorSecondary: "#5FB1E7",

  // UI
  appBg: "#EBEDF6",
  appContentBg: "white",
  appBorderColor: "rgba(255,255,255,0.1)",
  appBorderRadius: 4,

  // Typography

  fontCode: "monospace",

  // Text colors
  textColor: "#1B1D27",
  textInverseColor: "rgba(000,000,000,0.9)",

  // Toolbar default and active colors
  barTextColor: "#9D9EAD",
  barSelectedColor: "#E7D85F",
  barBg: "#3C3F4D",

  // Form colors
  inputBg: "white",
  inputBorder: "Grey",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "Makebetter Apps",
  brandImage: "mb-sb-logo-dark.svg",
});
