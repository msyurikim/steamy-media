const cassandra = require('cassandra-driver');
const distance = cassandra.types.distance;

const fs = require('fs');
const csvReader = require('csv-reader');

//let inputStream = fs.createReadStream('/mnt/c/Users/Gen0/Development/steamy-media/data.csv', 'utf8');

// NEW CASSANDRA CLIENT
const client = new cassandra.Client({
    //contactPoints: ['localhost'],
    contactPoints: ['http://ec2-54-177-118-85.us-west-1.compute.amazonaws.com:8000'],
    localDataCenter: 'datacenter1',
    keyspace: 'test_keyspace',
    pooling: {
        coreConnectionsPerHost: {
          [distance.local]: 50,
          [distance.remote]: 1
        } 
    },
  });


const createTable = (tableName) => {

    const query = 'CREATE TABLE test_csv_import (id int, title text, splash text, description text, reviewsgeneral text, reviewstotal int, releasedate text, developer text, publisher text, tags text, percentage int, video text, images text, PRIMARY KEY (id));';

    client.execute(query, {}, { prepare: true })
    .then(result => console.log(result));

};

//createTable();

const importCSV = () => {
    console.time('took');

    inputStream
    .pipe(new csvReader({ }))
    .on('data', function (row) {
        //console.log(row);
        if (row[0] !== 'proxyId'){
            toCassandra(row);
        }
    })
    .on('end', function (data) {
        console.timeEnd('took');
        console.log('end of csv');
    });
}

const toCassandra = (data) => {    

    const query = `INSERT INTO test_csv_import (id, title, splash, description, reviewsgeneral, reviewstotal, releasedate, developer, publisher, tags, percentage, video, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    client.execute(query, data, { prepare: true })
    //.then(result => { console.log(data); console.log(result); })
    .catch(err => { console.log(data); console.log(err); });
        
}

//importCSV();

const createEntry = (data, callback) => {

    //console.log('createEntry()');

    const query = `INSERT INTO test_dsbulk (id, title, splash, description, reviewsgeneral, reviewstotal, releasedate, developer, publisher, tags, percentage, video, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    client.execute(query, data, { prepare: true })
    .catch(error => {
        // console.log(data);
        // console.log(err);
        callback(error, null);
       })
    .then(result => {
        //  console.log(data);
        //  console.log(result); 
         callback(null, result);
        });

};

const getEntry = (data, callback) => {

    //console.log('getEntry()');
    
    const query = `SELECT * from test_dsbulk WHERE id = ${data};`;    

    client.execute(query)
    .catch(error => {
        // console.log(data);
        // console.log(err);
        callback(error, null);
       })
    .then(result => {
        //  console.log(data);
        //  console.log(result); 
         callback(null, result);
        });

};

module.exports.getEntry = getEntry;
module.exports.createEntry = createEntry;




/*
    DATA VISUALIZATION

    var data = [
      counter,
      faker.commerce.productName(),
      splashOptions[Math.floor(Math.random() * 4)],
      faker.lorem.paragraph(),
      options[Math.floor(Math.random() * 9)],
      faker.random.number(),
      faker.date.past(),
      faker.company.companyName(),
      faker.company.companyName(),
      tagList,
      Math.ceil(Math.random() * 100),
      JSON.stringify(vids),
      pics
    ];

      data.proxyId,
      data.summary.title,
      data.summary.splash,
      data.summary.description,
      data.summary.reviews.general,
      data.summary.reviews.total,
      data.summary.releaseDate,
      data.summary.developer,
      data.summary.publisher,
      data.summary.tags,
      data.summary.percentage,
      JSON.stringify(data.media.video),
      data.media.images
*/