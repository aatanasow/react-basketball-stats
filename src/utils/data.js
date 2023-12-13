function stringToArray(string) {
  return string.split(/(\r\n|\r|\n)/g);
}

function arrayToMatrix(array) {
  return array
    .filter((row) => row.trim().length !== 0)
    .map((row) => row.split(", ").map((cell) => cell.trim()));
}

function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function jsonToArray(jsonText) {
  const json = JSON.parse(jsonText);
  const matrix = [];
  for (let obj of json) {
    matrix.push(Object.values(obj));
  }
  return matrix;
}

export { stringToArray, arrayToMatrix, isJson, jsonToArray };
