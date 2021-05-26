import { keyValuePayloadMapper } from "./common"

export const getSignUpPayload = values => {
    return values ? keyValuePayloadMapper(values) : null;    
}

