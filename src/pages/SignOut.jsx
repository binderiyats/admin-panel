import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ({ setMe }) {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("me");
    setMe(undefined);

    navigate("/signin");
  }, []);
}
