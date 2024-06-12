console.log("voce gosta de instrumentos musicais?");
process.stdin.on("data", function (data) {
  let resposta = data.toString().trim().toLowerCase();
  if (resposta === "sim" || resposta === "s") {
    console.log("bacana");
    process.exit();
  } else if (resposta === "não" || resposta === "n" || resposta === "nao") {
    console.log("que pena");
    process.exit();
  } else {
    console.log("ok");
    process.exit();
  }
});
