import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Rating,
  Chip,
  Zoom,
} from "@mui/material";
import { alpha } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

export default function Product({ product }) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const toggleFavorite = (event) => {
    event.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 1,
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        backgroundColor: "#fff",
        border: "1px solid rgba(0,0,0,0.08)",
        boxShadow: "none",
        position: "relative",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        },
      }}
    >
      {/* Sale Badge */}
      {product.sale && (
        <Chip
          label="SALE"
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            left: 12,
            backgroundColor: "#f44336",
            color: "white",
            fontWeight: 500,
            zIndex: 1,
            height: 24,
            fontSize: "0.75rem",
          }}
        />
      )}

      {/* Favorite Button */}
      <Box
        onClick={toggleFavorite}
        sx={{
          position: "absolute",
          top: 8,
          right: 8,
          zIndex: 2,
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          "&:hover": {
            backgroundColor: "rgba(255,255,255,0.9)",
          },
          cursor: "pointer",
        }}
      >
        <Zoom in={isFavorite} timeout={200}>
          <FavoriteIcon
            color="error"
            sx={{
              position: "absolute",
              fontSize: 18,
            }}
          />
        </Zoom>
        <Zoom in={!isFavorite} timeout={200}>
          <FavoriteBorderIcon
            sx={{
              position: "absolute",
              fontSize: 18,
              color: "#666",
            }}
          />
        </Zoom>
      </Box>

      {/* Product Image */}
      <Box sx={{ position: "relative", pt: "75%", overflow: "hidden" }}>
        <CardMedia
          component="img"
          image={product.image}
          alt={product.name}
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1, p: 2 }}>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 1,
            color: "#333",
            fontSize: "1rem",
          }}
        >
          {product.name}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating
            value={product.rating}
            precision={0.5}
            readOnly
            size="small"
            sx={{ color: "#ffa726" }}
          />
          <Typography
            variant="body2"
            sx={{
              ml: 1,
              color: "#666",
              fontSize: "0.75rem",
            }}
          >
            ({product.reviews} reviews)
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{
            mb: 2,
            height: 40,
            overflow: "hidden",
            color: "#666",
            fontSize: "0.875rem",
          }}
        >
          {product.description}
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mt: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "baseline" }}>
            <Typography
              variant="h6"
              component="span"
              sx={{ fontWeight: 600, color: "#333", fontSize: "1.1rem" }}
            >
              ${product.price.toFixed(2)}
            </Typography>
            {product.sale && (
              <Typography
                variant="body2"
                component="span"
                sx={{
                  textDecoration: "line-through",
                  ml: 1,
                  color: "#999",
                  fontSize: "0.875rem",
                }}
              >
                ${product.oldPrice.toFixed(2)}
              </Typography>
            )}
          </Box>
        </Box>
      </CardContent>

      <Box sx={{ p: 2, pt: 0 }}>
        <Button
          variant="outlined"
          fullWidth
          startIcon={<ShoppingCartIcon sx={{ fontSize: 18 }} />}
          sx={{
            color: "#333",
            borderColor: "#333",
            borderRadius: 1,
            textTransform: "none",
            fontWeight: 500,
            py: 0.75,
            fontSize: "0.875rem",
            "&:hover": {
              borderColor: "#000",
              backgroundColor: "rgba(0,0,0,0.04)",
            },
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
}
