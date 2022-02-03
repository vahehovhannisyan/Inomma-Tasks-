// 2.16

// function averageEfficiency () {

//     let driversQuantity = 0;
//     let avgForAllDrivers = 0;
//     let gasoline;
//     let mile;

//     while (gasoline!=-1) {

//        gasoline = +prompt('Enter the amount of costed gasoline');

//         if(gasoline != -1) {

//             mile = +prompt('Enter how much mile you have driven');
//             driversQuantity++;
//             forOneDriver = mile/gasoline;
//             avgForAllDrivers += forOneDriver;
//             let result = avgForAllDrivers/driversQuantity;
//             alert(`The average efficiency for all drivers is ${result}`);
               
//         };

//     };
 
// };

// averageEfficiency()



// 2.17 

// function banking () {

//     let account;
//     let beginningBalance;
//     let outcome;
//     let creditLine;
//     let msg="";

//     while (account != -1) {

//             msg="";
//             account = +prompt('Enter your bank account data');

//             if(account != -1) {

//                 beginningBalance = +prompt("Enter your balance beginning of the month");
//                 outcome = +prompt("Enter your costs");
//                 income = +prompt("Enter your income");
//                 creditLine = +prompt("Enter your credit line");
//                 let balance = beginningBalance + outcome -income;
//                 if(creditLine>=balance){
//                     msg+=`You dont exceed the credit line`
//                 }else{
//                     msg+= `account - ${account}, credit line - ${creditLine}, balance - ${balance},  you exceed the credit line`
//                 };

//                 alert(msg);
//             };
       
//      };

// };

// banking();



// 2.18

// function evalBenefit () {

//     let sum;
//     let benefit;

//     while (sum!=-1) {
        
//         sum = +prompt('How much is your income?');
        
//         if(sum!=-1) {
//             benefit = 200  + sum*9/100;
//             alert(`your benefit is ${benefit}`)                      
//         };
    
//     };

// };

// evalBenefit();




// 2.19

// function salary () {

//     let hours;
//     let salary;

//     while (hours !=-1) {

//         hours = +prompt('how many hours have you worked');

//         if(hours !=-1) {

//             if (hours <= 40) {
//                 salary = hours*10;       
//             }else{
//                 salary = (hours-40)*15 + 400;        
//             }; 
                 
//             alert(`Your salary is ${salary}`);

//         };
         
//      };

// };

// salary ();


// 2.20


// function findMaximumFromGivenArray () {
//     let counter = 0;
//     let max = 0;
//     while(counter < 10) {  
//         let number = +prompt('Enter number to find maximum');
//         if (number > max ) {
//             max = number;
//         };
//         counter++;     
//     };   
//     alert("The maximum number is " + max);
// };

// findMaximumFromGivenArray ();




// 2.21

// function multiple () {
    
//     let str = "N"+"\t" + "  10*N" + "\t" + "  100*N"  + "\t" + "  1000*N" + "\n";
   
//     for(let i=1; i<=5; i++) {

//         for(let j=1; j<=1000; j*=10) {
//             str+= i*j +"\t" +"\t";
//         };

//         str+="\n"
//     };       
//     console.log(str);
// };

// multiple ();




// 2.22

// function findTwoMaximumsFromGivenArray () {
//     let counter = 0;
//     let max1;
//     let max2;

//     while(counter < 10) {

//         let number = +prompt('Enter numbers to find 2 maximums');

//         if(counter === 0){
//             max1 = number;
//         };

//         if(counter === 1){

//             if(number > max1) {
//                 max2 = max1;
//                 max1 = number;        
//             };
    
//             if (number < max1) {
//                 max2 = number;
//             };
//         };

//         if(number > max1){
//             max2 = max1;
//             max1 = number;  
//         };

//         if( number > max2 && number < max1 ) {
//             max2 = number; 
//         };

//         counter++;    
//     };

//         alert(`The 2 max numbers from given array are ${max1} and ${max2}`);

// };

// findTwoMaximumsFromGivenArray();



// 2.28


// function square (number) {

//     let str = "";
//     if (number > 1 && number < 20) {

//         for(let i = 0; i<number; i++) {

//             for(let j = 0; j<number; j++){

//                 if(i==0||i==number-1 || j==0||j==number-1 ){
//                     str +=  "*";            
//                 }else{
//                     str += " "; 
//                 };  
//             };

//            str+="\n"
//         };
//     };
//     console.log(str);
// };

// square(5);


// 2.29

// function Polindrome () {

//     let number;

//     while(number!=-1) {

//         number = +prompt("Enter number to check if it is a polindrome or not");

//         if(number!=-1) {
 
//             let remainder; 
//             let reversed = 0;
//             let givenNumber = number;

//             while (number !== 0) {
//                 remainder = number % 10;
//                 reversed = (reversed*10 + remainder);
//                 number = parseInt(number/= 10);
//             };
            
//             if(givenNumber === reversed){
//                 alert(`number ${givenNumber} is a polindrome`);
//             }else{
//                 alert(`number ${givenNumber} is not a polindrome`);
//             };

//         };
            
//     };
    
// };

// Polindrome();


// 2.30 


// function binaryToDecimal () {

//     let binaryNumber;

//     while (binaryNumber!=-1) {

//         binaryNumber = +prompt("Enter a binary number");

//         if(binaryNumber!=-1){

//             let counter = 0;
//             let multiple = 0;
//             let lastDigit;

//             while (binaryNumber > 0) {
//                 lastDigit = binaryNumber%10;
//                 binaryNumber = parseInt(binaryNumber/10);
        
//                 if(lastDigit == 0) {
//                     counter++;
//                 };
        
//                 if(lastDigit == 1) {
//                     multiple+=2**counter;
//                     counter++;
//                 };         
//             };
//             alert(`the equivalent number in Decimal is ${multiple}`);

           
//         };
      
//     };
        
// };

// binaryToDecimal ();





// 2.31


// function chess () {

//     let str="";

//     for(let i=0; i<8; i++) {

//         if(i%2==0){
//             for(let j=0; j<8; j++) {
//                 str+= "*" +" "
//             };
//             str+="\n";  
//         }else{
//             for(let j=0; j<8; j++) {
//                 str+= " " +"*" 
//             };
//             str+="\n";  
//         };
//     };
//     return str;
// };

// console.log(chess () );



// 2.33 

// function circle () {

//     let length;
//     let diametr;
//     let square;
//     let p = 3.14;
//     let radius = +prompt("enter the radius");
//     diametr = 2*radius;
//     length = 2*p*radius;
//     square = p*radius**2;
//     alert(`diametr is ${diametr},  length is ${length}, square is ${square}`)  
// };

// circle ();



// 2.35, 2.36


// function triangle1 (a, b, c) {
   
//     if( a + b > c) {
        
//         let max = a;
//         let notMaxOne = b;
//         let notMaxTwo = c;

//         if (b > max) {
//             max = b;
//             notMaxOne = a;

//             if(c > max){
//                 max = c;
//                 notMaxTwo = b;    
//             };
//         };
        
//         if(c > max){
//             max = c;
//             notMaxTwo = a;    
//         };
       
//         if( a === b && b === c) {
//             return "It is a Equilateral triangle"
//         };
//         if(max**2 === notMaxTwo**2 + notMaxOne**2 ){
//             return "It is a right-angled triangle"
//         };

//         return "It is just a triangle";
//     };

//           return "does not match triangle conditions";
// };

// console.log(triangle1(6,8,10));




// 2.38 a


// function factorial (number) {

//     let fact;
//     let bazm = 1;

//     if(number>=0){

//         if(number == 0) {
//             fact = 1;
//             return fact;
//         };

//         while(number>0){
//            bazm*= number;
//            number--;
//         };

//         return bazm;

//     }else{
//         return "dont enter numbers under 0"
//     };

// };

// console.log(factorial (5))


// 2.40

// function addition() {

//     let counter=0;
//     let sum=0;
//     let quantity = +prompt('Enter how many numbers you want to sum');

//     while(counter < quantity){
//         let newNumber = +prompt('Enter number');
//         sum+=newNumber;
//         counter++;
//     };

//     alert("amount is " + sum);

// };


// addition ();



// 2.43

// function minimum () {
//     let counter=1;
//     let min;
//     let quantity = +prompt('Enter how many numbers you want to enter to find the minimum of them');

//     while(counter <= quantity){
//         let newNumber = +prompt('Enter number');
        
//         if(counter==1){
//             min = newNumber;
//         };

//         if(newNumber < min){
//             min = newNumber;
//         };
//         counter++;
//     };
//     alert("the minimum number is " + min);
// };

// minimum ();



// 2.44

// function productOfOddNumbers () {
//     let multiple = 1;
//     for(let i=1; i<=15; i+=2){
//         multiple*=i
//     };
//     return multiple;
// };

// console.log(productOfOddNumbers())



// 2.46

// function complexPercentage() {
    
//    let amount;
//    let deposit  = +prompt("Enter your deposit amount");
//    let rate = +prompt("Enter the rate, which must be 5 or 6 or 7 or 8 or 9 or 10");
//    let baseRate = 1 + rate/100;  
  
//    for(let i = 1; i<=10 ; i++) {
//         amount = deposit*Math.pow(baseRate, i);
//         document.write(amount + "<br>")
//    };

// };

// complexPercentage();



// 2.47

// function option1 (number) {

//     let str="";

//     for(let i=0; i<number; i++) {

//         for(let j=0; j<i+1; j++) {
//             str+="*"
//         };

//         str+="\n"
//     };
 
//     console.log(str);
// };

// option1(8);


// function option2 (number) {

//     let str="";

//     for(let i=0; i<number; i++) {

//         for(let j=number; j>i; j--) {
//             str+="*"
//         };

//         str+="\n"
//     };
 
//     console.log(str);
// };

// option2(7);



// function option3 (number) {

//     let str="";

//     for(let i=0; i<number; i++) {

//         for(let k=0; k<i+1; k++) {
//             str+=" ";
//         };

//         for(let j=number; j>i; j--) {
//             str+="*"
//         };

//         str+="\n"
//     };
 
//     console.log(str);
// };

// option3(7);


// function option4 (number) {

//     let str="";

//     for(let i=0; i<number; i++) {

//         for(let j=number; j>i; j--) {
//             str+=" ";
//         };

//         for( let k=0; k<i+1; k++) {
//             str+="*"
//         };

//         str+="\n"
//     };
 
//     console.log(str);
// };

// option4(7);






// 2.48

// function diagram () {

//     let counter = 0;
//     str="";

//     while(counter<5){
//         let number = +prompt("enter number");
//         for(let i=0; i<number; i++) {
//             str+="*";
//         };
//         str+="\n"
//         counter++;
//     };
//     console.log(str);
// };

// diagram ();



// 2.55 


// function triangle2 () {
   
//        for(let a=1; a<=500; a++) {

//             for(let b=a; b<=500; b++){

//                 for(let c=b; c<=500; c++) {

//                     if(c*c == b*b + a*a) {
//                         console.log(a, b, c)
//                     };
//                 };
//             };

//        };

// };

// triangle2 ();



// 2.56

// function evalSalary () {

//     let hour;
//     let sales;

//     let worker = prompt("Enter which type of worker you are in one of this formats` Manager, Hourly Worker, Comission Worker, Pieceworker  ");

//     if(worker == "Hourly Worker") {
//         hour = +prompt("Enter how many hours you have worked");
//     };

//     if(worker == "Comission Worker") {
//         sales = +prompt("Enter your weekly sales amount");
//     };

//     if(worker == "Pieceworker") {
//         quantityOfSoldProducts = +prompt("Enter your weekly sold products quantity");
//     };

//     function managers () {
//         alert('Your weekly salary, as a manager, is fixed 200$');
//     };

//     function hourlyWorkers (x) {
//         let sum;
//         if(x<=40) {
//             sum = x*1;
//         }else{
//             sum = 40*1 + (x-40)*1.5;
//         };

//         alert(`Your salary, as a hourly worker, is ${sum}$`);    
//     };

//     function  commissionWorkers (x) {
//         let sum = 250 + x*5.7/100;
//         alert(`Your salary, as a commission worker, is ${sum}$`);   
//     };


//     function  pieceworkers (x) {
//         let sum = x*10;
//         alert(`Your salary, as a pieceworker, is ${sum}$`);   
//     };

//     switch (worker) {

//         case 'Manager':  
//           managers();
//           break;
//         case 'Hourly Worker': 
//           hourlyWorkers(hour);
//           break;
//         case 'Comission Worker':
//           commissionWorkers(sales);
//           break;
//         case 'Pieceworker':
//           pieceworkers(quantityOfSoldProducts);
//           break;
//         default:
//           alert(`Sorry, we don't have ${worker} worker`);

//       };

// };


// evalSalary();



 
// 2.58

// function romb1 () {

//     let number = +prompt("enter number to draw piramid");

//     if(number && number%2!=0){
//         let str="";
//         let n = number;
//         for(let i=0; i<number; i++) {

//             for(let j=number; j>1; j--){
//                 str+=" ";
//             };

//             for(let k=0; k<2*i+1; k++) {
//                 str+="*"
//             };
//             str+="\n";
//             number--;
//         };

//         for(let i=0; i<number; i++) {

//             for(let j=0; j<number+1+i; j++){
//                 str+=" "
//             };

//             for(let k=n-2*(i+1); k>0; k--){
//                 str+="*"
//             };
//             str+="\n";        
//         };

//         return str;

//     }else{
//         return "does not meet the conditions";
//     };
// };

// console.log(romb1());



 
// 2.59

// function romb2 () {

//     let number = +prompt("enter number to draw piramid");

//     if(number && number%2!=0 && (1<number<19) ){
//         let str="";
//         let n = number;
//         for(let i=0; i<number; i++) {

//             for(let j=number; j>1; j--){
//                 str+=" ";
//             };

//             for(let k=0; k<2*i+1; k++) {
//                 str+="*"
//             };
//             str+="\n";
//             number--;
//         };

//         for(let i=0; i<number; i++) {

//             for(let j=0; j<number+1+i; j++){
//                 str+=" "
//             };

//             for(let k=n-2*(i+1); k>0; k--){
//                 str+="*"
//             };
//             str+="\n";        
//         };

//         return str;

//     }else{
//         return "does not meet the conditions" ;
//     };
// };

// console.log(romb2());



// 3.20

// function isMultiple () {

//     let number1;
//     let number2;
//     let bool = true;
//     let err = "you must enter an integer";

//     while(bool) {

//         number1 = +prompt("enter number 1");
//         number2 = +prompt("enter number 2");

//         if(number2 == parseInt(number2) && number1 == parseInt(number1)) {

//             if(number2%number1==0) {
//                 alert(number2 + " is multiple for " + number1);
//             }else{
//                 alert(number2 + " is not multiple for " + number1);   
//             };
           
//         }else{
//             alert(err);
//             bool = false;
//         };

//     };
    
// };

// isMultiple ();


// 3.21

// function isEven () {

//    let number = 0;

//     while(parseInt(number) == number) {

//         number = +prompt("enter number to check out if it is even");

//         if(parseInt(number) != number) {
//             alert("enter an integer");
//             return;
//         };

//         if(number%2==0){
//             alert("true");        
//         };

//         if(number%2!=0){
//             alert("false");       
//         };     
//     };   

//     alert("enter an Integer");
// };

// isEven ()




// 3.22

// function square () {

//     let number = +prompt("enter number to print square");
//     let str = "";

//     for(let i=0; i<number; i++){

//         for(let j=0; j<number; j++){
//             str+="* ";        
//         };

//         str+="<br>";
//     };
//     document.write(str)
// };

// square();


// 3.25 

// function main () {

//     let number = +prompt("Enter your number")
//     let str = ""; 
//     let newString="";

//         while(number!=0) {
//             let quotient = parseInt(number/10);
//             let remainder = number - (10*quotient);
//             str+= remainder;
//             number = (number - remainder) /10;
//         };  

//         for(let i=str.length-1; i>=0; i--){
//            newString += str[i] + "&nbsp; &nbsp";
//         };
        
//      document.write(newString);
// };

// main ();



// 3.26


// function time (a, b, c,   d, e, f) {

//     let seconds;

//     if(a>=0 && a<=12 && d>=0 && d<=12 ) {

//         if(d>a) {
//             seconds = (d-a)*3600 + (e-b)*60 + f-c;
//         }else{

//            seconds = (12-a)*3600 - b*60 - c + d*3600 + e*60 + c;
//         };

//         return seconds;
        
//     }else{
//         return "you must enter hours from 0 to 12";
//     };

// };

// console.log(time (24,30,0, 1,30,0 ) );



// 3.27


// function farCel ()  {

//     let str = "Celsius" + "\t" +"Fahrenheit" + "\n";

//     function fromFahrenheitToCelsius (num) {
//         let c = (n-32)*5/9;
//     };

//     function fromCelsiusToFahrenheit(num) {
//         let f = num*9/5 + 32;
//         return f;
//     };

//     for(let i=0; i<=100; i++) {

//         let far = fromCelsiusToFahrenheit(i);

//         for(let j=0; j<1; j++) {
//             str +=  i + "\t" + "\t" ;
//             str +=  far;
//         };

//         str+= "\n";
//     };

//     console.log(str);    
// };

// farCel ();




// 3.30 


// function primeNumber () {

//     let number;

//     while( number!=-1) {

//         number = +prompt ("enter number to check if it is prime");

//         if(number!=-1) {

//             for(let i=2; i<number; i++){
//                 if(number%i == 0) {
//                     alert(`Number ${number} is not prime`);
//                     number = +prompt ("enter number to check if it is prime");
//                 }; 
//             };

//             alert(`Number ${number} is prime`);      
//         };   

//     };
     
// };

// primeNumber();


      

// 3.31

// function reverse () {

//     let number;

//     while(number!=-1) {

//         number = +prompt("enter your number to reverse it");

//         if(number!=-1) {

//             let remainder;
//             let reversedNumber=0;

//             while(number !==0 ) {
//                 remainder = number%10;
//                 reversedNumber = (reversedNumber*10 + remainder);
//                 number = parseInt(number/10);
//             };
//             alert("the reversed number is " + reversedNumber );
//         };
//     };  
// };

// reverse ();



// 3.32 

// function gcd () {

//     let number1; 
//     let number2;
//     let bool = true;
//     let err = "you must enter an integer";

//     while(bool) {

//         number1 = +prompt("enter number 1");
//         number2 = +prompt("enter number 2");
//         let num1 = number1;
//         let num2 = number2;
    
//         if( parseInt(number1) == number1 && parseInt(number2) == number2 ) {

//             if(number1<0){
//                 number1 = number1*-1;
//             };
    
//             if(number2<0){
//                 number2 = number2*-1;
//             };

//             let max = number1;
//             let min = number2;
    
//             if(number2>max){
//                 min=number1;
//                 max=number2;
//             };
        
//             for(let i=min; i>=1; i--){
//                 if(number1%i==0 && number2%i==0){
//                     alert(`largest common divider for ${num1} and ${num2}  is  ${i} `);
//                     break;
//                 };
//             };  
          
//         }else{
//             alert(err);
//             bool = false;
//         };
     
//     };  
// };

// gcd();





// 3.33

// function qualityPoints () {

//     let countOfStudents = 0;
//     let sum = 0;
//     let grade;
    
//     while(grade!=-1){
//          grade = +prompt("Enter each student's average grade, enter -1 when finish");

//          if(grade>100 || grade <-1){
//              alert("enter correct grade");
//          };

//          if( grade>=0 && grade<=100){
//             sum+=grade;
//             countOfStudents++;  
//          };   
//     };

//     let avg = sum/countOfStudents;

//     if(avg<60){
//         alert("the result is 0");
//     };

//     if(avg >=60 && avg<=69){
//         alert("the result is 1");
//     };

//     if(avg >=70 && avg<=79){
//         alert("the result is 2");
//     };

//     if(avg >=80 && avg<=89){
//         alert("the result is 3");
//     };

//     if(avg >=90 && avg<=100){
//         alert("the result is 4");
//     };
    
// };


// qualityPoints ();



// 3.35


// function rand () {

//     let counter = 0;
//     let answered;
//     let rightAnswer;
//     let rand1 = rightAnswer? rand1 : Math.ceil (Math.random()*9 );
//     let rand2 = rightAnswer? rand2 : Math.ceil (Math.random()*9 ); 

//     while(counter==0){
//         rightAnswer = rand1*rand2;
//         answered = +prompt(`how much will be ${rand1}*${rand2}`);

//         if(answered == rightAnswer) {
//             alert("its ok");
//             rand1 = Math.ceil (Math.random()*9 );
//             rand2 = Math.ceil (Math.random()*9 );
//         }else{
//             alert("try again");
            
//         };
//         counter++;
//     };
  
// };

// rand ();


// 3.37


// function rand2 () {

//     let counter = 0;
//     let right = 0;
//     let wrong = 0;
//     let bool = true;

//     while(bool){

//         let rand1 = Math.ceil (Math.random()*9 );
//         let rand2 = Math.ceil (Math.random()*9 );
    
//         let answered = +prompt(`how much will be ${rand1}*${rand2}`);
//         let rightAnswer = rand1*rand2;

//         if(answered == rightAnswer) {
//             alert("its ok");
//             right++;
//             counter++
//         }else{
//             alert("try again");
//             wrong++
//             counter++;
//         };

//         if(counter == 10) {
//             if(right<8) {
//                 document.write("you need help");
//                 right = 0;
//                 counter = 0;
//                 bool = false;
//             }else{
//                 alert("you can continue");
//                 console.log(counter);
//                 counter = 0;
//                 right = 0;  
//             };
//         };

//     };
  
// };

// rand2 ();







