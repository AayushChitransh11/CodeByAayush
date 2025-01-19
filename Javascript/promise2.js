// Build out this mock API request so that does the following:
// 1. Gets the user information and turns the JSON into a JavaScript object
// 2. Gets the event message and turns the JSON into a JavaScript object
// 3. Prints out a console log message that says "Thank you, Ralph S. Mouse, your account has been updated"

const { response } = require("express");


const eventMessage = JSON.parse({body: "Your account has been updated!"});
const currentUser = JSON.parse({
    name: "Ralph S. Mouse",
    id: "238jflK3"
});

const getUserInformation = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, currentUser);
    })
};


const getEventMesssage = () => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, eventMessage);
    })
};

getUserInformation()
.then(user=>{
    return getEventMesssage().then(event=>
        {
            console.log(`Thank you, ${user.name},${event.body}`);
        });
})
.catch(error=>{
    console.log("An error occured:",error)
});

getUserInformation().then().catch();