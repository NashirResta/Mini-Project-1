import { toast } from "react-toastify";
export default {
  notify: value => {
    toast.success(value, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  },
};
