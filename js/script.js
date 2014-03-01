//var checkedValue = ;
//trying to make variable global in the above line
//solved by function calls
function not()
{
var checkedValue1 = document.getElementById('switch1').checked;

if (checkedValue1 == true) {
    document.getElementById('input1').innerHTML = "<p>Input 1 | TRUE</p>";
    document.getElementById('op').innerHTML = "<p>Output | FALSE</p>";
    document.getElementById('outputbox').className = "outputboxFalse";
}
else
{
    document.getElementById('input1').innerHTML = "<p>Input 1 | FALSE</p>";
    document.getElementById('op').innerHTML = "<p>Output | TRUE</p>";
    document.getElementById('outputbox').className = "outputboxTrue";
}

}

function Gate(type) {
    var checkedValue1 = document.getElementById('switch1').checked;
    var checkedValue2 = document.getElementById('switch2').checked;

    /*
    
    Some crappy code used due to no knowledge of .checked attribute which is in action above^^^
    
    var inputElements = document.getElementsByTagName('input');
           for (var i = 0; inputElements[i]; ++i)
           {
               document.getElementById('test2').innerHTML = "checked1" + checkedValue1 + "<br/>checked 2" + checkedValue2;
               if (inputElements[i].id === 'switch1' && inputElements[i].checked)
               {
                 var checkedValue1 = true;
                   //break;
               }
               else
               {
                  var checkedValue1 = false;
                   //break;
               }


               if (inputElements[i].id === 'switch2' && inputElements[i].checked)
               {
                 var checkedValue2 = true;
                   //break;
               }

               else
               {
                 var checkedValue2 = false;
                   //break;
               }
           }*/

    if (checkedValue1 == true && checkedValue2 == true) {
        document.getElementById('input1').innerHTML = "<p>Input 1 | TRUE</p>";
        document.getElementById('input2').innerHTML = "<p>Input 2 | TRUE</p>";
        // document.getElementById('test').innerHTML = "checked1" + checkedValue1 + "<br/>checked 2" + checkedValue2;
    }

    if (checkedValue1 == true && checkedValue2 == false) {
        document.getElementById('input1').innerHTML = "<p>Input 1 | TRUE</p>";
        document.getElementById('input2').innerHTML = "<p>Input 2 | FALSE</p>";
        //document.getElementById('test').innerHTML = "checked1" + checkedValue1 + "<br/>checked 2" + checkedValue2;
    }

    if (checkedValue1 == false && checkedValue2 == true) {
        document.getElementById('input1').innerHTML = "<p>Input 1 | FALSE</p>";
        document.getElementById('input2').innerHTML = "<p>Input 2 | TRUE</p>";
        //document.getElementById('test').innerHTML = "checked1" + checkedValue1 + "<br/>checked 2" + checkedValue2;
    }

    if (checkedValue1 == false && checkedValue2 == false) {
        document.getElementById('input1').innerHTML = "<p>Input 1 | FALSE</p>";
        document.getElementById('input2').innerHTML = "<p>Input 2 | FALSE</p>";
        //document.getElementById('test').innerHTML = "checked1" + checkedValue1 + "<br/>checked 2" + checkedValue2;
    }
    var gate = type;

    switch (gate) {
        case "and":
            andOutput(checkedValue1, checkedValue2);
            break
        case "or":
            orOutput(checkedValue1, checkedValue2);
            break
        case "nand":
            nandOutput(checkedValue1, checkedValue2);
            break
        case "nor":
            norOutput(checkedValue1, checkedValue2);
            break
        case "xor":
            xorOutput(checkedValue1, checkedValue2);
            break
        case "xnor":
            xnorOutput(checkedValue1, checkedValue2);
            break
    }
}

    function andOutput(val1, val2) {
        var op = val1 && val2;
        if (op == true)
        {
            document.getElementById('op').innerHTML = "<p>Output | TRUE</p>";
            document.getElementById('outputbox').className = "outputboxTrue";
            //document.getElementById('outputbox').style.cssText = "background:#2EEF44;";
            //var e = document.getElementsByClassName('outputbox');
            //e.backgorundColor = "#2EEF44";
        }
        else {
            document.getElementById('op').innerHTML = "<p>Output | FALSE</p>";
            document.getElementById('outputbox').className = "outputboxFalse";
            //document.getElementById('outputbox').style.cssText = "background:#D93838;";
            //document.getElementsByClassName('outputbox').setAttribute('background:#D93838');
            //e.backgorundColor = "#D93838";
        }
    }

    function orOutput(val1, val2) {
        var op = (val1 || val2);
        if (op == true)
        {
            document.getElementById('op').innerHTML = "<p>Output | TRUE</p>";
            document.getElementById('outputbox').className = "outputboxTrue";
        }
        else
        {
            document.getElementById('op').innerHTML = "<p>Output | FALSE</p>";
            document.getElementById('outputbox').className = "outputboxFalse";
        }
    }

    function nandOutput(val1, val2) {
        var op = val1 && val2;
        if (op !== true)
        {
            document.getElementById('op').innerHTML = "<p>Output | TRUE</p>";
            document.getElementById('outputbox').className = "outputboxTrue";
        }
        else
        {
            document.getElementById('op').innerHTML = "<p>Output | FALSE</p>";
            document.getElementById('outputbox').className = "outputboxFalse";
        }
    }

    function norOutput(val1, val2) {
        var op = val1 || val2;
        if (op !== true) {
            document.getElementById('op').innerHTML = "<p>Output | TRUE</p>";
            document.getElementById('outputbox').className = "outputboxTrue";
        }
        else
        {
            document.getElementById('op').innerHTML = "<p>Output | FALSE</p>";
            document.getElementById('outputbox').className = "outputboxFalse";
        }
    }

    function xorOutput(val1, val2) {
        var op = val1 ^ val2;
        if (op == true) {
            document.getElementById('op').innerHTML = "<p>Output | TRUE</p>";
            document.getElementById('outputbox').className = "outputboxTrue";
        }
        else
        {
            document.getElementById('op').innerHTML = "<p>Output | FALSE</p>";
            document.getElementById('outputbox').className = "outputboxFalse";
        }
    }

    function xnorOutput(val1, val2) {
        var op = val1 ^ val2;
        if (op == true) {
            document.getElementById('op').innerHTML = "<p>Output | FALSE</p>";
            document.getElementById('outputbox').className = "outputboxFalse";
        }
        else
        {
            document.getElementById('op').innerHTML = "<p>Output | TRUE</p>";
            document.getElementById('outputbox').className = "outputboxTrue";
        }
        
    }