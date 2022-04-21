let [a, b, c] = [1, 2, 3];
function myTemplate(template) {
    return template.replace(/\${(.*?)}/g, function (match, p) {
        return match.replace(p, eval(p));
    })
}

const rst = myTemplate('${a}--${b}--${c}');
console.log(rst);