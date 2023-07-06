import clockimg from "../assets/Set_time-01.svg";
import calenderimg from "../assets/Select_date-01.svg";
import RecommendedLogo from "../assets/Recommended (2).png";
import startLogo from "../assets/star (2).png";
import MaskGroup from "../assets/Group 359@2x.png";
import Refrigerator from "../assets/Refrigerator.png";
import foodimg from "../assets/foodimg.png";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Idcontext } from "./Context";
import Selecteditemimg from "../assets/selecteditems.svg";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function Home() {
  const [populardishes, setPopulardishes] = useState([]);
  const [recommendeddish, setRecommendeddish] = useState([]);
  const { updateid, updateRating, updateDescription } = useContext(Idcontext);

  useEffect(() => {
    axios
      .get(
        "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/"
      )
      .then((res) => {
        setPopulardishes(res.data.popularDishes);
        setRecommendeddish([
          ...res.data.dishes,
          ...res.data.dishes,
          ...res.data.dishes,
        ]);
      });
  }, []);

  const today = new Date();
  const options = { day: "numeric", month: "long", year: "numeric" };
  const formattedDate = today.toLocaleString("en-UK", options);
  const arr = [11, 12, 13, 14];

  return (
    <>
      <header>
        <div className="h-12 bg-black"></div>
        <div className="flex justify-center w-full">
          <div className="item-selected flex justify-between px-9 items-center">
            <div>
              <img alt="loading" src={Selecteditemimg} className="w-4 h-4" />
            </div>
            <div className="pr-3"> 3 food items selected</div>
            <div>{<BsArrowRight />}</div>
          </div>
        </div>

        <div className="flex justify-center w-full">
          <div className="flex flex-row dateandtime p-5">
            <div className="date flex flex-row justify-start items-center w-[50%] font-bold border-r-2">
              <img
                alt="loading"
                src={calenderimg}
                className="h-4 w-4 mr-2 text-xs"
              />{" "}
              <div className="w-full">{formattedDate}</div>
            </div>
            <div className="date flex flex-row justify-start items-center w-[50%] font-bold pl-3">
              <img
                alt="loading"
                src={clockimg}
                className="h-4 w-4 mr-2 text-xs"
              />{" "}
              <div>10:30Pm-12:30Pm</div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="food-type active mx-1">Italian</button>
          <button className="food-type mx-1">Indian</button>
          <button className="food-type mx-1">Indian</button>
          <button className="food-type mx-1">Indian</button>
        </div>
        <div className="flex justify-center w-full mt-4 popular-dishes">
          <div className="w-[370px]">
            <div className="text pl-4">Popular Dishes</div>
            <div className="flex w-full mt-3 px-4 overflow-x-scroll overflow-y-hidden popular-dishes-container">
              <div
                className="dishes flex justify-center items-center"
                style={{ border: "None" }}
              >
                {" "}
                <div className="mx-2 dishes-img flex justify-center items-center">
                  Biryani
                </div>
              </div>
              {populardishes.map((dish) => {
                return (
                  <div
                    className="dishes flex justify-center items-center"
                    key={dish.id}
                  >
                    {" "}
                    <div
                      className="mx-2 dishes-img flex justify-center items-center text-justify"
                      style={{ backgroundImage: `url(${dish.image})` }}
                    >
                      {dish.name}
                    </div>
                  </div>
                );
              })}
              {arr.map((val) => {
                return (
                  <div
                    className="dishes flex justify-center items-center"
                    key={val}
                  >
                    {" "}
                    <div className="mx-2 dishes-img flex justify-center items-center text-justify">
                      Dosa
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </header>
      <section className="flex justify-center">
        <div className="w-[370px] h-[300px] recommended overflow-y-auto overflow-x-hidden p-4 my-1">
          <div className="border-t-2 pt-4 flex justify-between text recommended-heading">
            <div className="flex flex-row">
              Recommended{" "}
              <div className="flex justify-center items-center ml-2">
                {" "}
                <img
                  alt="loading"
                  className="h-[10px] w-[14px]"
                  src={RecommendedLogo}
                />
              </div>
            </div>
            <button className="flex justify-center items-center menu-btn text-white">
              Menu
            </button>
          </div>
          {recommendeddish.map((dish) => {
            return (
              <>
                <div className="flex justify-between items-center recommended-items py-6 border-b-2">
                  <div className="item-details w-[156px] h-[73px] ml-[2px]">
                    <div className="heading flex items-center w-full mb-1">
                      <div className="w-[88px]">{dish.name}</div>

                      <div className="flex items-center ml-2">
                        <img
                          alt="loading"
                          src={MaskGroup}
                          className="w-[8px] h-[8px]"
                        />
                      </div>
                      <div className="rating flex justify-center items-center ml-2">
                        {dish.rating}
                        <img
                          alt="loading"
                          className="h-1 w-1 m-[1px]"
                          src={startLogo}
                        />
                      </div>
                    </div>
                    <div className="flex additional-details">
                      <div className="flex refrigerator pr-5">
                        {dish.equipments.map((val) => {
                          return (
                            <>
                              <div className="flex flex-col w-full h-full justify-center items-center">
                                <img
                                  alt="loading"
                                  src={Refrigerator}
                                  className="h-[12px] w-[7px]"
                                />
                                <div className="">{val}</div>
                              </div>
                            </>
                          );
                        })}
                      </div>
                      <div className="flex flex-col justify-center w-[78px] pl-3">
                        <div className="ingredients my-[2px]">Ingredients</div>
                        <Link
                          to="/detail"
                          className="view-list"
                          onClick={() => {
                            updateid(dish.id);
                            updateRating(dish.rating);
                            updateDescription(dish.description);
                          }}
                        >
                          View List {">"}
                        </Link>
                      </div>
                    </div>
                    <div className="description mt-1">{dish.description}</div>
                  </div>
                  <div className="w-[92px] h-[68px] relative">
                    <img alt="loading" src={foodimg} />
                    <button className="add flex items-center justify-center absolute bottom-[-10px] left-3">
                      {" "}
                      Add
                      <div className="absolute right-1 top-0 plus">
                        {<AiOutlinePlus />}
                      </div>
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
