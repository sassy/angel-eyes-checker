var page = require('webpage').create();

var funcs = [
    function() {
        page.open('https://fc.momoclo.net/pc/login.php');
    },
    function() {
        page.evaluate(function() {
            document.getElementById("inputId").value = 'xxx';
            document.getElementById("inputPw").value = 'xxx';
            document.getElementById('loginForm').submit();
        });
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
