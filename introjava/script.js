// let score = 88;
// if (score >=75 && score<=100) {
//     document.write("A1 Excellent")
// }
// else if (score >=69 && score <=74) {
//     document.write("B1 very Good") 
// }
// else if (score >=50 && score <= 68 ) {
//     document.write("C Credit")
// }
// else if (score >=45 && score <= 49 ) {
//     document.write("D Pass")
// }
// else if (score >=40 && score <= 44 ) {
//     document.write("F fair")
// }
// else{
//     document.write("Advice to withdraw")
// }
// let c = 10
// while (c <= 100) {
//     document.write(c+"Onome is a powerful programmer <br>")
//     c++
// }
// do{

// }while (condition) 

// for(let i=0; i<=50; i++){
//     if(i % 2 ===0){
//         document.write("even number <br>")
//     }
//     else if(i % 3 ===0){
//         document.write("Odd number <br>")
//     }
//     else{
//         document.write(i+"<br>")
//     }
// }

function sayProf(){
    alert("Fuction are reuseable code")
}
sayProf()

// function calcArea(length, breadth , height){
// let area = length* breadth*height
// document.write(area)
// }
// calcArea(5, 1, 2)

// function squareArea(length, width){
//     let area = length/width
//     document.write(area)
// }
// squareArea(7,7)

// function Calc(){
//     let w = document.getElementById("width").value
//     let h = document.getElementById("Height").value
//     let Area = w * h
    
//     document.getElementById("answer").value= Area
// } 
 
// Math.sqrt(s(s-a)*(s-b)*(s-c))
// where s= a*b*c/2

function areaOfTriangle() {
  let a = document.getElementById("a").value
  let b = document.getElementById("b").value
  let c = document.getElementById("c").value
   s = a*b*c/2
   Area = Math.sqrt(s*(s-a)*(s-b)*(s-b)*(s-c))
   document.getElementById("answer").value = Area
}
