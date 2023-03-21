const listItems = document.querySelectorAll('.bim-automation-services__item');
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
