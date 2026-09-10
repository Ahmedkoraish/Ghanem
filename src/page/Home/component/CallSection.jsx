import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function CallSection() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Check if the current language is Arabic
  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#4B5563",
        color: "white",
        textAlign: "center",
        py: 8,
        px: 2,
        direction: isArabic ? "rtl" : "ltr",
      }}
    >
      <Box
        sx={{
          maxWidth: "1280px",
          mx: "auto",
        }}
      >
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            mb: 2,
          }}
        >
          {t("callSection.title")}
        </Typography>

        {/* Description */}
        <Typography
          sx={{
            fontSize: "18px",
            mb: 3,
          }}
        >
          {t("callSection.description")}
        </Typography>

        {/* Button */}
        <Button
          onClick={() => navigate("/contactUs")}
          variant="contained"
          sx={{
            backgroundColor: "white",
            color: "#4B5563",
            px: 3,
            py: 1.5,
            borderRadius: "999px",
            fontWeight: 600,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "#1F2937",
              color: "white",
            },
          }}
        >
          {t("callSection.contactUs")}
        </Button>
      </Box>
    </Box>
  );
}
