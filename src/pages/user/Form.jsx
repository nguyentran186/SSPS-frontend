import React from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFloppyDisk, faIdCard, faPhone, faSignature } from "@fortawesome/free-solid-svg-icons";

function Form() {
  const [sidebarToggle] = useOutletContext();
  const data = {
    stu_id: 2153637,
    email: "user1@hcmut.edu.vn",
    name: "Linh",

  }
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mt-6 w-fit mx-auto">
          <img src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe" class="rounded-full w-28 " alt="profile picture" srcset="" />
        </div>
        <div className="text-center mt-4">
          <button class="bg-white hover:bg-gray-100 text-gray-800 font-sanserif py-2 px-3 border border-gray-400 rounded shadow">
            Thay đổi avatar
          </button>
        </div>

        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <form>
              {/* Form Large */}
              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Mã số sinh viên
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.stu_id}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Email
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.email}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Tên
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.name}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>


              <div className="mt-6 flex flex-row gap-4">
                <button className="bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Lưu thay đổi
                </button>

                <button className="text-emerald-600 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Khôi phục
                </button>

              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default Form;
