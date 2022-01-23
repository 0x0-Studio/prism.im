const data = require('../assets/data.json');

export default function parseJsonToData() {
  let npc = new Array(34);
  let player = new Array(34);

  for (let i = 0; i < 35; i++) {
    npc[i] = new Array(5).fill(0);
    player[i] = new Array(5).fill(0);
  }

  for (let i in data) {
    const splited = data[i].id.split('.');

    if (splited[0] === '1') {
      npc[parseInt(splited[1]) - 1][parseInt(splited[2]) - 1] = data[i];
    } else {
      player[parseInt(splited[1]) - 1][parseInt(splited[2]) - 1] = data[i];
    }
  }
  console.log(player)
  return { npc, player };
}