// const sampleData = [{
//   review_count: 193, review_average: 2.11, listing_id: 17, place_title: 'Entire apartment on Lambert Rapid', sleeping_arrangement: 'Phased Games · 3 enterprise', image: 'https://souperhost.s3-us-west-2.amazonaws.com/stay17.jpg', price: 426, superhost: true, saved: false,
// }];
const sampleData = [];
for (let i = 1; i <= 100; i += 1) {
  sampleData.push({
    image: `https://souperhost.s3-us-west-2.amazonaws.com/stay${i}.jpg`,
    review_count: 145,
    review_average: 4.85,
    price: 426,
    sleeping_arrangement: 'Phased Games · 3 enterprise',
    place_title: 'Entire apartment on Lambert Rapid',
  });
}

export default sampleData;
