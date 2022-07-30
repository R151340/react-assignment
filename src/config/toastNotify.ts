import { toast, TypeOptions } from "react-toastify";

const toastNotify = (msg: string, type: TypeOptions | undefined) => {
  return toast(msg, {
    position: "bottom-center",
    autoClose: type === "error" ? 5000 : 3000,
    closeOnClick: true,
    pauseOnHover: true,
    type: type,
    style: {
      background: type === "error" ? "#eb3f3a" : "#00b227",
      fontWeight: 700,
      color: "white",
    },
  });
};

export default toastNotify;
