const koa = require("koa");
const mount = require("koa-mount");
const graphqlHTTP = require("koa-graphql");
const schema = require("./graphql/schema");
const cors = require("@koa/cors");

const initDB = require("./database");

initDB();

const app = new koa();

app.use(
  mount(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: true
    })
  )
);

app.listen(9000);

app.on("error", err => {
  log.error("server error", err);
});
