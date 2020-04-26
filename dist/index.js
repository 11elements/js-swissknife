module.exports = {
    timer: () => new Date(),
    utils: {
        getFileName: (path) => {
            let array = path.split('/');
            let name = array[array.length - 1];
            return name;
        }
    }
};
//# sourceMappingURL=index.js.map