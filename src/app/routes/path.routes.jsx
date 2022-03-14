const ROUTES = {
    HOME : "/",
    LOGIN : "/auth/login",
    LOGIN_OTHERS : "/login/adm-tutor",
    REGISTER_SUPADMIN : "/auth/sup/admin/register",
    REGISTER_STUDENT : "/auth/student/register",
    REGISTER_PARENT : "/auth/parent/register",
    FORGOT_PASSWORD : "/auth/forgot",
    RESET_PASSWORD : "/reset-password",
    CONFIRM_EMAIL: "/active-account",
    CONFIRM_CHANGE_EMAIL: "/confirm-email",
    STUDENT : "/student/dashboard",
    TUTOR : "/tutor/dashboard",
    PARENT : "/parent/dashboard",
    ADMIN : "/admin/dashboard",
    SUP_ADMIN : "/admin/sup/dashboard",
    VIDEO_CHAT: "/room/chat",
    CONTACT : "/contact",
    ABOUT : "/about",
    PAYMENT_PROCESS : "/process/payment",
    PAYMENT : "/custom/payment"
}
export default ROUTES;