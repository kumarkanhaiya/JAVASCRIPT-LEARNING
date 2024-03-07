const developers = [
    { name: 'kk', tech: 'java', team: 'TM' },
    { name: 'jj', tech: 'java', team: 'TA' },
    { name: 'Ashish', tech: 'SAP', team: 'TM' }
]

function getDevelopers() {
    setTimeout(() => {
        let devData = "";
        developers.forEach(function (dev) {
            devData += `<li>|  ${dev.name}  |  ${dev.tech}  |  ${dev.team}  |</li><br>`
        })
        document.getElementById("devList").innerHTML = devData
    }, 1000)
}


function addDeveloper(dev) {
    setTimeout(function () {
        developers.push(dev);
    }, 5000)

    console.log("added developer ", dev.name);
}




/* Add more devs */
let rohit = { name: "Rohit", tech: "AWS", team: "TM" };
addDeveloper(rohit);
let swati = { name: "Swati", tech: "SAP", team: "TA" };
addDeveloper(swati);

/* Display devs */
/* getDevelopers(); */

/* Add an event listner to listen to the click event of fetch data button */

/* 
// Below code will not not execute if the JS is called from Header as the JS will try to access a DOM element which is not loaded.
// 1.Moving the Script to Body will fix this 
// 2.you can wrap your event listener code inside a DOMContentLoaded event listener, which ensures that the code is executed only after the DOM has been completely loaded.
// Get the button element and add a click event listener
const fetchDevBtn = document.getElementById("fetchDevButton");
fetchDevBtn.addEventListener("click", fetchDeveloper); */

document.addEventListener("DOMContentLoaded", () => {
    // Get the button element and add a click event listener
    const fetchDevButton = document.getElementById("fetchDevButton");
    fetchDevButton.addEventListener("click", fetchDeveloper);
});

function fetchDeveloper() {
    console.log("fetch developer button used");
    const devName = document.getElementById("nameInp").value;
    console.log("dev name from input: ", devName);
    fetchDataWithAPromise(devName)
        .then((devObj) => {
            const dataString = `| ${devObj.name} | ${devObj.tech} | ${devObj.team} |`
            document.getElementById("devDataSingle").innerHTML = dataString;
        })
        .catch((error) => {
            const dataString = `| ${error} |`
            document.getElementById("devDataSingle").innerHTML = dataString;
        });
}


function fetchDataWithAPromise(devName) {
    return new Promise((resolve, reject) => {
        const devData = developers.find(devObj => devObj.name === devName);
        if (devData) {
            console.log("Developer data found for ", devName);
            resolve(devData);
        } else {
            console.log("Developer data not found for ", devName);
            reject(`Data not found for ${devName}`);
        }
    })
}