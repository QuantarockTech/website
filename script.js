let btn = document.querySelector("button");


function message(){
    var Name = document.getElementById('name');
    var Email = document.getElementById('email');
    var Phone = document.getElementById('number');
    var Msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || Email.value === '' || Phone.value === '' || Msg.value ===''){
        alert("fill all the fields!!");
    }

    alert("Successfuly submit");
};
btn.addEventListener("click", message);
