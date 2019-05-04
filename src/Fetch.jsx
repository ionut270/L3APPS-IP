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
loginGetReq.open("GET", linkLoginGet, true);
loginGetReq.send();

var loginPostReq = new XMLHttpRequest();
loginPostReq.open("POST", linkLoginPost, true);
loginPostReq.send(null);

var signupGetReq = new XMLHttpRequest();
signupGetReq.open("GET", linkSignupGet, true);
signupGetReq.send();

var signupPostReq = new XMLHttpRequest();
signupPostReq.open("POST", linkSignupPost, true);
signupPostReq.send(null);

var checkSessionGetReq = new XMLHttpRequest();
checkSessionGetReq.open("GET", linkCheckSessionGet, true);
checkGetReq.send();

var checkSessionPostReq = new XMLHttpRequest();
checkSessionPostReq.open("POST", linkCheckSessionPost, true);
checkSessionPostReq.send();

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
successfulGetReq.open("GET", linkSuccessfulGet, true);
successfulGetReq.send();

var successfulPostReq = new XMLHttpRequest();
successfulPostReq.open("POST", linkSuccessfulPost, true);
successfulPostReq.send(null);

var tryGetReq = new XMLHttpRequest();
tryGetReq.open("GET", linkTryGet, true);
tryGetReq.send();

var tryPostReq = new XMLHttpRequest();
tryPostReq.open("POST", linkTryPost, true);
tryPostReq.send(null);

var editProfiletryGetReq = new XMLHttpRequest();
editProfiletryGetReq.open("GET", linkEditProfileTryGet, true);
editProfiletryGetReq.send();

var editProfiletryPostReq = new XMLHttpRequest();
editProfiletryPostReq.open("POST", linkEditProfileTryPost, true);
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
emplSuccessGetReq.open("GET", linkEmplSuccessGet, true);
emplSuccessGetReq.send();

var emplSuccessPostReq = new XMLHttpRequest();
emplSuccessPostReq.open("POST", linkEmplSuccessPost, true);
emplSuccessPostReq.send(null);

var addUnderlingTryGetReq = new XMLHttpRequest();
addUnderlingTryGetReq.open("GET", linkAddUnderlingTryGet, true);
addUnderlingTryGetReq.send();

var addUnderlingTryPostReq = new XMLHttpRequest();
addUnderlingTryPostReq.open("POST", linkaddUnderlingTryPost, true);
addUnderlingTryPostReq.send(null);

var removeUnderlingTryGetReq = new XMLHttpRequest();
removeUnderlingTryGetReq.open("GET", linkRemoveUnderlingTryGet, true);
removeUnderlingTryGetReq.send();

var removeUnderlingTryPostReq = new XMLHttpRequest();
removeUnderlingTryPostReq.open("POST", linkRemoveUnderlingTryPost, true);
removeUnderlingTryPostReq.send(null);

var searchGetReq = new XMLHttpRequest();
searchGetReq.open("GET", linkSearchGet, true);
searchGetReq.send();

var searchPostReq = new XMLHttpRequest();
searchPostReq.open("POST", linkSearchPost, true);
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
addDepGetReq.open("GET", linkAddDepGet, true);
addDepGetReq.send();

var addDepPostReq = new XMLHttpRequest();
addDepPostReq.open("POST", linkAddDepPost, true);
addDepPostReq.send(null);

var addParticipantsGetReq = new XMLHttpRequest();
addParticipantsGetReq.open("GET", linkAddParticipantsGet, true);
addParticipantsGetReq.send();

var addParticipantsPostReq = new XMLHttpRequest();
addParticipantsPostReq.open("POST", linkAddParticipantsPost, true);
addParticipantsPostReq.send(null);

var autoAssignGetReq = new XMLHttpRequest();
autoAssignautoAssignGetReq.open("GET", linkAutoAssignGet, true);
autoAssignGetReq.send();

var autoAssignPostReq = new XMLHttpRequest();
autoAssignPostReq.open("POST", linkAutoAssignPost, true);
autoAssignPostReq.send(null);

var createPlanSuccessGetReq = new XMLHttpRequest();
createPlanSuccessGetReq.open("GET", linkCreatePlanSuccessGet, true);
createPlanSuccessGetReq.send();

var createPlanSuccessPostReq = new XMLHttpRequest();
createPlanSuccessPostReq.open("POST", linkCreatePlanSuccesslinkPost, true);
createPlanSuccessPostReq.send(null);

var createPlanTryGetReq = new XMLHttpRequest();
createPlanTryGetReq.open("GET", linkCreatePlanTryGet, true);
createPlanTryGetReq.send();

var createPlanTryPostReq = new XMLHttpRequest();
createPlanTryPostReq.open("POST", linkCreatePlanTryPost, true);
createPlanTryPostReq.send(null);

var deleteGetReq = new XMLHttpRequest();
deleteGetReq.open("GET", linkDeleteGet, true);
deleteGetReq.send();

var deletePostReq = new XMLHttpRequest();
deletePostReq.open("POST", linkDeletePost, true);
deletePostReq.send(null);

var editPlanSuccessGetReq = new XMLHttpRequest();
editPlanSuccessGetReq.open("GET", linkEditPlanSuccessGet, true);
editPlanSuccessGetReq.send();

var editPlanSuccessPostReq = new XMLHttpRequest();
editPlanSuccessPostReq.open("POST", linkEditPlanSuccessPost, true);
editPlanSuccessPostReq.send(null);

var editPlanTryGetReq = new XMLHttpRequest();
editPlanTryGetReq.open("GET", linkEditPlanTryGet, true);
editPlanTryGetReq.send();

var editPlanTryPostReq = new XMLHttpRequest();
editPlanTryPostReq.open("POST", linkEditPlanTryPost, true);
editPlanTryPostReq.send(null);

var monthlyTasksGetReq = new XMLHttpRequest();
monthlyTasksGetReq.open("GET", linkMonthlyTasksGet, true);
monthlyTasksGetReq.send();

var monthlyTasksPostReq = new XMLHttpRequest();
monthlyTasksPostReq.open("POST", linkMonthlyTasksPost, true);
monthlyTasksPostReq.send(null);

var planSuccessAddSubtaskGetReq = new XMLHttpRequest();
planSuccessAddSubtaskGetReq.open("GET", linkPlanSuccessAddSubtaskGet, true);
planSuccessAddSubtaskGetReq.send();

var planSuccessAddSubtaskPostReq = new XMLHttpRequest();
planSuccessAddSubtaskPostReq.open("POST", linkPlanSuccessAddSubtaskPost, true);
planSuccessAddSubtaskPostReq.send(null);

var planSuccessAddTaskGetReq = new XMLHttpRequest();
planSuccessAddTaskGetReq.open("GET", linkPlanSuccessAddTaskGet, true);
planSuccessAddTaskGetReq.send();

var planSuccessAddTaskPostReq = new XMLHttpRequest();
planSuccessAddTaskPostReq.open("POST", linkPlanSuccessAddTaskPost, true);
planSuccessAddTaskPostReq.send(null);

var planSuccessEditSubtaskGetReq = new XMLHttpRequest();
planSuccessEditSubtaskGetReq.open("GET", linkPlanSuccessEditSubtaskGet, true);
planSuccessEditSubtaskGetReq.send();

var planSuccessEditSubtaskPostReq = new XMLHttpRequest();
planSuccessEditSubtaskPostReq.open("POST", linkPlanSuccessEditSubtaskPost, true);
planSuccessEditSubtaskPostReq.send(null);

var planSuccessEditTaskGetReq = new XMLHttpRequest();
planSuccessEditTaskGetReq.open("GET", linkPlanSuccessEditTaskGet, true);
planSuccessEditTaskGetReq.send();

var planSuccessEditTaskPostReq = new XMLHttpRequest();
planSuccessEditTaskPostReq.open("POST", linkPlanSuccessEditTaskPost, true);
planSuccessEditTaskPostReq.send(null);

var planTryAddSubtaskGetReq = new XMLHttpRequest();
planTryAddSubtaskGetReq.open("GET", linkPlanTryAddSubtaskGet, true);
planTryAddSubtaskGetReq.send();

var planTryAddSubtaskGetPostReq = new XMLHttpRequest();
planTryAddSubtaskPostReq.open("POST", linkPlanTryAddSubtaskPost, true);
planTryAddSubtaskPostReq.send(null);

var planTryAddTaskGetReq = new XMLHttpRequest();
planTryAddTaskGetReq.open("GET", linkPlanTryAddTaskGet, true);
planTryAddTaskGetReq.send();

var planTryAddTaskPostReq = new XMLHttpRequest();
planTryAddTaskPostReq.open("POST", linkPlanTryAddTaskPost, true);
planTryAddTaskPostReq.send(null);

var planTryEditSubtaskGetReq = new XMLHttpRequest();
planTryEditSubtaskGetReq.open("GET", linkPlanTryEditSubtaskGet, true);
planTryEditSubtaskGetReq.send();

var planTryEditSubtaskPostReq = new XMLHttpRequest();
planTryEditSubtaskPostReq.open("POST", linkPlanTryEditSubtaskPost, true);
planTryEditSubtaskPostReq.send(null);

var planTryEditTaskGetReq = new XMLHttpRequest();
planTryEditTaskGetReq.open("GET", linkPlanTryEditTaskGet, true);
planTryEditTaskGetReq.send();

var planTryEditTaskPostReq = new XMLHttpRequest();
planTryEditTaskPostReq.open("POST", linkPlanTryEditTaskPost, true);
planTryEditTaskPostReq.send(null);

var rearrangeTasksPostReq = new XMLHttpRequest();
rearrangeTasksPostReq.open("POST", linkRearrangeTasksPost, true);
rearrangeTasksPostReq.send(null);

var tasksTodayGetReq = new XMLHttpRequest();
tasksTodayGetReq.open("GET", linkTasksTodayGet, true);
tasksTodayGetReq.send();

var tasksTodayPostReq = new XMLHttpRequest();
tasksTodayPostReq.open("POST", linkTasksTodayPost, true);
tasksTodayPostReq.send(null);

var viewPlanTryGetReq = new XMLHttpRequest();
viewPlanTryGetReq.open("GET", linkViewPlanTryGet, true);
viewPlanTryGetReq.send();

var viewPlanTryPostReq = new XMLHttpRequest();
viewPlanTryPostReq.open("POST", linkViewPlanTryPost, true);
viewPlanTryPostReq.send(null);

var viewSubtaskTryGetReq = new XMLHttpRequest();
viewSubtaskTryGetReq.open("GET", linkViewSubtaskTryGet, true);
viewSubtaskTryGetReq.send();

var viewSubtaskTryPostReq = new XMLHttpRequest();
viewSubtaskTryPostReq.open("POST", linkViewSubtaskTryPost, true);
viewSubtaskTryPostReq.send(null);

var viewTaskTryGetReq = new XMLHttpRequest();
viewTaskTryGetReq.open("GET", linkViewTaskTryGet, true);
viewTaskTryGetReq.send();

var viewTaskTryPostReq = new XMLHttpRequest();
viewTaskTryPostReq.open("POST", linkViewTaskTryPost, true);
viewTaskTryPostReq.send(null);

var weeklyTasksGetReq = new XMLHttpRequest();
weeklyTasksGetReq.open("GET", linkWeeklyTasksGet, true);
weeklyTasksGetReq.send();

var weeklyTasksPostReq = new XMLHttpRequest();
weeklyTasksPostReq.open("POST", linkWeeklyTasksPost, true);
weeklyTasksPostReq.send(null);

var yearlyTasksGetReq = new XMLHttpRequest();
yearlyTasksGetReq.open("GET", linkYearlyTasksGet, true);
yearlyTasksGetReq.send();

var yearlyTasksPostReq = new XMLHttpRequest();
yearlyTasksPostReq.open("POST", linkYearlyTasksPost, true);
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



