var linkLoginGet = "link-ul json-ului";

var loginGetReq = new XMLHttpRequest();
loginGetReq.open("GET", linkLoginGet, true);
loginGetReq.send();

var loginObj = JSON.parse(loginGetReq.responseText);
var loginString = JSON.stringify(loginObj);

function deleteCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue + "; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

setCookie(cookieLogin, loginString);