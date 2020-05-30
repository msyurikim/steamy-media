/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-loop-func */
/* eslint-disable no-console */
const faker = require('faker');
const db = require('./config');

let counter = 1;

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

const seeder = () => {
  while (counter < 101) {
    const pics = [];
    for (let i = 0; i < Math.ceil(Math.random() * 10); i += 1) {
      pics.push(imgOptions[Math.floor(Math.random() * 15)]);
    }

    const tagList = [];
    for (let i = 0; i < 20; i += 1) {
      tagList.push(faker.company.bsAdjective());
    }

    const vids = [];
    for (let i = 0; i < Math.ceil(Math.random() * 3); i += 1) {
      vids.push(vidOptions[Math.floor(Math.random() * 7)]);
    }

    const data = {
      proxyId: counter,
      summary: {
        title: faker.commerce.productName(),
        splash: splashOptions[Math.floor(Math.random() * 4)],
        description: faker.lorem.paragraph(),
        reviews: { general: options[Math.floor(Math.random() * 9)], total: faker.random.number() },
        releaseDate: faker.date.past(),
        developer: faker.company.companyName(),
        publisher: faker.company.companyName(),
        tags: tagList,
        percentage: Math.ceil(Math.random() * 100),
      },
      media: {
        video: vids,
        images: pics,
      },
    };
    db.addNewGame(data, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`successfully inserted ${counter}`);
      }
    });
    counter += 1;
  }

  db.addNewGame(alyx, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`successfully inserted ${counter}`);
    }
  });
};

seeder();
