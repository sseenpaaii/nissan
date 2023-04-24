import { collection, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { useState } from "react";
import { db } from "../Fairbase.js/fairbase";
import styled from "styled-components";

const Section = styled.section``;

const Box = styled.div`
  display: flex;
  gap: 0.2em;
  flex-wrap: wrap;
`;

const Block = styled.div`
  border: 1px solid black;
  border-radius: 8px;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Img = styled.img`
  width: 350px;
  height: 250px;
  /* object-fit: cover; */
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: bold;
`;

const Product = () => {
  const [data, setData] = useState([]);
  const test = collection(db, "nissan-cars");

  useEffect(() => {
    const getInfo = async () => {
      const data = await getDocs(test);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getInfo();
  }, []);
  return (
    <Section>
      <Box>
        {data.map((item) => (
          <Block>
            <Img src={item.img} alt="" />
            <Title>{item.name}</Title>
            <Price>{item.price} $</Price>
          </Block>
        ))}
      </Box>
    </Section>
  );
};

export default Product;
