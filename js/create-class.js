class WarrantyDevs {
    constructor() {
        this.devs = {};
    }

    addDeveloper(name, technology, team) {
        const dev = new WarrantyDeveloper(name, technology, team);
        this.devs[name] = dev;
    }
}

class WarrantyDeveloper {
    constructor(name, technology, team) {
        this.name = name;
        this.technology = technology;
        this.team = team;
    }
}

/* let warrantyDevs = new WarrantyDevs();
warrantyDevs.addDeveloper('Mayur', 'SAP', 'TA');

console.log(warrantyDevs.devs['Mayur']); */

let warrantyDevs = new WarrantyDevs();

function addDeveloperData() {
    let name = document.getElementById("nameInp").value;
    let tech = document.getElementById("techInp").value;
    let team = document.getElementById("teamInp").value;
    
    warrantyDevs.addDeveloper(name, tech, team);

    updateDeveloperTable(warrantyDevs);
}

function updateDeveloperTable(warrantyDevs) {
    let table = document.getElementById("developerTable");

    // Clear the existing rows except the header
    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    // Add the developers from the devs object to the table
    Object.values(warrantyDevs.devs).forEach(dev => {
        let newRow = table.insertRow(-1);
        newRow.insertCell(0).innerHTML = dev.name;
        newRow.insertCell(1).innerHTML = dev.technology;
        newRow.insertCell(2).innerHTML = dev.team;
    });
}