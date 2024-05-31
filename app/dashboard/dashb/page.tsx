import React from 'react';

import Layout from '@/app/dashboard/layout';
import DashboardPage from '@/app/dashboard/page';
import { lusitana } from '@/app/ui/font';
import Link from 'next/link';

export default function Dash( { children } : { children: React.ReactNode }) {
  return (
    <Layout>
      <DashboardPage>
        <h1>Dashboard</h1>
      </DashboardPage>
    </Layout>
  );
}