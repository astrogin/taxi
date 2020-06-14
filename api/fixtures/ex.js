const Fixtures = require('node-mongodb-fixtures');
const uri = process.env.MONGODB_URL;
const options = null;

const fixtures = new Fixtures({
  dir: '../objects',
  filter: '.*',
});

fixtures
  .connect(uri)
  .then(() => fixtures.unload())
  .then(() => fixtures.load())
  .catch(e => console.error(e))
  .finally(() => fixtures.disconnect());
