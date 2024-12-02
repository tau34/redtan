function refresh() {
    var r1 = document.getElementsByClassName("r1")[0].value;
    var r2 = document.getElementsByClassName("r2")[0].value;
    var flag = !document.getElementsByClassName("st")[0].checked;
    var i = Math.floor(Math.random() * Math.abs(r2 - r1) + Math.min(r1, r2));
    var ja = flag ? data[i][0][1] : data[i][0][0] + "【" + data[i][0][1] + "】" + data[i][0][2]
    var en = flag ? "" : data[i][1][0] + "【】" + data[i][1][2]
    var solution = data[i][1][1]
    document.getElementsByClassName("ja")[0].innerHTML = ja;
    document.getElementsByClassName("en")[0].innerHTML = en;
    document.getElementsByClassName("solution")[0].innerHTML = solution;
    document.getElementsByClassName("but1")[0].style.display = "block"
    document.getElementsByClassName("but2")[0].style.display = "none"
    document.getElementsByClassName("solution")[0].style.display = "none"
}

function check() {
    document.getElementsByClassName("but1")[0].style.display = "none"
    document.getElementsByClassName("but2")[0].style.display = "block"
    document.getElementsByClassName("solution")[0].style.display = "block"
}

window.onload = refresh