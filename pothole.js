let counter = 0;
let potholeFill = 3;
let turn = 0;
let satisfaction = 0;
let hasGeoTech = false;
let hasInspector = false;
const counterValue = document.getElementById('pot');
const turnValue = document.getElementById('turnNum')
var satisfactionValue = document.getElementById('satisfaction');


increment.addEventListener('click', () => {

    if(hasGeoTech && hasInspector) {
        counter = counter + Math.floor(Math.random() * 2);
    }
    else {
        counter = counter + 1+Math.floor(Math.random() * 3);

    }
    counterValue.innerHTML = counter;
    turn++;
    turnValue.innerHTML = turn;
    console.log("Turn:" + turn)
    if(counter >= 10) {
        alert("You Lose!");
    }
    if(turn == 13) {
        alert("Warning: Two turns left before going over budget");
    }
    if(turn == 15) {
        alert("Times Up! You have gone over budget!");
    }
    
});
function update(i) {
    satisfaction = satisfaction + i;
    satisfactionValue.innerHTML = satisfaction;
    console.log(satisfaction);
    if(satisfaction >= 25) {
        alert("You Win!");
    }
}
plusFourth.addEventListener('click', () => {
    update(.25);
});
plusHalf.addEventListener('click', () => {
    update(.5);
});
plusOne.addEventListener('click', () => {
    update(1);
});
plusTwo.addEventListener('click', () => {
    update(2);
});
minusOne.addEventListener('click', () => {
    update(-1);;
    
});

geotech.addEventListener('change', () => {
    hasGeoTech = document.querySelector('#geotech');
    console.log(hasGeoTech.checked);
    

});
inspector.addEventListener('change', () => {
    hasInspector = document.querySelector('#inspector');
    console.log(hasInspector.checked);
    if(hasInspector.checked){
        potholeFill = 4;
        
    }
    if(!hasInspector.checked){
        potholeFill = 3;
    }
    console.log(potholeFill);

});


fill.addEventListener('click', () => {
    counter = counter - potholeFill ;

    if(counter < 0) {
        counter = 0;
    }
    
    

    counterValue.innerHTML = counter, 0;
});

restart.addEventListener('click', () => {
    counter = 0;
    turn = 0;
    satisfaction = 0;
    counterValue.innerHTML = counter;
    turnValue.innerHTML= turn;
    satisfactionValue.innerHTML = satisfaction;
    document.querySelector('#inspector').checked = false;
    document.querySelector('#geotech').checked = false

    console.log(hasInspector);
    console.log("Restarted");
});