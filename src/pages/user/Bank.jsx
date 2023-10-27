import React from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFloppyDisk, faIdCard, faPhone, faSignature } from "@fortawesome/free-solid-svg-icons";

function Bank() {
  const [sidebarToggle] = useOutletContext();
  const data = {
    bank_name: "Ngân hàng thương mại cổ phần Phương Đông - OCB",
    acc_no: "0000123456789",
    acc_name: "Phạm Huỳnh Quốc Thạnh",
    debit_card: "Không có"
  }
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <form>
              {/* Form Large */}
              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Tên ngân hàng
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.bank_name}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Số tài khoản
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.acc_no}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Chủ tài khoản
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.acc_name}
                  // onChange={(e) => setEmail(e.target.value)}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Thẻ ghi nợ
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.debit_card}
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

export default Bank;
