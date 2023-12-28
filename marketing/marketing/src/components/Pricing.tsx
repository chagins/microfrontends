import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  Link,
  CardHeader,
  Box,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { grey } from "@mui/material/colors";

const plans = [
  {
    title: "Free",
    price: 0,
    options: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    link: "/auth/signup",
    linkTitle: "sign up for free",
  },
  {
    title: "Pro",
    price: 15,
    options: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    link: "/auth/signup",
    linkTitle: "get started",
  },
];

export const Pricing = () => {
  return (
    <>
      <main>
        <Container maxWidth="sm">
          <Typography component="h2" variant="h2" align="center">
            Pricing
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Something text
          </Typography>
        </Container>
        <Container maxWidth="md">
          <Grid container spacing={4} padding={2} justifyContent="center">
            {plans.map((plan) => (
              <Grid key={plan.title} item xs={4}>
                <Card>
                  <CardHeader
                    key={plan.title}
                    title={plan.title}
                    titleTypographyProps={{ align: "center" }}
                    sx={{ backgroundColor: grey[300] }}
                  ></CardHeader>
                  <CardContent>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Typography gutterBottom variant="h3" align="center">
                        ${plan.price}
                      </Typography>
                      <Typography variant="body1" align="center">
                        /mo
                      </Typography>
                    </Box>
                    {plan.options.map((option) => (
                      <Typography key={option} variant="body2" align="center">
                        {option}
                      </Typography>
                    ))}
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Link
                      component={RouterLink}
                      to={plan.link}
                      textTransform="uppercase"
                      sx={{ textDecoration: "none" }}
                    >
                      {plan.linkTitle}
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};
