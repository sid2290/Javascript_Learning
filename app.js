function waitThreeSeconds() {
    var ms =3000 + new Date().getTime();
    while(ms> new Date()){};
    console.log('Finished Function');
}
document.addEventListener('click', clickHandler);

function clickHandler () {
    console.log("Clicked");
}

waitThreeSeconds();
console.log("Execution finished & Starting Checking click event");
