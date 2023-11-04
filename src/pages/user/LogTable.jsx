import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faRemove } from "@fortawesome/free-solid-svg-icons";

function LogTable({ loading, dataHeader, data, handleDelete }) {
  return (
    <Datatables loading={loading} dataHeader={dataHeader}>
      {data?.map((row, index) => (
        <tr
          key={index}
          className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="id" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">
              {row.id}
            </span>
          </TableCell>
          <TableCell dataLabel="Tên File" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.file_name}</p>
          </TableCell>
          <TableCell dataLabel="Thời Gian" showLabel={true}>
            <p className="font-normal text-sm text-gray-900">{row.time}</p>
          </TableCell>
          <TableCell dataLabel="Kích Thước" showLabel={true}>
          <span className="font-medium text-sm text-gray-900">
              {row.size}
            </span>
          </TableCell>
          <TableCell dataLabel="Số lượng" showLabel={true}>
          <span className="font-medium text-sm text-gray-900">
              {row.quantity}
            </span>
          </TableCell>
          <TableCell>
            <Link
              onClick={(e) => {
                e.preventDefault();
                handleDelete(row.id);
              }}
              to={`/auth/master/user/${row.id}/edit`}
              className={`text-red-700 inline-flex py-2 px-2 rounded  text-sm`}
            >
              <FontAwesomeIcon icon={faRemove} />
            </Link>
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default LogTable;
