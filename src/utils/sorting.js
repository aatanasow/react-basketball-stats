function sortData(data, sortIndex) {
  return data.sort((a, b) => {
    return b[sortIndex] - a[sortIndex];
  });
}

function addIndex(data) {
  return data.map((el, index) => [index + 1, ...el]);
}

function addPointsPerSec(data) {
  return data.map((row) => {
    row.push(Math.floor((row[3] / row[2]) * 100) / 100);
    return row;
  });
}

function getPointsPerElement(data, elIndex, pointIndex) {
  return data.reduce((acc, current) => {
    if (acc[current[elIndex]]) {
      acc[current[elIndex]] = acc[current[elIndex]] + +current[pointIndex];
    } else {
      acc[current[elIndex]] = +current[pointIndex];
    }
    return acc;
  }, {});
}

function combinePlayerGames(data) {
  const dataReduced = data.reduce((acc, current) => {
    if (acc[current[0]]) {
      acc[current[0]][1] = acc[current[0]][1] + +current[2];
      acc[current[0]][2] = acc[current[0]][2] + +current[3];
    } else {
      acc[current[0]] = [current[1], +current[2], +current[3]];
    }
    return acc;
  }, {});
  return Object.entries(dataReduced).map((arr) => [arr[0], ...arr[1]]);
}

function getTopPlayersByTeam(data) {
  const playersByTeam = data.reduce((acc, current) => {
    if (acc[current[1]]) {
      let elIndex = -1;
      for (let i = 0; i < acc[current[1]].length; i++) {
        if (acc[current[1]][i][0] === current[0]) {
          elIndex = i;
          break;
        }
      }
      if (elIndex > -1) {
        acc[current[1]][elIndex][1] = acc[current[1]][elIndex][1] + +current[3];
      } else {
        acc[current[1]] = [...acc[current[1]], [current[0], +current[3]]];
      }
    } else {
      acc[current[1]] = [[current[0], +current[3]]];
    }

    return acc;
  }, {});
  const teams = Object.entries(playersByTeam);

  const topPlayersByTeam = [];
  for (let team of teams) {
    const sorted = sortData(team[1], 1);
    topPlayersByTeam.push([team[0], sorted[0][0], sorted[0][1]]);
  }
  return topPlayersByTeam;
}

export {
  sortData,
  addIndex,
  addPointsPerSec,
  getPointsPerElement,
  combinePlayerGames,
  getTopPlayersByTeam,
};
