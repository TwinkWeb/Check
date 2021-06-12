export function isEpochTimeExpired(exp) {
  if (!exp) {
    return true;
  }
  return exp < new Date().getTime() / 1000;
}

export function fileReader(files) {
  return new Promise((resolve, reject) => {
    if (!files || files.length <= 0) {
      return reject({
        message: "File read error: files are required!"
      });
    }
    const reader = new FileReader();

    reader.onload = e => {
      try {
        resolve(JSON.parse(e.target.result));
      } catch (e) {
        reject({
          message: "File read error: unable to parse json from mo file!"
        });
      }
    };
    reader.onerror = function(evt) {
      reject({ message: "File read error: ", evt });
    };

    reader.readAsText(files.item(0), "UTF-8");
  });
}

export function getFileName(files) {
  if (!files || files.length <= 0) {
    return null;
  }

  const file = files.item(0);
  return file.name;
}

export const objectToQueryParams = obj =>
  console.log(obj) ||
  Object.keys(obj)
    .filter(k => obj[k] != null)
    .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(obj[k])}`)
    .join("&");
