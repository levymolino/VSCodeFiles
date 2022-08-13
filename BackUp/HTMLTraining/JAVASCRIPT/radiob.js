function myFunction() {
    var ele = document.getElementsByName('g');
      
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked)
        document.getElementById("result").innerHTML
                = "Gender: "+ele[i].value;
    }
}