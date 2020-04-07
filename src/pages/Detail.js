/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useLayoutEffect, useState, useCallback, useEffect } from "react";

import "../assets/scss/Detail.scss";
import axios from "axios";
// import DetailGallery from '../components/DetailGallery';
// import FancyBox from '../components/FancyBox';


function Detail(props) {
  const { name } = props.match.params;
  const [content, setContent] = useState({});

  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  console.log(size);

  const fetchList = useCallback(() => {
    axios.get("/data/service_list.json").then((response) => {
      const objectData = response.data.find((res) => res.slug === name);
      setContent(objectData);
    });
  }, [name]);


  useEffect(() => {
    fetchList();
    
  }, [fetchList]);
  if (!content.photo) {
    return <div />;
  }

  return (
    <div>
      {/* <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap'}}>
        {content.photo.map((item, index) => (
          <a href={item} data-fancybox="images" style={{flexFlow:1, width: size[0]> 360 ? 300: '100%'}} key={index}>
            <img src={item} alt={index} className="img-fluid" />
          </a>
        ))}
      </div> */}

      <div className='container-fluid m-0 p-0'>
        <div className='row m-0 p-0 detail-slide'>
          {content.photo.map((item, index) => (
            <a className='col-md-6 m-0 p-0' href={item} data-fancybox="images" key={index}>
              <img src={item} alt={index} className="img-fluid" />
            </a>
          ))}
        </div>
      </div>

      <div className='container mb-5'>
        <div className='row d-flex justify-content-end'>
          <div className='col-md-4'>
            <a href='#' className='btn btn-orange btn-show-all btnOpen' data-fancybox="images" key={-0}>
              SHOW ALL PHOTO
            </a>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-11">
                <div className="side-left">
                  <h2>{content.title}</h2>
                  <p>{content.desc}</p>
                  <iframe
                    style={{ width: "100%", height: 300 }}
                    src="https://www.youtube.com/embed/pGFWb4btass"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>

                <div className="text-center">
                  <a href="#" className="btn-wa btn-sidebar">
                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                    Whatsapp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
