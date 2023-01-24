import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { TOAST_CONFIG } from "../components/utils/config";
import { ToastContainer, toast } from "react-toastify";

export default function SigninSuccess({ setMe }) {
  const navigate = useNavigate();
  useEffect(() => {
    let status = 200;
    axios
      .post("https://demo-api-one.vercel.app/api/users/me")
      .then((res) => {
        setMe(res.data.body);
        localStorage.setItem("me", JSON.stringify(res.data.body));
        navigate("/");
      })
      .catch((e) => {
        const errorMsg = e.response.data.message || "aldaa garlaa";
        toast.error(errorMsg, TOAST_CONFIG);
      });

    // fetch("https://demo-api-one.vercel.app/api/users/me", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: localStorage.getItem("token"),
    //   },
    // })
    //   .then((res) => {
    //     status = res.status;
    //     return res.json();
    //   })
    //   .then((data) => {
    //     if (status === 200) {
    //       setMe(data.body);
    //       localStorage.setItem("me", JSON.stringify(data.body));
    //       navigate("/");
    //     } else {
    //       console.log(data.message);
    //       navigate("/signin");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }, []);
}
