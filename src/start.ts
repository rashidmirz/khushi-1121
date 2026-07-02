import { createStart, createMiddleware } from "@tanstack/react-start";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    // Re-throw redirects and other responses
    if (error instanceof Response || (error != null && typeof error === "object" && "statusCode" in error)) {
      throw error;
    }
    console.error(error);
    // Let the root error boundary handle rendering
    throw error;
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware],
}));
