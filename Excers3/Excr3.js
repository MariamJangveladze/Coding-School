const registration = confirm("Do you want to create account?");
const yesreg = "Yes";
const noreg = "No";

if (registration) {
    console.log(yesreg);
    const fname = prompt(
        'Enter Your First Name ')
    const lname = prompt(
        "Enter Your Last Name"
    )
    const age = prompt (" Enter Your Age")
     if (age <18){
        const denide = alert ("You can not sign up")
     } else { 
        const Email=prompt(
            "Enter Your E-mail Adress"
        )
        const congr = alert ( "Hello" + "  " + fname + "  " + lname + "!  " + "Congrats with registration!" )

    }
   
} else{
    const norepl = alert ("Good Bye!");
}
