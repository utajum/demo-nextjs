import { Metadata } from 'next';
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import React from 'react';
import { Grid } from './Grid';

import { QueryProvider } from '@/components/QueryProvider';

export const metadata: Metadata = {
  title: 'Vladimir Tasic Demo',
  description: 'Vladimir Tasic Demo',
};

export default function MainPage() {
  return (
    <DefaultLayout>
      <QueryProvider>
        <Grid />
      </QueryProvider>
    </DefaultLayout>
  );
}
