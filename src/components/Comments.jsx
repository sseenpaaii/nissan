import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

import { Container } from "../Layout/Container";

import "swiper/css";

const Box = styled.div`
  position: relative;
  width: 50%;
  height: 500px;
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const User = styled.h6`
  font-size: 30px;
  font-weight: 500;
  color: #000;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  color: #000;
  line-height: 1.5;
`;

const comments = [
  {
    name: "Max",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure esse perspiciatis incidunt et vitae, animi quo laborum deleniti rerum eveniet consequatur unde a.",
  },
  {
    name: "John",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure esse perspiciatis incidunt et vitae, animi quo laborum deleniti rerum eveniet consequatur unde a.",
  },
  {
    name: "John",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure esse perspiciatis incidunt et vitae, animi quo laborum deleniti rerum eveniet consequatur unde a.",
  },
  {
    name: "John",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam iure esse perspiciatis incidunt et vitae, animi quo laborum deleniti rerum eveniet consequatur unde a.",
  },
];

const Comments = () => {
  return (
    <section>
      <Container>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={1}
          navigation
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {comments.map(({ name, text }, i) => (
            <SwiperSlide key={i}>
              <Box>
                <User>{name}</User>
                <Text>{text}</Text>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default Comments;
