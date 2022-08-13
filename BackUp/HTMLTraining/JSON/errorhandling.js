try{
    nonExistingFunction();
}catch(error){
    console.log(error);
}

try{
    throw 'myException';
}catch(e){
    logRaisedErrors(e)
}


try{
    myRoutine();
}catch(e){
    if(e instanceof TypeError){

    }else if(e instanceof RangeError){

    }else if(e instanceof EvalError){

    }else{
        logMyErrors(e);
    }
}