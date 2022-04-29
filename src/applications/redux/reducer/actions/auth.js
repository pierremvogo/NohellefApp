import {
    types
} from '../types';

export const authLogin = (payload) => ({
    type: types.LOGIN_REQUESTED,
    payload,
});

export const authRegister = (payload) => ({
    type: types.REGISTER_REQUESTED,
    payload,
});

export const authLogout = () => ({
    type: types.LOGOUT_REQUESTED,
});


export const authLoginSuccess = (payload) => ({
    type: types.LOGIN_SUCCESS,
    payload,
});

export const authgetResetTokenSuccess = (payload) => ({
    type: types.TOKEN_SUCCESS,
    payload,
});

export const authgetResetTokenFailed = (message) => ({
    type: types.TOKEN_FAILED,
    message,
});

export const authgetCodeAdminFailed = (message) => ({
    type: types.CODE_ADMIN_FAILED,
    message,
});

export const authgetCodeAdminSuccess = (payload) => ({
    type: types.CODE_ADMIN_SUCCESS,
    payload,
});

export const authResetFailed = (message) => ({
    type: types.RESET_FAILED,
    message,
});

export const authResetSuccess = (payload) => ({
    type: types.RESET_SUCCESS,
    payload,
});

export const authLoginFailed = (message) => ({
    type: types.LOGIN_FAILED,
    message,
});

export const authShowMessage = (isShow) => ({
    type: types.SHOW_MESSAGE,
    isShow,
});

export const authSetLoginForm = (formData) => ({
    type: types.SET_LOGIN_FORM,
    formData,
});

export const authConfirmEmailSuccess = (payload) => ({
    type: types.CONFIRM_EMAIL_SUCCESS,
    payload,
})

export const authConfirmEmailFailed = (message) => ({
    type: types.CONFIRM_EMAIL_FAILED,
    message,
})

export const authChangeSuccess = (payload) => ({
    type: types.CHANGE_SUCCESS,
    payload,
})

export const authChangeFailed = (message) => ({
    type: types.CHANGE_FAILED,
    message,
})

export const authSetChangeForm = (formData) => ({
    type: types.SET_CHANGE_FORM,
    formData,
})

export const authSetRegisterForm = (formData) => ({
    type: types.SET_REGISTER_FORM,
    formData,
});

export const authRegisterSuccess = (payload) => ({
    type: types.REGISTER_SUCCESS,
    payload
});

export const authRegisterFailed = (message) => ({
    type: types.REGISTER_FAILED,
    message
});

export const authUpdateFailed = (message) => ({
    type: types.UPDATE_FAILED,
    message
});

export const authUpdateSuccess = (payload) => ({
    type: types.UPDATE_SUCCESS,
    payload
});

export const shareUser = (payload) => ({
    type: types.SHARE_USER,
    payload
});

export const authCreateSuccess = (message) => ({
    type: types.CREATE_SUCCESS,
    message
});

export const sharePaymentRessource = (payload) => ({
    type: types.SHARE_PAYMENT_RESSOURCE,
    payload,
});

export const shareStudentUser = (payload) => ({
    type: types.SHARE_STUDENT_USER,
    payload,
})
export const shareParentUser = (payload) => ({
    type: types.SHARE_PARENT_USER,
    payload,
})
export const shareTutorUser = (payload) => ({
    type: types.SHARE_TUTOR_USER,
    payload,
})
export const shareTutorSpecialities = (payload) => ({
    type: types.SHARE_TUTOR_SPECIALITIES,
    payload,
})
export const shareAdminUser = (payload) => ({
    type: types.SHARE_ADMIN_USER,
    payload,
})

export const authMediaId = (payload) => ({
    type: types.MEDIA_ID,
    payload,
})

export const shareCourses = (payload) => ({
    type: types.SHARE_COURSES,
    payload,
})

export const shareHoraireUser = (payload) => ({
    type: types.SHARE_HORAIRE_USER,
    payload,
})

export const shareTutorForStudent = (payload) => ({
    type: types.SHARE_TUTOR_FOR_STUDENT,
    payload,
})

export const shareMeetingProgramm = (payload) => ({
    type: types.SHARE_MEETING_PROGRAMM,
    payload,
})

export const shareMeetTutor = (payload) => ({
    type: types.SHARE_MEET_TUTOR,
    payload,
})


