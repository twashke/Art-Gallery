[![Badge](https://img.shields.io/badge/GitHub-gunjanb-orange?style=flat-square&logo=appveyor)](https://github.com/gunjanb)
[![Badge](https://img.shields.io/badge/GitHub-jkcanoy-yellow?style=flat-square&logo=appveyor)](https://github.com/jkcanoy)
[![Badge](https://img.shields.io/badge/GitHub-FettBoba-green?style=flat-square&logo=appveyor)](https://github.com/Fett-Boba)
[![Badge](https://img.shields.io/badge/GitHub-twashke-blueviolet?style=flat-square&logo=appveyor)](https://github.com/twashke) [![Badge](https://img.shields.io/badge/License-MIT-blue)](https://opensource.org/licenses/MIT)

# Happy Little Art Gallery

The [Happy Little Art Gallery](https://happylittleartgallery072021.herokuapp.com/) was created for budding artists who want to find inspiration from other artists, or showcase their own work. After **Sign Up** the user is taken to their own **Dashboard** where they can begin showcasing their own art by using the **Add New Art** button. The **Collection** tab will allow the user to see all of the art currently being displayed by all other users (including their own). By clicking on the **Details** button, information about the art is displayed, including a section for the user to provide feedback on the art through a comment section. The **Purchase now** button allows the user the ability to purchase the artwork from the artist through PayPal. The dashboard and collection are only avaialble to users that are currently logged in. Once the user is done, they can use the **Logout** tab to return to the opening page of the website. The user can return to the dashboard or the collections page by using the **Login** tab to enter their login information again for access to the website.

**_"Talent is a pursued interest. Anything that you are willing to practice, you can do." - Bob Ross_**

## Table of Contents

- [About the Project](#about-the-project)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## About the Project

- The motivation for this project is to create a place for a user to view, provide feedback, and even sell their art to other users.
- This website requires the user to sign in to view their own personal **Dashboard** to post and showcase their own art.
- Using the **Add New Art** button the user can post their own picture and include all of the details about the art.
- Using the **Collections** tab the user can view all of the art that has been posted.
- In the **Details** portion of art, the user can leave comments or feedback on other artist's work.
- Clicking the **Purchase now** button users are directed to Paypal to pay the seller for their art.
- Once the user is done, they can use the **Logout** tab to return to the opening page of the website.
- Built with the following technologies:
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [path](https://www.npmjs.com/package/path)
  - [express](https://www.npmjs.com/package/express)
  - [express-session](https://www.npmjs.com/package/express-session)
  - [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  - [mysql2](https://www.npmjs.com/package/mysql2)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [sequelize](https://www.npmjs.com/package/sequelize)
  - [connect-session-sequelize](https://www.npmjs.com/package/connect-session-sequelize)
  - [multer](https://www.npmjs.com/package/multer)
  - [cloudinary](https://www.npmjs.com/package/cloudinary)
  - [multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)
  - [paypal-rest-sdk](https://www.npmjs.com/package/paypal-rest-sdk)
  - [HTML](https://www.w3schools.com/html/), [CSS](https://www.w3.org/Style/CSS/Overview.en.html), and [Javascript](https://www.javascript.com/)
  - [Bootstrap](https://getbootstrap.com/)
  - [Google Fonts](https://fonts.google.com/)
  - [Font Awesome](https://fontawesome.com/)

## Installation

- Open [Happy Little Art Gallery](https://github.com/twashke/Art-Gallery)
- Use the command line to **git clone**
- **npm install**
- Copy [.envEXAMPLE](.env.EXAMPLE) and paste to create an **.env** file to include MySql and Cloudinary information for access to the database and the picture database.
- Copy [Database](/db/schema.sql) and drop in local [MySql Workbench](https://www.mysql.com/products/workbench/).
- **node run seeds/seeds.js** to drop seeds in command line - [art-seeds.js](seeds/art-seeds.js) will need to be updated to include clouidnary files from the login being used.
- **npm start** from command line to connect server.
- Go to [localhost:3001](http://localhost:3001/) in Web Browser to view.

## Usage

- Go to [Deployed **Happy Little Art Gallery Website**](https://happylittleartgallery072021.herokuapp.com/)
- Use the **Login** tab to **Sign Up**
- Enter **Username**, **Email**, and **Password**
- The user is directed to their personal **Dashboard**
- To add art, click the **Add New Art** button and enter details and choose the art to upload.
- From their they can add pictures or view comments on their pictures.
- The **Collections** tab allows the user to view all other art on the website to view, comment, and purchase through the user.
- Clicking on the **Details** button allows the user to view more information about the art.
- Click on the **Purchase now** button directs the user to paypal to purchase the seller's art.
- By clicking **Logout** the user is returned to the opening page.

[Happy Little Art Gallery](https://happylittleartgallery072021.herokuapp.com/) **Home**, **Sign Up** and **Login** to **Dashboard** \
![Home, Sign Up and Login Page](public/images/home-login-signup.gif) \
\
Updating Art on **Dashboard** \
![Viewing Collections](public/images/update-art-details.gif) \
\
Remove Art Using the **Delete** button \
![Delete Art](public/images/delete-art.gif) \
\
Viewing the **Collection** tab for all User Artwork and to see comments \
![Viewing Collections](public/images/collections-tab.gif) \
\
Add **Comments** on Artwork in the **Details** section \
![Add Comments to Art](public/images/add-comment.gif) \
\
Use the **Purchase now** button in the **Details** section to purchase through [PayPal](https://www.paypal.com/us/home) \
![Purchase through PayPal](public/images/purchase-paypal.gif) \
\
**Logout** of [Happy Little Art Gallery](https://happylittleartgallery072021.herokuapp.com/) \
![Logout of Website](public/images/logout.gif) \
\
Contact Information in Footer \
![Footer Contact Information](public/images/footer-contact-info.gif)

## Contributing

- [Gunjan Bhargava](#Contact-Gunjun-Bhargava)
- [Kyle Canoy](#Contact-Kyle-Canoy)
- [Tami Shepard](#Contact-Tami-Shepard)
- [Tiffany Washke](#Contact-Tiffany-Washke)

## Tests

- Testing was done throughout the project development by using **git pull origin develop** as new files were merged in github.
- Each round of new files included vigourous testing to ensure everything was connecting properly and working as intended.
- Insomnia was used to test all API routes.
- Multiple deployments using both develop and main branch in Heroku

## License

This application is covered by the [MIT License](https://opensource.org/licenses/MIT).

      Copyright 2021 Gunjan Bhargava, Kyle Canoy, Tami Shepard, Tiffany Washke

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Questions

## **Contact Gunjun Bhargava**

- **Email directly at** gunjanb2006@gmail.com
- **GitHub User Name:** [gunjanb](https://github.com/gunjanb)

## **Contact Kyle Canoy**

- **Email directly at** kcanoy@uw.edu
- **GitHub User Name:** [jkcanoy](https://github.com/jkcanoy)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/78453584?v=4)

## **Contact Tami Shepard**

- **Email directly at** thugfencer@gmail.com
- **GitHub User Name:** [Tami Shepard](https://github.com/Fett-Boba)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/80312113?v=4)

## **Contact Tiffany Washke**

- **Email directly at** twashke@gmail.com
- **GitHub User Name:** [Tiffany Washke](https://github.com/twashke)

![Developer Profile Picture](https://avatars.githubusercontent.com/u/79234530?v=4)
