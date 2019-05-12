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

// Request-uri AJAX Serviciu Task

var addDepGetReq = new XMLHttpRequest();
addDepGetReq.open("GET", linkAddDepGet, true);
addDepGetReq.send();
JSON.parse(addDepGetReq.responseText);

var addDepPostReq = new XMLHttpRequest();
addDepPostReq.open("POST", linkAddDepPost, true);
addDepPostReq.send(null);
JSON.parse(addDepPostReq.responseText);

var addParticipantsGetReq = new XMLHttpRequest();
addParticipantsGetReq.open("GET", linkAddParticipantsGet, true);
addParticipantsGetReq.send();
JSON.parse(addParticipantsGetReq.responseText);

var addParticipantsPostReq = new XMLHttpRequest();
addParticipantsPostReq.open("POST", linkAddParticipantsPost, true);
addParticipantsPostReq.send(null);
JSON.parse(addParticipantsPostReq.responseText);

var autoAssignGetReq = new XMLHttpRequest();
autoAssignautoAssignGetReq.open("GET", linkAutoAssignGet, true);
autoAssignGetReq.send();
JSON.parse(autoAssignGetReq.responseText);

var autoAssignPostReq = new XMLHttpRequest();
autoAssignPostReq.open("POST", linkAutoAssignPost, true);
autoAssignPostReq.send(null);
JSON.parse(autoAssignPostReq.responseText);

var createPlanSuccessGetReq = new XMLHttpRequest();
createPlanSuccessGetReq.open("GET", linkCreatePlanSuccessGet, true);
createPlanSuccessGetReq.send();
JSON.parse(createPlanSuccessGetReq.responseText);

var createPlanSuccessPostReq = new XMLHttpRequest();
createPlanSuccessPostReq.open("POST", linkCreatePlanSuccesslinkPost, true);
createPlanSuccessPostReq.send(null);
JSON.parse(createPlanSuccessPostReq.responseText);

var createPlanTryGetReq = new XMLHttpRequest();
createPlanTryGetReq.open("GET", linkCreatePlanTryGet, true);
createPlanTryGetReq.send();
JSON.parse(createPlanTryGetReq.responseText);

var createPlanTryPostReq = new XMLHttpRequest();
createPlanTryPostReq.open("POST", linkCreatePlanTryPost, true);
createPlanTryPostReq.send(null);
JSON.parse(createPlanTryPostReq.responseText);

var deleteGetReq = new XMLHttpRequest();
deleteGetReq.open("GET", linkDeleteGet, true);
deleteGetReq.send();
JSON.parse(deleteGetReq.responseText);

var deletePostReq = new XMLHttpRequest();
deletePostReq.open("POST", linkDeletePost, true);
deletePostReq.send(null);
JSON.parse(deletePostReq.responseText);

var editPlanSuccessGetReq = new XMLHttpRequest();
editPlanSuccessGetReq.open("GET", linkEditPlanSuccessGet, true);
editPlanSuccessGetReq.send();
JSON.parse(editPlanSuccessGetReq.responseText);

var editPlanSuccessPostReq = new XMLHttpRequest();
editPlanSuccessPostReq.open("POST", linkEditPlanSuccessPost, true);
editPlanSuccessPostReq.send(null);
JSON.parse(editPlanSuccessPostReq.responseText);

var editPlanTryGetReq = new XMLHttpRequest();
editPlanTryGetReq.open("GET", linkEditPlanTryGet, true);
editPlanTryGetReq.send();
JSON.parse(editPlanTryGetReq.responseText);

var editPlanTryPostReq = new XMLHttpRequest();
editPlanTryPostReq.open("POST", linkEditPlanTryPost, true);
editPlanTryPostReq.send(null);
JSON.parse(editPlanTryPostReq.responseText);

var monthlyTasksGetReq = new XMLHttpRequest();
monthlyTasksGetReq.open("GET", linkMonthlyTasksGet, true);
monthlyTasksGetReq.send();
JSON.parse(monthlyTasksGetReq.responseText);

var monthlyTasksPostReq = new XMLHttpRequest();
monthlyTasksPostReq.open("POST", linkMonthlyTasksPost, true);
monthlyTasksPostReq.send(null);
JSON.parse(monthlyTasksPostReq.responseText);

var planSuccessAddSubtaskGetReq = new XMLHttpRequest();
planSuccessAddSubtaskGetReq.open("GET", linkPlanSuccessAddSubtaskGet, true);
planSuccessAddSubtaskGetReq.send();
JSON.parse(planSuccessAddSubtaskGetReq.responseText);

var planSuccessAddSubtaskPostReq = new XMLHttpRequest();
planSuccessAddSubtaskPostReq.open("POST", linkPlanSuccessAddSubtaskPost, true);
planSuccessAddSubtaskPostReq.send(null);
JSON.parse(planSuccessAddSubtaskPostReq.responseText);

var planSuccessAddTaskGetReq = new XMLHttpRequest();
planSuccessAddTaskGetReq.open("GET", linkPlanSuccessAddTaskGet, true);
planSuccessAddTaskGetReq.send();
JSON.parse(planSuccessAddTaskGetReq.responseText);

var planSuccessAddTaskPostReq = new XMLHttpRequest();
planSuccessAddTaskPostReq.open("POST", linkPlanSuccessAddTaskPost, true);
planSuccessAddTaskPostReq.send(null);
JSON.parse(planSuccessAddTaskPostReq.responseText);

var planSuccessEditSubtaskGetReq = new XMLHttpRequest();
planSuccessEditSubtaskGetReq.open("GET", linkPlanSuccessEditSubtaskGet, true);
planSuccessEditSubtaskGetReq.send();
JSON.parse(planSuccessEditSubtaskGetReq.responseText);

var planSuccessEditSubtaskPostReq = new XMLHttpRequest();
planSuccessEditSubtaskPostReq.open("POST", linkPlanSuccessEditSubtaskPost, true);
planSuccessEditSubtaskPostReq.send(null);
JSON.parse(planSuccessEditSubtaskPostReq.responseText);

var planSuccessEditTaskGetReq = new XMLHttpRequest();
planSuccessEditTaskGetReq.open("GET", linkPlanSuccessEditTaskGet, true);
planSuccessEditTaskGetReq.send();
JSON.parse(planSuccessEditTaskGetReq.responseText);

var planSuccessEditTaskPostReq = new XMLHttpRequest();
planSuccessEditTaskPostReq.open("POST", linkPlanSuccessEditTaskPost, true);
planSuccessEditTaskPostReq.send(null);
JSON.parse(planSuccessEditTaskPostReq.responseText);

var planTryAddSubtaskGetReq = new XMLHttpRequest();
planTryAddSubtaskGetReq.open("GET", linkPlanTryAddSubtaskGet, true);
planTryAddSubtaskGetReq.send();
JSON.parse(planTryAddSubtaskGetReq.responseText);

var planTryAddSubtaskGetPostReq = new XMLHttpRequest();
planTryAddSubtaskPostReq.open("POST", linkPlanTryAddSubtaskPost, true);
planTryAddSubtaskPostReq.send(null);
JSON.parse(planTryAddSubtaskGetPostReq.responseText);

var planTryAddTaskGetReq = new XMLHttpRequest();
planTryAddTaskGetReq.open("GET", linkPlanTryAddTaskGet, true);
planTryAddTaskGetReq.send();
JSON.parse(planTryAddTaskGetReq.responseText);

var planTryAddTaskPostReq = new XMLHttpRequest();
planTryAddTaskPostReq.open("POST", linkPlanTryAddTaskPost, true);
planTryAddTaskPostReq.send(null);
JSON.parse(planTryAddTaskPostReq.responseText);

var planTryEditSubtaskGetReq = new XMLHttpRequest();
planTryEditSubtaskGetReq.open("GET", linkPlanTryEditSubtaskGet, true);
planTryEditSubtaskGetReq.send();
JSON.parse(planTryEditSubtaskGetReq.responseText);

var planTryEditSubtaskPostReq = new XMLHttpRequest();
planTryEditSubtaskPostReq.open("POST", linkPlanTryEditSubtaskPost, true);
planTryEditSubtaskPostReq.send(null);
JSON.parse(planTryEditSubtaskPostReq.responseText);

var planTryEditTaskGetReq = new XMLHttpRequest();
planTryEditTaskGetReq.open("GET", linkPlanTryEditTaskGet, true);
planTryEditTaskGetReq.send();
JSON.parse(planTryEditTaskGetReq.responseText);

var planTryEditTaskPostReq = new XMLHttpRequest();
planTryEditTaskPostReq.open("POST", linkPlanTryEditTaskPost, true);
planTryEditTaskPostReq.send(null);
JSON.parse(planTryEditTaskPostReq.responseText);

var rearrangeTasksPostReq = new XMLHttpRequest();
rearrangeTasksPostReq.open("POST", linkRearrangeTasksPost, true);
rearrangeTasksPostReq.send(null);
JSON.parse(rearrangeTasksPostReq.responseText);

var tasksTodayGetReq = new XMLHttpRequest();
tasksTodayGetReq.open("GET", linkTasksTodayGet, true);
tasksTodayGetReq.send();
JSON.parse(tasksTodayGetReq.responseText);

var tasksTodayPostReq = new XMLHttpRequest();
tasksTodayPostReq.open("POST", linkTasksTodayPost, true);
tasksTodayPostReq.send(null);
JSON.parse(tasksTodayPostReq.responseText);

var viewPlanTryGetReq = new XMLHttpRequest();
viewPlanTryGetReq.open("GET", linkViewPlanTryGet, true);
viewPlanTryGetReq.send();
JSON.parse(viewPlanTryGetReq.responseText);

var viewPlanTryPostReq = new XMLHttpRequest();
viewPlanTryPostReq.open("POST", linkViewPlanTryPost, true);
viewPlanTryPostReq.send(null);
JSON.parse(viewPlanTryPostReq.responseText);

var viewSubtaskTryGetReq = new XMLHttpRequest();
viewSubtaskTryGetReq.open("GET", linkViewSubtaskTryGet, true);
viewSubtaskTryGetReq.send();
JSON.parse(viewSubtaskTryGetReq.responseText);

var viewSubtaskTryPostReq = new XMLHttpRequest();
viewSubtaskTryPostReq.open("POST", linkViewSubtaskTryPost, true);
viewSubtaskTryPostReq.send(null);
JSON.parse(viewSubtaskTryPostReq.responseText);

var viewTaskTryGetReq = new XMLHttpRequest();
viewTaskTryGetReq.open("GET", linkViewTaskTryGet, true);
viewTaskTryGetReq.send();
JSON.parse(viewTaskTryGetReq.responseText);

var viewTaskTryPostReq = new XMLHttpRequest();
viewTaskTryPostReq.open("POST", linkViewTaskTryPost, true);
viewTaskTryPostReq.send(null);
JSON.parse(viewTaskTryPostReq.responseText);

var weeklyTasksGetReq = new XMLHttpRequest();
weeklyTasksGetReq.open("GET", linkWeeklyTasksGet, true);
weeklyTasksGetReq.send();
JSON.parse(weeklyTasksGetReq.responseText);

var weeklyTasksPostReq = new XMLHttpRequest();
weeklyTasksPostReq.open("POST", linkWeeklyTasksPost, true);
weeklyTasksPostReq.send(null);
JSON.parse(weeklyTasksPostReq.responseText);

var yearlyTasksGetReq = new XMLHttpRequest();
yearlyTasksGetReq.open("GET", linkYearlyTasksGet, true);
yearlyTasksGetReq.send();
JSON.parse(yearlyTasksGetReq.responseText);

var yearlyTasksPostReq = new XMLHttpRequest();
yearlyTasksPostReq.open("POST", linkYearlyTasksPost, true);
yearlyTasksPostReq.send(null);
JSON.parse(yearlyTasksPostReq.responseText);

// // Functii Task
// async function tasks() {
//     return [
//         JSON.parse(addDepGetReq.responseText),
//         JSON.parse(addDepPostReq.responseText),
//         JSON.parse(addParticipantsGetReq.responseText),
//         JSON.parse(addParticipantsPostReq.responseText),
//         JSON.parse(autoAssignGetReq.responseText),
//         JSON.parse(autoAssignPostReq.responseText),
//         JSON.parse(createPlanSuccessGetReq.responseText),
//         JSON.parse(createPlanSuccessPostReq.responseText),
//         JSON.parse(createPlanTryGetReq.responseText),
//         JSON.parse(createPlanTryPostReq.responseText),
//         JSON.parse(deleteGetReq.responseText),
//         JSON.parse(deletePostReq.responseText),
//         JSON.parse(editPlanSuccessGetReq.responseText),
//         JSON.parse(editPlanSuccessPostReq.responseText),
//         JSON.parse(editPlanTryGetReq.responseText),
//         JSON.parse(editPlanTryPostReq.responseText),
//         JSON.parse(monthlyTasksGetReq.responseText),
//         JSON.parse(monthlyTasksPostReq.responseText),
//         JSON.parse(planSuccessAddSubtaskGetReq.responseText),
//         JSON.parse(planSuccessAddSubtaskPostReq.responseText),
//         JSON.parse(planSuccessAddTaskGetReq.responseText),
//         JSON.parse(planSuccessAddTaskPostReq.responseText),
//         JSON.parse(planSuccessEditSubtaskGetReq.responseText),
//         JSON.parse(planSuccessEditSubtaskPostReq.responseText),
//         JSON.parse(planSuccessEditTaskGetReq.responseText),
//         JSON.parse(planSuccessEditTaskPostReq.responseText),
//         JSON.parse(planTryAddSubtaskGetReq.responseText),
//         JSON.parse(planTryAddSubtaskGetPostReq.responseText),
//         JSON.parse(planTryAddTaskGetReq.responseText),
//         JSON.parse(planTryAddTaskPostReq.responseText),
//         JSON.parse(planTryEditSubtaskGetReq.responseText),
//         JSON.parse(planTryEditSubtaskPostReq.responseText),
//         JSON.parse(planTryEditTaskGetReq.responseText),
//         JSON.parse(planTryEditTaskPostReq.responseText),
//         JSON.parse(rearrangeTasksPostReq.responseText),
//         JSON.parse(tasksTodayGetReq.responseText),
//         JSON.parse(tasksTodayPostReq.responseText),
//         JSON.parse(viewPlanTryGetReq.responseText),
//         JSON.parse(viewPlanTryPostReq.responseText),
//         JSON.parse(viewSubtaskTryGetReq.responseText),
//         JSON.parse(viewSubtaskTryPostReq.responseText),
//         JSON.parse(viewTaskTryGetReq.responseText),
//         JSON.parse(viewTaskTryPostReq.responseText),
//         JSON.parse(weeklyTasksGetReq.responseText),
//         JSON.parse(weeklyTasksPostReq.responseText),
//         JSON.parse(yearlyTasksGetReq.responseText),
//         JSON.parse(yearlyTasksPostReq.responseText)       
//     ];
// }