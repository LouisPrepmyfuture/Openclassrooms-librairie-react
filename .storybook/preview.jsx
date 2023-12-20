/** @type { import('@storybook/react').Preview } */

import { ModalProvider } from "../src/ModalContext.jsx";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

  },
};
export default preview;