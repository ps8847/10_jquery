// for (var i = 0; i < 5; i++) {

//     setTimeout(function() {

//         console.log(i);

//     }, i * 1000);
// }
 for (let i = 0; i < 5; i++) {

     setTimeout(function() {

         console.log(i);

     }, i * 1000);
 }

// const call = (a) => {
//     return (b) => {
//         return (c) => {
//             return a * b * c;
//         };
//     };
// };
// console.log("output with arrow function", call(2)(4)(6));


//var num = 4;

//function outer() {
//    var num = 2;

//    function inner() {
//        num++;
//        var num = 3;
//        console.log("num", num);
//    }
//    inner();
//}
//outer();

//function sayHi() {
//    return (() => 0)();
//}