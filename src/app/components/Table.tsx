import React from "react";
interface Column {
  header: string;
  accessor: string;
  className?: string;
}

type RenderRow<T> = (item: T) => JSX.Element;

interface Props<T> {
  columns: Column[];
  renderRow: RenderRow<T>;
  data: T[];
}

const Table = <T,>({ columns, renderRow, data }: Props<T>) => {
  return (
    <table className="w-full mt-4">
      <thead>
        <tr className=" text-left text-gray-500 text-sm">
          {columns.map((column) => (
            <th className={column.className} key={column.accessor}>
              {column.header}{" "}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((item) => renderRow(item))}</tbody>
    </table>
  );
};

export default Table;
