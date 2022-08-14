import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          カウンタ―
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/expense"
        >
          家計簿
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/calendar"
        >
          カレンダー
        </Link>
      </Breadcrumbs>
    </div>
  );
}
