import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import { Link, NavLink } from "react-router-dom";

import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useState } from "react";
import { useTranslation } from "react-i18next";

import logo from "../assets/logo.png";

export default function NavBar() {
  const { t, i18n } = useTranslation();

  const [open, setOpen] = useState(false);

  const isArabic = i18n.language === "ar";

  const toggleLanguage = () => {
    const nextLang = isArabic ? "en" : "ar";

    i18n.changeLanguage(nextLang);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navLinks = [
    {
      label: t("nav.home"),
      path: "/",
    },
    {
      label: t("nav.product"),
      path: "/product",
    },
    {
      label: t("nav.service"),
      path: "/service",
    },
    {
      label: t("nav.contact"),
      path: "/contactUs",
    },
  ];


  const fontFamily = isArabic
    ? '"Cairo", sans-serif'
    : '"Outfit", sans-serif';

  return (
    <>

      <AppBar
        position="sticky"
        color="transparent"
        sx={{
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.06)",
          borderBottom: "1px solid #eeeeee",
        }}
      >
        <Toolbar
          dir={isArabic ? "rtl" : "ltr"}
          sx={{
            width: "100%",
            mx: "auto",
            minHeight: {
              xs: 70,
              md: 80,
            },
            px: {
              xs: 2,
              sm: 3,
              md: 4,
            },
            display: "flex",
            alignItems: "center",
            py:2
          }}
        >

          <Box
            component={Link}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src={logo}
              alt="Ghanem Engineering & Plastics Industries"
              sx={{
                width: {
                  xs: 80,
                  sm: 90,
                  md: 100,
                },
                height: "auto",
                display: "block",
              }}
            />
          </Box>


          <Box
            sx={{
              marginInlineStart: "auto",
              display: "flex",
              alignItems: "center",
              gap: {
                xs: 0.5,
                md: 1,
              },
            }}
          >
     
            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                gap: 0.5,
              }}
            >
              {navLinks.map((item) => (
                <Button
                  key={item.path}
                  component={NavLink}
                  to={item.path}
                  sx={{
                    position: "relative",

                    minWidth: "auto",

                    px: {
                      md: 1.8,
                    },

                    py: 1,

                    color: "#333333",

                    fontFamily,
                    fontSize: "16px",
                    fontWeight: 500,

                    textTransform: "none",

                    borderRadius: 1.5,

                    transition: "all 0.2s ease",

                    "&:hover": {
                      color: "#B8A878",
                      backgroundColor: "#F2EAD0",
                    },

                    "&.active": {
                      color: "#B8A878",
                      fontWeight: 600,
                    },

                    "&.active::after": {
                      content: '""',

                      position: "absolute",

                      bottom: 3,

                      left: "50%",

                      transform: "translateX(-50%)",

                      width: "24px",

                      height: "2px",

                      borderRadius: "10px",

                      backgroundColor: "#A7907B",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>

        
            <Button
              onClick={toggleLanguage}
              sx={{
                minWidth: {
                  xs: 42,
                  sm: 70,
                },

                px: {
                  xs: 1,
                  sm: 1.5,
                },

                color: "#A7907B",

                fontFamily: '"Outfit", sans-serif',

                fontSize: "14px",
                fontWeight: 600,

                textTransform: "none",

                borderRadius: 1.5,

                "&:hover": {
                  color: "#a7907ba2",
                  backgroundColor: "#a7907b82",
                },
              }}
            >
              {/* Keep language content LTR */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 0.7,
                  direction: "ltr",
                }}
              >
                <LanguageIcon
                  sx={{
                    fontSize: 22,
                  }}
                />

                <Box
                  component="span"
                  sx={{
                    display: {
                      xs: "none",
                      sm: "inline",
                    },
                  }}
                >
                  {isArabic ? "EN" : "AR"}
                </Box>
              </Box>
            </Button>

   
            <IconButton
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              sx={{
                display: {
                  xs: "inline-flex",
                  md: "none",
                },

                color: "#333333",

                "&:hover": {
                  color: "#B8A878",
                  backgroundColor: "#F2EAD0",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

     
      <Drawer
        anchor={isArabic ? "left" : "right"}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: {
              xs: "80%",
              sm: 320,
            },

            maxWidth: 320,
          },
        }}
      >
        <Box
          dir={isArabic ? "rtl" : "ltr"}
          sx={{
            height: "100%",

            display: "flex",

            flexDirection: "column",

            fontFamily,
          }}
        >

          <Box
            sx={{
              display: "flex",

              alignItems: "center",

              justifyContent: "space-between",

              px: 2,

              py: 2,

              borderBottom: "1px solid #eeeeee",
            }}
          >
            {/* Drawer Logo */}
            <Box
              component="img"
              src={logo}
              alt="Ghanem Engineering & Plastics Industries"
              sx={{
                width: 80,

                height: "auto",

                display: "block",
              }}
            />

            {/* Close Button */}
            <IconButton
              onClick={handleClose}
              aria-label="Close menu"
              sx={{
                color: "#333333",

                "&:hover": {
                  color: "#B8A878",

                  backgroundColor: "#F2EAD0",
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List
            sx={{
              px: 1.5,

              py: 2,
            }}
          >
            {navLinks.map((item) => (
              <ListItem
                key={item.path}
                disablePadding
                sx={{
                  mb: 0.5,
                }}
              >
                <ListItemButton
                  component={NavLink}
                  to={item.path}
                  onClick={handleClose}
                  sx={{
                    borderRadius: 2,

                    py: 1.3,

                    px: 2,

                    color: "#333333",

                    fontFamily,

                    "&:hover": {
                      color: "#B8A878",

                      backgroundColor: "#F2EAD0",
                    },

                    "&.active": {
                      color: "#B8A878",

                      backgroundColor: "#F2EAD0",
                    },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    slotProps={{
                      primary: {
                        sx: {
                          fontFamily,

                          fontSize: "16px",

                          fontWeight: 500,

                          textAlign: isArabic ? "right" : "left",
                        },
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box
            sx={{
              mt: "auto",

              p: 2,

              borderTop: "1px solid #eeeeee",
            }}
          >
            <Button
              fullWidth
              onClick={toggleLanguage}
              sx={{
                py: 1.2,

                color: "#333333",

                fontFamily,

                fontSize: "15px",

                fontWeight: 600,

                textTransform: "none",

                borderRadius: 2,

                "&:hover": {
                  color: "#B8A878",

                  backgroundColor: "#F2EAD0",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",

                  alignItems: "center",

                  justifyContent: "center",

                  gap: 1,

                  direction: "ltr",
                }}
              >
                <LanguageIcon sx={{ fontSize: 21 }} />

                <span>
                  {isArabic ? "English" : "العربية"}
                </span>
              </Box>
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
