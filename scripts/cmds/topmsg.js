module.exports = {
  config: {
    name: "topmsg",
    version: "1.0",
    author: "Saïd Z.",
    role: 0,
    shortDescription: "Classement des plus actifs",
    longDescription: "Affiche les membres les plus actifs du groupe selon le nombre de messages envoyés.",
    category: "groupe",
    guide: "{pn} [top N] → Exemple : {pn} 10"
  },

  onStart: async function ({ api, event, args }) {
    const { threadID, messageID } = event;
    const topCount = parseInt(args[0]) || 10;

    const threadInfo = await api.getThreadInfo(threadID);
    const members = threadInfo.userInfo;

    const sorted = members
      .filter(m => m.totalMessages > 0)
      .sort((a, b) => b.totalMessages - a.totalMessages)
      .slice(0, topCount);

    if (sorted.length === 0)
      return api.sendMessage("Aucune donnée de message disponible dans ce groupe.", threadID);

    const result = sorted
      .map((m, i) => `${i + 1}. ${m.name} — ${m.totalMessages} messages`)
      .join("\n");

    return api.sendMessage(`🏆 Top ${topCount} membres les plus actifs :\n\n${result}`, threadID, messageID);
  }
};
