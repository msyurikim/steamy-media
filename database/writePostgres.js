const fs = require('fs');
const csvReader = require('csv-reader');

const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'test',
    password: 'password',
    port: 5432,
  })

  client.connect()
  .catch(error => { console.log(error) } );

  const spawnTable = () => {

    var query = `CREATE TABLE test_table (
        id integer PRIMARY KEY,
        title text,
        splash text,
        description text,
        reviewsgeneral text,
        reviewstotal integer,
        releasedate text,
        developer text,
        publisher text,
        tags text,
        percentage integer,
        video text,
        images text
    );`

    client
    .query(query)
    .then(res => { console.log('table created') })
    .catch(error => { console.log(error); })       

  }

  const createTable = () => {

    var existsQuery = `SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE  table_schema = 'test'
        AND    table_name   = 'test_table'
        );`;

    client
    .query(existsQuery)
    .then(res => { if (!res.rows[0].exists) { spawnTable(); } })
    .catch(error => { console.log(error) })
  }

  //createTable();


  const importCSV = () => {

    

  }

  