import React from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFloppyDisk, faIdCard, faPhone, faSignature } from "@fortawesome/free-solid-svg-icons";

function PerFileManage() {
  const [sidebarToggle] = useOutletContext();
  const data = {
    file_ext: ".doc, .docx, .jpeg, .jpg, .pdf, .png, .ppt, .pptx, .xls, .xlsx",
    max_size: "500MB",
    max_file: "30"
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
                  Đuôi mở rộng hợp lệ
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.file_ext}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Kích thước tối đa
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.max_size}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Số file in tối đa (cho mỗi lần in)
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  value={data.max_file}
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

export default PerFileManage