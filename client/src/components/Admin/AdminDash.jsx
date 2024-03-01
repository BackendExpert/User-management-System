import LinksAdmin from "./AdminLinks"

const AdminDash = () => {
  return (
    <div>
        {
          LinksAdmin.map((Link) => (
            <div className="">
              <div className="">{Link.name}</div>
            </div>
          ))
        }
    </div>
  )
}

export default AdminDash