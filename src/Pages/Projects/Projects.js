import React, { Component } from "react";
import { Box } from "@material-ui/core";
import { withAuthenticator } from "aws-amplify-react";
import AuthTheme from "../../Config/AuthTheme";
import { signUpConfig } from "../../Config/AuthConfig";

class Projects extends Component {
  render() {
    return <Box>Projects</Box>;
  }
}
export default withAuthenticator(
  Projects,
  false,
  [],
  null,
  AuthTheme,
  signUpConfig
);
