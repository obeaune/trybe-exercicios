function techList(arrTech, name) {
  arrTech.sort();
  let obj = [];
  if (arrTech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < arrTech.length; i += 1) {
    obj.push({ tech: arrTech[i], name });
  }
  return obj;
}
module.exports = techList;
