DROP DATABASE IF EXISTS artgallery_db;
CREATE DATABASE hbpswq2jwovia8g4;

INSERT INTO user (username, email, password)
VALUE ("jack","jack@daniels.com","$2b$10$HPcu.H61TPEWlWO51kWySuINwhtAhkkh65tFrXesb31gCbj/zBCEu");

INSERT INTO user (username, email, password)
VALUE ("jose", "jose@cuervo.com","$2b$10$C2Y9drc3RV208DIoEMNW4.J7Wa9F6v0QsBI7oiLqMvh2vnmKLCQ5i");

INSERT INTO user (username, email, password)
VALUE ("jim","jim@bean.com", "$2b$10$.vknOXafaRndzpwc4MMjzusGWNUzg5P14KvKNgiMLL96gutlaQ7Dy");

INSERT INTO user (username, email, password)
VALUE ("jill", "jill@valentine.com","$2b$10$bqd5z4XwqUl9iUreG8QrIO4jZHYelfZ05cIbQeQKkJ2cEIQunKmkK");

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("In The Park","Tami","8x10","Photo","15.00","Unframed. Waikiki, HI","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032550/ArtWorks/0908191418_HDRalter_yerkpv.jpg",1,"Thugfencer")

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("Boba","Tami","n/a","Rattle Can","100.00","Absolute, used.","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032255/ArtWorks/1222191117boba_rzucax.jpg",2,"Thugfencer")

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("Sabine","Tami","n/a","Rattle Can","300.00","Leon Paul with epee bib, new","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625031843/ArtWorks/sabine_kdw4yb.jpg",3,"Thugfencer");

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("RESIST!","Tami","n/a","Rattle Can","350.00","Leon Paul with foil bib, new","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625031839/ArtWorks/rebelalliance_rsu0aj.jpg",4,"Thugfencer");

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("Triple Troopers","Tami","Adult sized helmet","Craft Foam","25.00",
"Halloween yard art","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032307/ArtWorks/1031201603b_HDR_xbbngx.jpg",1,"Thugfencer");

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("Surf's up!","Tami","8x10","Photo, Matte, unframed","20.00","Waikiki, HI","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032133/ArtWorks/0911191932_scaia2.jpg",2,"Thugfencer");

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("Fiery Sunset","Tami","8x10","Photo, glossy, framed","25.00","Waikiki, HI","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032131/ArtWorks/0912191851_zwlvfi.jpg",3,"Thugfencer");

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("For Her Insta","Tami","8x10","Photo, glossy, unframed","10.50","Waikiki, HI","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625032082/ArtWorks/0908191909_HDR_5x7_jtzfnd.jpg",4,"Thugfencer");

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("Zinnia","Tami","8x10","Photo","17.00","Glossy, unframed",
"https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625031955/ArtWorks/0728191519acropped_ntr7bn.jpg",1,"Thugfencer");

INSERT INTO art (art_name, artist_name, dimension, technique, price, other_details, img_url, user_id, public_id)
VALUE ("Hens and Chicks","Tami","8x10","Photo","25.00","Macro, glossy, framed","https://res.cloudinary.com/dsi8e0wd1/image/upload/v1625031848/ArtWorks/hensAndChicks_r8pkzc.jpg",2,"Thugfencer");

INSERT INTO comment (text, user_id, art_id)
VALUE ("Gorgeous tree, and the Hawaiian Shave Ice truck in the background sets the scene.",1,1);

INSERT INTO comment (text, user_id, art_id)
VALUE ("Nice work!",2,1);

INSERT INTO comment (text, user_id, art_id)
VALUE ("Great details.  Dewdrops are nice.",3,10);

INSERT INTO comment (text, user_id, art_id)
VALUE ("Sharp focus!  Were there filters applied?",4,7);

INSERT INTO comment (text, user_id, art_id)
VALUE ("Mando Mondays... Dent looks great, and mask does not appear to be heavily used",1,2);

INSERT INTO comment (text, user_id, art_id)
VALUE ("Would love to see a version of this on a black background.",2,9);


