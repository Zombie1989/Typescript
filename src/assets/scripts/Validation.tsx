export const validateName = (
    elementName: string, 
    value: string, 
    regEx: RegExp = /^[a-öA-Ö ]{2,30}$/
    ) => {
        if(value.length == 0)
            return `${elementName} is required`
        else if (!regEx.test (value))
            return `${elementName} need you to use valid letters and contain ${regEx} characthers `
        else 
            return ''
}

export const validateText = (
    elementName: string, 
    value: string, 
    minLength: number = 2
    ) => {
        if(value.length == 0)
            return `${elementName} is required`
        else if (value.length < minLength)
            return `${elementName} need to contain ${minLength} characthers `
        else 
            return ''
}

export const validateEmail = (
    elementName: string, 
    value:string, 
    regEx: RegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
    ) => {
        if(value.length == 0)
            return `${elementName} is required`
        else if (!regEx.test (value))
            return `${elementName} need be a valid e-mail address `
        else 
            return ''
}




/*
export const submitData = async (url:any, method:any, data:any, contentType = 'application/json')=> {

    const res = await fetch (url, {
        method: method,
        headers: {
        'Content-Type': contentType
        },
        body: data
    })

    if (res.status === 200)
        return true
    
    return false
}



export const validate = (e:any, form?:any) => {
   if (e.type === 'submit') {
    const errors:any = {}
    errors.name = validate_name(form.name)
    errors.email = validate_email(form.email)
    errors.comments = validate_comments(form.comments)
    return errors

   } else {
        const {id, value} = e.target
        switch(id) {
            case 'name':
                return validate_name(value)
            case 'email':
                return validate_email(value)
            case 'comments':
                return validate_comments(value)
        }
   }
}


const validate_name = (value:any) => {
    const regex_name = /^[a-öA-Ö ]{2,30}$/;

    if (!value)
        return 'A name is required'
    else if (!regex_name.test(value))
        return 'Must be a valid name'
    else
        return null
}

const validate_email = (value:any) => {
    const regex_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    if (!value)
        return 'An email address is required'
    else if (!regex_email.test(value))
        return 'Must be a valid email address'
    else
        return null
}

const validate_comments = (value:any) => {
    if (!value)
        return 'A comment is required'
    else if (value.length < 10)
        return 'Your comment must be at least 10 characters long'
    else
        return null
}
*/