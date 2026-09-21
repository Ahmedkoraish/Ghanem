import { Box, Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { aboutUsImage as img1 } from "../../../utils/image.js";

export default function AboutUsSection() {
  const { t } = useTranslation();


  return (
    <Stack
      component="section"
      sx={{
        py: { xs: 7, md: 10 },
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* TITLE */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "750px",
          mx: "auto",
          mb: { xs: 3, md: 5 },
        }}
      >
        {/* Title */}
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "2px",
            mb: 1.5,
          }}
        >
          {t("aboutUs.title")}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, md: 8 },
          maxWidth: "1200px",
          width: "100%",
          mx: "auto",
        }}
      >
        {/* IMAGE */}
        <Box
          sx={{
            width: { xs: "100%", md: "48%" },
            overflow: "hidden",
            borderRadius: 3,
            boxShadow: "0 15px 40px rgba(0, 0, 0, 0.12)",
          }}
        >
          <Box
            component="img"
            src={img1}
            loading="lazy"
            alt="Ghanem Engineering & Plastics Industries"
            sx={{
              display: "block",
              width: "100%",
              height: {
                xs: "280px",
                sm: "350px",
                md: "450px",
              },
              objectFit: "cover",
              transition: "transform 0.5s ease",

              "&:hover": {
                transform: "scale(1.04)",
              },
            }}
          />
        </Box>

        {/* CONTENT */}
        <Stack
          spacing={3}
          sx={{
            width: { xs: "100%", md: "52%" },
          }}
        >
          <Typography
            sx={{
              color: "#222",
              fontSize: {
                xs: "25px",
                md: "32px",
              },
              fontWeight: 700,
              lineHeight: 1.3,
            }}
          >
            {t("aboutUs.companyName")}
          </Typography>

          <Typography
            sx={{
              color: "#666",
              fontSize: "16px",
              lineHeight: 1.9,
            }}
          >
            {t("aboutUs.description")}
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
}

