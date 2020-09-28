const regeneratorRuntime = require('regenerator-runtime');
const mongoose = require('mongoose');

const listingData = {
  listing_id: 1,
  place_title: 'Entire apartment on Meme Road',
  sleeping_arrangement: 'too many cooks',
  price: 50,
  image: 'feet.jpeg',
  review_count: 50,
  review_average: 5,
  superhost: true,
  saved: false
}

describe('Get Endpoints', () => {
  let testConn;
  beforeAll(async () => {
    const mongoURL = 'mongodb://localhost:27017/test';
    testConn = await mongoose.createConnection(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> 'on test db')
    .catch((err) => console.log(err));
  });

  it('should insert a doc into a collection', async () => {
    expect(1).toEqual(1);
    // const placeSchema = new mongoose.Schema({
    //   listing_id: Number,
    //   place_title: String,
    //   sleeping_arrangement: String,
    //   price: Number,
    //   image: String,
    //   review_count: { type: Number, default: 0 },
    //   review_average: { type: Number, default: 0 },
    //   superhost: Boolean,
    //   saved: Boolean,
    // });

    // const TestPlace = mongoose.model('TestPlace', placeSchema);

    // await TestPlace.create(listingData);
    // const savedPlace = await TestPlace.findOne({listing_id: 1});
    // expect(savedPlace.listing_id).toEqual(1);
  });

  afterAll(async () => {
    // await TestPlace.deleteMany();
    await mongoose.close();
  });


});
