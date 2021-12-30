function hydrate(strRecebida) {
  let result = strRecebida.match(/\d/g);
  let strSoma = 0;
  for (let i = 0; i < result.length; i += 1) {
    strSoma += parseInt(result[i]);
  }
  if (strSoma === 1) {
    return (strSoma + ' copo de água');
  }
  return (strSoma + ' copos de água');
}
module.exports = hydrate;
