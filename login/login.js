$(document).ready(function(event) {

    $("button#btn1").click(function() {

        let email = $("input#exampleInputEmail1").val();
        let password = $("input#pasword").val();
        var check = $("input[type=checkbox]:checked")
        if ((email === "") || (password === "")) {
            alert("you have empty inputs checkout");
        } else {
            if ($("#disabledFieldsetCheck").is(':checked')) {
                alert("Welcome Back!" + '\r\n' + email);
            } else {
                alert(email);
            }


        }


    });

});
