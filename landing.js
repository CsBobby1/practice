var side=document.querySelector("#login-icon")
var close=document.querySelector("#x")
var submit=document.querySelector("#submit")



document.getElementById("submit").onclick = function() {
    var firstName = document.getElementById("fnameinput").value;
    var lame =document.getElementById("lnameinput").value;
    var email =document.getElementById("mail").value;
        if (firstName === '') {
             alert("Please enter your first name.");
        } else {
            console.log("First name is: " + firstName);
        }

        if (lame === '') {
            alert("Please enter your last name.");
        } else {
            console.log("last name is: " + lame);
        }

        if(!email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][com]/)){
            alert("entrer valid email");
        }
        else{
            console.log("email id is: " + email);
        }
}





gsap.from("#icon", {
    y:-1000,
    stagger:0.5,
    opacity:0,
    duration:3,
    
});
gsap.from("#navg ul li", {
    y:-1000,
    stagger:0.48,
    ease: "expoScale(0.3,7,none)",
    opacity:0,
    duration:2.5
});
gsap.from("#navg", {
    width:100,
    duration:1
});
gsap.from(".abt", {
    x:200,
    delay:1.5,
    opacity:0,
    duration:2
});
gsap.from(".text", {
    x:200,
    delay:2,
    stagger:0.1,
    opacity:0,
    duration:2
});
gsap.from("#con", {
    x:200,
    delay:1.8,
    opacity:0,
    duration:2
});
gsap.from(".con", {
    x:200,
    delay:2.5,
    stagger:0.1,
    opacity:0,
    duration:2
});









side.addEventListener("click",function(){
    gsap.to("#side", {
        x:-460,
        duration:1,
    });
})
x.addEventListener("click",function(){
    gsap.to("#side", {
        x:460,
        duration:1.3,
    });
})
