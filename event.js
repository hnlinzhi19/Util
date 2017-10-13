const events = (function (){
    let fnObj = {};
    return {
        on(eventName, callback){
            if (!fnObj[eventName]) {
                fnObj[eventName] = [];
            }
            fnObj[eventName].push(callback);
        },
        emit(eventName){
            let i = 0;
            const tmp = [].slice.call(arguments,1);
            if (fnObj[eventName]) {
                for(;i< fnObj[eventName].length; i += 1) {
                    fnObj[eventName][i].apply(null, tmp);
                }
            }
        }
    }
})();