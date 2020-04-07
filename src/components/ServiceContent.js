import React from "react";
import { Link } from "react-router-dom";

import bgServiceBlank from "../assets/images/bg-service-blank.jpg";

const ServiceContent = (data) => {
  const items = data.items;
  if (items.position === "left") {
    return (
      <div className="row p-0 m-0">
        <div className="col-md-6 order-sm-12 p-0">
          <img src={items.image} alt={items.title} className="img-fluid" />
        </div>
        <div className="col-md-6 order-sm-1 p-0">
          <div className="wrp-content-service">
            <img src={bgServiceBlank} alt={items.title} className="img-fluid" />
            <div className="content-service flex-row-reverse">
              <div className="item-service pdr">
                <img src={items.icon} alt={items.title} />

                <h2>{items.title}</h2>
                <p>{items.desc}</p>
                <Link
                  to={{
                    pathname: `/services/${items.slug}`
                  }}
                  className="btn btn-orange"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (items.position === "right") {
    return (
      <div className="row p-0 m-0">
        <div className="col-md-6 order-sm-1 p-0">
          <img src={items.image} alt="" className="img-fluid" />
        </div>
        <div className="col-md-6 order-sm-12 p-0">
          <div className="wrp-content-service">
            <img src={bgServiceBlank} alt="" className="img-fluid" />
            <div className="content-service bg-grey">
              <div className="item-service pdl">
                <img src={items.icon} alt={items.title} />

                <h2>{items.title}</h2>
                <p>{items.desc}</p>

                <Link
                  to={{
                    pathname: `/services/${items.slug}`
                  }}
                  className="btn btn-orange"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <div />;
};

export default ServiceContent;
