import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const Landing = () => {
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div>
          <Container maxWidth="sm">
            <Typography component="h2" variant="h2" align="center" gutterBottom>
              Home Page
            </Typography>
            <Typography variant="h5" align="center" paragraph>
              Something text
            </Typography>
            <div>
              <Grid
                container
                spacing={2}
                justifyItems="center"
                justifyContent="center"
                padding={2}
              >
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="contained" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/pricing">
                    <Button variant="outlined" color="primary">
                      Pricing
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md">
          {/*End Hero unit */}
          <Grid container spacing={4} padding={2}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    image="https://ru-apple.com.ru/image/cache/catalog/products_images/apple_store/Apple_MacBook_Pro_13_3_M2_1-600x600.png"
                    title="Image title"
                    sx={{ height: 100, width: 100, margin: "auto" }}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>Media card</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};
