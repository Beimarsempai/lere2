const tttme = (pushname, userWins, userDefeats, userTies, userPoints) => {
  return `
「 🌀💮 Tic Tac Toe 💮🌀 」
by: Lore
❖ NOMBRE: ${pushname} 

    ➣ Victorias: ${userWins} 🎊
    ➣ Derrotas: ${userDefeats} 💥
    ➣ Empates : ${userTies} 🌀
    ➣ Puntos  : ${userPoints} ✨
    `
}

exports.tttme = tttme