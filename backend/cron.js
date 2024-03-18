// Cron jobs are scheduled tasks that run periodically at fixed intervals or specific times
// Send 1 GET request for every 14 minutes
// Schedule:
// We define a scedule using a cron expression, which consists of five fields representing:
//! MINUTE, HOUR, DAY OF THE MONTH, MONTH, DAY OF THE WEEK

import cron from "cron";
import https from "https";

const URL = "https://expense-tracker-gql-i5ok.onrender.com";

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(URL, (res) => {
      if (res.statusCode === 200) {
        console.log("GET request sent successfully");
      } else {
        console.log("GET request failed", res.statusCode);
      }
    })
    .on("error", (e) => {
      console.error("Error while sending request:", e);
    });
});

export default job;
