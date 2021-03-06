const { Art } = require("../models");

const Artdata = [
     {
          art_name: "In The Park",
          artist_name: "Tami",
          dimension: "8x10",
          technique: "Photo",
          price: "15.00",
          other_details: "Unframed. Waikiki, HI",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032550/ArtWorks/0908191418_HDRalter_yerkpv.jpg",
          user_id: 1,
          public_id: "Thugfencer",
     },
     {
          art_name: "Boba",
          artist_name: "Tami",
          dimension: "n/a",
          technique: "Rattle Can",
          price: "100.00",
          other_details: "Absolute, used.",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032255/ArtWorks/1222191117boba_rzucax.jpg",
          user_id: 2,
          public_id: "Thugfencer",
     },
     {
          art_name: "Sabine",
          artist_name: "Tami",
          dimension: "n/a",
          technique: "Rattle Can",
          price: "300.00",
          other_details: "Leon Paul with epee bib, new",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625031843/ArtWorks/sabine_kdw4yb.jpg",
          user_id: 3,
          public_id: "Thugfencer",
     },
     {
          art_name: "RESIST!",
          artist_name: "Tami",
          dimension: "n/a",
          technique: "Rattle Can",
          price: "350.00",
          other_details: "Leon Paul with foil bib, new",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625031839/ArtWorks/rebelalliance_rsu0aj.jpg",
          user_id: 4,
          public_id: "Thugfencer",
     },
     {
          art_name: "Triple Troopers",
          artist_name: "Tami",
          dimension: "Adult sized helmet",
          technique: "Craft Foam",
          price: "25.00",
          other_details: "Halloween yard art",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032307/ArtWorks/1031201603b_HDR_xbbngx.jpg",
          user_id: 1,
          public_id: "Thugfencer",
     },
     {
          art_name: "Surf's up!",
          artist_name: "Tami",
          dimension: "8x10",
          technique: "Photo, Matte, unframed",
          price: "20.00",
          other_details: "Waikiki, HI",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032133/ArtWorks/0911191932_scaia2.jpg",
          user_id: 2,
          public_id: "Thugfencer",
     },
     {
          art_name: "Fiery Sunset",
          artist_name: "Tami",
          dimension: "8x10",
          technique: "Photo, glossy, framed",
          price: "25.00",
          other_details: "Waikiki, HI",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032131/ArtWorks/0912191851_zwlvfi.jpg",
          user_id: 3,
          public_id: "Thugfencer",
     },
     {
          art_name: "For Her Insta",
          artist_name: "Tami",
          dimension: "8x10",
          technique: "Photo, glossy, unframed",
          price: "10.50",
          other_details: "Waikiki, HI",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032082/ArtWorks/0908191909_HDR_5x7_jtzfnd.jpg",
          user_id: 4,
          public_id: "Thugfencer",
     },
     {
          art_name: "Zinnia",
          artist_name: "Tami",
          dimension: "8x10",
          technique: "Photo",
          price: "17.00",
          other_details: "Glossy, unframed",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625031955/ArtWorks/0728191519acropped_ntr7bn.jpg",
          user_id: 1,
          public_id: "Thugfencer",
     },
     {
          art_name: "Hens and Chicks",
          artist_name: "Tami",
          dimension: "8x10",
          technique: "Photo",
          price: "25.00",
          other_details: "Macro, glossy, framed",
          img_url: "https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625031848/ArtWorks/hensAndChicks_r8pkzc.jpg",
          user_id: 2,
          public_id: "Thugfencer",
     },
];

const seedArt = () => Art.bulkCreate(Artdata);

module.exports = seedArt;
