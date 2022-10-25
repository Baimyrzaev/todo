import { emailRegExp } from './regex'

const required = 'Обязательное поле'

interface IForm {
  required: string
  pattern?: {
    value: string | any
    message: string
  }
  minLength?: {
    value: number
    message: string
  }
}

export const Email: IForm = {
  required,
  pattern: {
    value: emailRegExp,
    message: 'Введите корректную почту',
  },
}

export const Password: IForm = {
  required,
  minLength: {
    value: 6,
    message: 'Не более 6 символов',
  },
}

export const SimpleField: IForm = {
  required,
  minLength: {
    value: 1,
    message: 'Не более 1 символа',
  },
}

