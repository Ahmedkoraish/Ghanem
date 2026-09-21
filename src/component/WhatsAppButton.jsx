import { useTranslation } from "react-i18next";
import { Fab } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


const WHATSAPP_NUMBER = "201010461618";

export default function WhatsAppButton() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Fab
      component="a"
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      sx={{
        position: "fixed",
        bottom: 24,
        ...(isArabic ? { left: 24 } : { right: 24 }),
        zIndex: 1300,
        backgroundColor: "#25D366",
        color: "#fff",
        "&:hover": { backgroundColor: "#1ebe5d" },
      }}
    >
      <WhatsAppIcon sx={{ fontSize: 32 }} />
    </Fab>
  );
}
