/** @type { import('@storybook/react').Preview } */
import { Preview } from "@storybook/react";
import { ThemeProvider, theme, CSSReset, Box } from "@chakra-ui/react";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // sorting stories in dashboard
    options: {
      // The `a` and `b` arguments in this function have a type of `import('@storybook/types').IndexEntry`. Remember that the function is executed in a JavaScript environment, so use JSDoc for IntelliSense to introspect it.
      storySort: (a, b) =>
        a.id === b.id
          ? 0
          : a.id.localeCompare(b.id, undefined, { numeric: true }),
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Box m="4">
          <Story />
        </Box>
      </ThemeProvider>
    ),
  ],
};

export default preview;
