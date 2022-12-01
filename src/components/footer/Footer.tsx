// import { Box } from "@mui/material";
// import React from "react";

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         width: "80%",
//         position: "absolute",
//         bottom: "1%",
//         border: "2px solid red",
//         display: "flex",
//         justifyContent: "center",
//         alignContent: "center"
//       }}
//     >
//       Test Twitter Facebook
//     </Box>
//   );
// };

// export default Footer;

import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Twitter from '@mui/icons-material/Twitter';
import Facebook from '@mui/icons-material/Facebook';
import Email from '@mui/icons-material/Email';
import Copyright from '@mui/icons-material/Copyright';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{
        width: "95%",
        position: "absolute",
        bottom: "0.1em",
        display: "flex",
        justifyContent: "center",
      }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Copyright" icon={<Copyright />} />
        <BottomNavigationAction label="Twitter" icon={<Twitter />} />
        <BottomNavigationAction label="Facebook" icon={<Facebook />} />
        <BottomNavigationAction label="Email" icon={<Email />} />
      </BottomNavigation>
    </Box>
  );
}