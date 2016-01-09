/**
 * Created by haizhi on 16/1/8.
 */

addEventListener('load', function () {
    document.getElementById("submit").addEventListener('click', function () {
        var raw_text = document.getElementById("json-text").value;
        var new_window = window.open("template.html");
        var pre = new_window.document.createElement("pre");
        pre.innerText = raw_text;

        new_window.document.body.appendChild(pre);
    });
});