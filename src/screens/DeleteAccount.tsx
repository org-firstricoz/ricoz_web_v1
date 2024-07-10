import React from "react";

const DeleteAccount: React.FC = () => {
  return (
    <div className="flex flex-col justify-center text-black items-center h-screen gap-4">
      <input className="border p-2" type="text" placeholder="name" />
      <input className="border p-2" type="text" placeholder="mobile no" />
      <select name="" id="">
        <option value="">Partner</option>
        <option value="">User</option>
      </select>
      <button className="border p-2 bg-red-500 text-white">Delete Account</button>
    </div>
  );
};

export default DeleteAccount;
