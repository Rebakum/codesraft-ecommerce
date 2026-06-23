const UserHome = () => {
  return (
    <div className="dark:text-coffee-300">
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="border border-coffee-200 dark:border-coffee-800 shadow rounded-2xl w-full flex flex-col justify-center items-center p-5 bg-white dark:bg-[#2b1a0d]">
          <img src="" alt="" className="h-[120px] w-[120px] rounded-full bg-coffee-300 dark:bg-coffee-700" />
          <h4 className="text-xl font-semibold text-center dark:text-white">Dianne Russell</h4>
          <p className="text-center text-coffee-500 dark:text-coffee-400">Customer</p>
          <button className="text-amber-700 font-bold mt-2">Edit Profile</button>
        </div>
        <div className="border border-coffee-200 dark:border-coffee-800 shadow rounded-2xl w-full p-5 bg-white dark:bg-[#2b1a0d]">
          <h4 className="text-coffee-500 dark:text-coffee-400 text-lg font-semibold">Billing Address</h4>
          <h4 className="text-xl font-semibold mt-4 dark:text-white">Dianne Russell</h4>
          <p className="text-coffee-500 dark:text-coffee-400 mt-2">4140 Parker Rd. Allentown, New Mexico 31134</p>
          <p className="text-coffee-500 dark:text-coffee-400 mt-2">dainne.russell@gmail.com</p>
          <p className="text-coffee-500 dark:text-coffee-400 mt-2">(+88) 555-0110</p>
          <button className="text-amber-700 font-bold mt-4">Edit Address</button>
        </div>
      </div>
      <div className="border border-coffee-200 dark:border-coffee-800 shadow rounded-2xl w-full mt-6 bg-white dark:bg-[#2b1a0d]">
        <div className="flex justify-between items-center px-6">
          <h4 className="text-xl font-semibold dark:text-white">Recent Order History</h4>
          <button className="text-amber-700 font-bold mt-4">View All</button>
        </div>
        <div className="my-4">
          <div className="overflow-x-scroll">
            <table className="table">
              <thead className="bg-coffee-100 dark:bg-coffee-800">
                <tr>
                  <th className="dark:text-coffee-300">Order ID</th>
                  <th className="dark:text-coffee-300">Date</th>
                  <th className="dark:text-coffee-300">Total</th>
                  <th className="dark:text-coffee-300">Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className="px-4">
                {[
                  { id: "#738", date: "8 Sep, 2020", total: "$135.00 (Products)", status: "Processing" },
                  { id: "#738", date: "8 Sep, 2020", total: "$135.00 (Products)", status: "On the way" },
                  { id: "#738", date: "8 Sep, 2020", total: "$135.00 (Products)", status: "Completed" },
                ].map((order, i) => (
                  <tr key={i}>
                    <th>{order.id}</th>
                    <td>{order.date}</td>
                    <td>{order.total}</td>
                    <td>{order.status}</td>
                    <td><button className="text-amber-700 font-bold">View Details</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
