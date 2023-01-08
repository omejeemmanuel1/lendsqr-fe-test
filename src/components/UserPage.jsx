import React, {useState, useEffect} from "react";
import {
  HiOutlineUsers,
  HiOutlineUserGroup,
  HiOutlineReceiptTax,
  HiOutlineDatabase,
  HiOutlineChevronDoubleDown,
} from "react-icons/hi";
import ReactPaginate from "react-paginate";
import {Link} from "react-router-dom";

const UserPage = ({data}) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="p-12 w-full bg-[#e5e5e5] text-[#545F7D] text-sm font-tahoma">
      <h4 className="text-2xl font-bold">Users</h4>
      <div className="flex m-10 text-left font-bold">
        <div className="w-1/5 ml-6 bg-white shadows p-6 rounded">
          <div className="bg-pink-300 border-pink-700 rounded-full w-[25px] h-[25px] pl-[6px] pt-[4px] mb-[8px]">
            <HiOutlineUsers />
          </div>
          <p className="text-xs">USERS</p>
          <p className="text-2xl font-bold">2,453</p>
        </div>
        <div className="w-1/5 ml-14 bg-white shadow p-6 rounded">
          <div className="bg-blue-300 border-blue-600 rounded-full w-[25px] h-[25px] pl-[6px] pt-[4px] mb-[8px]">
            <HiOutlineUserGroup />
          </div>
          <p className="text-xs">ACTIVE USERS</p>
          <p className="text-2xl font-bold">2,453</p>
        </div>
        <div className="w-1/5 ml-14 bg-white shadows p-6 rounded">
          <div className="bg-orange-300 border-orange-600 rounded-full w-[25px] h-[25px] pl-[5px] pt-[5px] mb-[8px]">
            <HiOutlineReceiptTax />
          </div>
          <p className="text-xs">USERS WITH LOANS</p>
          <p className="text-2xl font-bold">12,453</p>
        </div>
        <div className="w-1/5 ml-14 bg-white shadows p-6 rounded">
          <div className="bg-red-300 border-red-600 rounded-full w-[25px] h-[25px] pl-[6px] pt-[5px] mb-[8px]">
            <HiOutlineDatabase />
          </div>
          <p className="text-xs">USERS WITH SAVING</p>
          <p className="text-2xl font-bold">102,453</p>
        </div>
      </div>
      <div className="shadow-md">
        <div className="flex bg-white pb-4 pt-4 border-b">
          <div className="w-1/5 pl-2 flex font-bold">
            <h5>ORGANIZATION</h5>
            <span className="pl-2 pt-1">
              <HiOutlineChevronDoubleDown />
            </span>
          </div>
          <div className="bg-white shadow w-[300px] p-6">
            <form action="" className="">
              <div>
                <label htmlFor="select" className="font-bold">
                  Organization
                </label>
                <div>
                  <select
                    name=""
                    id=""
                    className="border-2 rounded border-gray-400 w-full p-2"
                  >
                    <option value="">select</option>
                    <option value="">LendSqr</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="" className="font-bold">
                  Username
                </label>
                <div>
                  <input
                    type="text"
                    placeholder="User"
                    className="border-2 border-gray-400 rounded w-full p-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="Email" className="font-bold">
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="border-2 rounded border-gray-400 w-full p-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="font-bold">
                  Date
                </label>
                <div>
                  <input
                    type="date"
                    placeholder="Date"
                    className="border-2 rounded border-gray-400 w-full p-2"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="" className="font-bold">
                  Phone Number
                </label>
                <div>
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="border-2 rounded border-gray-400 w-full p-2"
                  />
                </div>
              </div>
              <div>
                <label className="font-bold">Status</label>
                <div>
                  <select
                    name=""
                    id=""
                    className="border-2 rounded border-gray-400 w-full p-2"
                  >
                    <option value="">select</option>
                    <option value="">good</option>
                  </select>
                </div>
              </div>
            </form>
          </div>
          <div className="w-1/5 pl-2 flex font-bold">
            <h5>USERNAME</h5>
            <span className="pl-2 pt-1">
              <HiOutlineChevronDoubleDown />
            </span>
          </div>
          <div className="w-1/5 pl-2 flex font-bold">
            <h5>EMAIL</h5>
            <span className="pl-2 pt-1 flex">
              <HiOutlineChevronDoubleDown />
            </span>
          </div>
          <div className="w-1/5 pl-2 flex font-bold">
            <h5>PHONE NUMBERS</h5>
            <span className="pl-2 pt-1">
              <HiOutlineChevronDoubleDown />
            </span>
          </div>
          <div className="w-1/5 pl-2 flex font-bold">
            <h5>DATE JOINED</h5>
            <span className="pl-2 pt-1">
              <HiOutlineChevronDoubleDown />
            </span>
          </div>
        </div>
        {currentItems.map((users) => {
          return (
            <div className="flex" key={users.id}>
              <div className="bg-white w-1/5 pb-6 pl-2 pt-4 border-b">
                <Link to={`/userPage/${users.id}`}>{users.orgName}</Link>
              </div>

              <div className="bg-white w-1/5 pb-6 pl-2 pt-4 border-b">
                <Link to={`/userPage/${users.id}`}>{users.userName}</Link>
              </div>

              <div className="bg-white   w-1/5 pb-6 pl-2 pt-4 border-b">
                <Link to={`/userPage/${users.id}`}>{users.email}</Link>
              </div>

              <div className="bg-white w-1/5 pb-6 pl-2 pt-4 border-b">
                <Link to={`/userPage/${users.id}`}>{users.phoneNumber}</Link>
              </div>

              <div className="bg-white w-1/5 pb-6 pl-2 pt-4 border-b">
                {new Date(users.createdAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                  timezone: "numeric",
                })}
              </div>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        marginPagesDisplayed={3}
        pageRangeDisplayed={3}
        containerClassName={"pagination justify-content-end"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default UserPage;
