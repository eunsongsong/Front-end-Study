// import React, { Component } from 'react';

var a = "global variable";
const TAX_RATE = 10;
function dataScope() {
    let a = "function variable";
    if(true){
        let a = "if block local variable";
        // TAX_RATE = 20; // TypeError : const로 선언했기 때문에 값 변경 불가(상수 값 할당할 수 없음)
        console.log(a);
    }
    console.log(a);
}

console.log("function call before : " + a);
dataScope();
console.log("function call after : " + a);

// export default datascope;

