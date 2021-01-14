const lookPath = "sell-bot.filter.categories.look.",
  rarityPath = "sell-bot.filter.categories.rarity.",
  typePath = "sell-bot.filter.categories.type.",
  categoryPath = "sell-bot.filter.categories.category.";

export const filterCategories = [
  {
    category: [
      {
        i18nKey: lookPath + "battle-scarred",
        id: "Battle-Scarred",
        checked: false
      },
      { i18nKey: lookPath + "well-worn", id: "Well-Worn", checked: false },
      {
        i18nKey: lookPath + "field-tested",
        id: "Field-Tested",
        checked: false
      },
      {
        i18nKey: lookPath + "minimal wear",
        id: "Minimal Wear",
        checked: false
      },
      { i18nKey: lookPath + "factory new", id: "Factory New", checked: false },
      { i18nKey: lookPath + "not painted", id: "Not Painted", checked: false }
    ],
    i18nKey: lookPath + "title"
  },
  {
    category: [
      {
        i18nKey: rarityPath + "consumer grade",
        id: "Consumer Grade",
        checked: false
      },
      {
        i18nKey: rarityPath + "mil-spec grade",
        id: "Mil-Spec Grade",
        checked: false
      },
      {
        i18nKey: rarityPath + "industrial grade",
        id: "Industrial Grade",
        checked: false
      },
      { i18nKey: rarityPath + "restricted", id: "Restricted", checked: false },
      { i18nKey: rarityPath + "classified", id: "Classified", checked: false },
      { i18nKey: rarityPath + "covert", id: "Covert", checked: false },
      {
        i18nKey: rarityPath + "distinguished",
        id: "Distinguished",
        checked: false
      },
      {
        i18nKey: rarityPath + "exceptional",
        id: "Exceptional",
        checked: false
      },
      { i18nKey: rarityPath + "superior", id: "Superior", checked: false },
      { i18nKey: rarityPath + "base grade", id: "Base Grade", checked: false },
      { i18nKey: rarityPath + "master", id: "Master", checked: false },
      {
        i18nKey: rarityPath + "extraordinary",
        id: "Extraordinary",
        checked: false
      },
      { i18nKey: rarityPath + "high grade", id: "High Grade", checked: false },
      { i18nKey: rarityPath + "remarkable", id: "Remarkable", checked: false },
      { i18nKey: rarityPath + "exotic", id: "Exotic", checked: false },
      { i18nKey: rarityPath + "contraband", id: "Contraband", checked: false }
    ],
    i18nKey: rarityPath + "title"
  },
  {
    category: [
      { i18nKey: typePath + "pistol", id: "Pistol", checked: false },
      { i18nKey: typePath + "smg", id: "SMG", checked: false },
      { i18nKey: typePath + "shotgun", id: "Shotgun", checked: false },
      { i18nKey: typePath + "machine gun", id: "Machine gun", checked: false },
      { i18nKey: typePath + "rifle", id: "Rifle", checked: false },
      {
        i18nKey: typePath + "sniper rifle",
        id: "Sniper Rifle",
        checked: false
      },
      { i18nKey: typePath + "knife", id: "Knife", checked: false },
      { i18nKey: typePath + "gloves", id: "Gloves", checked: false },
      { i18nKey: typePath + "sticker", id: "Sticker", checked: false },
      { i18nKey: typePath + "key", id: "Key", checked: false },
      { i18nKey: typePath + "graffiti", id: "Graffiti", checked: false },
      { i18nKey: typePath + "container", id: "Container", checked: false },
      { i18nKey: typePath + "collectible", id: "Collectible", checked: false },
      { i18nKey: typePath + "music kit", id: "Music Kit", checked: false },
      { i18nKey: typePath + "patch", id: "Patch", checked: false },
      { i18nKey: typePath + "tag", id: "Tag", checked: false },
      { i18nKey: typePath + "pass", id: "Pass", checked: false },
      { i18nKey: typePath + "agent", id: "Agent", checked: false },
      { i18nKey: typePath + "gift", id: "Gift", checked: false }
    ],
    i18nKey: typePath + "title"
  },
  {
    category: [
      { i18nKey: categoryPath + "normal", id: "regular", checked: false },
      { i18nKey: categoryPath + "stattrak", id: "stattrak™", checked: false },
      { i18nKey: categoryPath + "souvenir", id: "souvenir", checked: false },
      { i18nKey: categoryPath + "asterisk", id: "★", checked: false },
      { i18nKey: categoryPath + "★ stattrak", id: "★ StatTrak", checked: false }
    ],
    i18nKey: categoryPath + "title"
  }
];
