import React from "react";
import { Input } from "semantic-ui-react";

export const Login: React.FC = () => {
  return <Render></Render>;
};

const LoginInput = () => <Input icon="search" placeholder="Login" />;
const PasswordInput = () => <Input icon="search" placeholder="Password" />;

const Render: React.FC = () => {
  return (
    <div className="Login">
      <LoginInput></LoginInput>
      <PasswordInput></PasswordInput>
    </div>
  );
};
