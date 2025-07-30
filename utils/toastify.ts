
import { toast } from "react-toastify";
import { makeStore } from "@/store/store";


type reactToastifyType = "info" | "success" | "warning" | "error"

interface reactToastify {
    type?: reactToastifyType,
    message?: string,
    delay?: number
}

export const reactToastify = (reactToastify: reactToastify) => {
    const { type, message, delay } = reactToastify

    const states = makeStore().getState()
    const savedTheme = states.appTheme.theme;
    const dir = states.appLanguage.lang?.rtl ? "rtl" : "ltr"
    const finalMessage = message ? message : ""
    const finalDelay = delay === 0 || delay === undefined ? 3000 : (delay * 1000)
    const theme = savedTheme === "light" ? "light" : "dark"
    const position = dir === "rtl" ? "bottom-left" : "bottom-right"


    switch (type) {
        case undefined:
            toast(finalMessage, {
                position: position,
                autoClose: finalDelay,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: theme,
                rtl: dir === "rtl"
                // transition:,
            });
            break;
        case "success":
            toast.success(finalMessage, {
                position: position,
                autoClose: finalDelay,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: theme,
                rtl: dir === "rtl"
                // transition:,
            });
            break;
        case "error":
            toast.error(finalMessage, {
                position: position,
                autoClose: finalDelay,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: theme,
                rtl: dir === "rtl"
                // transition:,
            });
            break;
        case "warning":
            toast.warning(finalMessage, {
                position: position,
                autoClose: finalDelay,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: theme,
                rtl: dir === "rtl"
                // transition:,
            });
            break;
        case "info":
            toast.info(finalMessage, {
                position: position,
                autoClose: finalDelay,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: theme,
                rtl: dir === "rtl"
                // transition:,
            });
            break;

        default:
            break;
    }


}