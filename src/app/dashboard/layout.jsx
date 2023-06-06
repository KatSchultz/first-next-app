const DashboardLayout = ({ children }) => {
  return (
    <div className="">
      <div className="w-full text-center bg-black font-extrabold">
        <h1 className="text-slate-100">My Dashboard Header</h1>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
