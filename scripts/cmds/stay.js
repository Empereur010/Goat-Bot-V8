const fs = require("fs");
const path = __dirname + "/stayMode.json";

module.exports = {
  config: {
    name: "stay",
    version: "1.0",
    author: "Saïd Z.",
    role: 1,
    shortDescription: "Empêche les membres de quitter le groupe",
    longDescription: "Si un membre quitte, le bot le rajoute automatiquement si mode activé.",
    category: "admin",
    guide: "{pn} on / off"
  },

  onStart: async function({ api, event, args }) {
    const { threadID, messageID } = event;

    if (!args[0] || !["on", "off"].includes(args[0].toLowerCase())) {
      return api.sendMessage("❌ Utilisation : stay on / stay off", threadID, messageID);
    }

    let stayMode = {};
    if (fs.existsSync(path)) {
      stayMode = JSON.parse(fs.readFileSync(path));
    }

    if (args[0].toLowerCase() === "on") {
      stayMode[threadID] = true;
      fs.writeFileSync(path, JSON.stringify(stayMode, null, 2));
      return api.sendMessage("✅ Mode stay activé : personne ne pourra quitter le groupe sans être rajouté.", threadID);
    } else {
      stayMode[threadID] = false;
      fs.writeFileSync(path, JSON.stringify(stayMode, null, 2));
      return api.sendMessage("⚠️ Mode stay désactivé.", threadID);
    }
  },

  onEvent: async function({ api, event }) {
    // Cette fonction doit être appelée dans ton gestionnaire d'événements
    if (event.logMessageType !== "log:unsubscribe") return;

    if (!fs.existsSync(path)) return;

    const stayMode = JSON.parse(fs.readFileSync(path));
    const threadID = event.threadID;

    if (!stayMode[threadID]) return;

    // event.leftParticipant = ID de la personne qui a quitté
    const userID = event.leftParticipant;

    try {
      await api.addUserToGroup(userID, threadID);
      api.sendMessage(`⚠️ ${userID} a quitté, mais je l'ai rajouté automatiquement.`, threadID);
    } catch (e) {
      console.error("Erreur en rajoutant un membre :", e);
    }
  }
};
