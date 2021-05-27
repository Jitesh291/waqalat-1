export const getSignInPayload = values => {
    return {
        "data": {
            "login": values.email,
            "passowrd": values.password
        }
    }
}

