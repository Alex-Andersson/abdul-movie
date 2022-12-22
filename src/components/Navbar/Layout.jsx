

import { Box } from "./Box";

export const Layout = ({ children }) => (
  <Box
    css={{
      maxW: "100%",
      borderRadius: "$xs",
    }}
  >
    {children}

  </Box>
);