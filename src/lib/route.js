const defaultRoute = [
  {
    routeName: "default",
    matchFn: () => true,
    routeFn: async ({ text }) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      return { text: `Hello, your input is "${text}"` };
    },
  },
];

function useChatRoute(routeProviders = defaultRoute) {
  return async (step) => {
    for (const { routeName, matchFn, routeFn } of routeProviders) {
      const isMatch = await matchFn(step);

      if (!isMatch) {
        continue;
      }

      try {
        const botStep = await routeFn(step);

        return {
          medadata: { routeName: routeName },
          ...botStep,
        };
      } catch (error) {
        return {
          medadata: { routeName: routeName },
          text: `error: ${error}`,
        };
      }
    }

    return {
      text: `error: no matching route.`,
    };
  };
}

export { useChatRoute, defaultRoute };
