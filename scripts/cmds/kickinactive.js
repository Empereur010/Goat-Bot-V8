module.exports = {
  config: {
    name: "kickinactive",
    version: "1.0",
    author: "Saïd Z.",
    countDown: 10,
    role: 1,
    shortDescription: "Expulse les membres inactifs",
    longDescription: "Kick tous les membres du groupe qui n'ont jamais écrit.",
    category: "admin",
    guide: "{pn} → Expulse ceux qui observent sans jamais écrire"
  },

  onStart: async function ({ api, event }) {
    const { threadID, messageID } = event;

    // 🔒 Bloquer si quelqu'un change le nom de l'auteur
    const expectedAuthor = "Saïd Z.";
    if (this.config.author !== expectedAuthor) {
      return api.sendMessage("❌ Cette commande a été modifiée, elle est désactivée.", threadID, messageID);
    }

    const threadInfo = await api.getThreadInfo(threadID);
    const allMembers = threadInfo.userInfo;
    const adminIDs = threadInfo.adminIDs.map(e => e.id);
    const botID = api.getCurrentUserID();

    let kicked = [];

    for (let member of allMembers) {
      const { id, name, totalMessages } = member;

      if (adminIDs.includes(id)) continue;
      if (id === botID) continue;
      if (totalMessages > 0) continue;

      try {
        await api.removeUserFromGroup(id, threadID);
        kicked.push(`${name} (${id})`);
        await new Promise(res => setTimeout(res, 1000)); // anti spam Facebook
      } catch (err) {
        console.log(`❌ Erreur kick ${name}:`, err);
      }
    }

    if (kicked.length === 0) {
      return api.sendMessage("✅ Aucun membre inactif à expulser.", threadID, messageID);
    }

    const listText = kicked.map(n => `- ${n}`).join("\n");
    return api.sendMessage(`✅ Membres inactifs expulsés :\n${listText}`, threadID);
  }
};
