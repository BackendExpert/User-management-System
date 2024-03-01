/* eslint-disable react/jsx-key */
import AdminLinks from "./adminLinks"

const AdminDash = () => {
  return (
    <div>
      {
        AdminLinks.map((linkAdmin) => (
          <p className="">{linkAdmin.name}</p>
        ))
      }
    </div>
  )
}

export default AdminDash

