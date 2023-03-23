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
    name: 'email',
    options: {
        required: {
            value: true,
            message: 'Vui lòng nhập email'
        },
        pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: 'Email không hợp lệ'
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
