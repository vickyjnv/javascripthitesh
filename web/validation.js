function myvalidation() {
    let myvalue = document.getElementById('myform').value;
    if (isNaN(myvalue) || myvalue < 1 || myvalue > 20) {
        console.log("not a valid input");

    } else {
        console.log("this is number");

    }
}