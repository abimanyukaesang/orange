import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import "../assets/scss/Service.scss";
import Banner from "../components/Banner";
import Slide1 from "../assets/images/bg-service.jpg";
import ServiceContent from "../components/ServiceContent";
const slideAbout1 = { backgroundImage: "url(" + Slide1 + ")" };

const Service = () => {
  const [list, setList] = useState([]);

  const fetchList = useCallback(() => {
    axios.get("/data/service_list.json").then((response) => {
      const customData = response.data.map((res, index) => {
        res.position = index % 2 === 0 ? "left" : "right";
        return {
          ...res,
        };
      });
      setList(customData);
    });
  }, []);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return (
    <div>
      <Banner style={slideAbout1} />
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h2>Let’s Explore And Experience The World</h2>
            <p className="service-intro">
              To build a glorious palace, the architects of the ancient time
              will select the best workers and highly reward them once it was
              built and the monarch was impressed. The same thing goes in
              empowering a company. Rewarding our employeess who achieve and
              exceed targets is an act of honor in order to build and essence of
              togetherness and unity amongst the employees. Orange is a here to
              give amazing hearty experiences by providing Incentive Tour
              designated fo every Corporate Incentive customers. To develop a
              strong bond between the company and their employees is our
              priority.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        {list.map((item) => (
          <ServiceContent items={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Service;
