const axios = require("axios");

module.exports = {
  config: {
    name: "4k",
    version: "1.0",
    author: "Saïd x ChatGPT",
    countDown: 5,
    role: 0,
    shortDescription: "Image NSFW 4K",
    longDescription: "Envoie une image hentai réaliste 4K 🔞",
    category: "🔞 NSFW",
    guide: {
      en: "{pn}"
    }
  },

  onStart: async function ({ api, event }) {
    const threadID = event.threadID;
    const messageID = event.messageID;

    try {
      const res = await axios.get("https://nekobot.xyz/api/image?type=4k");
      const imageUrl = res.data.message;

      const msg = {
        body: "🍑 Image 4K NSFW",
        attachment: await global.utils.getStreamFromURL(imageUrl)
      };

      return api.sendMessage(msg, threadID, messageID);
    } catch (err) {
      console.error(err);
      return api.sendMessage("❌ Impossible de récupérer une image 4K.", threadID, messageID);
    }
  }
};
