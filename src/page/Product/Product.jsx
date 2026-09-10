import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

import serviceImg1 from "../../assets/slider1.jpg";

export default function Product() {
  const { t } = useTranslation();

  const products = [
    {
      id: 1,
      image: serviceImg1,
      title: t("product.product1.title"),
      description: t("product.product1.description"),
    },
    {
      id: 2,
      image: serviceImg1,
      title: t("product.product2.title"),
      description: t("product.product2.description"),
    },
    {
      id: 3,
      image: serviceImg1,
      title: t("product.product3.title"),
      description: t("product.product3.description"),
    },
    {
      id: 4,
      image: serviceImg1,
      title: t("product.product4.title"),
      description: t("product.product4.description"),
    },
    {
      id: 5,
      image: serviceImg1,
      title: t("product.product5.title"),
      description: t("product.product5.description"),
    },
    {
      id: 6,
      image: serviceImg1,
      title: t("product.product6.title"),
      description: t("product.product6.description"),
    },
  ];

  return (
    <Box
      component="main"
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
            textAlign: "center",
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
                  }}
                >
                  {product.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#6B7280",
                    lineHeight: 1.7,
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



