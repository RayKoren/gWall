require('dotenv').load();
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/gWall'
  },
  production: {
    client: 'pg',
    connection: processs.env.DATABASE_URL + '?ssl=true'
    }
};
