function throttle(func, timeout = 500, context = null) {
    let flag = false;
    return function() {
        if (flag) return;
        flag = true;
        func.apply(context, arguments);
        setTimeout(() => {
            flag = false;
        }, timeout);
    }
}

let a = throttle(() => {console.log(1)});
a();
a();
setTimeout(() => {
    a();
}, 500)