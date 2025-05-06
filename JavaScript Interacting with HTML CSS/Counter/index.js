const increase=()=>{
    let number=parseInt(document.getElementById("number").textContent);
    document.getElementById("number").textContent=number+1;
};

const decrease=()=>{
    let number=parseInt(document.getElementById("number").textContent);
    document.getElementById("number").textContent=number-1;
};

const reset=()=>{
    let number=parseInt(document.getElementById("number").textContent);
    document.getElementById("number").textContent=0;
};