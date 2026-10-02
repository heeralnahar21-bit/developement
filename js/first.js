// console.log("namaste duniya");
// let marks=20;
// marks="babber";
// marks=true;
// let marks;
// console.log(marks);
// let value=null;
// console.log(value);
// let num=1213827548435947501497519345790347519438;
// console.log(num);
// num=false;
// console.log(typeof(num));
//arithmetic operator;
// let a=2;
// let b=5;
// console.log(a**b);
// let age=25;
// let status1=(age>18)?'i can vote':'i cannot vote';
// console.log(status1);
// let ans=(true&&true&&true);
// console.log(ans);
// let ans=(
//     false||true||true);
// console.log(ans);
// console.log(false||'babbar');
// console.log(~0);
//most significant bit 1 h toh negative no. bn jata h 2s complement lena fir 1s complenet nikala fir 2sc complement nikala fir 1 ki 
//bit level pe flipping kr deta h ~ ye operator 
//<< ye left shift hpta aur ye>> right shift hota
//console.log(10<<1);
// let age=25;
// if(age>18)
// {
// console.log("you can");
// }
// else{
// console.log("no");

// }
// let number = 5;

// if (number == 1) {
//     console.log('A');
// }
// else if (number == 2) {
//     console.log('B');
// }
// else if (number == 3) {
//     console.log('C');
// }
// else if (number == 4) {
//     console.log('D');
// }
// else if (number == 5) {
//     console.log('E');
// }
// else {
//     console.log('Invalid');
// }
//multiple else if readability khrab kr dete h
//switch use krte 
// let num=3;
// switch(num)
// {
// case 1:console.log('A');
//break;
// case 2:console.log('B');
//break;
// case 3:console.log('C');
//break;
// }
//GLTI MY GOD BREAK wali
//bulky hora code maintainable ni hora issue ek jagah pr  nhi  bohot jagah dikkat hora buggy hora
//loooopppppppppppppp
//3 types of loop exist for loop while loop do whhile loop 

// for(let i=1;i<=10;i+=1)
//     {
//     console.log("babbar");
// for(let i=1;i<5;i+=1){
//     console.log(i);
// }
//new value of i k sath guste h loop m usko iteratoiion bolete h 
//break reach hogya fir loop se bahar nikala jao continue boltra h uss iteratiiobn kon skip krsdo baki fir conti nue krdlo
// for(let i=1;i<=6;i++){
//     if(i==4)
//         break;
//     else
//         console.log(i);
//}
//i=4 5 ,6 m loop  nhi chla  
//vhi ruk jajta h loop ye yaad rkhna h bss
// for(let i=1;i<=6;i++){
//      if(i==4)
//          continue;
//     else
//         console.log(i);
// }
//4 missing h kyuki uspe ciontinue  h uske baad jane do aage
//currentb iteration ko skip krna h ye h contin rur
// let a=2;
// while(a>0)
//     {
//     console.log(a);
//     a-=1;

// }
// let i=1;
// do{
//   console.log("babbar");
//   i++;
// }
// while
//     (i<=10);

//pehli iteration hone se pehle koi conditiuon check hi ni huiye kya baat huii ateast eke baar toh vcha;lega d doo whiel loop
//yge  bohot bda disadvantage hota h
//strings ko dicuss krenge aaj
//strings are sequence of chgaracters
// //contatentate
// let op1='english ';
// let op2='hindi';
// let finalAns=`${op1}`+`${op2}`;
// console.log(finalAns)
//let str="babbar"
//console.log(str.substring(2,4)); 
//let sentence = "Hello Jee Kaise ho saare";

//let words = sentence.split(' ');

//console.log(words);
//duplicacy of code soo reduce these
//function define
// function saymyname()
// {
//   console.log("love")
// }
// //func call
// saymyname();
// function printCounting()
//     {
//         for(let i=1;i<=100;i++)
//         {
//           console.log(i)
//         }
//     }
//     printCounting()
// function printNumber(num){
//     console.log("printing number",num);
// }
// printNumber(5);
//num is a para,meter and 5 is an argument
// function getAverage(num1,num2){
//     let avg=(num1+num2)/2
//     console.log("Average:",avg);
// }
// getAverage(3,70);
//return functions 
// function getSum(a,b,c){
//     let sum=a+b+c
//     return sum
// }
// let ans=getSum(1,2,3)
// console.log(ans)
// 
// let getExp=(x,y)=>{
//     let ans=x**y;
//     return ans;
// }
// console.log(getExp(2,10));
//arrow functions 
// let obj={
//     name:"love",
//     "full name":"babbar",
//     greet:function(){
//     console.log("hello");
// }
// };
// console.log(obj);
// obj.greet();
//study shallow copy and deep copy
//collection of items /elements
//list of items is array primitive and non primititve items 
// let arr=[1,2,3,5];
// console.log(arr)
// let brr=new Array('love',1,true);
// console.log(brr)
//array creation using constructor
//dono objects h agr type of krke dekho
//built in methods 
//push :inserts ele at end
 //creation of arrays
// let arr = [1,2,3,4,5];

// //array constructor
// let brr = new Array('love',100,true);

// brr.push('Babbar');
// brr.pop();

// brr.shift();
// brr.unshift('Love Babbar');

// brr.push(20);
// brr.push(40);

// brr.push(70);

// // console.log(brr.slice(2,4) );
// brr.splice(1,2,'kunal')
// let arr=[10,20,30];
// let ansArray=arr.map((Number) => {
//     return Number*Number;
// })
// console.log(ansArray)
// let arr=[10,20,30];
// arr.map((Number,index)=>{
//     console.log(Number)
//     console.log(index)
// })
// let arr=[1,2];
// let evenarr=arr.filter((number)=>{
//     return number%2==0;
    // if(number%2==0){
    //     return true;
    // }
    // else{
    //     return false;
    // }
// });
// console.log(evenarr)
// let arr=[10,20,30,40];
// let ans=arr.reduce((acc,curr)=> {
//     return acc+curr
// },0)
// console.log(ans)
//ye acc(+curr bhi acc m hi store hota h
// let arr=[3.89,78];
// arr.sort()
// let arr=[10,20,30];
// arr.forEach((value,index)=>{
//     console.log("Number:",value,"index",index);
// })
// sayMyname("babbar");
// function sayMyname(finalname){
//     console.log(finalname);
// }
//hoisting m function pura jata h suska scope top m but variable k case ,m asirf var age  hi jaega isliye undefined aaega 
// console.log(age);
// var age=25;
//sirf var keyword m ye hoisting possible let aur const m nhi hota
//function expression wala tareeka krdo toh nhi chlega
// const object1=new Human();
// class Human{

// }
//class hoisting is not possible also
//in function call stack as soon as the function stops or returns it is popped from stack 
//functions are called first cls citizen kyuki bohot tareeke se use kr skte h
// function greetMe(greet,fullname){
//     console.log("hello",fullname);
//     greet();

// }
// let greet=function(){
//      console.log("Greeting for the day");
//  }
//  greetMe(greet,"babbar");
// greet()
//this is function expression
// const arr=[
//     function(a,b){
//         return a+b;
//     },
//     function(a,b){
//         return a-b;}
//         ,

//     function(a,b){
//         return a*b;
//     }
// ];
// let first=arr[0];
// let ans=first(5,10);
// console.log(ans);
//object is a collection of key value pairs 
//let obj={
//    age:25,
//  wt:36,
//  ht:180,
//   greet:()=>{
//      console.log("hello duniya")
//  }
//}
//3 types of variable scoping
//global scope
//function scope
//block scope
//var age=15;//global scope
//global scope can be acceseed anywhere in the code
//  var age=15;
//  console.log(age);
//  {
//     console.log(age)
//  }
//wow brackets k andr bhi access hora power of global scope
//function if for sb block m  chalega ye 
 function sayhello(){
     var name="Earth";
     console.log("hello dunia",name);
}
// console.log(name);
// sayhello()
// function scope mtlb function k andr brackets m hi chalega vrna ni chlega 