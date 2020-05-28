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
    .catch(error => { console.log(error.detail); })       

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
    .catch(error => { console.log(error.detail) })
  }

  createTable();

  let inputStream = fs.createReadStream('/mnt/c/Users/Gen0/Development/steamy-media/data.csv', 'utf8');

  const importCSV = () => {

    console.time('took');  

    inputStream
    .pipe(new csvReader({ }))
    .on('data', function (row) {
        //console.log(row);
        if (row[0] !== 'proxyId'){
            toPostgres(row);
        }
    })
    .on('end', function (data) {
        console.timeEnd('took');
        console.log('end of csv');
    });

    }

  const toPostgres = (data) => {

        var query = `INSERT INTO test_table(id,
            title,
            splash,
            description,
            reviewsgeneral,
            reviewstotal,
            releasedate,
            developer,
            publisher,
            tags,
            percentage,
            video,
            images) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`

        client
        .query(query, data)
        .then(res => { })
        .catch(error => { console.log(error.detail); })

    }

  //importCSV();