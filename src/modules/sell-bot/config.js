export const GAME_ENUM = {
  csgo: "csgo",
  dota2: "dota2",
  tf2: "tf2",
  rust: "rust"
};

export const gameMetadata = new Map();

gameMetadata.set(GAME_ENUM.csgo, {
  name: "Counter Strike: Global Offensive",
  shortName: "CSGO"
});
gameMetadata.set(GAME_ENUM.dota2, { name: "Dota 2", shortName: "DOTA2" });
gameMetadata.set(GAME_ENUM.tf2, { name: "Team Fortress 2", shortName: "TF2" });
gameMetadata.set(GAME_ENUM.rust, { name: "Rust", shortName: "RUST" });
