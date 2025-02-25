import React from "react";
import { useAuth } from "../../context/AuthContext";

const Navbar = ({ role }) => {
 
const {user, logout} =  useAuth();
console.log(user);

const handleLogOut = async()=>{
    await logout();
}

    // 
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between items-center">
        <div> 
            {/* <img src="" alt="" /> */}
            <div>
                 <h2>{user?.name}</h2>
                 <h3>Main Balanced {user?.balance} Taka</h3>
            </div>
        </div>
 
      <button onClick={handleLogOut} className="bg-red-500 px-4 py-2 rounded-md cursor-pointer">Logout</button>
    </nav>
  );
};

export default Navbar;