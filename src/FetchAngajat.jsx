// Serviciu Angajati
var linkEmplSuccessGet = "link-ul json-ului";
var linkEmplSuccessPost = "link-ul json-ului";
var linkAddUnderlingTryGet = "link-ul json-ului";
var linkAddUnderlingTryPost = "link-ul json-ului";
var linkRemoveUnderlingTryGet = "link-ul json-ului";
var linkRemoveUnderlingTryPost = "link-ul json-ului";
var linkSearchPost = "link-ul json-ului";
var linkSearchGet = "link-ul json-ului";

// Request-uri AJAX Serviciu Angajati
var emplSuccessGetReq = new XMLHttpRequest();
emplSuccessGetReq.open("GET", linkEmplSuccessGet, true);
emplSuccessGetReq.send();
JSON.parse(emplSuccessGetReq.responseText);

var emplSuccessPostReq = new XMLHttpRequest();
emplSuccessPostReq.open("POST", linkEmplSuccessPost, true);
emplSuccessPostReq.send(null);
JSON.parse(emplSuccessPostReq.responseText)

var addUnderlingTryGetReq = new XMLHttpRequest();
addUnderlingTryGetReq.open("GET", linkAddUnderlingTryGet, true);
addUnderlingTryGetReq.send();
JSON.parse(addUnderlingTryGetReq.responseText);

var addUnderlingTryPostReq = new XMLHttpRequest();
addUnderlingTryPostReq.open("POST", linkaddUnderlingTryPost, true);
addUnderlingTryPostReq.send(null);
JSON.parse(addUnderlingTryPostReq.responseText);

var removeUnderlingTryGetReq = new XMLHttpRequest();
removeUnderlingTryGetReq.open("GET", linkRemoveUnderlingTryGet, true);
removeUnderlingTryGetReq.send();
JSON.parse(removeUnderlingTryGetReq.responseText);

var removeUnderlingTryPostReq = new XMLHttpRequest();
removeUnderlingTryPostReq.open("POST", linkRemoveUnderlingTryPost, true);
removeUnderlingTryPostReq.send(null);
JSON.parse(removeUnderlingTryPostReq.responseText)

var searchGetReq = new XMLHttpRequest();
searchGetReq.open("GET", linkSearchGet, true);
searchGetReq.send();
JSON.parse(searchGetReq.responseText);

var searchPostReq = new XMLHttpRequest();
searchPostReq.open("POST", linkSearchPost, true);
searchPostReq.send(null);
JSON.parse(searchPostReq.responseText)

// //Functii Angajati
// async function employeesInfo(){
//     return[
//         JSON.parse(emplSuccessGetReq.responseText),
//         JSON.parse(emplSuccessPostReq.responseText)
//     ];
// }

// async function underlingsInfo(){
//     return[
//         JSON.parse(addUnderlingTryGetReq.responseText),
//         JSON.parse(addUnderlingTryPostReq.responseText),
//         JSON.parse(removeUnderlingTryGetReq.responseText),
//         JSON.parse(removeUnderlingTryPostReq.responseText)
//     ];
// }

// async function searchInfo(){
//     return[
//         JSON.parse(searchGetReq.responseText),
//         JSON.parse(searchPostReq.responseText)
//     ];
// }
    