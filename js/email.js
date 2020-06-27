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
    // console.log("sending");
    // $.post('http://mihainuica.com/marigold/mail.php', packet,  function(response){
    //     console.log(JSON.parse(response));
    // });
}

function sendEmailForm(){
    $("#contact-big-form-outer").toggleClass("hidden");
    $('#final-big-message').addClass('show');

    
    let name = $("#big-name").val();
    let email = $("#big-email").val();
    let subject = $("#big-subject").val();
    let content = $("#big-content").val();
    let subscribe = $("#big-consent-checkbox").is(':checked');
    let packet = {
        name: name,
        email: email,
        subject: subject,
        content: content,
        subscribe: subscribe
    }
    packet = JSON.stringify(packet);
    // console.log(packet);
    // $.post('http://mihainuica.com/marigold/mail.php', packet,  function(response){
    //     console.log(JSON.parse(response));
    // });
}