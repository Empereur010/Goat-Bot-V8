const fs = require("fs");
const path = require("path");
const axios = require("axios");
const sharp = require("sharp");

module.exports = {
  config: {
    name: "5d",
    version: "2.0",
    author: "ChatGPT",
    countDown: 3,
    role: 0,
    shortDescription: "Effet 5D en local",
    longDescription: "Transforme une image avec un effet 5D stylisé sans API",
    category: "image",
    guide: "Réponds à une image avec +5D"
  },

  onStart: async function ({ event, api }) {
    try {
      const { messageReply, threadID, messageID, senderID } = event;

      if (!messageReply || !messageReply.attachments || messageReply.attachments.length === 0) {
        return api.sendMessage("❌ Réponds à une image avec `+5D` pour la transformer.", threadID, messageID);
      }

      const attachment = messageReply.attachments[0];
      if (attachment.type !== "photo") {
        return api.sendMessage("❌ Seules les photos sont supportées.", threadID, messageID);
      }

      const imgUrl = attachment.url;
      const imgBuffer = (await axios.get(imgUrl, { responseType: "arraybuffer" })).data;

      const inputPath = path.join(__dirname, "cache", `${senderID}_input.jpg`);
      const outputPath = path.join(__dirname, "cache", `${senderID}_5d.jpg`);
      fs.writeFileSync(inputPath, imgBuffer);

      // Application de l'effet 5D local (saturation + contraste + netteté)
      await sharp(inputPath)
        .modulate({ saturation: 2 }) // augmente la saturation
        .linear(1.2, -10)            // augmente contraste
        .sharpen()                   // netteté
        .toFile(outputPath);

      api.sendMessage({
        body: "✅ Image transformée en 5D (effet local) !",
        attachment: fs.createReadStream(outputPath)
      }, threadID, () => {
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
      });

    } catch (error) {
      console.error(error);
      api.sendMessage("❌ Erreur lors de la transformation 5D.", event.threadID, event.messageID);
    }
  }
};
