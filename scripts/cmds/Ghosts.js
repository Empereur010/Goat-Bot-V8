module.exports = {
  config: {
    name: "ghosts",
    version: "1.0",
    author: "Saïd Z.",
    role: 1,
    shortDescription: "Liste les membres silencieux",
    longDescription: "Affiche les membres du groupe qui n'ont jamais envoyé de message.",
    category: "groupe",
    guide: "{pn} → Affiche les fantômes"
  },

  onStart: async function ({ api, event }) {
    const { threadID, messageID } = event;

    const threadInfo = await api.getThreadInfo(threadID);
    const allMembers = threadInfo.userInfo;

    const ghosts = allMembers.filter(member => member.totalMessages === 0);

    if (ghosts.length === 0)
      return api.sendMessage("✅ Tous les membres ont déjà participé au groupe.", threadID, messageID);

    const ghostList = ghosts.map(u => `👻 ${u.name} (${u.id})`).join("\n");

    return api.sendMessage(
      `📛 Membres fantômes (aucun message envoyé) :\n\n${ghostList}`,
      threadID,
      messageID
    );
  }
};
