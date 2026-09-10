import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box, Grid, Stack, Typography } from "@mui/material";

import logo from "../assets/logo1.webp";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Box
      component="footer"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#fff",
        color: "#1f2937",
        mt: 4, // smaller gap
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1280px",
          mx: "auto",
          px: {
            xs: 2,
            sm: 3,
            md: 4,
          },
          py: {
            xs: 4,
            sm: 5,
            md: 6,
          },
        }}
      >
        <Grid
          container
          spacing={{
            xs: 4,
            sm: 4,
            md: 3,
          }}
          alignItems="flex-start"
        >
          {/* Logo */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack
              alignItems={{
                xs: "center",
                sm: isArabic ? "flex-end" : "flex-start",
              }}
            >
              <Box
                component="img"
                src={logo}
                alt="Logo"
                sx={{
                  width: {
                    xs: 130,
                    sm: 140,
                    md: 160,
                  },
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Stack>
          </Grid>

          {/* Contact */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack
              spacing={0.7}
              alignItems={{
                xs: "center",
                sm: isArabic ? "flex-end" : "flex-start",
              }}
              textAlign={{
                xs: "center",
                sm: isArabic ? "right" : "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: {
                    xs: "1.05rem",
                    md: "1.15rem",
                  },
                }}
              >
                {t("footer.contact.title")}
              </Typography>

              <Typography variant="body2">
                {t("footer.contact.text")}
              </Typography>

              <Typography variant="body2">
                {t("footer.contact.phone1")}
              </Typography>

              <Typography variant="body2">
                {t("footer.contact.phone2")}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  overflowWrap: "anywhere",
                }}
              >
                {t("footer.contact.email")}
              </Typography>
            </Stack>
          </Grid>

          {/* Location */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack
              spacing={0.7}
              alignItems={{
                xs: "center",
                sm: isArabic ? "flex-end" : "flex-start",
              }}
              textAlign={{
                xs: "center",
                sm: isArabic ? "right" : "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: {
                    xs: "1.05rem",
                    md: "1.15rem",
                  },
                }}
              >
                {t("footer.location.title")}
              </Typography>

              <Typography variant="body2">
                {t("footer.location.line1")}
              </Typography>

              <Typography variant="body2">
                {t("footer.location.line2")}
              </Typography>

              <Typography variant="body2">
                {t("footer.location.line3")}
              </Typography>

              <Typography variant="body2">
                {t("footer.location.line4")}
              </Typography>
            </Stack>
          </Grid>

          {/* Links */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Stack
              spacing={0.7}
              alignItems={{
                xs: "center",
                sm: isArabic ? "flex-end" : "flex-start",
              }}
              textAlign={{
                xs: "center",
                sm: isArabic ? "right" : "left",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  fontSize: {
                    xs: "1.05rem",
                    md: "1.15rem",
                  },
                }}
              >
                {t("footer.links.title")}
              </Typography>

              <Typography
                component={NavLink}
                to="/service"
                variant="body2"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {t("footer.links.service")}
              </Typography>

              <Typography
                component={NavLink}
                to="/contactUs"
                variant="body2"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                {t("footer.links.contact")}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
