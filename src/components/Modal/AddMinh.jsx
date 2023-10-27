import React from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function AddModal(...props) {
    const [showModal, setShowModal] = React.useState(false);
    console.log(props)
    return (
        <>
            <div className="mb-5">
                <button className="bg-emerald-200 hover:bg-gray-400 text-green-900 font-bold py-2 px-4 rounded inline-flex items-center" onClick={() => setShowModal(true)}>
                    <FontAwesomeIcon className="mr-2" icon={faPlus} />
                    <span>Thêm máy in</span>
                </button>
            </div>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-15 my-6 mx-auto max-w-none">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Thêm máy in
                                    </h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="relative p-100 flex-auto">
                                    <form className="p-12 md:p-5">
                                        <div className="sm:col-span-2 pb-2">
                                            <label className="block text-sm font-semibold leading-6 text-gray-900">Mã số máy in</label>
                                            <div className="mt-2.5">
                                                <input type="text" value={props[0].stu_id} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 pb-2">
                                            <label className="block text-sm font-semibold leading-6 text-gray-900">Nhãn hiệu</label>
                                            <div className="mt-2.5">
                                                <input type="text" value={props[0].email} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 pb-2">
                                            <label className="block text-sm font-semibold leading-6 text-gray-900">Mẫu máy in</label>
                                            <div className="mt-2.5">
                                                <input type="text" value={props[0].name} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 pb-2">
                                            <label className="block text-sm font-semibold leading-6 text-gray-900">Miêu tả</label>
                                            <div className="mt-2.5">
                                                <input type="text" value={props[0].name} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 pb-2">
                                            <label className="block text-sm font-semibold leading-6 text-gray-900">Cơ sở</label>
                                            <div className="mt-2.5">
                                                <input type="text" value={props[0].name} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 pb-2">
                                            <label className="block text-sm font-semibold leading-6 text-gray-900">Tòa</label>
                                            <div className="mt-2.5">
                                                <input type="text" value={props[0].name} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 pb-2">
                                            <label className="block text-sm font-semibold leading-6 text-gray-900">Phòng</label>
                                            <div className="mt-2.5">
                                                <input type="text" value={props[0].name} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 pb-2">
                                            <label className="block text-sm font-semibold leading-6 text-gray-900">Tình trạng</label>
                                            <div className="mt-2.5">
                                                <input type="text" value={props[0].name} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                        <div className="sm:col-span-2 pb-2">
                                            <label for="role" className="block text-sm font-semibold leading-6 text-gray-900">Phân quyền</label>
                                            <select id="role" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                                                <option selected>Chọn phân quyền cho tài khoản</option>
                                                <option value="User">User</option>
                                                <option value="Amin">Admin</option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}