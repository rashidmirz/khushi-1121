import { n as createMiddleware, t as createStart } from "./createStart-Dt05N14y.js";
//#region src/start.ts
var errorMiddleware = createMiddleware().server(async ({ next }) => {
	try {
		return await next();
	} catch (error) {
		if (error instanceof Response || error != null && typeof error === "object" && "statusCode" in error) throw error;
		console.error(error);
		throw error;
	}
});
var startInstance = createStart(() => ({ requestMiddleware: [errorMiddleware] }));
//#endregion
export { startInstance };
