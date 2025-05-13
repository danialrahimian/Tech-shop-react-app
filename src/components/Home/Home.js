import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Fade,
  Slide,
  Zoom,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LaptopIcon from "@mui/icons-material/Laptop";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SmartToyIcon from "@mui/icons-material/SmartToy";

export default function Home() {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Check if dark mode is active
  const isDarkMode =
    document.documentElement.getAttribute("data-theme") === "dark";

  // Define colors based on theme
  const primaryColor = isDarkMode ? "#bb86fc" : "#1976d2";
  const textPrimaryColor = "#ffffff"; // Always white for better visibility
  const textSecondaryColor = "#e0e0e0"; // Always light gray for better visibility
  const backgroundColor = isDarkMode ? "#121212" : "#1e1e1e"; // Darker background even in light mode
  const surfaceColor = isDarkMode ? "#1C1C1C" : "#2c2c2c"; // Darker surface even in light mode
  const borderColor = isDarkMode ? "#2c2c2c" : "#3d3d3d";
  const shadowColor = "rgba(0,0,0,0.3)";

  // Categories data
  const categories = [
    {
      id: 1,
      name: "Laptops",
      icon: <LaptopIcon sx={{ fontSize: 40 }} />,
      description: "Powerful laptops for work and gaming",
    },
    {
      id: 2,
      name: "Smartphones",
      icon: <PhoneAndroidIcon sx={{ fontSize: 40 }} />,
      description: "Latest smartphones with cutting-edge features",
    },
    {
      id: 3,
      name: "Headphones",
      icon: <HeadphonesIcon sx={{ fontSize: 40 }} />,
      description: "Premium audio for an immersive experience",
    },
    {
      id: 4,
      name: "Smart Devices",
      icon: <SmartToyIcon sx={{ fontSize: 40 }} />,
      description: "Intelligent gadgets for modern living",
    },
  ];

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "MacBook Pro 16",
      description: "Apple M1 Max, 32GB RAM, 1TB SSD",
      image: "https://source.unsplash.com/random/600x400/?macbook",
      price: 2499,
    },
    {
      id: 2,
      name: "iPhone 13 Pro",
      description: "A15 Bionic, 256GB, Sierra Blue",
      image: "https://source.unsplash.com/random/600x400/?iphone",
      price: 1099,
    },
    {
      id: 3,
      name: "Sony WH-1000XM4",
      description: "Wireless Noise Cancelling Headphones",
      image: "https://source.unsplash.com/random/600x400/?headphones",
      price: 349,
    },
  ];

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setLoading(false);
      setIsLoaded(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ bgcolor: "#FBFBFB", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e9f2 100%)",
          color: "#333",
          pt: { xs: 8, md: 10 },
          pb: { xs: 10, md: 12 },
          textAlign: "center",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Fade in={isLoaded} timeout={800}>
            <Box>
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "2rem", md: "2.75rem" },
                  fontWeight: 600,
                  marginBottom: 2,
                  fontFamily: "'Inter', sans-serif",
                  color: "#333",
                }}
              >
                Welcome to TechShop
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  maxWidth: 600,
                  mx: "auto",
                  mb: 4,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  color: "#555",
                  fontSize: "1rem",
                }}
              >
                Discover the latest tech products at unbeatable prices
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "row" },
                  gap: 2,
                  justifyContent: "center",
                  mt: 3,
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<ShoppingCartIcon />}
                  sx={{
                    backgroundColor: "#333",
                    color: "#fff",
                    borderRadius: 1,
                    px: 3,
                    py: 1,
                    fontWeight: 500,
                    textTransform: "none",
                    boxShadow: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      backgroundColor: "#111",
                      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                    },
                  }}
                >
                  Shop Now
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    color: "#333",
                    borderColor: "#333",
                    borderRadius: 1,
                    px: 3,
                    py: 1,
                    fontWeight: 500,
                    textTransform: "none",
                    transition: "all 0.2s ease",
                    "&:hover": {
                      borderColor: "#000",
                      backgroundColor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  Learn More
                </Button>
              </Box>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Categories Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            fontWeight: 600,
            textAlign: "center",
            fontFamily: "'Inter', sans-serif",
            color: "#333",
          }}
        >
          Browse by Category
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {categories.map((category, index) => (
            <Grid item xs={6} md={3} key={category.id}>
              <Zoom
                in={isLoaded}
                style={{ transitionDelay: `${100 * index}ms` }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 2,
                    borderRadius: 1,
                    border: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "none",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                      color: "#333",
                    }}
                  >
                    {category.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ fontWeight: 600, fontSize: "1rem", color: "#333" }}
                    gutterBottom
                  >
                    {category.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      textAlign: "center",
                      fontSize: "0.875rem",
                    }}
                  >
                    {category.description}
                  </Typography>
                </Card>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Featured Products Section */}
      <Box sx={{ bgcolor: "#F5F5F5", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontWeight: 600,
              textAlign: "center",
              fontFamily: "'Inter', sans-serif",
              color: "#333",
            }}
          >
            Featured Products
          </Typography>

          <Grid container spacing={3}>
            {featuredProducts.map((product, index) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Fade
                  in={isLoaded}
                  style={{ transitionDelay: `${200 * index}ms` }}
                >
                  <Card
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      borderRadius: 1,
                      overflow: "hidden",
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0,0.08)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={product.image}
                      alt={product.name}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          fontSize: "1rem",
                          mb: 1,
                          color: "#333",
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "#666", mb: 2, fontSize: "0.875rem" }}
                      >
                        {product.description}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{ fontWeight: 600, color: "#333" }}
                        >
                          ${product.price}
                        </Typography>
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            color: "#333",
                            borderColor: "#333",
                            fontWeight: 500,
                            textTransform: "none",
                            borderRadius: 1,
                            "&:hover": {
                              borderColor: "#000",
                              backgroundColor: "rgba(0,0,0,0.04)",
                            },
                          }}
                        >
                          Add to Cart
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIcon />}
              sx={{
                color: "#333",
                borderColor: "#333",
                fontWeight: 500,
                textTransform: "none",
                borderRadius: 1,
                px: 3,
                py: 1,
                "&:hover": {
                  borderColor: "#000",
                  backgroundColor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              View All Products
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Loading Indicator */}
      {loading && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(255,255,255,0.9)",
            zIndex: 9999,
          }}
        >
          <CircularProgress size={40} sx={{ color: "#333" }} />
        </Box>
      )}
    </Box>
  );
}
