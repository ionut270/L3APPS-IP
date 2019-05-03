var linkLoginGet = "link-ul json-ului";

var loginGetReq = new XMLHttpRequest();
loginGetReq.open("GET", linkLoginGet, true);
loginGetReq.send();

var loginObj = JSON.parse(loginGetReq.responseText);
var loginString = JSON.stringify(loginObj);

function setCookie(cookieName, cookieValue, expireDays) {
    var date = new Date();
    date.setTime(d.getTime() + (expireDays*24*60*60*1000));
    var expires = "expired=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

setCookie(cookieLogin, loginString, 7);