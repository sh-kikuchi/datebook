import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation">
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="/"
        >
          カレンダー
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/event"
        >
          イベント
        </Link>
      </Breadcrumbs>
    </div>
  );
}
