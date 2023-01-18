const transpose = function(matrix) {
  let newArr = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newArr[i] = [];
    for (let j = 0; j < matrix.length; j++) {
      newArr[i].push(matrix[j][i]);
    }
  }
  return newArr;
};




const wordSearch = (letters, word) => { 
    let horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    horizontalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    return false;

}

module.exports = wordSearch