import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Divider,
  Paper,
  IconButton,
  Fade,
  Zoom,
  Slide,
  useMediaQuery,
  Snackbar,
  Alert,
  useTheme,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isLoaded, setIsLoaded] = useState(false);
  const [open, setOpen] = useState(false);

  // Form state
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Form validation
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });

    // Clear error when user types
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formState.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // In a real application, you would send this data to your backend
      console.log("Form submitted:", formState);

      // Show success message
      setOpen(true);

      // Reset form
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const contactInfo = [
    {
      icon: <PhoneIcon sx={{ fontSize: 24 }} />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      details: "Monday-Friday, 9AM-6PM EST",
    },
    {
      icon: <EmailIcon sx={{ fontSize: 24 }} />,
      title: "Email",
      content: "support@shopify.com",
      details: "We respond within 24 hours",
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 24 }} />,
      title: "Location",
      content: "123 Tech Street, San Francisco, CA 94107",
      details: "Visit our store during opening hours",
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
                Contact Us
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
                We'd love to hear from you. Get in touch with our team for any
                questions or inquiries.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Contact Info & Form Section */}
      <Container maxWidth="lg" sx={{ py: 6, position: "relative" }}>
        <Grid container spacing={4}>
          {/* Contact Info Cards */}
          <Grid item xs={12} md={5}>
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
              Get In Touch
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography variant="body1" sx={{ color: "#555", mb: 3 }}>
                Have questions about our products or services? Feel free to
                reach out to us through any of the channels below.
              </Typography>
            </Box>

            {contactInfo.map((info, index) => (
              <Card
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  boxShadow: "none",
                  border: "1px solid rgba(0,0,0,0.08)",
                  borderRadius: 1,
                  transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                    color: "#333",
                  }}
                >
                  {info.icon}
                </Box>
                <Box>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontWeight: 600, color: "#333", fontSize: "0.95rem" }}
                  >
                    {info.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", fontSize: "0.875rem" }}
                  >
                    {info.content}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#777", fontSize: "0.75rem" }}
                  >
                    {info.details}
                  </Typography>
                </Box>
              </Card>
            ))}

            <Box sx={{ mt: 4 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: 600, mb: 2, color: "#333" }}
              >
                Follow Us
              </Typography>
              <Box sx={{ display: "flex", gap: 1 }}>
                {[FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon].map(
                  (Icon, index) => (
                    <IconButton
                      key={index}
                      sx={{
                        color: "#333",
                        bgcolor: "rgba(0,0,0,0.04)",
                        "&:hover": {
                          bgcolor: "rgba(0,0,0,0.08)",
                        },
                      }}
                    >
                      <Icon sx={{ fontSize: 20 }} />
                    </IconButton>
                  )
                )}
              </Box>
            </Box>
          </Grid>

          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Box
              component={Paper}
              elevation={0}
              sx={{
                p: { xs: 3, md: 4 },
                borderRadius: 1,
                border: "1px solid rgba(0,0,0,0.08)",
                bgcolor: "#fff",
              }}
            >
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
                Send a Message
              </Typography>

              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      error={!!errors.name}
                      helperText={errors.name}
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                          "& fieldset": {
                            borderColor: "rgba(0,0,0,0.12)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0,0,0,0.24)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      error={!!errors.email}
                      helperText={errors.email}
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                          "& fieldset": {
                            borderColor: "rgba(0,0,0,0.12)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0,0,0,0.24)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleInputChange}
                      error={!!errors.subject}
                      helperText={errors.subject}
                      size="small"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                          "& fieldset": {
                            borderColor: "rgba(0,0,0,0.12)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0,0,0,0.24)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      multiline
                      rows={4}
                      value={formState.message}
                      onChange={handleInputChange}
                      error={!!errors.message}
                      helperText={errors.message}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: 1,
                          "& fieldset": {
                            borderColor: "rgba(0,0,0,0.12)",
                          },
                          "&:hover fieldset": {
                            borderColor: "rgba(0,0,0,0.24)",
                          },
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      sx={{
                        bgcolor: "#333",
                        color: "#fff",
                        py: 1,
                        px: 3,
                        textTransform: "none",
                        fontWeight: 500,
                        borderRadius: 1,
                        boxShadow: "none",
                        "&:hover": {
                          bgcolor: "#111",
                          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ bgcolor: "#F5F5F5", py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              mb: 4,
              fontFamily: "'Inter', sans-serif",
              color: "#333",
              fontSize: { xs: "1.5rem", md: "1.75rem" },
            }}
          >
            Find Us
          </Typography>

          <Box
            sx={{
              height: 400,
              width: "100%",
              border: "1px solid rgba(0,0,0,0.08)",
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7126595371376!2d-122.4053765843622!3d37.7855657197564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858085a0f6a5a7%3A0x902b1bbafef08!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1647971726302!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            />
          </Box>
        </Container>
      </Box>

      {/* Success Snackbar */}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Message sent successfully! We'll get back to you soon.
        </Alert>
      </Snackbar>
    </Box>
  );
}
