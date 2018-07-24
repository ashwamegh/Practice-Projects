const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

/*  Fetch the Events page of 91 springboard */

axios.get("https://events.91springboard.com").then(
  response => {
    if (response.status === 200) {
      const html = response.data;
      const $ = cheerio.load(html);

      let eventsToList = [];

      // title, image_url, rsvp_link, desciption, location, date

      $(".material-card.Grey").each((i, element) => {
        eventsToList[i] = {
          title: $(this)
            .children(".white")
            .text()
            .trim(),
          image_url: $(this).children(".img-container"),
          rsvp_link: $(this)
            .children(".white")
            .attr("href"),
          description: $(this)
            .children(".mc-description p")
            .text(),
          location: $(this)
            .children(".mc-footer ul li::first-child a")
            .attr("href"),
          date: $(this)
            .children(".mc-footer ul li::nth-child(2) a")
            .attr("href")
        };
      });

      const eventToListTrimmed = eventsToList.filter(n => n != undefined);

      fs.writeFile(
        "events.json",
        JSON.stringify(eventToListTrimmed, null, 4),
        err => console.log("File written successfully")
      );
    }
  },
  error => console.log(err)
);
