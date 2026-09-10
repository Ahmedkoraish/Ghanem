import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";

export default function ContactUs() {
  const { t } = useTranslation();

  return (
    <Box
      component="main"
      sx={{
        width: "100%",
        backgroundColor: "#f7f8fa",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          pt:5
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "2.2rem", md: "3.5rem" },
            fontWeight: 700,
            mb: 2,
            fontFamily: "Outfit, sans-serif",
          }}
        >
          {t("contactUs.title")}
        </Typography>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 9 },
        }}
      >
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2.5}>
              
              {/* <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1f2937",
                  mb: 1,
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {t("contactUs.getInTouch")}
              </Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  lineHeight: 1.8,
                  mb: 1,
                }}
              >
                {t("contactUs.contactDescription")}
              </Typography> */}

              {/* Address */}
              {/* <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: "#f84565",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        flexShrink: 0,
                      }}
                    >
                      📍
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#1f2937",
                          mb: 0.5,
                        }}
                      >
                        {t("contactUs.address")}
                      </Typography>

                      <Typography sx={{ color: "#6b7280", lineHeight: 1.7 }}>
                        {t("contactUs.addressValue")}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card> */}

              {/* Phone */}
              {/* <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: "#f84565",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        flexShrink: 0,
                      }}
                    >
                      ☎
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#1f2937",
                          mb: 0.5,
                        }}
                      >
                        {t("contactUs.phone")}
                      </Typography>

                      <Typography sx={{ color: "#6b7280" }}>
                        {t("contactUs.phoneValue")}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card> */}

              {/* Email */}
              {/* <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: "#f84565",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        flexShrink: 0,
                      }}
                    >
                      ✉
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#1f2937",
                          mb: 0.5,
                        }}
                      >
                        {t("contactUs.email")}
                      </Typography>

                      <Typography sx={{ color: "#6b7280" }}>
                        {t("contactUs.emailValue")}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card> */}

              {/* Working Hours */}
              {/* <Card
                elevation={0}
                sx={{
                  borderRadius: 3,
                  border: "1px solid #e5e7eb",
                  backgroundColor: "white",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: 2,
                        backgroundColor: "#f84565",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "22px",
                        flexShrink: 0,
                      }}
                    >
                      ⏰
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#1f2937",
                          mb: 0.5,
                        }}
                      >
                        {t("contactUs.workingHours")}
                      </Typography>

                      <Typography sx={{ color: "#6b7280", lineHeight: 1.7 }}>
                        {t("contactUs.workingHoursValue")}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card> */}
            </Stack>
          </Grid>

          {/* =========================
              Contact Form
          ========================== */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid #e5e7eb",
                backgroundColor: "white",
              }}
            >
              <CardContent
                sx={{
                  p: { xs: 3, md: 5 },
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    color: "#1f2937",
                    mb: 1,
                    fontFamily: "Outfit, sans-serif",
                  }}
                >
                  {t("contactUs.sendMessage")}
                </Typography>

                <Typography
                  sx={{
                    color: "#6b7280",
                    mb: 4,
                  }}
                >
                  {t("contactUs.formDescription")}
                </Typography>

                <Stack spacing={3}>
                  {/* Name */}
                  <TextField
                    fullWidth
                    label={t("contactUs.name")}
                    placeholder={t("contactUs.namePlaceholder")}
                  />

                  {/* Email */}
                  <TextField
                    fullWidth
                    type="email"
                    label={t("contactUs.email")}
                    placeholder={t("contactUs.emailPlaceholder")}
                  />

                  {/* Phone */}
                  <TextField
                    fullWidth
                    label={t("contactUs.phone")}
                    placeholder={t("contactUs.phonePlaceholder")}
                  />

                  {/* Subject */}
                  <TextField
                    fullWidth
                    label={t("contactUs.subject")}
                    placeholder={t("contactUs.subjectPlaceholder")}
                  />

                  {/* Message */}
                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    label={t("contactUs.message")}
                    placeholder={t("contactUs.messagePlaceholder")}
                  />

                  {/* Submit */}
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      alignSelf: "flex-start",
                      px: 5,
                      py: 1.5,
                      borderRadius: 2,
                      backgroundColor: "#f84565",
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#e63d5b",
                      },
                    }}
                  >
                    {t("contactUs.send")}
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
