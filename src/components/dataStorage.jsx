import axios from 'axios';

const baseUrl = "https://jsonplaceholder.typicode.com/posts";
const loginEndpoint = "";
const signupEndpoint = "";
const profileInfoEndpoint = "";
const profileEditInfoEndpoint = "";
const employeesInfoEndpoint = "";
const underlingsInfoEndpoint = "";
const searchInfoEndpoint = "";
const tasksEndpoint = "";

let data = {};
function loginInfo() {
    axios
        .fetch(baseUrl + loginEndpoint)
        .then(response => {
            return response.json();
        })
        .then(data => saveData(data));
}
function signupInfo() {
    axios
        .fetch(baseUrl + signupEndpoint)
        .then(response => {
            return response.json();
        })
        .then(data => saveData(data));
}

function profileInfo() {
    axios
        .fetch(baseUrl + profileInfoEndpoint)
        .then(response => {
            return response.json();
        })
        .then(data => saveData(data));
}
function profileEditInfo() {
    axios
        .fetch(baseUrl + profileEditInfoEndpoint)
        .then(response => {
            return response.json();
        })
        .then(data => saveData(data));
}

function employeesInfo() {
    axios
    .fetch(baseUrl + employeesInfoEndpoint)
    .then(response => {
        return response.json();
    })
    .then(data => saveData(data));
}
function underlingsInfo() {
    axios
    .fetch(baseUrl + underlingsInfoEndpoint)
    .then(response => {
        return response.json();
    })
    .then(data => saveData(data));
}
function searchInfo() {
    axios
    .fetch(baseUrl + searchInfoEndpoint)
    .then(response => {
        return response.json();
    })
    .then(data => saveData(data));
}

function tasks() {
    axios
    .fetch(baseUrl + tasksEndpoint)
    .then(response => {
        return response.json();
    })
    .then(data => saveData(data));
}
function saveData(receivedData) {
    console.log(receivedData);
    this.setState(receivedData);
}