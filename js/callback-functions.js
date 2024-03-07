/* setTimeout : will process the work inside it after the timeout specified. */


const developers = [
    {name: 'kk', tech: 'java', team: 'TM'},
    {name: 'jj', tech: 'java', team: 'TA'},
    {name: 'Ashish', tech: 'SAP', team: 'TM'}
]

function getDevelopers() {
    setTimeout(() => {
        let devData = "";
        developers.forEach(function(dev){
            devData += `<li>|  ${dev.name}  |  ${dev.tech}  |  ${dev.team}  |</li><br>`
        })
        document.getElementById("devList").innerHTML = devData
    }, 1000)
}


function addDeveloper(dev) {
    setTimeout(function() {
        developers.push(dev);
    }, 5000)

    console.log("added developer ", dev.name);
}




/* Add more devs */
let rohit = {name: "Rohit", tech: "AWS", team: "TM"};
addDeveloper(rohit);
let swati = {name: "Swati", tech: "SAP", team: "TA"};
addDeveloper(swati);

/* Display devs */
getDevelopers();

/* Arrow Functions  */

/* function printData(test) {
    console.log(test);
}

// can be written as 

test => console.log(test) */

/* Now fix the issue with callbacks */

/* function getDevelopers() {
    setTimeout(() => {
        let devData = "";
        developers.forEach(function(dev){
            devData += `<li>|  ${dev.name}  |  ${dev.tech}  |  ${dev.team}  |</li><br>`
        })
        document.getElementById("devList").innerHTML = devData
    }, 1000)
}


function addDeveloper(dev, callback) {
    setTimeout(function() {
        developers.push(dev);
        callback();
    }, 5000)

    console.log("added developer ", dev.name);
}

let rohit = {name: "Rohit", tech: "AWS", team: "TM"};
addDeveloper(rohit, getDevelopers);
let swati = {name: "Swati", tech: "SAP", team: "TA"};
addDeveloper(swati, getDevelopers);*/