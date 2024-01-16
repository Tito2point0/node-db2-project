// no need to change this file
const sharedConfig = {
  client: "sqlite3",
  useNullAsDefault: true,
  migrations: {
    directory: "./data/migrations",
  },
  seeds: {
    directory: "./data/seeds",
  },
  pool: {
    /* 
Sure, here's a more organized explanation:

1. **Foreign Keys**: Foreign keys in SQLite3 are used for testing and development.
 They allow you to create a relationship between two tables in a database.
  If you delete a record in one table,
   it will automatically delete the records in the other table that are related to it.
    Foreign keys are defined by the database, not by Knex, so we need to tell Knex to turn them on.

2. **Pool of Connections**: A pool of connections is a set of multiple connections to the database that
 can be used simultaneously. This is beneficial as it allows for multiple operations to be performed at the same time,
  improving the efficiency of database interactions.

3. **Pragma Statement**: A pragma statement is a SQL command that is used to modify the 
operational environment of the SQLite or to query for the internal (non-table) data. 
In this case, the pragma statement `PRAGMA foreign_keys = ON;` is used to enable foreign keys in SQLite.

4. **AfterCreate Callback Function**: The `afterCreate` callback function is a function 
that is called after the connection to the database is created.
 It is called with two arguments: the first argument is the connection to the database,
  and the second argument is a callback function that we need to call when we are done. In this context,
   it's used to run the pragma statement enabling foreign keys after establishing the database connection.

Here's a simplified version of the original text incorporating these points:

```javascript
  SQLite3 foreign keys are used for testing and development. 
  They establish a relationship between two tables in a database,
   such that deleting a record in one table automatically deletes related records in the other table. 

 A pool of connections allows for multiple simultaneous connections to the database,
  improving efficiency.

 Foreign keys are defined by the database,
  not Knex, so we need to instruct Knex to enable them.
   This is done using a pragma statement: `PRAGMA foreign_keys = ON;`.

 The pragma statement is run in the `afterCreate` callback function,
  which is called after the database connection is established.
   This function takes two arguments: the database connection,
    and a callback function to be called when we're done.
```
  */
    afterCreate: (conn, done) => {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: "./data/dealer.db3" },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: "./data/testing.db3" },
  },
};
