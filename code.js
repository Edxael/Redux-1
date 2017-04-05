console.log("Redux 4");

function numDW(){
    console.log("Inside");
    document.getElementById("va-2").innerHTML -= 1;
}

function numUP(){
    console.log("inside NumUP");
    var num1 = parseInt( document.getElementById("va-2").innerHTML );
    console.log(num1);
    stop = setInterval(
        function(){
            num1 += 1;
            console.log("Num1 value: " + num1);
            document.getElementById("va-2").innerHTML = num1;
         },
         1000);
}
