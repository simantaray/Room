// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const axios = require("axios");
const url = `https://api.reddit.com/r/18_19`;
let linkArray = [];
const getUrl = async () => {
  await axios
    .get(url)
    .then((response) => {
      response.data.data.children.map((ele) => {
        if (ele.data.post_hint !== "self")
          linkArray.push({
            author: ele.data.author,
            title: ele.data.title,
            url: ele.data.url,
            post_hint: ele.data.post_hint,
          });
      });
    })
    .catch((e) => console.log(e));
  return linkArray;
};

export default function handler(req, res) {
  getUrl();
  res.json(linkArray);
}
