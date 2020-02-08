// Update with your config settings.
module.exports = {
  development: {
    client: 'sqlite3', //our DBMS driver
    useNullAsDefault: true, //neccessary when using SQLite
    connection: {
      filename: './produce.db3', //the location of our DB
    },
  },
};
