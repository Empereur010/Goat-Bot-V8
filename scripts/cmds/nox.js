module.exports = {
  config: {
    name: "nox",
    version: "1.0",
    author: "Saïd Z.",
    role: 0,
    shortDescription: "Assistant intelligent déclenché par 'Nox'",
    longDescription: "Répond aux questions quand un message commence par Nox.",
    category: "IA",
    guide: "Écris simplement un message qui commence par 'Nox', exemple :\nNox combien de pays en Afrique ?"
  },

  onChat: async function ({ event, api, message, usersData, threadsData, getLang, args }) {
    const { body, threadID, messageID } = event;
    if (!body?.toLowerCase().startsWith("nox")) return;

    const question = body.substring(3).trim();
    if (question.length === 0) return;

    try {
      const response = await global.chatGPT(question); // Cette fonction utilise GPT (si connectée)
      api.sendMessage(`🤖 ${response}`, threadID, messageID);
    } catch (e) {
      console.log("Erreur GPT :", e);
      api.sendMessage("❌ Je n'ai pas pu répondre à ta question.", threadID, messageID);
    }
  }
};
