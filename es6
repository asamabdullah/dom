/*
for(var i = 6; i < 10; i++){
    console.log('not correct' +i);
}

console.log('correct' + i)
*/












/*
function fum(message= 'function value not given'){
    console.log(message)
};
fum()
*/










/*
function fum(c,z, ...x){
    console.log(c,z,x);
}
fum('abe sale','u bc','inghanzi', 'hdfksfjhi');
*/










/*
var fumA = [1,2,3];
var fumB = [...fumA,17,9,6];

console.log(fumB)
*/






/*
function fum(message,name, ...out){
    return{
        message,name
    }
}
console.log(fum('its ok', 'not ok', 'done',))
*/










/*
function myName(hduye,hduyo){
    return{
        hduye,
        hduyo
    }
}

console.log(myName('jbdhb','jdjgf'))
*/







//"FOR Of:"
/*
var array = [1,2,3,4,5,6,964]

for(fum of array ){
    console.log(fum)
}
*/










/*
var array = [2,5,9,4,6]
for(fum in array){
    console.log(fum)
}
*/








/*
var fum = `hello i
 am
 ronaldo`;
console.log(`cr7:${fum}`)
*/










/*
var fum = [1,2,3,6,5,5,9,5,8,8,5,3,2,6,5,362,];
var [k,i,s,d,...l] = fum;
console.log(k,i,s,d,l)
*/











/* Object Destructuring*/
/*
var fum = {
    name:'asam',
    age:14,
    rum:'kjsja',
}

var {name,age,rum} = fum;
console.log(rum,name)
*/












/*
import {fum} from './1st  project.js'

console.log(fum)
*/













/*
class fum{
    constructor(num,lum){
        this.num = num;
        this.lum = lum;
    }
}

var dom = new fum('jk','jm');
console.log(dom)
*/









/*
var fum = class {
    constructor(name,frame,jame){
        this.name = name;
        this.frame= frame;
        this.jame= jame;
    }
}


var fumdata = new fum ('abs','react.js','orange');
console.log(fumdata)
*/












/*
var fum = class{
    constructor(name,skill,job){
        this.name = name;
        this.skill = skill;
        this.job = job;
    }
}

var dimInformation = new fum('lomri','dim','chor')
console.log(dimInformation)
*/












/*
class fum{
    static lum(){
        console.log('oh yeah');
    }
}

fum.lum()
*/












/*
class parent{
    fum(){
        console.log('ur father');
    }
    jame(){
        console.log('dar somp');
    }
}



class my extends parent{
     frame(){
         super.fum();
         super.jame();
     }
}


var kan = new my();
kan.frame()
*/


//var crane = new my();
//crane.fum();















/*
var fum = (x,c) => {
    return x + c
}

console.log(fum(85,96))
*/








/*
let fum = (o,n) => o+n;{
    
}
console.log(fum('dfff','fdd'));
*/






/*
var fum = function (x,c){
    return x + c
}

console.log(fum('hsj','ufn'))
*/













/*
var fum = Symbol('ham');
var fum1 = Symbol('ham');

console.log(fum===fum1)
*/












/*
var array = ['d','f','k'];
for(Element of array){
    console.log(Element)
}
*/










/*
'use strict'
name = 52
*/









/*
'use strict'
var fum = [2,5,10,20]
for(var i=0; i<fum.length; i++){
    console.log(fum[i]);
}
*/












/*
var fum = [56,5,58,56,5]

for(loop of fum){
    console.log(loop)
}
*/











/*
var fum = [2,5,6,6,2,]
fum.forEach(lum)

function lum(a){
    console.log(a)
}
*/












/*
var fum = [2,5,6,14,5]
fum.forEach((a) => console.log(a))
*/













/*
var fum = [2,,5,52,5,2];
var lum = [];

fum.forEach(dim)

function dim(a){
    lum.push(a*2)
}


console.log(lum)
*/












/*
var fum = [54,5,448,5,22,3];
var lum = fum.map(dim)


function dim(a){
    return(a)
}

console.log(lum)
*/












/*
var fum = [5,25,632,3,2];
var lum = fum.filter(dim)

function dim(a){
    return a > 65
}

console.log(lum)
*/











/*
var fum = () => {
    console.log('nbl')
}



var dim = () => {
    console.log('dmd')
}



var loadTime = () => {
    console.log('abs')
}

var lum = () => {
    console.log()
}


var lum = () => {
    setTimeout(loadTime, 2000)
}


dim()
lum()
fum()
*/







/*
var tm = () => {
    console.log('fhfjds')
}



var lum = () => {
    console.log('abs')
}



var opm = () => {
    setTimeout(lum, 2000)
}


lum()
tm()
*/













/*
var fim = (a) => {
    console.log(a)
}

let fum = (run , dim , CallBackFun) => {
    const Details = `My name ${run} & read ${dim}`;
    CallBackFun(Details)
}
fum("abs", "21" , Display )
*/










/*
try{
console.log("hdhbb");
console.log('hd52');
console.log('hdhb44b');


var age = 5;
if(age < 18) {
    console.log("not allowed");
}


else if(age > 18) {
    console.log("allowed");
}

}



catch(error){
    console.log('problem')
}


finally{
    console.log('correct')
}
*/










//Promise


/*
var num = 58;

try{var work = new Promise((resolve,reject) => {
    if (num > 20) {
        console.log('it is ok');
    }

    else{
        console.log('worry about it');
    }
});
}


catch(error){
    console.log('some')
}



finally{
    console.log("no")
}
*/
