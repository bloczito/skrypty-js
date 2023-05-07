




const utils = {
    getMaxId: (arr) => arr.reduce((max, {id}) => Math.max(max, id), 0),
    isNotEmptyAndBlank: (str) => str && str.trim().length > 0,
    shuffleArray: (arr) => [...arr].sort(() => Math.random() - 0.5),
}

module.exports = utils;
