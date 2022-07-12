/**
 * Starts the application on the port specified correctly.
 */

const api = require('./src/api');

const PORT = 80;

api.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
