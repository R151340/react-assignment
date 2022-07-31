import { useState } from "react";
import Cookies from "js-cookie";
import { Redirect, useHistory } from "react-router-dom";
import {
  CheckBox,
  Dflex,
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
import { phnoRegex } from "../../config/validationConstants";

const LoginPage = () => {
  const history = useHistory();
  const [phnoInput, setPhnoInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const accessToken = Cookies.get("jwt_token");
  if (accessToken !== undefined) return <Redirect to={routes.home} />;

  const saveTokenAndGoToHome = (token: string) => {
    Cookies.set("jwt_token", token, { expires: 5 });
    history.replace("/");
    notifySuccessToast("Login successful !");
  };

  const onSubmitForm = async (event: any) => {
    event.preventDefault();
    if (!phnoInput.match(phnoRegex)) notifyErrorToast("Invalid Phone Number");
    else saveTokenAndGoToHome("SOME_RANDOM_TOKEN");
  };

  const shouldDisableButton = () => !(phnoInput && passwordInput);

  return (
    <LoginResponsiveContainer>
      <LoginForm onSubmit={onSubmitForm}>
        <WebsiteLogoImg alt="website logo" src={websiteLogo} />
        <Label htmlFor="phnoInput">Phone Number</Label>
        <Input
          type="tel"
          id="phnoInput"
          maxLength={14}
          value={phnoInput}
          onChange={(e: any) => setPhnoInput(e.target.value)}
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
        <SubmitBtn type="submit" disabled={shouldDisableButton()}>
          Login
        </SubmitBtn>
      </LoginForm>
    </LoginResponsiveContainer>
  );
};

export default LoginPage;
