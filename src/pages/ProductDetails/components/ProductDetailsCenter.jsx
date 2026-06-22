import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCircleCheck } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";

const ProductDetailsCenter = ({ product }) => {
  const info = product.additionalInfo || {};

  return (
    <div>
      <Tabs>
        <TabList className="flex justify-center ">
          <Tab>Descriptions</Tab>
          <Tab>Additional Information</Tab>
          <Tab>Customer Feedback</Tab>
        </TabList>

        <div className="mt-8">
          {/* Description Tab */}
          <TabPanel>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="w-full md:w-1/2">
                <p>{product.description}</p>
                <div className="mt-5">
                  <ul>
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 mt-2">
                        <FaCircleCheck className="text-[#DC2626] mt-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-5 p-4 mt-5 border rounded-md shadow-sm md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                      <FaCircleCheck className="text-[#DC2626] text-xl" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold">
                        {product.discount > 0 ? `${product.discount}% ` : ""}Discount
                      </h5>
                      <p className="text-sm text-gray">
                        {product.discount > 0
                          ? `Save your ${product.discount}% money with us`
                          : "Best value guaranteed"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
                      <FaCircleCheck className="text-[#DC2626] text-xl" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold">100% Arabica</h5>
                      <p className="text-sm text-gray">Premium Quality Beans</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Additional Information Tab */}
          <TabPanel>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="w-full md:w-1/2">
                <div className="mt-5">
                  <ul className="space-y-3">
                    {Object.entries(info).map(([key, value]) => (
                      <li key={key} className="flex items-center gap-12 mt-2 font-medium text-sm capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:
                        <span className="text-gray">{value}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-12 mt-2 font-medium text-sm">
                      Stock Status:
                      <span className="text-gray">
                        {product.stock > 0 ? `Available (${product.stock})` : "Out of Stock"}
                      </span>
                    </li>
                    <li className="flex items-center gap-12 mt-2 font-medium text-sm">
                      Category:
                      <span className="text-gray">{product.category}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </TabPanel>

          {/* Customer Feedback Tab */}
          <TabPanel>
            <div className="w-full md:w-[60%] lg:w-[50%]">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className="mt-4">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-200 rounded-full" />
                      <div>
                        <h5 className="text-sm font-bold">Kristin Watson</h5>
                        <Rating style={{ maxWidth: 100 }} value={4} />
                      </div>
                    </div>
                    <p className="text-sm text-gray">2 min ago</p>
                  </div>
                  <p className="mt-1 text-sm text-gray">
                    Savor the smooth flavor of freshly brewed coffee with notes
                    of caramel and cocoa. Enjoy every cup hot or iced, and explore
                    bold blends made for the perfect morning ritual.
                  </p>
                </div>
              ))}
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default ProductDetailsCenter;
