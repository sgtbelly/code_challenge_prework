function checkExam(array1, array2) {
    let res = array2.map((a,i) => array1[i] === a ? 4 : a === "" ? 0 : -1).reduce((b,c) => b + c)
    return res < 0 ? 0 : res;
  }