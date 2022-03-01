module.exports = {
  getTag: (argsArray, argPrefix) => {
    const findTag = argsArray.filter((el) => el.includes(argPrefix));
    const oneTag = findTag.length ? findTag.reverse()[0] : null;
    return oneTag ? `(?=.*${oneTag})` : '(?=.*)';
  },
  getArg: (argsArray, targetArg) => {
    const arg = argsArray.filter((el) => el.includes(`${targetArg}=`));
    return arg.length > 0 ? arg[0].split(`${targetArg}=`).pop() : null;
  },
};
