import React from "react";
import {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState();
  const params = useParams();

  useEffect(() => {
    const userDetailApiURL = ` https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`;
    fetch(userDetailApiURL)
      .then((res) => res.json())
      .then((data) => setUserDetail(data));
    console.log(userDetail);
  }, [params, userDetail]);

  return (
    <div className="bg-[hsl(0,0%,90%)] w-full text-[#545F7D]">
      <div className="pl-16 pt-6">
        <Link to="/userpage">Back to user page</Link>
        <h2 className="font-bold">User Details </h2>
      </div>
      {userDetail && (
        <div className="md:p-6">
          <div className="flex md:m-10 md:w-auto  p-6 md:h-[200px] bg-[white] shadow">
            <img
              src={userDetail.profile.avatar}
              alt={userDetail.profile.firstName}
              className="w-16 h-16 rounded-full"
            />
            <div className="flex ml-4 pt-3 h-[80px] border-r pr-4">
              <h2 className="text-xl font-bold pr-2">
                <span>{userDetail.profile.firstName} </span>
                <span>{userDetail.profile.lastName}</span>
              </h2>
            </div>
            <h2 className="text-xl pt-3 ml-10">₦{userDetail.accountBalance}</h2>
          </div>
          <div className="p-6 md:m-10 m-4 md:w-auto bg-white border-2 border-blue-800 ">
            <div className="text-2xl pb-10">
              <h2>Personal Information</h2>
            </div>
            <div className="flex text-left">
              <div className="md:mr-24">
                <p className=" text-sm">FULL NAME</p>
                <h2 className="pr-2 font-bold">
                  <span>{userDetail.profile.firstName} </span>
                  <span>{userDetail.profile.lastName}</span>
                </h2>
              </div>
              <div className="md:mr-24">
                <p className="text-sm">PHONE NUMBER</p>
                <h2 className="font-bold">{userDetail.profile.phoneNumber}</h2>
              </div>
              <div className="md:mr-24">
                <p className="text-sm">EMAIL</p>
                <h2 className="font-bold">{userDetail.email}</h2>
              </div>
              <div className="md:mr-24">
                <p className="text-sm">BVN</p>
                <h2 className="font-bold">{userDetail.profile.bvn}</h2>
              </div>
              <div>
                <p className="md:text-sm">GENDER</p>
                <h2 className="font-bold">{userDetail.profile.gender}</h2>
              </div>
            </div>

            <div className="flex pt-6 text-left">
              <div className="md:mr-16">
                <p className="text-sm">LEVEL OF EDUCATION</p>
                <h2 className="font-bold">{userDetail.education.level}</h2>
              </div>
              <div className="md:mr-28">
                <p className="text-sm">EMPLOYMENT STATUS</p>
                <h2 className="font-bold">
                  {userDetail.education.employmentStatus}
                </h2>
              </div>
              <div className="md:mr-[202px]">
                <p className="text-sm">SECTOR OF EDUCATION</p>
                <h2 className="font-bold">{userDetail.education.sector}</h2>
              </div>
              <div>
                <p className="text-sm">DURATION OF EDUCATION</p>
                <h2 className="font-bold">{userDetail.education.duration}</h2>
              </div>
            </div>
          </div>

          {/*<h2 className="text-xl">{userDetail.education.level}</h2>
          <h2 className="text-xl">{userDetail.education.employmentStatus}</h2>
          <h2 className="text-xl">{userDetail.education.sector}</h2>
          <h2 className="text-xl">{userDetail.education.duration}</h2>
          <h2 className="text-xl">{userDetail.education.officeEmail}</h2>
          <h2 className="text-xl">{userDetail.education.monthlyIncome}</h2>
          <h2 className="text-xl">{userDetail.education.loanRepayment}</h2>
          <h2 className="text-xl">{userDetail.socials.twitter}</h2>
          <h2 className="text-xl">{userDetail.socials.facebook}</h2>
          <h2 className="text-xl">{userDetail.socials.instagram}</h2>
          <h2 className="text-xl">{userDetail.guarantor.firstName}</h2>
          <h2 className="text-xl">{userDetail.guarantor.lastName}</h2>
          <h2 className="text-xl">{userDetail.guarantor.phoneNumber}</h2>
          <h2 className="text-xl">{userDetail.guarantor.gender}</h2>
          <h2 className="text-xl">{userDetail.guarantor.address}</h2>*/}
        </div>
      )}
    </div>
  );
};

export default UserDetail;
