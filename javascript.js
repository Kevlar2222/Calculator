const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function updateDisplay(e){
        if(String(e.target.id) == "clearall"){
            text = "";
            document.getElementById("display").innerHTML = "0";
        }
        else if(String(e.target.id) == "backspace"){
            text = text.substring(0, text.length - 1,);
            document.getElementById("display").innerHTML = text;
            if(text == ""){
                document.getElementById("display").innerHTML = "0";
            }
        }
        else if(String(e.target.id) == "."){
            console.log(text.indexOf("."));
            if(text.indexOf(".") == -1){
                text += String(e.target.id);
                document.getElementById("display").innerHTML = text;
            }
        }
        else if(String(e.target.id) == "equals"){
            text = "0" + text;
            text = text.split(/(\d*\.?\d+)/);
            text.pop();
            text.shift();
            for(let i = 0; i < text.length - 1; i++){
                if((text[i]).match(/[\*\/\+\-]{2,}/)){
                    text = "";
                    document.getElementById("display").innerHTML = "0";
                    alert("Error, double sign.")
                    break;
                }
            }
            for(let j = 0; j < text.length; j++){
                if(text[j] == "*"){
                    text.splice(j-1, 3, String(Number(text[j-1]) * Number(text[j+1])));
                    j -= 1;
                }
                if(text[j] == "/"){
                    text.splice(j-1, 3, String(Number(text[j-1]) / Number(text[j+1])));
                    j -= 1;
                }
            }
            for(let k = 0; k < text.length; k++){
                if(text[k] == "+"){
                    text.splice(k-1, 3, String(Number(text[k-1]) + Number(text[k+1])));
                    k -= 1;
                }
                if(text[k] == "-"){
                    text.splice(k-1, 3, String(Number(text[k-1]) - Number(text[k+1])));
                    k -= 1;
                }
            }
            if(text.length > 20){
                text = String(Math.round(Number(text)));
            }
            document.getElementById("display").innerHTML = text;
            if(text.includes("e+") || text.includes("e-")){
                text = "";
                document.getElementById("display").innerHTML = "0";
                alert("Can't deal with e!");
            }             
        }
        else{
            text += String(e.target.id);
            document.getElementById("display").innerHTML = text;
        }
    });
});

let text = "";