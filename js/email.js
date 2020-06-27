function sendEmail(){
    $("#contact-form-outer").toggleClass("hidden");
    $('#final-message').addClass('show');
    
    setTimeout(function(){
        $('#contact-popup').toggleClass('open'); 
    },1500);

    let name = $("#name").val();
    let email = $("#email").val();
    let subject = $("#subject").val();
    let content = $("#content").val();
    let subscribe = $("#consent-checkbox").is(':checked');
    let packet = {
        name: name,
        email: email,
        subject: subject,
        content: content,
        subscribe: subscribe
    }
    packet = JSON.stringify(packet);
    console.log("sending");
    // $.post('http://mihainuica.com/marigold/mail.php', packet,  function(response){
    //     console.log(JSON.parse(response));
    // });
}