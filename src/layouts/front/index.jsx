import { Outlet } from 'react-router-dom';

export default function FrontLayout() {
  return (
    <div>
      <div>Front layout</div>
      <Outlet />
    </div>
  );
}
