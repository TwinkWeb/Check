export function isEpochTimeExpired(exp) {
  if (!exp) {
    return true;
  }
  return exp < new Date().getTime() / 1000;
}
