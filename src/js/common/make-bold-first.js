// імпортувати функцію, підставити в якості агрумента ім'я класу для параграфів, де треба
// зробити болдом 1 речення

export const makeBoldFirst = className => {
  const listItems = document.querySelectorAll(className);
  if (listItems.length === 0) return;
  listItems.forEach(listItem => {
    const indexOfDot = listItem.innerHTML.indexOf('.');
    if (indexOfDot === -1) return;
    const firstSentence = listItem.innerHTML.slice(0, indexOfDot + 1);
    const otherSentences = listItem.innerHTML.slice(indexOfDot + 1);
    listItem.innerHTML =
      '<span style="font-weight: 700">' +
      firstSentence +
      '</span>' +
      otherSentences;
  });
};
