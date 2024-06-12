'use client';

import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { GridComponent } from '@/components/Grid/GridComponent';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { gql, request } from 'graphql-request';

const interventionDocumentsQueryDocument = gql`
  query GetAllDocuments($contains: [String] = "") {
    allDocuments(filter: { assignedCategories: { contains: $contains } }) {
      totalCount
      nodes {
        assignedCategories
        assignedSubTopics
        assignedScore
        assignedTopics
        downloadLink
        id
        nodeId
        issuedYear
        openForComment
        organization
        status
        summary
        title
        topic
        webLink
      }
    }
  }
`;

type Document = {
  assignedCategories: string[];
  assignedSubTopics: string[];
  assignedScore: number;
  assignedTopics: string[];
  downloadLink: string;
  id: number;
  nodeId: string;
  issuedYear: number;
  openForComment: boolean;
  organization: string;
  status: string;
  summary: string;
  title: string;
  topic: string;
  webLink: string;
};

type DocumentsResponse = {
  allDocuments: {
    totalCount: number;
    nodes: Document[];
  };
};

export const Grid = () => {
  const { error, data, isFetching } = useQuery<DocumentsResponse>({
    queryKey: ['theDemoDocuments'],

    queryFn: async () => {
      const response = await request<DocumentsResponse>({
        url: 'http://localhost:5000/graphql',
        document: interventionDocumentsQueryDocument,
        variables: { contains: 'Intervention' },
      });
      return response;
    },
  });

  const totalCount = data?.allDocuments?.totalCount || 0;
  console.log({ totalCount });
  const rows = data?.allDocuments?.nodes || [];

  return (
    <div>
      {isFetching && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <GridComponent rows={rows} totalRows={totalCount} />}

      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
};
