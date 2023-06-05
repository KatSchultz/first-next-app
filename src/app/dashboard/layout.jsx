const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="w-full text-center font-extrabold">
        <h1>My Dashboard Header</h1>
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
