import React, { useEffect, useState} from 'react';

// Serviciu Logare
var linkLoginGet = "link-ul json-ului";
var linkLoginPost = "link-ul json-ului";
var linkSignupGet = "link-ul json-ului";
var linkSignupPost = "link-ul json-ului";
var linkCheckSessionGet = "link-ul json-ului";
var linkCheckSessionPost = "link-ul json-ului";

// Serviciu Profil
var linkSuccessfulGet = "link-ul json-ului";
var linkSuccessfulPost = "link-ul json-ului";
var linkTryGet = "link-ul json-ului";
var linkTryPost = "link-ul json-ului";
var linkEditProfileTryGet = "link-ul json-ului";
var linkEditProfileTryPost = "link-ul json-ului";

// Serviciu Task
var linkAddDepGet = "link-ul json-ului";
var linkAddDepPost = "link-ul json-ului";
var linkAddParticipantsGet = "link-ul json-ului";
var linkAddParticipantsPost = "link-ul json-ului";
var linkAutoAssignGet = "link-ul json-ului";
var linkAutoAssignPost = "link-ul json-ului";
var linkCreatePlanSuccessGet = "link-ul json-ului";
var linkCreatePlanSuccessPost = "link-ul json-ului";
var linkCreatePlanTryGet = "link-ul json-ului";
var linkCreatePlanTryPost = "link-ul json-ului";
var linkDeleteGet = "link-ul json-ului";
var linkDeletePost = "link-ul json-ului";
var linkEditPlanSuccessGet = "link-ul json-ului";
var linkEditPlanSuccessPost = "link-ul json-ului";
var linkEditPlanTryGet = "link-ul json-ului";
var linkEditPlanTryPost = "link-ul json-ului";
var linkMonthlyTasksGet = "link-ul json-ului";
var linkMonthlyTasksPost = "link-ul json-ului";
var linkPlanSuccessAddSubtaskGet = "link-ul json-ului";
var linkPlanSuccessAddSubtaskPost = "link-ul json-ului";
var linkPlanSuccessAddTaskGet = "link-ul json-ului";
var linkPlanSuccessAddTaskPost = "link-ul json-ului";
var linkPlanSuccessEditSubtaskGet = "link-ul json-ului";
var linkPlanSuccessEditSubtaskPost = "link-ul json-ului";
var linkPlanSuccessEditTaskGet = "link-ul json-ului";
var linkPlanSuccessEditTaskPost = "link-ul json-ului";
var linkPlanTryAddSubtaskGet = "link-ul json-ului";
var linkPlanTryAddSubtaskPost = "link-ul json-ului";
var linkPlanTryAddTaskGet = "link-ul json-ului";
var linkPlanTryAddTaskPost = "link-ul json-ului";
var linkPlanTryEditSubtaskGet = "link-ul json-ului";
var linkPlanTryEditSubtaskPost = "link-ul json-ului";
var linkPlanTryEditTaskGet = "link-ul json-ului";
var linkPlanTryEditTaskPost = "link-ul json-ului";

var linkRearrangeTasksPost = "link-ul json-ului";

var linkTasksTodayGet = "link-ul json-ului";
var linkTasksTodayPost = "link-ul json-ului";
var linkViewPlanTryGet = "link-ul json-ului";
var linkViewPlanTryPost = "link-ul json-ului";
var linkViewSubtaskTryGet = "link-ul json-ului";
var linkViewSubtaskTryPost = "link-ul json-ului";
var linkViewTaskTryGet = "link-ul json-ului";
var linkViewTaskTryPost = "link-ul json-ului";
var linkWeeklyTasksGet = "link-ul json-ului";
var linkWeeklyTasksPost = "link-ul json-ului";
var linkYearlyTasksGet = "link-ul json-ului";
var linkYearlyTasksPost = "link-ul json-ului";

// Serviciu Angajati
var linkEmplSuccessGet = "link-ul json-ului";
var linkEmplSuccessPost = "link-ul json-ului";
var linkAddUnderlingTryGet = "link-ul json-ului";
var linkAddUnderlingTryPost = "link-ul json-ului";
var linkRemoveUnderlingTryGet = "link-ul json-ului";
var linkRemoveUnderlingTryPost = "link-ul json-ului";
var linkSearchPost = "link-ul json-ului";
var linkSearchGet = "link-ul json-ului";





// Request-uri AJAX Serviciu Logare
var loginGetReq = new XMLHttpRequest();
loginGetReq.open("GET", linkLoginGet, false);
loginGetReq.send(null);

var loginPostReq = new XMLHttpRequest();
loginPostReq.open("POST", linkLoginPost, false);
loginPostReq.send(null);

var signupGetReq = new XMLHttpRequest();
signupGetReq.open("GET", linkSignupGet, false);
signupGetReq.send(null);

var signupPostReq = new XMLHttpRequest();
signupPostReq.open("POST", linkSignupPost, false);
signupPostReq.send(null);

var checkSessionGetReq = new XMLHttpRequest();
checkSessionGetReq.open("GET", linkCheckSessionGet, false);
checkGetReq.send(null);

var checkSessionPostReq = new XMLHttpRequest();
checkSessionPostReq.open("POST", linkCheckSessionPost, false);
checkSessionPostReq.send(null);

// Functii Login
async function loginInfo() {
    return[
        JSON.parse(loginGetReq.responseText),
        JSON.parse(loginPostReq.responseText),
        JSON.parse(checkSessionGetReq.responseText),
        JSON.parse(checkSessionPostReq.responseText)
    ];
}

async function signupInfo() {
    return[
        JSON.parse(signupGetReq.responseText),
        JSON.parse(signupPostReq.responseText),
        JSON.parse(checkSessionGetReq.responseText),
        JSON.parse(checkSessionPostReq.responseText)
    ];
}






// Request-uri AJAX Serviciu Profil
var successfulGetReq = new XMLHttpRequest();
successfulGetReq.open("GET", linkSuccessfulGet, false);
successfulGetReq.send(null);

var successfulPostReq = new XMLHttpRequest();
successfulPostReq.open("POST", linkSuccessfulPost, false);
successfulPostReq.send(null);

var tryGetReq = new XMLHttpRequest();
tryGetReq.open("GET", linkTryGet, false);
tryGetReq.send(null);

var tryPostReq = new XMLHttpRequest();
tryPostReq.open("POST", linkTryPost, false);
tryPostReq.send(null);

var editProfiletryGetReq = new XMLHttpRequest();
editProfiletryGetReq.open("GET", linkEditProfileTryGet, false);
editProfiletryGetReq.send(null);

var editProfiletryPostReq = new XMLHttpRequest();
editProfiletryPostReq.open("POST", linkEditProfileTryPost, false);
editProfiletryPostReq.send(null);

// Functii Profil
async function profileInfo() {
    return[
        JSON.parse(successfulGetReq.responseText),
        JSON.parse(successfulPostReq.responseText),
        JSON.parse(tryGetReq.responseText),
        JSON.parse(tryPostReq.responseText),
    ];
}

async function profileEditInfo(){
    return[
        JSON.parse(editProfiletryGetReq.responseText),
        JSON.parse(editProfiletryPostReq.responseText),
    ];
}





// Request-uri AJAX Serviciu Angajati
var emplSuccessGetReq = new XMLHttpRequest();
emplSuccessGetReq.open("GET", linkEmplSuccessGet, false);
emplSuccessGetReq.send(null);

var emplSuccessPostReq = new XMLHttpRequest();
emplSuccessPostReq.open("POST", linkEmplSuccessPost, false);
emplSuccessPostReq.send(null);

var addUnderlingTryGetReq = new XMLHttpRequest();
addUnderlingTryGetReq.open("GET", linkAddUnderlingTryGet, false);
addUnderlingTryGetReq.send(null);

var addUnderlingTryPostReq = new XMLHttpRequest();
addUnderlingTryPostReq.open("POST", linkaddUnderlingTryPost, false);
addUnderlingTryPostReq.send(null);

var removeUnderlingTryGetReq = new XMLHttpRequest();
removeUnderlingTryGetReq.open("GET", linkRemoveUnderlingTryGet, false);
removeUnderlingTryGetReq.send(null);

var removeUnderlingTryPostReq = new XMLHttpRequest();
removeUnderlingTryPostReq.open("POST", linkRemoveUnderlingTryPost, false);
removeUnderlingTryPostReq.send(null);

var searchGetReq = new XMLHttpRequest();
searchGetReq.open("GET", linkSearchGet, false);
searchGetReq.send(null);

var searchPostReq = new XMLHttpRequest();
searchPostReq.open("POST", linkSearchPost, false);
searchPostReq.send(null);

//Functii Angajati
async function employeesInfo(){
    return[
        JSON.parse(emplSuccessGetReq.responseText),
        JSON.parse(emplSuccessPostReq.responseText)
    ];
}

async function underlingsInfo(){
    return[
        JSON.parse(addUnderlingTryGetReq.responseText),
        JSON.parse(addUnderlingTryPostReq.responseText),
        JSON.parse(removeUnderlingTryGetReq.responseText),
        JSON.parse(removeUnderlingTryPostReq.responseText)
    ];
}

async function searchInfo(){
    return[
        JSON.parse(searchGetReq.responseText),
        JSON.parse(searchPostReq.responseText)
    ];
}






// Request-uri AJAX Serviciu Task

var addDepGetReq = new XMLHttpRequest();
addDepGetReq.open("GET", linkAddDepGet, false);
addDepGetReq.send(null);

var addDepPostReq = new XMLHttpRequest();
addDepPostReq.open("POST", linkAddDepPost, false);
addDepPostReq.send(null);

var addParticipantsGetReq = new XMLHttpRequest();
addParticipantsGetReq.open("GET", linkAddParticipantsGet, false);
addParticipantsGetReq.send(null);

var addParticipantsPostReq = new XMLHttpRequest();
addParticipantsPostReq.open("POST", linkAddParticipantsPost, false);
addParticipantsPostReq.send(null);

var autoAssignGetReq = new XMLHttpRequest();
autoAssignautoAssignGetReq.open("GET", linkAutoAssignGet, false);
autoAssignGetReq.send(null);

var autoAssignPostReq = new XMLHttpRequest();
autoAssignPostReq.open("POST", linkAutoAssignPost, false);
autoAssignPostReq.send(null);

var createPlanSuccessGetReq = new XMLHttpRequest();
createPlanSuccessGetReq.open("GET", linkCreatePlanSuccessGet, false);
createPlanSuccessGetReq.send(null);

var createPlanSuccessPostReq = new XMLHttpRequest();
createPlanSuccessPostReq.open("POST", CreatePlanSuccesslinkPost, false);
createPlanSuccessPostReq.send(null);

var createPlanTryGetReq = new XMLHttpRequest();
createPlanTryGetReq.open("GET", linkCreatePlanTryGet, false);
createPlanTryGetReq.send(null);

var createPlanTryPostReq = new XMLHttpRequest();
createPlanTryPostReq.open("POST", linkCreatePlanTryPost, false);
createPlanTryPostReq.send(null);

var deleteGetReq = new XMLHttpRequest();
deleteGetReq.open("GET", linkDeleteGet, false);
deleteGetReq.send(null);

var deletePostReq = new XMLHttpRequest();
deletePostReq.open("POST", linkDeletePost, false);
deletePostReq.send(null);

var editPlanSuccessGetReq = new XMLHttpRequest();
editPlanSuccessGetReq.open("GET", linkEditPlanSuccessGet, false);
editPlanSuccessGetReq.send(null);

var editPlanSuccessPostReq = new XMLHttpRequest();
editPlanSuccessPostReq.open("POST", linkEditPlanSuccessPost, false);
editPlanSuccessPostReq.send(null);

var editPlanTryGetReq = new XMLHttpRequest();
editPlanTryGetReq.open("GET", linkEditPlanTryGet, false);
editPlanTryGetReq.send(null);

var editPlanTryPostReq = new XMLHttpRequest();
editPlanTryPostReq.open("POST", linkEditPlanTryPost, false);
editPlanTryPostReq.send(null);

var monthlyTasksGetReq = new XMLHttpRequest();
monthlyTasksGetReq.open("GET", linkMonthlyTasksGet, false);
monthlyTasksGetReq.send(null);

var monthlyTasksPostReq = new XMLHttpRequest();
monthlyTasksPostReq.open("POST", linkMonthlyTasksPost, false);
monthlyTasksPostReq.send(null);

var planSuccessAddSubtaskGetReq = new XMLHttpRequest();
planSuccessAddSubtaskGetReq.open("GET", linkPlanSuccessAddSubtaskGet, false);
planSuccessAddSubtaskGetReq.send(null);

var planSuccessAddSubtaskPostReq = new XMLHttpRequest();
planSuccessAddSubtaskPostReq.open("POST", linkPlanSuccessAddSubtaskPost, false);
planSuccessAddSubtaskPostReq.send(null);

var planSuccessAddTaskGetReq = new XMLHttpRequest();
planSuccessAddTaskGetReq.open("GET", linkPlanSuccessAddTaskGet, false);
planSuccessAddTaskGetReq.send(null);

var planSuccessAddTaskPostReq = new XMLHttpRequest();
planSuccessAddTaskPostReq.open("POST", linkPlanSuccessAddTaskPost, false);
planSuccessAddTaskPostReq.send(null);

var planSuccessEditSubtaskGetReq = new XMLHttpRequest();
planSuccessEditSubtaskGetReq.open("GET", linkPlanSuccessEditSubtaskGet, false);
planSuccessEditSubtaskGetReq.send(null);

var planSuccessEditSubtaskPostReq = new XMLHttpRequest();
planSuccessEditSubtaskPostReq.open("POST", linkPlanSuccessEditSubtaskPost, false);
planSuccessEditSubtaskPostReq.send(null);

var planSuccessEditTaskGetReq = new XMLHttpRequest();
planSuccessEditTaskGetReq.open("GET", linkPlanSuccessEditTaskGet, false);
planSuccessEditTaskGetReq.send(null);

var planSuccessEditTaskPostReq = new XMLHttpRequest();
planSuccessEditTaskPostReq.open("POST", linkPlanSuccessEditTaskPost, false);
planSuccessEditTaskPostReq.send(null);

var planTryAddSubtaskGetReq = new XMLHttpRequest();
planTryAddSubtaskGetReq.open("GET", linkPlanTryAddSubtaskGet, false);
planTryAddSubtaskGetReq.send(null);

var planTryAddSubtaskGetPostReq = new XMLHttpRequest();
planTryAddSubtaskPostReq.open("POST", linkPlanTryAddSubtaskPost, false);
planTryAddSubtaskPostReq.send(null);

var planTryAddTaskGetReq = new XMLHttpRequest();
planTryAddTaskGetReq.open("GET", linkPlanTryAddTaskGet, false);
planTryAddTaskGetReq.send(null);

var planTryAddTaskPostReq = new XMLHttpRequest();
planTryAddTaskPostReq.open("POST", linkPlanTryAddTaskPost, false);
planTryAddTaskPostReq.send(null);

var planTryEditSubtaskGetReq = new XMLHttpRequest();
planTryEditSubtaskGetReq.open("GET", linkPlanTryEditSubtaskGet, false);
planTryEditSubtaskGetReq.send(null);

var planTryEditSubtaskPostReq = new XMLHttpRequest();
planTryEditSubtaskPostReq.open("POST", linkPlanTryEditSubtaskPost, false);
planTryEditSubtaskPostReq.send(null);

var planTryEditTaskGetReq = new XMLHttpRequest();
planTryEditTaskGetReq.open("GET", linkPlanTryEditTaskGet, false);
planTryEditTaskGetReq.send(null);

var planTryEditTaskPostReq = new XMLHttpRequest();
planTryEditTaskPostReq.open("POST", linkPlanTryEditTaskPost, false);
planTryEditTaskPostReq.send(null);

var rearrangeTasksPostReq = new XMLHttpRequest();
rearrangeTasksPostReq.open("POST", linkRearrangeTasksPost, false);
rearrangeTasksPostReq.send(null);

var tasksTodayGetReq = new XMLHttpRequest();
tasksTodayGetReq.open("GET", linkTasksTodayGet, false);
tasksTodayGetReq.send(null);

var tasksTodayPostReq = new XMLHttpRequest();
tasksTodayPostReq.open("POST", linkTasksTodayPost, false);
tasksTodayPostReq.send(null);

var viewPlanTryGetReq = new XMLHttpRequest();
viewPlanTryGetReq.open("GET", linkViewPlanTryGet, false);
viewPlanTryGetReq.send(null);

var viewPlanTryPostReq = new XMLHttpRequest();
viewPlanTryPostReq.open("POST", linkViewPlanTryPost, false);
viewPlanTryPostReq.send(null);

var viewSubtaskTryGetReq = new XMLHttpRequest();
viewSubtaskTryGetReq.open("GET", linkViewSubtaskTryGet, false);
viewSubtaskTryGetReq.send(null);

var viewSubtaskTryPostReq = new XMLHttpRequest();
viewSubtaskTryPostReq.open("POST", linkViewSubtaskTryPost, false);
viewSubtaskTryPostReq.send(null);

var viewTaskTryGetReq = new XMLHttpRequest();
viewTaskTryGetReq.open("GET", linkViewTaskTryGet, false);
viewTaskTryGetReq.send(null);

var viewTaskTryPostReq = new XMLHttpRequest();
viewTaskTryPostReq.open("POST", linkViewTaskTryPost, false);
viewTaskTryPostReq.send(null);

var weeklyTasksGetReq = new XMLHttpRequest();
weeklyTasksGetReq.open("GET", linkWeeklyTasksGet, false);
weeklyTasksGetReq.send(null);

var weeklyTasksPostReq = new XMLHttpRequest();
weeklyTasksPostReq.open("POST", linkWeeklyTasksPost, false);
weeklyTasksPostReq.send(null);

var yearlyTasksGetReq = new XMLHttpRequest();
yearlyTasksGetReq.open("GET", linkYearlyTasksGet, false);
yearlyTasksGetReq.send(null);

var yearlyTasksPostReq = new XMLHttpRequest();
yearlyTasksPostReq.open("POST", linkYearlyTasksPost, false);
yearlyTasksPostReq.send(null);

// Functii Task
async function tasks() {
    return [
        JSON.parse(addDepGetReq.responseText),
        JSON.parse(addDepPostReq.responseText),
        JSON.parse(addParticipantsGetReq.responseText),
        JSON.parse(addParticipantsPostReq.responseText),
        JSON.parse(autoAssignGetReq.responseText),
        JSON.parse(autoAssignPostReq.responseText),
        JSON.parse(createPlanSuccessGetReq.responseText),
        JSON.parse(createPlanSuccessPostReq.responseText),
        JSON.parse(createPlanTryGetReq.responseText),
        JSON.parse(createPlanTryPostReq.responseText),
        JSON.parse(deleteGetReq.responseText),
        JSON.parse(deletePostReq.responseText),
        JSON.parse(editPlanSuccessGetReq.responseText),
        JSON.parse(editPlanSuccessPostReq.responseText),
        JSON.parse(editPlanTryGetReq.responseText),
        JSON.parse(editPlanTryPostReq.responseText),
        JSON.parse(monthlyTasksGetReq.responseText),
        JSON.parse(monthlyTasksPostReq.responseText),
        JSON.parse(planSuccessAddSubtaskGetReq.responseText),
        JSON.parse(planSuccessAddSubtaskPostReq.responseText),
        JSON.parse(planSuccessAddTaskGetReq.responseText),
        JSON.parse(planSuccessAddTaskPostReq.responseText),
        JSON.parse(planSuccessEditSubtaskGetReq.responseText),
        JSON.parse(planSuccessEditSubtaskPostReq.responseText),
        JSON.parse(planSuccessEditTaskGetReq.responseText),
        JSON.parse(planSuccessEditTaskPostReq.responseText),
        JSON.parse(planTryAddSubtaskGetReq.responseText),
        JSON.parse(planTryAddSubtaskGetPostReq.responseText),
        JSON.parse(planTryAddTaskGetReq.responseText),
        JSON.parse(planTryAddTaskPostReq.responseText),
        JSON.parse(planTryEditSubtaskGetReq.responseText),
        JSON.parse(planTryEditSubtaskPostReq.responseText),
        JSON.parse(planTryEditTaskGetReq.responseText),
        JSON.parse(planTryEditTaskPostReq.responseText),
        JSON.parse(rearrangeTasksPostReq.responseText),
        JSON.parse(tasksTodayGetReq.responseText),
        JSON.parse(tasksTodayPostReq.responseText),
        JSON.parse(viewPlanTryGetReq.responseText),
        JSON.parse(viewPlanTryPostReq.responseText),
        JSON.parse(viewSubtaskTryGetReq.responseText),
        JSON.parse(viewSubtaskTryPostReq.responseText),
        JSON.parse(viewTaskTryGetReq.responseText),
        JSON.parse(viewTaskTryPostReq.responseText),
        JSON.parse(weeklyTasksGetReq.responseText),
        JSON.parse(weeklyTasksPostReq.responseText),
        JSON.parse(yearlyTasksGetReq.responseText),
        JSON.parse(yearlyTasksPostReq.responseText)       
    ];
}



