import React, { useEffect, useState } from "react";
import { getDocs, collection, doc } from "firebase/firestore";
import { Container } from "../Layout/Container";
import { db } from "../Fairbase.js/fairbase";
import styled from "styled-components";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";


const Contents = styled(Container)`
  display: flex;
  align-items: center;
  gap: 4em;
  flex-wrap: wrap;
`;

const indexs = [];
for (let i = 0; i <= 19; i++) {
  indexs.push(i);
}

// const categories = ["Electric", "Cars", "Trucks", "jeep", "Sports Cars"];
const Cars = () => {
  const [data, setDate] = useState([]);
  const cars = collection(db, "nissan-cars");

  useEffect(() => {
    const getDataFromFirebase = async () => {
      const data = await getDocs(cars);
      setDate(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getDataFromFirebase();
  }, []);

  console.log(data);
  return (
    <section>
      <Contents>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" />
            <h6>{item.name}</h6>
            <p>{item.price}</p>
          </div>
        ))}
      </Contents>
    </section>
  );
};

export default Cars;
