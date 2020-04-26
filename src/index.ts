module.exports = {
    timer: ():Date => new Date(),
    utils:{
        getFileName : (path:string):string => {
            let array = path.split('/');
            let name = array[array.length -1];
            return name;
        }
    }
}