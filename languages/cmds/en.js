module.exports = {
  onlyadminbox: {
    description: "Turn on/off admin-only bot usage in group",
    guide: "{pn} [on | off]",
    text: {
      turnedOn: "Only group admins can now use the bot.",
      turnedOff: "All members can now use the bot.",
      syntaxError: "Syntax error, use: {pn} on or {pn} off"
    }
  },

  adduser: {
    description: "Add a user to your chat group",
    guide: "{pn} [profile link | UID]",
    text: {
      alreadyInGroup: "User is already in the group.",
      successAdd: "✅ Successfully added %1 member(s) to the group.",
      failedAdd: "❌ Failed to add %1 member(s) to the group.",
      approve: "✅ Added %1 user(s) to the group approval list.",
      invalidLink: "Invalid Facebook link.",
      cannotGetUid: "Unable to retrieve UID for this user.",
      linkNotExist: "This profile URL does not exist.",
      cannotAddUser: "Bot is blocked or the user doesn't allow group invites from strangers."
    }
  },

  admin: {
    description: "Add, remove, or list bot admins",
    guide: "{pn} [add | -a] <uid>\n{pn} [remove | -r] <uid>\n{pn} [list | -l]",
    text: {
      added: "✅ Added admin role to %1 user(s):\n%2",
      alreadyAdmin: "⚠️ %1 user(s) already have admin role:\n%2",
      missingIdAdd: "⚠️ Please specify a UID or tag to add admin role.",
      removed: "✅ Removed admin role from %1 user(s):\n%2",
      notAdmin: "⚠️ %1 user(s) are not admins:\n%2",
      missingIdRemove: "⚠️ Please specify a UID or tag to remove admin role.",
      listAdmin: "👑 List of bot admins:\n%1"
    }
  },

  adminonly: {
    description: "Turn on/off admin-only bot usage",
    guide: "{pn} [on | off]",
    text: {
      turnedOn: "Admin-only mode activated.",
      turnedOff: "Admin-only mode deactivated.",
      syntaxError: "Syntax error, use: {pn} on or {pn} off"
    }
  },

  all: {
    description: "Tag all members in the group",
    guide: "{pn} [optional message]"
  },

  anime: {
    description: "Send random anime image",
    guide: "{pn} <endpoint>\nAvailable: neko, kitsune, hug, pat, waifu, cry, kiss, slap, smug, punch",
    text: {
      loading: "Loading image, please wait...",
      error: "An error occurred. Try again later."
    }
  },

  antichangeinfobox: {
    description: "Enable/disable anti-change settings for group info",
    guide: "{pn} avt [on | off]\n{pn} name [on | off]\n{pn} theme [on | off]\n{pn} emoji [on | off]",
    text: {
      antiChangeAvatarOn: "Enabled anti-change avatar.",
      antiChangeAvatarOff: "Disabled anti-change avatar.",
      missingAvt: "Avatar is not set for this chat.",
      antiChangeNameOn: "Enabled anti-change group name.",
      antiChangeNameOff: "Disabled anti-change group name.",
      antiChangeThemeOn: "Enabled anti-change theme.",
      antiChangeThemeOff: "Disabled anti-change theme.",
      antiChangeEmojiOn: "Enabled anti-change emoji.",
      antiChangeEmojiOff: "Disabled anti-change emoji.",
      antiChangeAvatarAlreadyOn: "Anti-change avatar is already enabled.",
      antiChangeNameAlreadyOn: "Anti-change name is already enabled.",
      antiChangeThemeAlreadyOn: "Anti-change theme is already enabled.",
      antiChangeEmojiAlreadyOn: "Anti-change emoji is already enabled."
    }
  },

  appstore: {
    description: "Search an app on App Store",
    text: {
      missingKeyword: "Please enter a search keyword.",
      noResult: "No results found for: %1"
    }
  },

  autosetname: {
    description: "Auto nickname for new members",
    guide: "{pn} set <nickname> (use {userName}, {userID})\n{pn} [on | off]\n{pn} [view | info]",
    text: {
      missingConfig: "Please specify nickname configuration.",
      configSuccess: "Configuration saved successfully.",
      currentConfig: "Current auto nickname setting:\n%1",
      notSetConfig: "Auto nickname is not configured yet.",
      syntaxError: "Syntax error, use: {pn} on or {pn} off",
      turnOnSuccess: "Auto nickname is now active.",
      turnOffSuccess: "Auto nickname is now disabled.",
      error: "An error occurred. Disable invite link feature in group and try again."
    }
  },
  
  avatar: {
    description: "Generate anime avatar with signature",
    guide: "{p}{n} <character id/name> | <text> | <signature> | <color>\n{p}{n} help",
    text: {
      initImage: "Generating image, please wait...",
      invalidCharacter: "Only %1 characters supported. Use an ID less than this.",
      notFoundCharacter: "No character found with name: %1",
      errorGetCharacter: "Error retrieving character data:\n%1: %2",
      success: "✅ Avatar created!\nCharacter: %1\nID: %2\nText: %3\nSignature: %4\nColor: %5",
      defaultColor: "Default",
      error: "An error occurred:\n%1: %2"
    }
  },

  // Si tu veux que je continue avec les autres (badwords, balance, batslap, busy, etc.), dis-le moi !
};
