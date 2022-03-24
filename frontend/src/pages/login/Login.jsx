import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Title from "../../components/Title";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import Api from "../../components/Api";

import Notify from "../../components/Notify";

import { Link } from "react-router-dom";

const Login = props => {
  const [showPass, setShowPass] = useState(false);

  const toggleButton = () => {
    setShowPass(!showPass);
  };

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const onSubmit = e => {
    Api.post("login", {
      email: e.email,
      password: e.password,
    })
      .then(Response => {
        Notify.notify(Response.data.message);
        localStorage.setItem("token", Response.data.token);
        navigate("addtodo");
      })
      .catch(Error => {
        Notify.notify(Error.data.msg);
      });
  };

  return (
    <div className="login">
      <Title>LOG IN</Title>
      <div className="input-login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <h2>SIGN UP</h2>
          </Link>
          <Input
            names="email"
            placeholder="Email..."
            register={register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />

          {errors.email && errors.email.type === "required" && (
            <p>⚠ This field is required</p>
          )}

          {errors.email && errors.email.type === "pattern" && (
            <p>⚠ Invalid email</p>
          )}
          <div className="input-password">
            <Input
              type={showPass ? "text" : "password"}
              placeholder="Password..."
              register={register("password", {
                required: true,
                minLength: 5,
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <p>⚠ This field is required</p>
            )}

            {errors.password && errors.password.type === "minLength" && (
              <p>⚠ Password min 5 characters</p>
            )}

            {showPass ? (
              <AiFillEyeInvisible
                className="show-pass"
                onClick={toggleButton}
              />
            ) : (
              <AiFillEye className="show-pass" onClick={toggleButton} />
            )}
          </div>
          <Button>LOGIN</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
