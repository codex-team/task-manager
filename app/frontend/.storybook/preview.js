import ColorVariables from "../src/styles/Colors";
import GlobalStyles from "../src/styles/Global";
import React from "react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  /**
   * Storybook decorator with global styles
   * @param Story - JSX story element
   * @returns {JSX.Element} - JSX element with global styles
   */
  (Story) => (
    <>
      <ColorVariables/>
      <GlobalStyles/>
      <Story/>
    </>
  )
]
