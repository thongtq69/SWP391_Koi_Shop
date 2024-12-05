/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { verifyEmail, signin } from "../services/UserService";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import FishSpinner from "./FishSpinner";

const EmailVerification = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { loginContext } = useContext(UserContext);

  useEffect(() => {
    const verifyAndLogin = async () => {
      try {
        // 1. Verify the email
        const verifyResponse = await verifyEmail(token);

        if (verifyResponse.statusCode === 200) {
          // 2. Auto login after verification
          const loginResponse = await signin(
            verifyResponse.data.email,
            verifyResponse.data.tempToken
          );

          if (loginResponse && loginResponse.data.token) {
            loginContext(verifyResponse.data.email, loginResponse.data.token);
            navigate("/");
            toast.success("Email verified and logged in successfully!");
          }
        }
      } catch (error) {
        toast.error("Verification failed. Please try again.");
        navigate("/login");
      }
    };

    verifyAndLogin();
  }, [token, navigate, loginContext]);

  return (
    <div className="verification-container">
      <h2>Verifying your email...</h2>
      <FishSpinner />
    </div>
  );
};

export default EmailVerification;
