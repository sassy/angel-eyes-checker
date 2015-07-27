var page = require('webpage').create();

var fs = require('fs');
var userinfo = JSON.parse(fs.read('./userinfo.json'));

var funcs = [
    function() {
        page.open('https://fc.momoclo.net/pc/login.php');
    },
    function() {
        page.evaluate(function(userinfo) {
            document.getElementById("inputId").value = userinfo.id;
            document.getElementById("inputPw").value = userinfo.password;
            document.getElementById('loginForm').submit();
        }, userinfo);
    },
    function() {
        page.open('https://fc.momoclo.net/comic4/medium.php');

    },
    function() {
        page.render("commic.png");
        phantom.exit(0); // TODO: fix crash.
    }
];
var i = 0;
page.onLoadFinished = function() {
      console.log("loadFinished:" + i);
      funcs[++i]();
};
funcs[i]();
