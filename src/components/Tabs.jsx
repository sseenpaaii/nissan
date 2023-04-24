import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Cars from "./Cars";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const categories = ["Electric", "Cars", "Trucks", "Jeep", "Sports Cars"];


function Box() {
  useEffect(() => {
    
  },[])
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="Electric" title="Electric">
        <Cars />
      </Tab>
      <Tab eventKey="Cars" title="Cars">
        <Cars />
      </Tab>
      <Tab eventKey="Trucks" title="Trucks">
        <Cars />
      </Tab>
      <Tab eventKey="Jeep" title="Jeep">
        <Cars />
      </Tab>
      <Tab eventKey="Sports Cars" title="Sports Cars">
        <Cars />
      </Tab>
    </Tabs>
  );
}

export default Box;
