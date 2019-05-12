var linkLoginGet = "link-ul json-ului";
var linkLoginPost = "link-ul json-ului";
var linkSignupGet = "link-ul json-ului";
var linkSignupPost = "link-ul json-ului";
var linkCheckSessionGet = "link-ul json-ului";
var linkCheckSessionPost = "link-ul json-ului";

// Request-uri AJAX Serviciu Logare
var loginGetReq = new XMLHttpRequest();
loginGetReq.open("GET", linkLoginGet, true);
loginGetReq.send();
JSON.parse(loginGetReq.responseText);

var loginPostReq = new XMLHttpRequest();
loginPostReq.open("POST", linkLoginPost, true);
loginPostReq.send(null);
JSON.parse(loginPostReq.responseText);

var signupGetReq = new XMLHttpRequest();
signupGetReq.open("GET", linkSignupGet, true);
signupGetReq.send();
JSON.parse(signupGetReq.responseText);

var signupPostReq = new XMLHttpRequest();
signupPostReq.open("POST", linkSignupPost, true);
signupPostReq.send(null);
JSON.parse(signupPostReq.responseText);

var checkSessionGetReq = new XMLHttpRequest();
checkSessionGetReq.open("GET", linkCheckSessionGet, true);
checkGetReq.send();
JSON.parse(checkSessionGetReq.responseText);

var checkSessionPostReq = new XMLHttpRequest();
checkSessionPostReq.open("POST", linkCheckSessionPost, true);
checkSessionPostReq.send();
JSON.parse(checkSessionPostReq.responseText);


// Functii Login
// async function loginInfo() {
//     return[
//         JSON.parse(loginGetReq.responseText),
//         JSON.parse(loginPostReq.responseText),
//         JSON.parse(checkSessionGetReq.responseText),
//         JSON.parse(checkSessionPostReq.responseText)
//     ];
// }

// async function signupInfo() {
//     return[
//         JSON.parse(signupGetReq.responseText),
//         JSON.parse(signupPostReq.responseText),
//         JSON.parse(checkSessionGetReq.responseText),
//         JSON.parse(checkSessionPostReq.responseText)
//     ];
// }