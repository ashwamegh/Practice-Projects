const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");


let html = "<div> </div>";


/* A recursive function to fetch more data if it exists, initially loads the initial data */
const onDataRequest = query => {
  const scrapeQuery = "https://events.91springboard.com" + query + "&json=true";
  axios
    .get(scrapeQuery)
    .then(response => {
      if (response.status === 200) {
        html += response.data.event_response.html;

        if (response.data.more_pages) {
          onDataRequest(response.data.load_more_url);
        } else {
          postProcessScrapedHTML();
        }
      } else {
        console.error("Error Encountered");
      }
    })
    .catch(error => console.error(error));
};


/* Function to Format the scraped HTML data and save it in the file */
const postProcessScrapedHTML = () => {
  const $ = cheerio.load(html);

  let eventsToList = [];

  // title, image_url, rsvp_link, desciption, location, date

  $(".material-card.Grey").each((i, element) => {
    eventsToList[i] = {
      title: $(element)
        .find("a.white")
        .text()
        .trim(),
      image_url: $(element)
        .find(".img-container")
        .css("background-image")
        .replace("url(", "")
        .replace(")", "")
        .replace(/\"/gi, ""),
      rsvp_link: $(element)
        .find("a.white")
        .attr("href")
        .trim(),
      description: $(element)
        .find(".mc-description p")
        .text(),
      location: $(element)
        .find(".mc-footer ul li:first-child a")
        .attr("href"),
      date: $(element)
        .find(".mc-footer ul li:nth-child(2) a")
        .attr("href")
    };
  });

  const eventToListTrimmed = eventsToList.filter(n => n != undefined);

  fs.writeFile(
    "events.json",
    JSON.stringify(eventToListTrimmed, null, 4),
    err => console.log("File written successfully")
  );
};


/*  Initial fetch of the events page of 91 springboard */
onDataRequest("/?cur=eyJhbGciOiJIUzI1NiJ9.Mg.dndKdLWtEqScXqTns2wc48r6oIF1kTnFDwTZ0PnisjM");