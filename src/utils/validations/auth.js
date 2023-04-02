export const fullNameValidation = {
    name: 'fullName',
    options: {
        required: {
            value: true,
            message: 'Vui lòng nhập họ và tên'
        },
    }
}

export const emailValidationProperty = {
    name: 'username',
    options: {
        required: {
            value: true,
            message: 'Vui lòng nhập username'
        }
    }
}

export const passwordValidationPropery = {
    name: 'password',
    options: {
        required: {
            value: true,
            message: 'Vui lòng nhập mật khẩu'
        },
        minLength: {
            value: 6,
            message: 'Mật khẩu ít nhất 6 ký tự' 
        }
    }
}
