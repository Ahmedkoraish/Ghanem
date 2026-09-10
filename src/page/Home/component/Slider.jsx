import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import heroImage from "../../../assets/slider1.jpg";

export default function Slider() {
  const { t } = useTranslation();

  return (
    <Box
      component="section"
      sx={{
        minHeight: {
          xs: "30vh",
          sm: "50vh",
          md: "65vh",
          lg: "80vh",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        px: {
          xs: 2,
          sm: 3,
          md: 4,
        },
        textAlign: "center",
        position: "relative",
        color: "white",
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: {
            xs: "100%",
            sm: "650px",
            md: "768px",
          },
        }}
      >
        {/* Main Title */}
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(1.75rem, 5vw, 3.75rem)",
            fontWeight: 700,
            lineHeight: 1.15,
            mb: {
              xs: 1.5,
              md: 2,
            },
          }}
        >
          {t("hero.title")}
        </Typography>

        {/* Subtitle */}
        <Typography
          sx={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.5rem)",
            lineHeight: 1.4,
            mb: {
              xs: 2,
              md: 3,
            },
          }}
        >
          {t("hero.subtitle")}
        </Typography>
      </Box>
    </Box>
  );
}
