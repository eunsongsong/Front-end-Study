let af = ()=>{
    console.log(this);
};
let nf = function() {
    console.log(this);
}

af();
nf();


