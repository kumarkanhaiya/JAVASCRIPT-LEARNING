console.log("Ajax");

let getBtn = document.getElementById("getBtn");
getBtn.addEventListener('click', getDataHandler);

function getDataHandler() {

    console.log("Get Data Clicked");
    const request = new XMLHttpRequest();

    /* control Sync or Async request with true and false as a param */
    request.open('GET', '../data/data.txt', false);

    request.onprogress = function() {
        console.log("Data fetch in progress");
    }

    request.onload = function(){
        console.log(this.responseText);
        document.getElementById("msgP").innerHTML = this.responseText;
    }

    request.send();

    console.log("request complete");
}

let resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', () => {
    document.getElementById("msgP").innerHTML = "You can fetch file data on clicking the Get button"
});