export const getSignInPayload = values => {
    return {
        "data": {
            "login": values.email,
            "password": values.password
        }
    }
}

