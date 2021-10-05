var slider = document.getElementById("myRange");
var output = document.getElementById("value");
output.innerHTML = slider.value + " $"; // Wyświetla domyślną wartość pod sliderem

// Zapisuje nową wartość i ją wyświetla
slider.oninput = function() {
    output.innerHTML = slider.value + " $";
}

/*---------Script for empty fields check (instead of "required" property)--------------

btn = document.getElementById("button");

function validate()
{
    let msg= "",
        fields = document.getElementById("form_id").querySelectorAll(".input");

    for (let i=0; i<fields.length; i++){
        if (fields[i].value == "") 
            msg += 'Wypełnij pole ' + fields[i].name + '\n';
    }

    if(msg) {
        alert(msg);
    }
}

btn.onclick = function(){
    validate();
}
*/