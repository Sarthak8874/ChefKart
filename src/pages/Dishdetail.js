import React, { useContext, useEffect, useState } from "react";
import veg1 from "../assets/veg1.png";
import veg2 from "../assets/veg2.png";
import Time from "../assets/Time.png";
import startLogo from "../assets/star (2).png";
import Refrigerator from "../assets/Refrigerator2.png";
import RecommendedLogo from "../assets/Recommended (2).png";
import { Link } from "react-router-dom";
import { Idcontext } from "./Context";
import axios from "axios";
import { IoIosArrowBack } from "react-icons/io";
function Dishdetail() {
  const { id, rating, description } = useContext(Idcontext);
  const [dishdetail, setdishdetail] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/${id}`
      )
      .then((res) => {
        setdishdetail(res.data);
      });
  }, [id]);
  console.log(dishdetail);
  return (
    <>
      <section className="dishdetail">
        <div className="flex justify-center w-full">
          <div className="h-[550px] w-[350px] mt-10 overflow-hidden ">
            <div className="relative w-[350px] h-[190px] px-5 bord-er">
              <Link to="/" className="back-btn">
                {<IoIosArrowBack />}
              </Link>
              <div className="heading flex items-center mt-4">
                {dishdetail.name}{" "}
                <div className="rating flex justify-center items-center mt-2 ml-2">
                  {rating}
                  <img
                    alt="loading"
                    className="h-1 w-1 m-[1px]"
                    src={startLogo}
                  />
                </div>
              </div>
              <div className="description mt-1 text-justify">{description}</div>
              <div className="time flex mt-8 ">
                <img alt="loading" src={Time} className="h-3 w-3 mr-2" />
                <div className="">{dishdetail.timeToPrepare}</div>
              </div>
              <div className="circle absolute top-0 z-[-2] right-0"></div>
              <div>
                <img
                  alt="loading"
                  src={veg1}
                  className="w-[215px] h-[215px] absolute bottom-[-70px] right-[-120px] z-[1]"
                />
              </div>
              <div>
                <img
                  alt="loading"
                  src={veg2}
                  className="w-[321px] h-[130px] absolute bottom-[-40px] right-[-140px]"
                />
              </div>
            </div>
            <div className="flex  ml-[16px] h-[74px] w-[300px] bord-er">
              <div
                className="heading pt-3"
                style={{ fontSize: "16px", width: "200px" }}
              >
                Ingredients
                <div className="description text-justify"> For 2 people</div>
              </div>
            </div>
            <div className="flex flex-col  ml-[16px] h-[90px] w-[300px]">
              <div
                className="heading flex"
                style={{ fontSize: "16px", width: "200px" }}
              >
                Vegetables (05)
                <div className="flex justify-center items-center ml-4">
                  {" "}
                  <img
                    alt="loading"
                    className="h-[10px] w-[14px]"
                    src={RecommendedLogo}
                  />
                </div>
              </div>
              {dishdetail?.ingredients?.vegetables.map(({ name, quantity }) => {
                return (
                  <>
                    <div className="flex w-full justify-between list px-2 my-[1px]">
                      <div>{name}</div>
                      <div>
                        ({quantity.endsWith("Kg")})? `${quantity}` : `$
                        {quantity} Pc`
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="flex flex-col  ml-[16px] h-[75px] w-[300px]">
              <div
                className="heading flex"
                style={{ fontSize: "16px", width: "200px" }}
              >
                Spices(10)
                <div className="flex justify-center items-center ml-4">
                  {" "}
                  <img
                    alt="loading"
                    className="h-[10px] w-[14px]"
                    src={RecommendedLogo}
                  />
                </div>
              </div>
              {dishdetail?.ingredients?.spices.map(({ name, quantity }) => {
                return (
                  <>
                    <div className="flex w-full justify-between list px-2 my-[1px]">
                      <div>{name}</div>
                      <div>{quantity}</div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className="appliances flex flex-col  ml-[16px] h-[160px] w-[300px]">
              <div
                className="heading"
                style={{ fontSize: "16px", width: "200px" }}
              >
                Appliances
              </div>
              <div className="flex mt-2">
                {dishdetail?.ingredients?.appliances.map(({ name, image }) => {
                  return (
                    <div className="items flex flex-col justify-center items-center mx-2">
                      <img
                        alt="loading"
                        src={Refrigerator}
                        className="w-[30px] h-[55px]"
                      />
                      <div style={{ fontSize: "8px" }}>{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dishdetail;
