import React, { useContext, useState, useRef, useEffect } from "react";
import Navbar from "../../components/Navbar/Index";
import AchievementWidget from "../../components/Widget/Achievment.jsx";
import { useOutletContext, Link } from "react-router-dom";
import axios from "../../api/axios.js"; //will need this for ACTUAL file uploading stuff
import Select from "react-select";

import printIcon from "../../assets/images/printicon.svg";
import docimage1 from "../../assets/images/docimage1.jpg";
import docimage2 from "../../assets/images/docimage2.jpg";
import docimage3 from "../../assets/images/docimage3.jpg";
import docimage4 from "../../assets/images/docimage4.jpg";
import docimage5 from "../../assets/images/docimage5.jpg";

const images = [docimage1, docimage2, docimage3, docimage4, docimage5];

const paperOptions = [
  { label: "A3", value: 3 },
  { label: "A4", value: 4 },
  { label: "A5", value: 5 },
];

const orientationOptions = [
  { label: "Hướng giấy dọc", value: 1 },
  { label: "Hướng giấy ngang", value: 2 },
];

const printOnOptions = [
  { label: "In trên một mặt", value: 1 },
  { label: "In trên hai mặt (cạnh dài)", value: 2 },
  { label: "In trên hai mặt (cạnh ngắn)", value: 3 },
];

function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

function Print_service({ ...props }) {
  const fileInput = useRef(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [files, setFiles] = useState([]);

  const handleButtonClick = (e) => {
    console.log("Button clicked"); // Debugging
    if (fileInput.current) {
      fileInput.current.click();
    }
  };
  //for future stuff
  const handleDelete = (index) => {
    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleFileChange = (e) => {
    console.log("File input changed"); // Debugging
    console.log(e.target.files); // Debugging
    if (e.target.files.length > 0) {
      setFileUploaded(true);
      setFiles([...files, ...e.target.files]);
    }
  };

  useEffect(() => {
    console.log(fileUploaded);
  }, [fileUploaded]);

  const [sidebarToggle] = useOutletContext();

  return (
    <>
      <Navbar toggle={sidebarToggle} />
      <input
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />{" "}
      {/* Attach handleFileChange here */}
      {fileUploaded ? (
        // already uploaded some files
        <>
          <main className="h-full">
            <div className="px-2 mx-auto mainCard h-full overflow-hidden">
              <div className="w-full text-slate-700 md:grid gap-4 grid md:grid-cols-7 h-full overflow-hidden">
                <div className="h-full rounded-lg md:col-start-1 md:col-span-5 md:row-span-2 flex-col items-center justify-center overflow-hidden bg-green-200">
                  <div className="h-full rounded-lg flex-col items-center justify-center overflow-hidden bg-green-200 p-5">
                    <div className="overflow-y-auto max-h-full items-start">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="rounded p-4 bg-[#D9F99D] lg:h-64 w-full md:col-span-full mb-5 flex items-start"
                        >
                          <div className="mr-5 mt-4 text-center">
                            {file.type === "application/pdf" ||
                            file.type === "application/msword" ||
                            file.type ===
                              "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
                              <img
                                src={getRandomImage()}
                                alt="Placeholder for document"
                                className="h-40 object-cover mb-2"
                              />
                            ) : (
                              <img
                                src={URL.createObjectURL(file)}
                                alt={file.name}
                                className="h-5/6 object-cover mb-2"
                              />
                            )}
                            <p className="text-s">
                              {file.name.length > 13
                                ? file.name.substring(0, 13) + "..."
                                : file.name}
                            </p>
                          </div>
                          <div className="flex-grow">
                            <div className="lg:grid grid-cols-2 gap-5">
                              <div className="col-start-1">
                                <div className="mb-2">
                                  <b>Tên tệp</b>
                                  <br />
                                  <input
                                    id="filename"
                                    type="text"
                                    name="filename"
                                    className="text-base placeholder-gray-500 px-3 py-1.5 rounded border border-gray-300 focus:outline-none focus:border-emerald-400 w-full"
                                    placeholder={
                                      file.name.length > 17
                                        ? file.name.substring(0, 17) + "..."
                                        : file.name
                                    }
                                  />
                                </div>
                                <div className="mb-2">
                                  <b>Số bản in</b>
                                  <br />
                                  <input
                                    id="copies"
                                    type="number"
                                    name="copies"
                                    className="text-base placeholder-gray-500 px-3 py-1.5 rounded border border-gray-300 focus:outline-none focus:border-emerald-400 w-full"
                                  />
                                </div>
                                <div className="mb-2">
                                  <b>In các trang</b>
                                  <br />
                                  <input
                                    id="pages"
                                    type="text"
                                    name="pages"
                                    className="text-base placeholder-gray-500 px-3 py-1.5 rounded border border-gray-300 focus:outline-none focus:border-emerald-400 w-full"
                                    placeholder="Tất cả trang"
                                  />
                                  <p className="ml-2" style={{ fontSize: 12 }}>
                                    Vd: 1-5 để in từ trang 1 đến trang 5
                                  </p>
                                </div>
                              </div>

                              <div className="col-start-2">
                                <div className="mb-2">
                                  <b>Khổ giấy</b>
                                  <Select
                                    className="rounded-lg focus:outline-none focus:border-emerald-400"
                                    placeholder="Khổ giấy"
                                    options={paperOptions}
                                    getOptionLabel={(paperOptions) =>
                                      paperOptions.label
                                    }
                                    components={{
                                      IndicatorSeparator: () => null,
                                    }}
                                  />
                                </div>
                                <div className="mb-2">
                                  <b>Hướng giấy</b>
                                  <Select
                                    className="rounded-lg focus:outline-none focus:border-emerald-400"
                                    placeholder="Hướng giấy"
                                    options={orientationOptions}
                                    getOptionLabel={(orientationOptions) =>
                                      orientationOptions.label
                                    }
                                    components={{
                                      IndicatorSeparator: () => null,
                                    }}
                                  />
                                </div>
                                <div className="mb-2">
                                  <b>In trên</b>
                                  <Select
                                    className="rounded-lg focus:outline-none focus:border-emerald-400"
                                    placeholder="In trên"
                                    options={printOnOptions}
                                    getOptionLabel={(printOnOptions) =>
                                      printOnOptions.label
                                    }
                                    components={{
                                      IndicatorSeparator: () => null,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-start-6 md:col-span-2 h-full overflow-hidden">
                  <AchievementWidget />
                </div>
                <button
                  onClick={handleButtonClick}
                  className="md:col-start-4 md:col-span-1 md:row-start-3 bg-emerald-400 hover:bg-emerald-600 text-white font-bold rounded h-12"
                >
                  Thêm tệp
                </button>
                <Link
                  to="/user/selectPrinter"
                  className="md:col-start-5 md:col-span-1 md:row-start-3 bg-emerald-400 hover:bg-emerald-600 text-white font-bold rounded h-12 flex justify-center items-center"
                >
                  Tiếp tục
                </Link>
              </div>
            </div>
          </main>
        </>
      ) : (
        // when no file is uploaded
        <>
          <main className="h-full">
            <div className="px-2 mx-auto mainCard h-full overflow-hidden">
              <div className="w-full text-slate-700 md:grid gap-4 grid md:grid-cols-6 h-full overflow-hidden">
                <div className="h-3/4 rounded-lg md:col-start-1 md:col-span-4 flex flex-col items-center justify-center overflow-hidden bg-green-200">
                  <img
                    src={printIcon}
                    alt="Description of the image"
                    className="mb-4"
                  />
                  <button
                    onClick={handleButtonClick}
                    className="bg-emerald-400 hover:bg-emerald-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Chọn các tệp
                  </button>
                </div>

                <div className="md:col-start-5 md:col-span-2 h-full overflow-hidden">
                  <AchievementWidget className="md:row-span-2" />
                </div>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default Print_service;
