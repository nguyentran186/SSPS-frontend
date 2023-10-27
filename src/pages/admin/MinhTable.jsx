import React from "react";
import { Link } from "react-router-dom";
import Datatables from "../../components/Datatables/Table";
import TableCell from "../../components/Datatables/TableCell";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRemove } from "@fortawesome/free-solid-svg-icons";
import ModifyMinh from "../../components/Modal/ModifyMinh";
import RemoveMinh from "../../components/Modal/RemoveMinh";

function MinhTable({ loading, dataHeader, data, handleDelete }) {
  return (
    <Datatables loading={loading} dataHeader={dataHeader}>
      {data?.map((row, index) => (
        <tr
          key={index}
          className="bg-white border md:border-b block md:table-row rounded-md shadow-md md:rounded-none md:shadow-none mb-5"
        >
          <TableCell dataLabel="Number" showLabel={true}>
            <span className="font-medium text-sm text-gray-900">
              {row.printer_id}
            </span>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.brand}</p>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.model}</p>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.description}</p>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.base}</p>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.building}</p>
          </TableCell>
          <TableCell dataLabel="Email" showLabel={true}>
            <p className="font-normal text-sm text-gray-500">{row.room}</p>
          </TableCell>
          <TableCell dataLabel="Role" showLabel={true}>
            <span className=" space-x-1">
              {row.roles?.map((role, index) => (
                <span
                  key={index}
                  className="rounded-full py-1 px-3 text-xs font-semibold bg-emerald-200 text-green-900"
                >
                  {role.name}
                </span>
              ))}
            </span>
          </TableCell>
          <TableCell>
            <ModifyMinh name={row.name} email={row.email} stu_id={row.stu_id}/>
            <RemoveMinh/>
          </TableCell>
        </tr>
      ))}
    </Datatables>
  );
}

export default MinhTable;
