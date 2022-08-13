const number = 40;

try{
    if(number > 50)
    {
        console.log("Success");
    }
    else{
        throw new Error('the number is low');
    }

    console.log("hello");
}
catch (error){
    console.log("An error caught");
    console.log("Error message " + error);
}
finally{
    console.log("Finally will execute everytime");
}