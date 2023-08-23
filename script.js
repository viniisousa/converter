function converter(num){
    var dec = Number(num)
    var bin = dec.toString(2)
    document.getElementById("result").innerText=bin
}