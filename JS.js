function convert(){
    let inputA =parseFloat(document.getElementById("Money").value);
    let from = document.getElementById("From").value;
    let to = document.getElementById( "To").value;

    if(from == "VND" && to == "USD"){
       let inputB = (inputA/23000);
       let result = document.getElementById("result").innerHTML = "Kết quả: " + inputB + "VND";
    }else if(from == "USD" && to == "VND"){
        let inputB = (inputA*23000);
        alert(inputB);
    }else {
        alert("ok");

    }
 }