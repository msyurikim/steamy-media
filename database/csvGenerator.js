const faker = require('faker');
const fs = require('fs');

console.time('took');

const csvWriter = require('csv-write-stream');
var writer = csvWriter({ headers: ['proxyId', 'title', 'splash', 'description', 'reviewsgeneral', 'reviewstotal', 'releaseDate', 'developer', 'publisher', 'tags', 'percentage', 'video', 'images']})
writer.pipe(fs.createWriteStream('data.csv', { highWaterMark: 32000 }));

// CRITERIA
const options = ['Overwhelmingly Positive', 'Very Positive', 'Positive', 'Mostly Positive', 'Mixed', 'Mostly Negative', 'Negative', 'Very Negative', 'Overwhelmingly Negative'];

const vidOptions = [
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/2028243/movie480.webm?t=1554408553', thumbnail: faker.image.imageUrl() },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256659154/movie480.webm?t=1511366817', thumbnail: faker.image.imageUrl() },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256785187/movie480_vp9.webm?t=1589339181', thumbnail: faker.image.imageUrl() },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256679401/movie480.webm?t=1497589417', thumbnail: faker.image.imageUrl() },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256776898/movie480.webm?t=1583434862', thumbnail: faker.image.imageUrl() },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256660296/movie480.webm?t=1454099186', thumbnail: faker.image.imageUrl() },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256724514/movie480.webm?t=1581426984', thumbnail: faker.image.imageUrl() },
];

const splashOptions = [];
const pics = [];
const tagList = [];
const vids = [];

// END CRITERIA

const seeder = () => {    

    for (let i = 0; i < Math.ceil(Math.random() * 10); i += 1) {
      //pics.push(imgOptions[Math.floor(Math.random() * 15)]);
      pics.push(faker.image.imageUrl());
    }

    for (let i = 0; i < 4; i++) {
      splashOptions.push(faker.image.imageUrl());
    }

    for (let i = 0; i < 20; i += 1) {
      tagList.push(faker.company.bsAdjective());
    }

    for (let i = 0; i < Math.ceil(Math.random() * 3); i += 1) {
      vids.push(vidOptions[Math.floor(Math.random() * 7)]);
    }

};

/*
    [
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
    ]
*/

let counter = 10000000;

const nextData = () => {

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

    return data;

}

const pushToCSV = (writer, callback) => {

  function writeData () {
    let ok = true;

    do {
      counter--;
      //console.log(counter);

      data = nextData();

      if (counter === 0) {
        writer.write(data, callback);
      } else {      
        ok = writer.write(data);
      }

    } while (counter > 0 && ok);

    if (counter > 0 && !ok){
        //console.log('drain');
        writer.once('drain', writeData);
    }
  }
  writeData();
};

seeder();
pushToCSV(writer, () => { writer.end(); console.timeEnd('took'); });
//writer.end();