//import React from "react";
import { chakra, Stack } from "@chakra-ui/react";
// import { css } from "@emotion/react";
// import Link from "next/link";

// import Topbar from "./topbar";
// import Header from "./header";
// import NavMenu from "./navMenu";

function Layout({ children }) {
  return (
    <Stack>
      <chakra.header id="header"></chakra.header>
      {children}
    </Stack>
  );
}

export default Layout;
