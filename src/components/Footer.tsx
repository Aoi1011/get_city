import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "48px 0px",
    backgroundColor: "#424242",
    maxWidth: "100%",
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

interface FooterProps {
  description: string;
  title: string;
}

const Footer = (props: FooterProps) => {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <div>
      <Box
        component="footer"
        sx={{ bgcolor: "background.paper", py: 6 }}
        style={{ padding: "5rem", backgroundColor: "lavender" }}
      >
        
          <Typography variant="h6" align="center" gutterBottom>
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            color="text.secondary"
            component="p"
          >
            {description}
          </Typography>
          <Copyright />
        
      </Box>
    </div>
  );
};

export default Footer;
