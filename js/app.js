var slider = document.getElementById("myRange");
var output = document.getElementById("value");

// Wyświetla domyślną wartość pod sliderem
output.innerHTML = slider.value + " $";

// Zapisuje nową wartość i ją wyświetla
slider.oninput = function() {
    output.innerHTML = slider.value + " $";
}

/*---------Skrypt do wyświetlania obowiązkowych inputów, gdy są puste. Na razie zajmuje się tym właściwość "required" w tagach--------------

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