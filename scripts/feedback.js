function SendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("issue").value
    }
    emailjs.send('service_fmaaae9', 'template_v9nrzes', params).then(function (res) {
        alert("Your mail has been sent successfully"+res.status);
    })
}