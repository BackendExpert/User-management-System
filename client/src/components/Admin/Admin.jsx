const Admin = () => {
  return (
    <div className="px-16 py-12">
        {
            auth ? 
            <div className="">
                Welcome Admin {}
                <button className="px-8 py-4 border border-red-500 text-red-500"></button>
            </div>
            :
            <div className=""></div>
        }
    </div>
  )
}

export default Admin