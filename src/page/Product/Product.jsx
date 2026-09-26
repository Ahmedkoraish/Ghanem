import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import { helicalGear  } from "../../utils/image.js";
import { bevelGear  } from "../../utils/image.js";
import { wormGearSet  } from "../../utils/image.js";
import { gearBox  } from "../../utils/image.js";
import { ConcealedValve  } from "../../utils/image.js";
import { brassKnurled  } from "../../utils/image.js";
import { brassThread  } from "../../utils/image.js";
import { brassTHandle  } from "../../utils/image.js";
import { stainlessSteelTactileDiscs  } from "../../utils/image.js";



export default function Product() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const products = [
    {
      id: 1,
      image: helicalGear,
      title: t("product.helicalGear.title"),
      description: t("product.helicalGear.description"),
    },
    {
      id: 2,
      image: bevelGear,
      title: t("product.bevelGear.title"),
      description: t("product.bevelGear.description"),
    },
    {
      id: 3,
      image: wormGearSet,
      title: t("product.wormGearSet.title"),
      description: t("product.wormGearSet.description"),
    },
    {
      id: 4,
      image: gearBox,
      title: t("product.gearBox.title"),
      description: t("product.gearBox.description"),
    },
    {
      id: 5,
      image: ConcealedValve,
      title: t("product.ConcealedValve.title"),
      description: t("product.ConcealedValve.description"),
    },
    {
      id: 6,
      image: brassKnurled,
      title: t("product.brassKnurled.title"),
      description: t("product.brassKnurled.description"),
    },
    {
      id: 7,
      image: brassThread,
      title: t("product.brassThread.title"),
      description: t("product.brassThread.description"),
    },
    {
      id: 8,
      image: brassTHandle,
      title: t("product.brassTHandle.title"),
      description: t("product.brassTHandle.description"),
    },
    {
      id: 9,
      image: stainlessSteelTactileDiscs,
      title: t("product.stainlessSteelTactileDiscs.title"),
      description: t("product.stainlessSteelTactileDiscs.description"),
    },
  ];

  return (
    <Box
      component="main"
      dir={isArabic ? "rtl" : "ltr"}
      sx={{
        backgroundColor: "#F9FAFB",
        minHeight: "100vh",
        py: { xs: 6, md: 9 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* Page Title */}
        <Box
          sx={{
            textAlign:"center",
            mb: { xs: 5, md: 7 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: "2.2rem",
                sm: "2.8rem",
                md: "3.5rem",
              },
              fontWeight: 700,
              fontFamily: "Outfit, sans-serif",
              color: "#1F2937",
              mb: 2,
            }}
          >
            {t("product.title")}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              maxWidth: 700,
              mx: "auto",
              color: "#6B7280",
              fontSize: {
                xs: "15px",
                md: "17px",
              },
              lineHeight: 1.7,
            }}
          >
            {t("product.description")}
          </Typography>
        </Box>

        {/* Products */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: {
              xs: 3,
              md: 4,
            },
          }}
        >
          {products.map((product) => (
            <Card
              key={product.id}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.10)",
                },
              }}
            >
              {/* Product Image */}
              <Box
                component="img"
                src={product.image}
                alt={product.title}
                loading="lazy"
                sx={{
                  width: "100%",
                  height: {
                    xs: 220,
                    sm: 240,
                    md: 260,
                  },
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Product Information */}
              <CardContent
                sx={{
                  p: { xs: 2.5, md: 3 },
                  flexGrow: 1,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Outfit, sans-serif",
                    fontSize: {
                      xs: "19px",
                      md: "21px",
                    },
                    fontWeight: 600,
                    color: "#1F2937",
                    mb: 1,
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {product.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#6B7280",
                    lineHeight: 1.7,
                    textAlign: isArabic ? "right" : "left",
                  }}
                >
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}



