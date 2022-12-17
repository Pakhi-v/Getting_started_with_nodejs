//It is way more promising than promises itself
let x=0;
let transact = function(callback){
    return new Promise((resolve,reject) => {

    let random = Math.floor(Math.random() * 100);
    setTimeout(()=> {
        resolve(callback());
    },random)
});
};

(async function(){
    await transact(()=> {
    x = x+1;
    console.log("A" + x);
})
    await transact(()=> {
    x = x+1;
    console.log("B" + x);
})

}) ();

