import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Link } from "@mui/material";
import "../../enums/Pages";
import { PAGES, NAME } from "../../enums/Pages";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function DrawerAppBar(props: Props) {
  const { window } = props;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton color="inherit" size="medium">
            <AccountBoxIcon fontSize="large" />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            {NAME.MY_NAME}
          </Typography>
          <Box className="navigation-items">
            <Link href="/" color="#fff" underline="hover">
              {PAGES.HOME}
            </Link>
            <Link href="/projects" color="#fff" underline="hover">
              {PAGES.PROJECTS}
            </Link>
            <Link href="/learning" color="#fff" underline="hover">
              {PAGES.LEARNING}
            </Link>
            <Link href="/library" color="#fff" underline="hover">
              {PAGES.LIBRARY}
            </Link>
            <Link href="/about" color="#fff" underline="hover">
              {PAGES.ABOUT}
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
