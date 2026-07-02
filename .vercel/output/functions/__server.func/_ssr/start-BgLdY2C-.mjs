import { n as createMiddleware, t as createStart } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/start-BgLdY2C-.js
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
