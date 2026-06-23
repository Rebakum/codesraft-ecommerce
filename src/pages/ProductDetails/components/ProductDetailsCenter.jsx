import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { FaCircleCheck } from "react-icons/fa6";
import { Rating } from "@smastrom/react-rating";

const ProductDetailsCenter = ({ product }) => {
  const info = product.additionalInfo || {};

  return (
    <div>
      <Tabs>
        <TabList className="flex justify-center">
          <Tab>Descriptions</Tab>
          <Tab>Additional Information</Tab>
          <Tab>Customer Feedback</Tab>
        </TabList>

        <div className="mt-8">
          {/* Description Tab */}
          <TabPanel>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="w-full md:w-1/2">
                <p className="text-coffee-700 dark:text-coffee-300">{product.description}</p>
                <div className="mt-5">
                  <ul>
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 mt-2">
                        <FaCircleCheck className="text-amber-600 mt-2" />
                        <span className="text-coffee-700 dark:text-coffee-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="flex flex-col gap-5 p-4 mt-5 border border-coffee-200 dark:border-coffee-700 rounded-md shadow-sm md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-950/30">
                      <FaCircleCheck className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold dark:text-white">
                        {product.discount > 0 ? `${product.discount}% ` : ""}Discount
                      </h5>
                      <p className="text-sm text-coffee-500 dark:text-coffee-400">
                        {product.discount > 0
                          ? `Save your ${product.discount}% money with us`
                          : "Best value guaranteed"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-50 dark:bg-amber-950/30">
                      <FaCircleCheck className="text-amber-600 text-xl" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold dark:text-white">100% Arabica</h5>
                      <p className="text-sm text-coffee-500 dark:text-coffee-400">Premium Quality Beans</p>
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
                      <li key={key} className="flex items-center gap-12 mt-2 font-medium text-sm capitalize dark:text-coffee-300">
                        {key.replace(/([A-Z])/g, " $1")}:
                        <span className="text-coffee-500 dark:text-coffee-400">{value}</span>
                      </li>
                    ))}
                    <li className="flex items-center gap-12 mt-2 font-medium text-sm dark:text-coffee-300">
                      Stock Status:
                      <span className="text-coffee-500 dark:text-coffee-400">
                        {product.stock > 0 ? `Available (${product.stock})` : "Out of Stock"}
                      </span>
                    </li>
                    <li className="flex items-center gap-12 mt-2 font-medium text-sm dark:text-coffee-300">
                      Category:
                      <span className="text-coffee-500 dark:text-coffee-400">{product.category}</span>
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
                      <div className="w-12 h-12 bg-coffee-200 dark:bg-coffee-700 rounded-full" />
                      <div>
                        <h5 className="text-sm font-bold dark:text-white">Kristin Watson</h5>
                        <Rating style={{ maxWidth: 100 }} value={4} />
                      </div>
                    </div>
                    <p className="text-sm text-coffee-500 dark:text-coffee-400">2 min ago</p>
                  </div>
                  <p className="mt-1 text-sm text-coffee-600 dark:text-coffee-400">
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
