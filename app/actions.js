export default function processAuthForm(prevState, formData) {
    // get form input values
    const email = formData.get("email");
    const password = formData.get("password");
    
    // check validation

    if(!email || !email.includes("@")) {
        return {
            message: "email error",
            error: {
                name: "Invalid email"
            },
            formField: {
                email: "",
                password: ""
            }
        }
    }

    if(!password || password.length < 6) {
        return {
            message: "password error",
            error: {
                name: "Password is not strong enough"
            },
            formField: {
                email: "",
                password: ""
            }
        }
    }

    console.log(email, password);
    return {
        message: "success",
        error: undefined,
        formField: {
            email,
            password
        }
    }
}