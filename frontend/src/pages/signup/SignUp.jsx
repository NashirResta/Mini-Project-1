import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Title from "../../components/Title";
import "./SignUp.css";
import Input from "../../components/Input";

import Api from "../../components/Api";
import { Link, useNavigate } from "react-router-dom";

import Notify from "../../components/Notify";

const SignUp = props => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const [matchPass, setMatchPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [validatePass, setValidatePass] = useState("");

  const navigate = useNavigate();

  const onSubmit = e => {
    if (matchPass === confirmPass) {
      Api.post("createUser", {
        firstname: e.firstName,
        lastname: e.lastName,
        email: e.email,
        password: e.password,
        confirmpassword: e.confirmpassword,
      }).then(e => {
        Notify.notify("Akun berhasil dibuat");
        navigate("/");
        setValidatePass("");
      });
    } else {
      setValidatePass("Password tidak sama");
    }
  };

  return (
    <div className="sign-up">
      <Title>SIGN UP</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-sign">
          <Link style={{ textDecoration: "none" }} to="/">
            <h2>LOG IN</h2>
          </Link>

          <div className="input-name">
            <div className="first-name">
              <Input
                name="firstname"
                type="text"
                placeholder="First Name..."
                register={register("firstName", {
                  required: true,
                })}
              />
              {errors.firstName && errors.firstName.type === "required" && (
                <p>⚠ First name is required</p>
              )}
            </div>
            {/* ---------------------------------------------------------- */}
            <div className="last-name">
              <Input
                name="lastName"
                type="text"
                placeholder="Last Name..."
                register={register("lastName", {
                  required: true,
                })}
              />
              {errors.lastName && errors.lastName.type === "required" && (
                <p>⚠ Last name is required</p>
              )}
            </div>
          </div>

          {/* ---------------------------------------------------------- */}
          <Input
            name="email"
            type="text"
            placeholder="Email..."
            register={register("email", {
              required: true,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <p>⚠ Email is required</p>
          )}

          {/* ---------------------------------------------------------- */}
          <Input
            type="password"
            placeholder="Password..."
            register={register("password", {
              required: true,
              minLength: 5,
              onChange: e => setMatchPass(e.target.value),
            })}
          />
          {errors.password && errors.password.type === "required" && (
            <p>⚠ Password is required</p>
          )}
          {/* ---------------------------------------------------------- */}
          <Input
            type="password"
            placeholder="Confirm Password..."
            register={register("confirmPassword", {
              required: true,
              minLength: 5,
              onChange: e => setConfirmPass(e.target.value),
            })}
          />
          {validatePass && <p>⚠ {validatePass}</p>}

          {errors.confirmPassword &&
            errors.confirmPassword.type === "required" && (
              <p>⚠ Confirm password is required</p>
            )}

          <Button>SIGN UP</Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
