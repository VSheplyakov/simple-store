"use client";
import { Box, Fade, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Link from "next/link";
import { Autoplay, Pagination } from "swiper/modules";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { Product } from "@/app/utils/types/types";

const CustomSwiper = styled(Swiper)(() => ({
  paddingBottom: "30px",
  "& .swiper-pagination-bullet": {
    transition: "all 0.3s ease",
  },
  "& .swiper-pagination-bullet-active": {
    backgroundColor: "gray",
    opacity: 0.8,
    borderRadius: "6px",
    width: "16px",
  },
}));

export function AdCaroucel({ products }: { products: Product[] }) {
  return (
    <Fade in={true} timeout={700}>
      <Box pt={4}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: 700 }}
          pb={4}
          data-testid="ad-title"
        >
          Recommendation for you
        </Typography>
        <CustomSwiper
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={16}
          slidesPerView="auto"
          modules={[Pagination, Autoplay]}
          pagination={{
            clickable: true,
          }}
          style={{
            paddingBottom: "30px",
          }}
        >
          {products.map((p) => (
            <SwiperSlide key={p.id} style={{ width: "auto" }}>
              <Link
                href={`/products/${p.slug}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <Stack>
                  <Stack>
                    <Image
                      src={p.image}
                      alt={p.name}
                      width={200}
                      height={200}
                      style={{ borderRadius: "12px" }}
                    />
                  </Stack>

                  <Stack direction={"column"} mt={1} sx={{ width: "200px" }}>
                    <Stack spacing={1} pl={1} width={"100%"}>
                      <Typography fontWeight={"800"} fontSize={"16px"}>
                        {p.name}
                      </Typography>

                      <Typography fontWeight={"800"} fontSize={"16px"}>
                        ${p.price}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Link>
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </Box>
    </Fade>
  );
}
