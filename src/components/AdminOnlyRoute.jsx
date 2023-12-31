import { useSelector } from "react-redux";
import { selectEmail } from "@/redux/slice/authSlice";
import { Link } from "react-router-dom";
const AdminOnlyRoute = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "sorany@gmail.com") {
    return children;
  }
  return (
    <section style={{ height: "80vh" }} className="pt-40">
      <div className="container">
        <h2>Permission Denied.</h2>
        <p>This page can only be view by an Admin user</p>
        <hr />
        <Link to="/">
          <button className="btn btn-primary "> &larr; Back To Home</button>
        </Link>
      </div>
    </section>
  );
};
export const AdminOnlyLink = ({ children }) => {
  const userEmail = useSelector(selectEmail);

  if (userEmail === "sorany@gmail.com") {
    return children;
  }
  return null;
};

export default AdminOnlyRoute;
