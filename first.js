function insert(num) {
    document.getElementById('result').value = document.getElementById('result').value+num;
}
function clean() {
    document.getElementById('result').value = "";
}
function equal() {
    var exp = document.getElementById('result').value;
    if(exp) {
        document.getElementById('result').value = eval(exp);
    }
}