import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect, useHistory } from "react-router-dom";
import {
  CheckBox,
  Dflex,
  ErrMsg,
  Input,
  Label,
  LoginForm,
  LoginResponsiveContainer,
  SubmitBtn,
  WebsiteLogoImg,
} from "./styledComponents";
import websiteLogo from "../../assets/nxt-logo.svg";
import routes from "../../config/routeConstants";
import { notifyErrorToast, notifySuccessToast } from "../../config/toastNotify";

const LoginPage = () => {
  const history = useHistory();
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const accessToken = Cookies.get("jwt_token");
  if (accessToken !== undefined) return <Redirect to={routes.home} />;

  const saveTokenAndGoToHome = (token: string) => {
    Cookies.set("jwt_token", token, { expires: 5 });
    history.replace("/");
    notifySuccessToast("Login successful !");
  };

  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    try {
      const userDetails = { username: usernameInput, password: passwordInput };
      const URL = "https://apis.ccbp.in/login";
      const options = {
        method: "POST",
        body: JSON.stringify(userDetails),
      };
      const response = await fetch(URL, options);
      const data = await response.json();
      if (response.ok) saveTokenAndGoToHome(data.jwt_token);
      else {
        setErrorMessage(data.error_msg);
        notifyErrorToast(data.error_msg);
      }
    } catch (err: any) {
      notifyErrorToast("Error Occured!" + err.message);
    }
  };

  return (
    <LoginResponsiveContainer>
      <LoginForm onSubmit={onSubmitForm}>
        <WebsiteLogoImg alt="website logo" src={websiteLogo} />
        <Label htmlFor="nameInput">USERNAME</Label>
        <Input
          type="text"
          id="nameInput"
          value={usernameInput}
          onChange={(e: any) => setUsernameInput(e.target.value)}
        />
        <Label htmlFor="passwordInput">PASSWORD</Label>
        <Input
          type={showPassword ? "text" : "password"}
          id="passwordInput"
          value={passwordInput}
          onChange={(e: any) => setPasswordInput(e.target.value)}
        />
        <Dflex>
          <CheckBox
            type="checkbox"
            onChange={() => setShowPassword((p) => !p)}
            id="showPassword"
          />
          <Label noMargin htmlFor="showPassword">
            Show Password
          </Label>
        </Dflex>
        <SubmitBtn type="submit">Login</SubmitBtn>
        <ErrMsg>{errorMessage}</ErrMsg>
      </LoginForm>
    </LoginResponsiveContainer>
  );
};

export default LoginPage;
