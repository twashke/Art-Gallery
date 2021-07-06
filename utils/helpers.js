// Helper to build thumbnail URL which speeds up the displaying of cards for collection and dashboard
module.exports = {

     format_time: (date) => {
          return date.toLocaleTimeString();
     },

     format_date: (date) => {
          return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()
               }`;
     },

     thumbnail: (url) => {
          var urla = url.substr(0, 50);
          var urlb = "c_thumb,w_300,g_face/";
          var urlc = url.substr(50, url.length);
          var newurl = urla.concat(urlb).concat(urlc);
          //console.log(newurl);
          return newurl;
     },
};
