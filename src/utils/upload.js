export const uploadPayload = (formValues, userId, documentId) => {
    let fields = [];
    Object.keys(formValues).forEach((item, i) => {
        let fieldTemplate = {
            'field_name': '',
            'field_value': ''
        } 
        fieldTemplate.field_name = item;
        fieldTemplate.field_value = !isNaN(formValues[item]) ? +formValues[item] : formValues[item];
        fields.push(fieldTemplate);
    }) 
    return {
        "data": {
            "user_id": +userId,
            "document_id": +documentId,
            "fields": fields
        }
    }
}