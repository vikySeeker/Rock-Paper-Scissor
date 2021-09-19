var sysScore = 0;
var usrScore = 0;
var result1;
var usr;
var rand;
var target;
//console.log(Target);
var Target = window.prompt("Set Target Score : ")
if(Target == null){
alert('Enter a valid Number!!');
}
else if (isNaN(Target)){
    target=0;
}
else{
    target = parseInt(Target);
} 
console.log(target);
//var sco;
//var comp;
var computer;
const rckbtn = document.getElementById('ro');
const papbtn = document.getElementById('pa');
const scibtn = document.getElementById('sc');

rckbtn.addEventListener('click',rock);
papbtn.addEventListener('click',paper);
scibtn.addEventListener('click',scissor);

function random(){
    computer = ['Rock','Paper','Scissor'];
    var i = Math.floor((Math.random()*10)/3);
    //console.log(i);
    if (i == 3){
        i--;
        //console.log(i);
        return computer[i];
    }
    else{
        //console.log(i);
        return computer[i];
    }
}
function rock(){
    usr = 'Rock';
    rand = random();
    result1 = [document.getElementById('usr').innerText = 'User : Rock',
    document.getElementById('comp').innerText = `Computer : ${rand}`];
    result();
    return result1;
}
function paper(){
    usr = 'Paper';
    rand = random();
    result1 = [document.getElementById('usr').innerText = 'User : Paper',
    document.getElementById('comp').innerText = `Computer : ${rand}`];
    result();
    return result1;
}
function scissor(){
    usr = 'Scissor';
    rand = random();
    result1 = [document.getElementById('usr').innerText = 'User : Scissor',
    document.getElementById('comp').innerText = `Computer : ${rand}`];
    result();
    return result1;
}
function result(){
    //console.log(usr);
    console.log(rand);
    if(usr === rand){
        //console.log('Draw!!');
        score();
        return document.getElementById('result').innerText = 'Draw!!'
    }
    else if((usr === 'Rock' && rand === 'Paper') || (usr === 'Paper' && rand === 'Scissor') || (usr === 'Scissor' && rand === 'Rock')){
        //console.log('Computer Wins!!');
        sysScore+=1;
        score();
        return document.getElementById('result').innerText = 'Computer Wins!!';
    }
    else if((usr === 'Rock' && rand === 'Scissor') || (usr === 'Paper' && rand === 'Rock') || (usr === 'Scissor' && rand === 'Paper')){
        //console.log('User Wins!!');
        usrScore+=1;
        score();
        return document.getElementById('result').innerText = 'User Wins!!';
    }
    else{
        alert("Error Popped Try Reloading the Game.");
    }
//console.log(usrScore);
//console.log(sysScore);
}
function score(){
    //console.log(usrScore);
    //console.log(sysScore);
    let sco = document.getElementById('scoreid').innerText = `User Score : ${usrScore}\nComputer Score : ${sysScore}`;
    ender();
    return sco;
}
//console.log(usrScore);
//console.log(sysScore);
function ender(){
    //console.log(Target);
if (usrScore >= target){
    alert(`Congratulation... You Win the Game!!\nKindly refresh the Page to Play the Game Again`);
}
else if (sysScore >= target){
    alert(`Sorry to tell you that... INTHA GAME EH UNNALA JEIKA MUDIYALAYE NE YELLAM ENNATHA PUDUNGA PORA!!\nKindly refresh the Page to Play the Game Again`)
}
}
function targ(){
    let reftarget = document.getElementById('target').innerText = `You set ${target} as Your Target Score.`
    return reftarget;
}
targ();