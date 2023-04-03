export const profileFirstNameValidationPropery = {
    name: 'firstName',
    options: {
        required: {
            value: true,
            message: 'Vui lòng nhập họ'
        },
    }
}

export const profileLastNameValidationPropery = {
    name: 'lastName',
    options: {
        required: {
            value: true,
            message: 'Vui lòng nhập tên'
        },
    }
}

export const profileUsernameValidationProperty = {
    name: 'username',
    options: {
        required: {
            value: true,
            message: 'Vui lòng nhập username'
        }
    }
}


export const profileEmailValidationProperty = {
    name: 'email',
    options: {
        required: {
            value: true,
            message: 'Vui lòng nhập email'
        },
        pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Email không hợp lệ"
        }
    }
}



export const profilePasswordValidationPropery = {
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
