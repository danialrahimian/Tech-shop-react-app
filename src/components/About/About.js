import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
  Card,
  CardContent,
  Divider,
  Fade,
  Slide,
  Zoom,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeIcon from "@mui/icons-material/Code";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

export default function About() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
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

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const teamMembers = [
    {
      name: "John Smith",
      position: "CEO & Founder",
      avatar: "https://i.pravatar.cc/300?img=70",
      bio: "Tech enthusiast with 15+ years in the industry. Founded Shopify in 2010 with a mission to make technology accessible for everyone.",
    },
    {
      name: "Sarah Johnson",
      position: "CTO",
      avatar: "https://i.pravatar.cc/300?img=32",
      bio: "Former Google engineer with expertise in mobile technology and consumer electronics. Leads our product team and innovation efforts.",
    },
    {
      name: "David Chen",
      position: "Head of Design",
      avatar: "https://i.pravatar.cc/300?img=11",
      bio: "Award-winning designer who ensures our store offers an intuitive, beautiful shopping experience for all customers.",
    },
    {
      name: "Emily Rodriguez",
      position: "Customer Experience",
      avatar: "https://i.pravatar.cc/300?img=5",
      bio: "Passionate about customer satisfaction. Ensures every interaction with our brand exceeds expectations.",
    },
  ];

  const values = [
    {
      icon: <CodeIcon sx={{ fontSize: 32 }} />,
      title: "Innovation",
      description:
        "We continuously seek the latest technology and innovative solutions to offer our customers.",
    },
    {
      icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
      title: "Value",
      description:
        "We believe in providing premium products at competitive prices without compromising on quality.",
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 32 }} />,
      title: "Reliability",
      description:
        "From secure payment to fast shipping, we ensure a seamless shopping experience every time.",
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
      title: "Support",
      description:
        "Our customer support team is available 24/7 to assist with any questions or concerns.",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#FBFBFB", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: "relative",
          bgcolor: "#f5f7fa",
          color: "#333",
          pt: { xs: 8, md: 10 },
          pb: { xs: 10, md: 12 },
          textAlign: "center",
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
                About Us
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
                We are a passionate team of tech enthusiasts dedicated to
                bringing you the best products at the best prices.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Our Story Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Fade in={isLoaded} timeout={800}>
              <Box
                component="img"
                src="https://source.unsplash.com/random/600x400/?tech-office"
                alt="Our Office"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 1,
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                }}
              />
            </Fade>
          </Grid>
          <Grid item xs={12} md={6}>
            <Fade in={isLoaded} timeout={1000}>
              <Box>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    mb: 3,
                    fontFamily: "'Inter', sans-serif",
                    color: "#333",
                    fontSize: { xs: "1.5rem", md: "1.75rem" },
                  }}
                >
                  Our Story
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "#555", mb: 2, lineHeight: 1.6 }}
                >
                  Founded in 2010, Shopify started as a small online store
                  specializing in smartphones and accessories. Our founder, John
                  Smith, had a vision to create a technology marketplace that
                  combined premium products with exceptional service.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "#555", mb: 2, lineHeight: 1.6 }}
                >
                  Over the years, we've grown into a comprehensive tech
                  retailer, offering everything from laptops and smartphones to
                  smart home devices and wearables. Our team has expanded to
                  over 50 dedicated professionals who share a passion for
                  technology and customer service.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#555", lineHeight: 1.6 }}
                >
                  Today, we serve thousands of customers worldwide, maintaining
                  the same commitment to quality and service that defined us
                  from day one.
                </Typography>
              </Box>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Our Values */}
      <Box sx={{ bgcolor: "#F5F5F5", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 5,
              fontFamily: "'Inter', sans-serif",
              color: "#333",
              fontSize: { xs: "1.5rem", md: "1.75rem" },
            }}
          >
            Our Values
          </Typography>

          <Grid container spacing={3}>
            {values.map((value, index) => (
              <Grid item xs={12} sm={6} md={3} key={value.title}>
                <Fade
                  in={isLoaded}
                  timeout={1000}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 1,
                      boxShadow: "none",
                      border: "1px solid rgba(0,0,0,0.08)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          mb: 2,
                          color: "#333",
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography
                        variant="h6"
                        align="center"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          mb: 1,
                          color: "#333",
                          fontSize: "1rem",
                        }}
                      >
                        {value.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        align="center"
                        sx={{ color: "#666", fontSize: "0.875rem" }}
                      >
                        {value.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 600,
            mb: 5,
            fontFamily: "'Inter', sans-serif",
            color: "#333",
            fontSize: { xs: "1.5rem", md: "1.75rem" },
          }}
        >
          Meet Our Team
        </Typography>

        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={member.name}>
              <Fade
                in={isLoaded}
                timeout={1000}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 1,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.08)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    },
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      p: 3,
                    }}
                  >
                    <Avatar
                      src={member.avatar}
                      alt={member.name}
                      sx={{
                        width: 100,
                        height: 100,
                        mb: 2,
                        border: "3px solid #fff",
                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                      }}
                    />
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: "#333",
                        fontSize: "1rem",
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      sx={{
                        mb: 2,
                        color: "#666",
                        fontSize: "0.875rem",
                      }}
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{ color: "#666", fontSize: "0.875rem" }}
                    >
                      {member.bio}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Contact Section */}
      <Box sx={{ bgcolor: "#F5F5F5", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 5,
              fontFamily: "'Inter', sans-serif",
              color: "#333",
              fontSize: { xs: "1.5rem", md: "1.75rem" },
            }}
          >
            Get In Touch
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={4}>
              <Fade in={isLoaded} timeout={1000}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                    borderRadius: 1,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <PhoneIcon sx={{ fontSize: 32, color: "#333", mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontSize: "1rem",
                    }}
                  >
                    Call Us
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "#666", fontSize: "0.875rem" }}
                  >
                    +1 (555) 123-4567
                  </Typography>
                </Card>
              </Fade>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Fade in={isLoaded} timeout={1200}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                    borderRadius: 1,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <EmailIcon sx={{ fontSize: 32, color: "#333", mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontSize: "1rem",
                    }}
                  >
                    Email Us
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "#666", fontSize: "0.875rem" }}
                  >
                    info@shopify.com
                  </Typography>
                </Card>
              </Fade>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Fade in={isLoaded} timeout={1400}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 3,
                    borderRadius: 1,
                    boxShadow: "none",
                    border: "1px solid rgba(0,0,0,0.08)",
                  }}
                >
                  <LocationOnIcon sx={{ fontSize: 32, color: "#333", mb: 2 }} />
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: "#333",
                      fontSize: "1rem",
                    }}
                  >
                    Visit Us
                  </Typography>
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ color: "#666", fontSize: "0.875rem" }}
                  >
                    123 Tech Street, San Francisco, CA 94107
                  </Typography>
                </Card>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
