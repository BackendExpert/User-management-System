/* eslint-disable react/jsx-key */
import LinksAdmin from "./AdminLinks";

const AdminDash = () => {
  return (
    <div>
      {
        LinksAdmin.map((linkAdmin) => (
          <p className="">{linkAdmin.name}</p>
        ))
      }
    </div>
  )
}

export default AdminDash

