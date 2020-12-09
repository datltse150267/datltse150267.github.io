function check1(obj)
{
    if (event.keyCode==13) { //neu phim kich hoat ham check1 la phim enter
    if (obj.value=="")
    {
    alert("please input a keyword");
    obj.onfocus(); // dat dau nhay chuot len control nay
    }
    }
}

function check2()
{
    //alert("feewS");
    //Lay the input co id='txt1'
   var tag1 = document.getElementById('txt1'); 
    var tag2 = document.getElementById('txt2');

    if (tag1.value=="")
    {
        alert("Username is invalid");
        return false;
    }
    else if (tag2.value.length<8 || tag2.value.length>12)
    {
        alert("Password is invalid");
        return false;
    }
    else
    {
        var tmp=window.open();
        tmp.document.write("<h1> your information </h1>");
        tmp.document.write("<p> username:" +tag1.value+ "</p>");
        var tag3=document.getElementById('txt3');
        var s=tag3.options[ tag3.selectedIndex].text;
        tmp.document.write("<p> your links:" +s+ "</p>");
        return true;
    }
    
}

function zoomout(obj) {
    obj.style.width="150px";
    obj.style.height="150px";
}

function zoomin(obj) {
    obj.style.width="100px";
    obj.style.height="100px";
}
