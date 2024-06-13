console.log("voce toca instrumentos musicais?");
process.stdin.on("data", function (data) {
  let resposta = data.toString().trim().toLowerCase();
  if (resposta === "sim" || resposta === "s") {
    console.log("bacana");
    console.log("qual?");
  } else if (resposta === "não" || resposta === "n" || resposta === "nao") {
    console.log("que pena");
  } else if (resposta === "guitarra") {
    console.log("interessante");
  } else if (resposta === "violão") {
    console.log("legal");
  } else {
    console.log("?");
  }
});
