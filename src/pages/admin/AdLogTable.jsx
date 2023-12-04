import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import RemoveInfo from "../../components/Modal/RemoveInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";

function AdLogTable({ loading, dataHeader, data, handleDelete }) {
  return (
    <Datatables loading={loading} dataHeader={dataHeader}>
      {data?.map((row, index) => (
        <tr
          key={index}
          className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="STT" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">
              {row.id}
            </span>
          </TableCell>
          <TableCell dataLabel="Họ và tên" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.user_name}</p>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.email}</p>
          </TableCell>
          <TableCell dataLabel="Mã số máy in" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.print_id}</p>
          </TableCell>
          <TableCell dataLabel="Tên file" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.file_name}</p>
          </TableCell>
          <TableCell dataLabel="Ngày in" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.date}</p>
          </TableCell>
          <TableCell dataLabel="Thời gian bắt đầu" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.start_time}</p>
          </TableCell>
          <TableCell dataLabel="Thời gian kết thúc" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.end_time}</p>
          </TableCell>
          <TableCell dataLabel="Kích Thước" showLabel={true}>
          <span className="font-medium text-sm text-gray-900">
              {row.size}
            </span>
          </TableCell>
          <TableCell dataLabel="Khổ giấy" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.paper}</p>
          </TableCell>
          <TableCell dataLabel="Số trang" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.page}</p>
          </TableCell>
          <TableCell dataLabel="Số lượng" showLabel={true}>
          <span className="font-medium text-sm text-gray-900">
              {row.quantity}
            </span>
          </TableCell>
          <TableCell>
            <RemoveInfo/>
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default AdLogTable;
