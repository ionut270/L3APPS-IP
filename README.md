# L3APPS

Note in order for the app to run properly the gateway has to be ran from the same machine as the server
[API GATEWAY](https://github.com/Mike97M/A3-api-gateway/tree/master/demo)

A task schedular app that allows you to create and assign tasks kindof like a jyra. The biggest diference from the jyra example is the fact that the app is being able to assign automatically the tasks for the day using a set of preferences the user can define in the profile page.

## Stauts

- [x] App shell
- [x] Ui interface
- [x] Login /signup working 
- [x] View Tasks working
- [x] Create Task working
- [x] Page for independent task working
- [x] Profile page working
- [x] Subordinates component working
- [ ] Delete task
- [ ] Edit task
- [ ] Edit profile
- [ ] Edit subordinates
- [ ] Preferences
- [ ] View other profiles
- [ ] Rearange tasks by preferences
- [ ] Report button 

## Known Bugs

- Being logged in does not prevent you from going to login/signup
- Cookie token microservice acepts any token as long as it gets the id
- Creating a task sucesfully does not remove the create task component
- Profile data gets loaded slowly
- The app crashes if one of the microservices fails and sends a html instead of a json

### [Curent task page](https://onedrive.live.com/edit.aspx?resid=FA433C654EFFEE81!25217&ithint=file%2cxlsx&authkey=!ALu2HbVjqCEcBfc)
