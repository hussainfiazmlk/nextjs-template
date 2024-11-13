'use client'
import { Theme } from "@/styles/theme/types";
import { Grid, Typography } from "@mui/material";
import {makeStyles} from '@mui/styles'
import { Container } from "@mui/system";
import Link from "next/link";
import { useRouter,usePathname } from "next/navigation";

const routes=[
    {name:'Home',link:'/'},
    {name:'About',link:'/about'}
]

const useStyles = makeStyles((theme:Theme) => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    width: `100%`,
    position: "relative",
    overflow: "hidden",
    marginTop: "6em",
    padding: "2em 0 ",
  },
  link: {
    fontSize: "1.25em",
    color: "#fff",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
  copylight: {
    color: "#fff",
    fontSize: "1em",
    "&:hover": {
      color: theme.palette.info.main,
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const path = routes;
  const router = useRouter();
  const pathname = usePathname();
  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          {path.map(({ name, link }) => (
            <Grid item key={link}>
              <Link href={link}>
                <Typography
                  className={classes.link}
                  style={{
                    fontWeight: pathname === link ? "bold":"normal",
                    borderBottom:
                      pathname === link ? "1px solid #757ce8":"none",
                  }}
                >
                  {name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          style={{
            textDecoration: "none",
          }}
        >
          <Typography className={classes.copylight}>
            &copy;BoilerPlate
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;