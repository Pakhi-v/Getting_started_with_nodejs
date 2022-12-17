//The answer to fix callback hell is to use promises. (Assertion, resolve, reject, contract)

let goodmarkspromise = new Promise((resolve,reject) => {

    //assertion
    let isscoregood = true;
    if(isscoregood){
        resolve('cycle')
    }
    else{
        reject('quarantine');
    }
});
goodmarkspromise.then((Fromresolve) => {
       console.log("hey i got" + Fromresolve);
})
.catch((Fromreject) => {
    console.log('hey i got' + Fromreject);
})