import { toast } from "react-toastify";

export const notifyErrorToast = (msg: string) =>
  toast.error(msg, {
    position: "bottom-center",
    autoClose: 5000,
    closeOnClick: true,
    pauseOnHover: true,
    style: {
      background: "#eb3f3a",
      fontWeight: 700,
      color: "white",
    },
    progressStyle: { backgroundColor: "#ffffff80" },
  });

export const notifySuccessToast = (msg: string) =>
  toast.success(msg, {
    position: "bottom-center",
    autoClose: 2000,
    closeOnClick: true,
    pauseOnHover: true,
    style: {
      background: "#00b227",
      fontWeight: 700,
      color: "white",
    },
    progressStyle: { backgroundColor: "#ffffff80" },
  });
