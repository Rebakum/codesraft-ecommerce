import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineDiscount } from "react-icons/md";
import { IoLeafOutline } from "react-icons/io5";
import { Rating } from "@smastrom/react-rating";
const ProductDetailsCenter = () => {
  return (
    <div>
      <Tabs>
        <TabList className="flex justify-center ">
          <Tab>Descriptions</Tab>
          <Tab>Additional Information</Tab>
          <Tab>Customer Feedback</Tab>
        </TabList>

        <div className="mt-8">
          <TabPanel>
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="w-full md:w-1/2">
                <p>
                  {" "}
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis,
                  egestas elementum leo. Donec convallis mollis enim. Aliquam id
                  mi quam. Phasellus nec fringilla elit. Nulla mauris tellus,
                  feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus
                  faucibus elementum tincidunt, turpis mi viverra velit,
                  pellentesque tristique neque mi eget nulla. Proin luctus
                  elementum neque et pharetra.
                </p>
                <div className="mt-5">
                  <ul>
                    <li className="flex items-center gap-2 mt-2">
                      <FaCircleCheck className="text-[#DC2626] mt-2" />{" "}
                      <span>100 g of fresh leaves provides.</span>
                    </li>
                    <li className="flex items-center gap-2 mt-2">
                      <FaCircleCheck className="text-[#DC2626] mt-2" />{" "}
                      <span>Aliquam ac est at augue volutpat elementum.</span>
                    </li>
                    <li className="flex items-center gap-2 mt-2">
                      <FaCircleCheck className="text-[#DC2626] mt-2" />{" "}
                      <span>100 g of fresh leaves provides.</span>
                    </li>
                    <li className="flex items-center gap-2 mt-2">
                      <FaCircleCheck className="text-[#DC2626]" />{" "}
                      <span>Aliquam ac est at augue volutpat elementum.</span>
                    </li>
                  </ul>
                  <p className="mt-5">
                    Cras et diam maximus, accumsan sapien et, sollicitudin
                    velit. Nulla blandit eros non turpis lobortis iaculis at ut
                    massa.{" "}
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="border w-full h-[350px] rounded-md flex justify-center items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Play">
                      <g id="Group 14">
                        <circle
                          id="Ellipse 6"
                          cx="25"
                          cy="25"
                          r="25"
                          fill="#00B307"
                        />
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M20 16V34L34 25L20 16Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="flex flex-col md:flex-row mt-5 border shadow-sm rounded-md p-3 justify-between items-center gap-5">
                  <div className="flex items-center gap-2">
                    <MdOutlineDiscount className="text-[#DC2626] text-2xl" />
                    <div>
                      <h5 className="text-sm font-bold">
                        <span>64% </span>Discount
                      </h5>
                      <p className="text-sm text-gray m-1">
                        Save your <span>64% </span> money with us
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoLeafOutline className="text-[#DC2626] text-2xl" />
                    <div>
                      <h5 className="text-sm font-bold">100% Arabica</h5>
                      <p className="text-sm text-gray m-1">
                        100% Arabica Coffee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="w-full md:w-1/2">
                <div className="mt-5">
                  <ul>
                    <li className="flex items-center gap-12 mt-2 font-medium text-sm">
                      Weight:
                      <span className="text-gray">03</span>
                    </li>
                    <li className="flex items-center gap-14 mt-2 font-medium  text-sm">
                      Color:
                      <span className="text-gray">Green</span>
                    </li>
                    <li className="flex items-center gap-[60px] mt-2 font-medium   text-sm">
                      Type:
                      <span className="text-gray">Coffee</span>
                    </li>
                    <li className="flex items-center gap-8 mt-2 font-medium  text-sm">
                      Category:
                      <span className="text-gray">Coffee</span>
                    </li>
                    <li className="flex items-center gap-3 mt-2 font-medium  text-sm">
                      Stock Status:
                      <span className="text-gray">Available (5,413)</span>
                    </li>
                    <li className="flex items-center gap-[60px] mt-2 font-medium  text-sm">
                      Tags:
                      <span className="text-gray">
                        Coffee, Beans, Roast, Arabica,
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="border w-full h-[350px] rounded-md flex justify-center items-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Play">
                      <g id="Group 14">
                        <circle
                          id="Ellipse 6"
                          cx="25"
                          cy="25"
                          r="25"
                          fill="#00B307"
                        />
                        <g id="Group">
                          <path
                            id="Vector"
                            d="M20 16V34L34 25L20 16Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="flex flex-col md:flex-row mt-5 border shadow-sm rounded-md p-3 justify-between items-center gap-5">
                  <div className="flex items-center gap-2">
                    <MdOutlineDiscount className="text-[#DC2626] text-2xl" />
                    <div>
                      <h5 className="text-sm font-bold">
                        <span>64% </span>Discount
                      </h5>
                      <p className="text-sm text-gray m-1">
                        Save your <span>64% </span> money with us
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoLeafOutline className="text-[#DC2626] text-2xl" />
                    <div>
                      <h5 className="text-sm font-bold">100% Arabica</h5>
                      <p className="text-sm text-gray m-1">
                        100% Arabica Coffee
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="w-full md:w-[60%] lg:w-[50%]">
              <div>
                <div className="mt-4">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <img
                        src=""
                        alt=""
                        className="w-12 h-12 rounded-full border"
                      />
                      <div>
                        <h5 className="text-sm font-bold">Kristin Watson</h5>
                        <Rating style={{ maxWidth: 100 }} value={4} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray">2 min ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray mt-0">
                    Savor the smooth flavor of freshly brewed coffee with notes
                    of caramel and cocoa. Enjoy every cup hot or iced, and explore
                    bold blends made for the perfect morning ritual.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <img
                        src=""
                        alt=""
                        className="w-12 h-12 rounded-full border"
                      />
                      <div>
                        <h5 className="text-sm font-bold">Kristin Watson</h5>
                        <Rating style={{ maxWidth: 100 }} value={4} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray">2 min ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray mt-0">
                    Savor the smooth flavor of freshly brewed coffee with notes
                    of caramel and cocoa. Enjoy every cup hot or iced, and explore
                    bold blends made for the perfect morning ritual.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <img
                        src=""
                        alt=""
                        className="w-12 h-12 rounded-full border"
                      />
                      <div>
                        <h5 className="text-sm font-bold">Kristin Watson</h5>
                        <Rating style={{ maxWidth: 100 }} value={4} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray">2 min ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray mt-0">
                    Savor the smooth flavor of freshly brewed coffee with notes
                    of caramel and cocoa. Enjoy every cup hot or iced, and explore
                    bold blends made for the perfect morning ritual.
                  </p>
                </div>
                <div className="mt-4">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <img
                        src=""
                        alt=""
                        className="w-12 h-12 rounded-full border"
                      />
                      <div>
                        <h5 className="text-sm font-bold">Kristin Watson</h5>
                        <Rating style={{ maxWidth: 100 }} value={4} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray">2 min ago</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray mt-0">
                    Savor the smooth flavor of freshly brewed coffee with notes
                    of caramel and cocoa. Enjoy every cup hot or iced, and explore
                    bold blends made for the perfect morning ritual.
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray mb-6 mt-5">
                    Premium single-origin coffee beans roasted to perfection,
                    delivering a rich and smooth cup with notes of chocolate,
                    citrus, and caramel.
                  </p>
                  <button className="btn bg-[#DC2626] bg-opacity-50 text-[#DC2626] rounded-[43px] px-8 ">
                    Load More
                  </button>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ProductDetailsCenter;
