import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const SearchResults = ({ data }) => {
  const columns = useMemo(
    () => [
      { accessorKey: "HARI", header: "Hari" },
      { accessorKey: "JAM", header: "Jam" },
      { accessorKey: "RUANG", header: "Ruang" },
      { accessorKey: "MATA KULIAH", header: "Mata Kuliah" },
      { accessorKey: "T/P", header: "T/P" },
      { accessorKey: "KELAS", header: "Kelas" },
      { accessorKey: "DOSEN", header: "Dosen" },
    ],
    []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 15;
  const totalPages = Math.ceil(data.length / rowsPerPage);

  // Pastikan currentPage tidak melebihi total halaman
  const paginatedData = useMemo(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
    return data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);
  }, [data, currentPage, totalPages]);

  const table = useReactTable({
    data: paginatedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-10 w-full min-h-screen flex justify-center">
      <div className="w-full max-w-7xl mx-auto bg-white p-10 rounded-2xl shadow-lg flex flex-col min-h-fit">
        {table.getRowModel().rows.length > 0 ? (
          <div className="overflow-hidden rounded-2xl">
            <table className="w-full border-collapse rounded-2xl overflow-hidden">
              <thead className="bg-purple-200 text-left rounded-t-2xl">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="rounded-t-2xl">
                    {headerGroup.headers.map((header, index) => (
                      <th
                        key={header.id}
                        className={`p-3 font-bold text-black border-b border-gray-300 ${
                          index === 0 ? "rounded-tl-2xl" : ""
                        } ${index === headerGroup.headers.length - 1 ? "rounded-tr-2xl" : ""}`}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row, rowIndex) => (
                  <tr
                    key={row.id}
                    className={`${
                      rowIndex % 2 === 0 ? "bg-purple-50" : "bg-white"
                    } hover:bg-purple-100`}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td key={cell.id} className="p-3 border-b border-gray-300 text-black">
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="flex flex-col items-center py-10 pt-20 min-h-screen">
            <h2 className="text-4xl font-bold text-purple-600">Tidak ada hasil pencarian</h2>
            <p className="text-lg text-black mt-2">Silakan cari kata kunci lain</p>
          </div>
        )}
        
        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center mt-auto pt-4 gap-2 text-black text-sm">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 border rounded-md text-purple-600 disabled:opacity-50"
            >
              &#9664;
            </button>
            <span className="">{currentPage}</span>
            <span className="text-gray-600">dari</span>
            <span className="">{totalPages}</span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage >= totalPages}
              className="px-3 py-1 border rounded-md text-purple-600 disabled:opacity-50"
            >
              &#9654;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
