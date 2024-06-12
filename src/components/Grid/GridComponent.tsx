import React, { useState } from 'react';
import { TableVirtuoso } from 'react-virtuoso';
import { ChatIcon } from './Icons';
import { SearchBar } from './SearchBar';
import { TableRow } from './TableRow';
import type { DocumentNode } from './DocumentNode';

interface GridComponentProps {
  rows: DocumentNode[];
  totalRows: number;
}

const HorizontalDivider: React.FC = () => {
  return <hr className="border-t border-gray-200" />;
};

const Heading: React.FC = () => (
  <div className="flex justify-between items-start">
    <div>
      <p className="text-2xl font-medium leading-8 normal-case mb-1 pl-5">
        Developer
      </p>
      <p className="text-base font-medium normal-case normal-style leading-6 mt-1 pb-5 text-gray-400 pl-5">
        brain cancer
      </p>
    </div>
    <div>
      <div className="w-16 h-12 rounded border border-gray-300 p-1 flex justify-center items-center">
        <ChatIcon />
      </div>
      <div className="w-20"></div>
    </div>
  </div>
);

export const GridComponent: React.FC<GridComponentProps> = ({
  rows,
  totalRows,
}) => {
  const [filteredRows, setFilteredRows] =
    useState<(DocumentNode & { expanded?: boolean })[]>(rows);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  // Fuzzy search, looks for everything
  const filterRows = (searchTerm: string) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    const filtered = rows.filter((row) =>
      Object.keys(row).some((key) =>
        String((row as any)[key])
          .toLowerCase()
          .includes(lowercasedTerm)
      )
    );
    setFilteredRows(filtered);
  };

  // expands or collapses the row
  const toggleRow = (index: number) => {
    if (expandedRow === index) {
      setExpandedRow(null);
      setFilteredRows(filteredRows.filter((row) => !row.expanded));
    } else {
      const newRow = { ...filteredRows[index], expanded: true };
      const newFilteredRows = [...filteredRows].filter((row) => !row.expanded);
      newFilteredRows.splice(index + 1, 0, newRow);
      setFilteredRows(newFilteredRows);
      setExpandedRow(index);
    }
  };

  return (
    <div>
      <Heading />
      <hr className="w-70 border-t border-gray-200 pb-10" />
      <div className="bg-white rounded-lg overflow-hidden shadow-lg border-2 border-gray-200">
        <div className="w-full h-12 flex items-center pl-35">
          <input
            type="radio"
            id="intervention"
            name="intervention"
            value="intervention"
            className="mr-2 align-middle"
            style={{ transform: 'scale(1.5)' }}
            defaultChecked
          />
          <label htmlFor="intervention" className="align-middle">
            Intervention
          </label>
        </div>
        <HorizontalDivider />
        <SearchBar filterRows={filterRows} />
        <HorizontalDivider />
        <TableVirtuoso
          style={{ height: 400 }}
          className="w-full"
          data={filteredRows}
          components={{
            Table: ({ children }) => (
              <table className="w-full">{children}</table>
            ),
          }}
          fixedHeaderContent={() => (
            <tr className="h-12 w-full text-left px-6 w-full text-sm font-medium text-gray-500 border-b">
              <th className="w-96 bg-slate-100 px-6">Title</th>
              <th className="w-1/6 bg-slate-100 px-6">Date</th>
              <th className="w-1/6 bg-slate-100 px-6">Document</th>
              <th className="w-56 bg-slate-100 px-6">Topic</th>
              <th className="w-8 bg-slate-100 px-6">Status</th>
              <th className="w-8 bg-slate-100 px-6"></th>
            </tr>
          )}
          itemContent={(index, document) => (
            <TableRow
              document={document}
              index={index}
              expandedRow={expandedRow}
              toggleRow={toggleRow}
            />
          )}
        />
      </div>
    </div>
  );
};
