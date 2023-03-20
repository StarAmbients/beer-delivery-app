import Admin from '../components/Admin';
import NavBar from '../components/NavBar';

function AdminManage() {
  return (
    <div>
      <NavBar page="admin" />
      <Admin />
    </div>
  );
}

export default AdminManage;
