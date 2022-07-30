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
import toastNotify from "../../config/toastNotify";

const LoginPage = () => {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  const saveTokenAndGoToHome = (token: string) => {
    toastNotify("Signed in successfully !", "success");
    Cookies.set("jwt_token", token, { expires: 5 });
    history.replace("/");
  };

  const onSubmitForm = async (event: any) => {
    event.preventDefault();
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
      toastNotify(data.error_msg, "error");
      setErrorMessage(data.error_msg);
    }
  };

  const accessToken = Cookies.get("jwt_token");
  if (accessToken !== undefined) return <Redirect to={routes.home} />;

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
