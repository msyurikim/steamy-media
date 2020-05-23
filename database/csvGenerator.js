const faker = require('faker');
const fs = require('fs');

const csvWriter = require('csv-write-stream');
var writer = csvWriter({ headers: ['proxyId', 'title', 'splash', 'description', 'reviewsgeneral', 'reviewstotal', 'releaseDate', 'developer', 'publisher', 'tags', 'percentage', 'video', 'images']})
writer.pipe(fs.createWriteStream('data.csv'));

// CRITERIA
const options = ['Overwhelmingly Positive', 'Very Positive', 'Positive', 'Mostly Positive', 'Mixed', 'Mostly Negative', 'Negative', 'Very Negative', 'Overwhelmingly Negative'];
const imgOptions = ['https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic1.jpeg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic2.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic3.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic4.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic5.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic6.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic7.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic8.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic9.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic10.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic11.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic12.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic13.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/pic15.jpg'];

const vidOptions = [{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/2028243/movie480.webm?t=1554408553', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/vid1.jpg'},
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256659154/movie480.webm?t=1511366817', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/vid2.jpg' },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256785187/movie480_vp9.webm?t=1589339181', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/vid3.jpg' },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256679401/movie480.webm?t=1497589417', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/vid4.jpg'},
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256776898/movie480.webm?t=1583434862', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/vid5.jpg' },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256660296/movie480.webm?t=1454099186', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/vid6.jpg' },
{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256724514/movie480.webm?t=1581426984', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/vid7.jpg' },
];

const splashOptions = ['https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/Splash1.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/Splash2.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/Splash3.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/Splash4.jpg'];

const pics = [];
const tagList = [];
const vids = [];

const alyx = {
  proxyId: 237,
  summary: {
    title: 'Half-Life: Alyx',
    splash: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hlSplash.jpg',
    description: 'Half-Life: Alyx is Valve’s VR return to the Half-Life series. It’s the story of an impossible fight against a vicious alien race known as the Combine, set between the events of Half-Life and Half-Life 2. Playing as Alyx Vance, you are humanity’s only chance for survival.',
    reviews: { general: 'Overwhelmingly Positive', total: 25219 },
    releaseDate: new Date('March 23, 2020'),
    developer: 'Valve',
    publisher: 'Valve',
    tags: ['Action', 'Masterpiece', 'Adventure', 'VR', 'Story Rich', 'Atmospheric', 'Singleplayer', 'FPS', 'Horror', 'Sci-fi', 'First-Person', 'Shooter', 'Aliens', 'Beautiful', 'Zombies', 'Futuristic', 'Great Soundtrack', 'Psychological Horror', 'Memes'],
    percentage: 98,
  },

  media: {
    video: [{ video: 'https://steamcdn-a.akamaihd.net/steam/apps/256767815/movie480.webm?t=1583175736', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hlvid1.jpg' },
      { video: 'https://steamcdn-a.akamaihd.net/steam/apps/256776744/movie480.webm?t=1583175743', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hlvid2.jpg' },
      { video: 'https://steamcdn-a.akamaihd.net/steam/apps/256776745/movie480.webm?t=1583175752', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hlvid3.jpg' },
      { video: 'https://steamcdn-a.akamaihd.net/steam/apps/256776746/movie480.webm?t=1583175759', thumbnail: 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hlvid4.jpg' }],

    images: ['https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl1.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl2.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl3.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl4.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl5.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl6.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl7.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl8.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl9.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl10.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl11.jpg', 'https://fec-pics.s3.us-east-2.amazonaws.com/FECassets/hl12.jpg'],
  },
};

// END CRITERIA

const seeder = () => {    

    for (let i = 0; i < Math.ceil(Math.random() * 10); i += 1) {
      pics.push(imgOptions[Math.floor(Math.random() * 15)]);
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
      console.log(counter);

      data = nextData();

      if (counter === 0) {
        writer.write(data, callback);
      } else {      
        ok = writer.write(data);
      }

    } while (counter > 0 && ok);

    if (counter > 0 && !ok){

        console.log('drain');
        writer.once('drain', writeData);

    }
  }

  writeData();

};


seeder();
pushToCSV(writer, () => { writer.end(); console.log('end'); });
//writer.end();