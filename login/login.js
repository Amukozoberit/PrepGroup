$(document).ready(function(event) {

    $("button#btn1").click(function() {

        let email = $("input#exampleInputEmail1").val();
        let password = $("input#pasword").val();
        if ((email === "") || (password === "")) {
            alert("you have empty inputs checkout");
        } else {
            alert(email);
        }


    });

});