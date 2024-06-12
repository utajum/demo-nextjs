import React from 'react';

import { ArrowUp, ArrowDown } from './Icons';

import type { DocumentNode } from './DocumentNode';

interface TdProps {
  className: string;
  isExpanded: boolean;
  onMouseDown?: (e: React.MouseEvent) => void;
  onClick?: (e: React.MouseEvent) => void;
  children: React.ReactNode;
}

const Td: React.FC<TdProps> = ({
  className,
  isExpanded,
  children,
  ...other
}) => (
  <td className={`${className} ${isExpanded ? 'bg-slate-200' : ''}`} {...other}>
    {children}
  </td>
);

export const TableRow: React.FC<{
  document: DocumentNode & { expanded?: boolean };
  index: number;
  expandedRow: number | null;
  toggleRow: (index: number) => void;
}> = ({ document, index, expandedRow, toggleRow }) => (
  <>
    {document.expanded ? (
      <td className="h-10 w-full border-b" colSpan={6}>
        <div className="flex text-left text-sm font-normal leading-6">
          <span className="px-6 pr-10 font-bold">Summary: </span>
          <p className="max-h-80 overflow-y-auto">{document.summary}</p>
        </div>
      </td>
    ) : (
      <>
        <Td className="px-6 h-10 border-b" isExpanded={expandedRow === index}>
          <div className="w-96 truncate text-left text-sm font-normal leading-6">
            {document.title}
          </div>
        </Td>
        <Td
          className="w-1/6 px-6 h-10 border-b"
          isExpanded={expandedRow === index}>
          <div className="truncate max-w-xs text-left text-sm font-normal leading-6">
            {document.issuedYear}
          </div>
        </Td>
        <Td
          className="w-1/6 px-6 h-10 border-b"
          isExpanded={expandedRow === index}>
          <a
            href={document.webLink}
            className="truncate max-w-xs text-primary hover:text-primary-dark text-left text-sm font-normal leading-6">
            Link
          </a>
        </Td>
        <Td className="px-6 h-10 border-b" isExpanded={expandedRow === index}>
          <div className="truncate w-56 text-left text-sm font-normal leading-6">
            {document.assignedTopics}
          </div>
        </Td>
        <Td
          className="w-8 px-6 h-10 border-b"
          isExpanded={expandedRow === index}>
          <div className="truncate text-left text-sm font-normal leading-6">
            {document.status}
          </div>
        </Td>
        <Td
          className="w-8 px-6 h-10 cursor-pointer border-b"
          isExpanded={expandedRow === index}
          onMouseDown={(e) => {
            e.preventDefault();
          }}
          onClick={(e) => {
            e.stopPropagation();
            toggleRow(index);
          }}>
          {expandedRow === index ? <ArrowUp /> : <ArrowDown />}
        </Td>
      </>
    )}
  </>
);
