import React, { useState, useEffect } from "react";
import Product from "./Product";
import { shopDatas } from "./ShopDatas";
import {
  Container,
  Grid,
  Typography,
  Box,
  Chip,
  TextField,
  InputAdornment,
  Slider,
  FormControl,
  Select,
  MenuItem,
  Divider,
  Button,
  Drawer,
  IconButton,
  useMediaQuery,
  Fade,
  Zoom,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import CloseIcon from "@mui/icons-material/Close";
import SortIcon from "@mui/icons-material/Sort";
import StorefrontIcon from "@mui/icons-material/Storefront";

export default function Shop() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1500]);
  const [sortBy, setSortBy] = useState("featured");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Extract unique brands
  const brands = [
    ...new Set(shopDatas.map((product) => product.name.split(" ")[0])),
  ];

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
    // Simulate loading delay for animation
    setTimeout(() => {
      setProducts(shopDatas);
      setFilteredProducts(shopDatas);
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [searchTerm, priceRange, sortBy, selectedBrands]);

  const applyFilters = () => {
    let result = [...products];

    // Filter by search term
    if (searchTerm) {
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by price range
    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Filter by brand
    if (selectedBrands.length > 0) {
      result = result.filter((product) =>
        selectedBrands.includes(product.name.split(" ")[0])
      );
    }

    // Sort products
    if (sortBy === "priceLow") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "priceHigh") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "nameAZ") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "nameZA") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    setFilteredProducts(result);
  };

  const handlePriceChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleBrandSelection = (brand) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand));
    } else {
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setPriceRange([0, 1500]);
    setSortBy("featured");
    setSelectedBrands([]);
  };

  const toggleDrawer = (open) => {
    setDrawerOpen(open);
  };

  const filtersContent = (
    <Box sx={{ p: 3 }}>
      {isMobile && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography
            variant="h6"
            fontWeight={600}
            sx={{ color: "#333", fontSize: "1rem" }}
          >
            Filters
          </Typography>
          <IconButton
            onClick={() => toggleDrawer(false)}
            sx={{ color: "#333" }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      <Box mb={3}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#333", fontSize: "0.875rem" }}
        >
          Price Range
        </Typography>
        <Slider
          value={priceRange}
          onChange={handlePriceChange}
          valueLabelDisplay="auto"
          min={0}
          max={1500}
          sx={{
            color: "#555",
            width: "200px",
            "& .MuiSlider-thumb": {
              transition: "transform 0.2s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
            },
          }}
        />
        <Box display="flex" justifyContent="space-between">
          <Typography variant="body2" sx={{ color: "#333" }}>
            ${priceRange[0]}
          </Typography>
          <Typography variant="body2" sx={{ color: "#333" }}>
            ${priceRange[1]}
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box mb={3}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          gutterBottom
          sx={{ color: "#333", fontSize: "0.875rem" }}
        >
          Brands
        </Typography>
        <Box display="flex" flexWrap="wrap" gap={1} sx={{ maxWidth: "200px" }}>
          {brands.map((brand) => (
            <Chip
              key={brand}
              label={brand}
              onClick={() => handleBrandSelection(brand)}
              sx={{
                bgcolor: selectedBrands.includes(brand)
                  ? "rgba(0,0,0,0.08)"
                  : "transparent",
                color: "#333",
                border: "1px solid rgba(0,0,0,0.12)",
                borderRadius: 1,
                fontWeight: selectedBrands.includes(brand) ? 500 : 400,
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: "rgba(0,0,0,0.05)",
                },
              }}
            />
          ))}
        </Box>
      </Box>

      <Button
        variant="outlined"
        onClick={handleReset}
        sx={{
          mt: 2,
          width: "140px",
          color: "#333",
          borderColor: "rgba(0,0,0,0.12)",
          textTransform: "none",
          borderRadius: 1,
          fontWeight: 500,
          "&:hover": {
            borderColor: "#000",
            backgroundColor: "rgba(0,0,0,0.04)",
          },
        }}
      >
        Reset All Filters
      </Button>
    </Box>
  );

  return (
    <Box sx={{ bgcolor: "#FBFBFB", minHeight: "100vh", pb: 4 }}>
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#F5F5F5",
          py: 4,
          mb: 4,
          borderBottom: "1px solid rgba(0,0,0,0.06)",
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "flex-start", md: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box mb={{ xs: 2, md: 0 }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#333",
                  fontWeight: 600,
                  mb: 1,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                Shop
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: "#666", fontSize: "0.875rem" }}
              >
                {filteredProducts.length} products available
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexDirection: { xs: "column", sm: "row" },
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <TextField
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon sx={{ color: "#666" }} />
                    </InputAdornment>
                  ),
                }}
                sx={{
                  width: { xs: "100%", sm: 220 },
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 1,
                    bgcolor: "#FFF",
                    "& fieldset": {
                      borderColor: "rgba(0,0,0,0.12)",
                    },
                    "&:hover fieldset": {
                      borderColor: "rgba(0,0,0,0.24)",
                    },
                  },
                }}
              />

              <Box sx={{ display: "flex", gap: 1 }}>
                <FormControl
                  size="small"
                  sx={{
                    minWidth: 120,
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 1,
                      bgcolor: "#FFF",
                      "& fieldset": {
                        borderColor: "rgba(0,0,0,0.12)",
                      },
                      "&:hover fieldset": {
                        borderColor: "rgba(0,0,0,0.24)",
                      },
                    },
                  }}
                >
                  <Select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    displayEmpty
                    startAdornment={
                      <SortIcon sx={{ mr: 1, fontSize: 20, color: "#666" }} />
                    }
                    sx={{
                      textTransform: "capitalize",
                      color: "#333",
                      fontSize: "0.875rem",
                    }}
                  >
                    <MenuItem value="featured">Featured</MenuItem>
                    <MenuItem value="priceLow">Price: Low to High</MenuItem>
                    <MenuItem value="priceHigh">Price: High to Low</MenuItem>
                    <MenuItem value="nameAZ">Name: A to Z</MenuItem>
                    <MenuItem value="nameZA">Name: Z to A</MenuItem>
                  </Select>
                </FormControl>

                {isMobile && (
                  <Button
                    variant="outlined"
                    startIcon={<FilterListIcon />}
                    onClick={() => toggleDrawer(true)}
                    sx={{
                      color: "#333",
                      borderColor: "rgba(0,0,0,0.12)",
                      textTransform: "none",
                      borderRadius: 1,
                      fontWeight: 500,
                      "&:hover": {
                        borderColor: "#000",
                        backgroundColor: "rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    Filters
                  </Button>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Filters (desktop) */}
          {!isMobile && (
            <Grid item md={3}>
              <Box
                sx={{
                  bgcolor: "#FFF",
                  borderRadius: 1,
                  border: "1px solid rgba(0,0,0,0.08)",
                  height: "100%",
                }}
              >
                {filtersContent}
              </Box>
            </Grid>
          )}

          {/* Products */}
          <Grid item xs={12} md={!isMobile ? 9 : 12}>
            {isLoading ? (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  minHeight: "50vh",
                }}
              >
                <CircularProgress size={40} sx={{ color: "#333" }} />
              </Box>
            ) : filteredProducts.length === 0 ? (
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  py: 10,
                }}
              >
                <StorefrontIcon sx={{ fontSize: 60, color: "#ccc", mb: 2 }} />
                <Typography
                  variant="h6"
                  sx={{ mb: 1, color: "#333", fontWeight: 600 }}
                >
                  No products found
                </Typography>
                <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
                  Try adjusting your filters or search term
                </Typography>
                <Button
                  variant="outlined"
                  onClick={handleReset}
                  sx={{
                    color: "#333",
                    borderColor: "rgba(0,0,0,0.12)",
                    textTransform: "none",
                    borderRadius: 1,
                    fontWeight: 500,
                    "&:hover": {
                      borderColor: "#000",
                      backgroundColor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  Reset Filters
                </Button>
              </Box>
            ) : (
              <Grid container spacing={3}>
                {filteredProducts.map((product, index) => (
                  <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Fade
                      in={!isLoading}
                      style={{ transitionDelay: `${(index % 6) * 100}ms` }}
                    >
                      <Box>
                        <Product product={product} />
                      </Box>
                    </Fade>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container>

      {/* Mobile filters drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: "300px",
            maxWidth: 360,
            bgcolor: "#FFF",
          },
        }}
      >
        {filtersContent}
      </Drawer>
    </Box>
  );
}
