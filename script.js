document.addEventListener("DOMContentLoaded", function(){
    var form = document.getElementById("htmlForm");

    form.addEventListener("submit", function(){
        event.preventDefault();

        var name = document.getElementById('name').value;
        console.log(name)

        var age = document.getElementById('age').value;
        console.log(age)

        alert('Name:'+ name + "\nAge" + age )
    })
})