import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { WHATSAPP_NUMBER } from "../../component/WhatsAppButton";

const CONTACT_EMAIL = "MohamedGhanem2020@outlook.com";
const MAP_QUERY = "Ghanem Engineering & Plastics Industries, Sharqia, Egypt";

const BRAND = "#B8A878";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^\+?[\d\s()-]{8,}$/;

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const gmailComposeUrl = (params) =>
  `https://mail.google.com/mail/?${new URLSearchParams({
    view: "cm",
    fs: "1",
    to: CONTACT_EMAIL,
    ...params,
  }).toString()}`;

const toTel = (phone) => `tel:${phone.replace(/[^\d+]/g, "")}`;

function InfoCard({ icon, label, children }) {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 3,
        border: "1px solid #e5e7eb",
        backgroundColor: "white",
        transition: "border-color .2s, box-shadow .2s",
        "&:hover": {
          borderColor: BRAND,
          boxShadow: "0 6px 20px rgba(184, 168, 120, 0.18)",
        },
      }}
    >
      <CardContent sx={{ p: 2.5, "&:last-child": { pb: 2.5 } }}>
        <Stack direction="row" alignItems="flex-start" sx={{ gap: 2 }}>
          <Box
            sx={{
              width: 48,
              height: 48,
              borderRadius: 2,
              backgroundColor: BRAND,
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>

          <Box sx={{ minWidth: 0 }}>
            <Typography sx={{ fontWeight: 700, color: "#1f2937", mb: 0.5 }}>
              {label}
            </Typography>
            <Box sx={{ color: "#6b7280", lineHeight: 1.7 }}>{children}</Box>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}

const linkSx = {
  color: "#6b7280",
  textDecoration: "none",
  display: "block",
  "&:hover": { color: BRAND },
};

export default function ContactUs() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  };

  const validate = () => {
    const next = {};
    if (form.email && !EMAIL_PATTERN.test(form.email)) {
      next.email = t("contactUs.invalidEmail");
    }
    if (form.phone && !PHONE_PATTERN.test(form.phone)) {
      next.phone = t("contactUs.invalidPhone");
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const body = [
      `${t("contactUs.name")}: ${form.name}`,
      `${t("contactUs.email")}: ${form.email}`,
      `${t("contactUs.phone")}: ${form.phone}`,
      "",
      form.message,
    ].join("\n");

    window.open(
      gmailComposeUrl({ su: form.subject, body }),
      "_blank",
      "noopener,noreferrer",
    );
    setForm(initialForm);
    setSent(true);
  };

  const phones = [t("footer.contact.phone1"), t("footer.contact.phone2")];

  const infoItems = [
    {
      key: "phone",
      icon: <PhoneIcon />,
      label: t("contactUs.phone"),
      content: phones.map((phone) => (
        <Link
          key={phone}
          href={toTel(phone)}
          sx={{
            ...linkSx,
            direction: "ltr",
            textAlign: isArabic ? "right" : "left",
          }}
        >
          {phone}
        </Link>
      )),
    },
    {
      key: "whatsapp",
      icon: <WhatsAppIcon />,
      label: t("contactUs.whatsapp"),
      content: (
        <Link
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={linkSx}
        >
          {t("contactUs.whatsappValue")}
        </Link>
      ),
    },
    {
      key: "email",
      icon: <EmailIcon />,
      label: t("contactUs.email"),
      content: (
        <Link
          href={gmailComposeUrl({})}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ ...linkSx, wordBreak: "break-all" }}
        >
          {CONTACT_EMAIL}
        </Link>
      ),
    },
    {
      key: "address",
      icon: <LocationOnIcon />,
      label: t("contactUs.address"),
      content: (
        <>
          {t("footer.location.line1")}, {t("footer.location.line2")}
          <br />
          {t("footer.location.line3")}, {t("footer.location.line4")}
        </>
      ),
    },
  ];

  return (
    <Box
      component="main"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        width: "100%",
        backgroundColor: "#f7f8fa",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          pt: { xs: 5, md: 7 },
          px: 2,
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

        <Box
          sx={{
            width: 64,
            height: 4,
            borderRadius: 2,
            backgroundColor: BRAND,
            mx: "auto",
            mb: 2.5,
          }}
        />

        <Typography
          sx={{
            color: "#6b7280",
            maxWidth: 620,
            mx: "auto",
            lineHeight: 1.8,
            fontSize: { xs: "1rem", md: "1.1rem" },
          }}
        >
          {t("contactUs.description")}
        </Typography>
      </Box>

      <Container
        maxWidth="lg"
        sx={{
          py: { xs: 6, md: 8 },
        }}
      >
        <Grid container spacing={4}>
          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Stack spacing={2}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: "#1f2937",
                  fontFamily: "Outfit, sans-serif",
                }}
              >
                {t("contactUs.getInTouch")}
              </Typography>

              <Typography sx={{ color: "#6b7280", lineHeight: 1.8, pb: 1 }}>
                {t("contactUs.contactDescription")}
              </Typography>

              {infoItems.map((item) => (
                <InfoCard key={item.key} icon={item.icon} label={item.label}>
                  {item.content}
                </InfoCard>
              ))}
            </Stack>
          </Grid>

          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                border: "1px solid #e5e7eb",
                backgroundColor: "white",
                height: "100%",
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

                <Stack
                  component="form"
                  spacing={3}
                  onSubmit={handleSubmit}
                  noValidate
                  sx={{
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                      { borderColor: BRAND },
                    "& .MuiInputLabel-root.Mui-focused": { color: BRAND },
                  }}
                >
                  <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        required
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        label={t("contactUs.name")}
                        placeholder={t("contactUs.namePlaceholder")}
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        fullWidth
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        error={Boolean(errors.phone)}
                        helperText={errors.phone}
                        label={t("contactUs.phone")}
                        placeholder={t("contactUs.phonePlaceholder")}
                      />
                    </Grid>
                  </Grid>

                  <TextField
                    fullWidth
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={Boolean(errors.email)}
                    helperText={errors.email}
                    label={t("contactUs.email")}
                    placeholder={t("contactUs.emailPlaceholder")}
                  />

                  <TextField
                    fullWidth
                    required
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    label={t("contactUs.subject")}
                    placeholder={t("contactUs.subjectPlaceholder")}
                  />

                  <TextField
                    fullWidth
                    multiline
                    rows={5}
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    label={t("contactUs.message")}
                    placeholder={t("contactUs.messagePlaceholder")}
                  />

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={!form.name || !form.subject || !form.message}
                    endIcon={
                      <SendIcon
                        sx={{ transform: isArabic ? "scaleX(-1)" : "none" }}
                      />
                    }
                    sx={{
                      alignSelf: { xs: "stretch", sm: "flex-end" },
                      px: 5,
                      py: 1.5,
                      borderRadius: 2,
                      backgroundColor: BRAND,
                      fontWeight: 600,
                      textTransform: "none",
                      gap: 1,
                      "& .MuiButton-endIcon": { m: 0 },
                      "&:hover": {
                        backgroundColor: "#b8a878d1",
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

        {/* Map */}
        <Box
          sx={{
            mt: { xs: 5, md: 7 },
            borderRadius: 4,
            overflow: "hidden",
            border: "1px solid #e5e7eb",
            height: { xs: 300, md: 420 },
            backgroundColor: "white",
          }}
        >
          <Box
            component="iframe"
            title={t("contactUs.mapPlaceholder")}
            src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=14&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            sx={{ width: "100%", height: "100%", border: 0, display: "block" }}
          />
        </Box>
      </Container>

      <Snackbar
        open={sent}
        autoHideDuration={5000}
        onClose={() => setSent(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSent(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {t("contactUs.successMessage")}
        </Alert>
      </Snackbar>
    </Box>
  );
}
