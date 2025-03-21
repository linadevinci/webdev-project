import fastify from "fastify";
import config from "./config";
import connect from "./connect.js";
import addRouteHandlers from "./handlers/index.js";

const app = fastify({ logger: true });

addRouteHandlers(app);

try {
    await connect();
    app.listen({ port: config.port });
}
catch (err) {
    app.log.error(err);
    process.exit(1);
}