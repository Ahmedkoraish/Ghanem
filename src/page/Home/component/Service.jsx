import { Box, Card, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useTranslation } from "react-i18next";

import serviceImg1 from "../../../assets/slider1.jpg";
import serviceImg2 from "../../../assets/slider2.jpg";

const services = [
  {
    key: "maintenance",
    image: serviceImg1,
  },
  {
    key: "manufacturing",
    image: serviceImg2,
  },
];

export default function Service() {
  const { t, i18n } = useTranslation();

  // Check if the current language is Arabic
  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        backgroundColor: "#f3f4f6",
        py: { xs: 6, md: 8 },
        px: { xs: 2, sm: 3 },
      }}
    >
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          textAlign: "center",
        }}
      >
        {/* Section Title */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            color: "#4B5563",
            mb: { xs: 4, md: 5 },
          }}
        >
          {t("services.title")}
        </Typography>

        {/* Services Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "repeat(2, 1fr)",
            },
            gap: { xs: 3, md: 4 },
          }}
        >
          {services.map((service) => (
            <Card
              key={service.key}
              sx={{
                width: "100%",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: 6,
                  transform: "translateY(-4px)",
                },
              }}
            >
              {/* Image */}
              <Box
                component="img"
                src={service.image}
                alt={t(`services.${service.key}.alt`)}
                loading="lazy"
                sx={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Content */}
              <Stack
                spacing={2}
                sx={{
                  p: { xs: 2.5, md: 3 },
                  direction: isArabic ? "rtl" : "ltr",
                  textAlign: isArabic ? "right" : "left",
                }}
              >
                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#111827",
                  }}
                >
                  {t(`services.${service.key}.title`)}
                </Typography>

                {/* Description */}
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: 1.9,
                    color: "#4B5563",
                  }}
                >
                  {t(`services.${service.key}.description`)}
                </Typography>

                {/* Learn More */}
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  sx={{
                    width: "fit-content",
                    cursor: "pointer",
                    color: "#1976d2",
                    fontWeight: 600,
                    marginLeft: isArabic ? "auto" : 0,
                    marginRight: isArabic ? 0 : "auto",

                    "&:hover": {
                      color: "#1565c0",
                      "& .arrow-icon": {
                        transform: isArabic
                          ? "translateX(-5px)"
                          : "translateX(5px)",
                      },
                    },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {t("services.learnMore")}
                  </Typography>

                  <ArrowForwardIcon
                    sx={{
                      transform: isArabic ? "rotate(180deg)" : "none",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </Stack>
              </Stack>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
