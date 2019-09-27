function convert(){
    let inputA= (document.getElementById("Money").value);
    let from = document.getElementById("From").value;
    let to = document.getElementById( "To").value;
    alert(to);
    if(from == "VND" && to == "USD"){
       let inputB = (inputA/23000);
       alert(inputB);
    }else if(from == "USD" && to == "VND"){
        let inputB = (inputA*23000);
        alert(inputB);
    }else {
        alert("ok");

    }
 }