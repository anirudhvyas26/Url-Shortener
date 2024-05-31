const UrlShortener = require("../utils/urlShortner");
const Url = require("../models/urlModels");

class urlController {
  static async shortenUrl(req, res) {
    try {
      const { originalUrl } = req.body;
      if (!originalUrl)
        return res.status(400).json({ message: "url is required" });
      //check if url is shortened
      let url = await Url.findOne({ originalUrl });
      if (url) {
        return res.json(url);
      }
      // generate s-url
      const shortUrl = UrlShortener.generateShortUrl();
      //Save to the database
      url = new Url({
        originalUrl,
        shortUrl,
      });
      await url.save();
      res.json(url);
    } catch (err) {
      res.status(500).json({ message: "internal server error " + err.message });
    }
  }
  static async redirectToOriginalUrl(req, res) {
    try {
        const {shortUrl} = req.params;
        const url = await  Url.findOne ({ shortUrl: shortUrl});
        if(!url){
            return res.status(404).send('URL NOT FOUND');
        }
            //increase the click count
            url.clicks += 1;
            await url.save();
            res.redirect(url.originalUrl)

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
  }
}
module.exports = urlController;
