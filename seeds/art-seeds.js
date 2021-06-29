const { Art } = require("../models");

// id,art_name,artist_name,technique,dimension,price,other_details,img_url,user_id

const Artdata = [
  {
    art_name: "Nature",
    artist_name: "MeMe",
    dimension: "10x10",
    technique: "Oil Pastel",
    price: "$12.00",
    other_details: "It needs to be framed",
    img_url: "https://unsplash.com/photos/fQEVCD1lsoM",
    user_id: 1,
    public_id: "dsfdsfdsf",
  },
  {
    art_name: "Leafs",
    artist_name: "Byme",
    dimension: "10x12",
    technique: "Water Color",
    price: "$12.00",
    other_details: "Ready to hang",
    img_url: "https://unsplash.com/photos/zg7EfU9Ifug",
    user_id: 2,
    public_id: "dsfdsfdsf",
  },
  {
    art_name: "Water",
    artist_name: "Byme",
    dimension: "12x12",
    technique: "Pastel",
    price: "$12.00",
    other_details: "Canvas cloth",
    img_url: "https://unsplash.com/photos/ttdQ-5UXxJg",
    user_id: 3,
    public_id: "dsfdsfdsf",
  },
];

const seedArt = () => Art.bulkCreate(Artdata);

module.exports = seedArt;
