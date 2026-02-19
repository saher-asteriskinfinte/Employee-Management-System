 import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { Authcontext } from './context/Authprovider'
import { setLocalStorage } from './utils/localStorage'

const App = () => {

const [user, setuser] = useState(null);
const [loggedInUserData, setloggedInUserData] = useState(null)
const [userData,setuserData] = useContext(Authcontext);

useEffect(() => {
const loggedInUser = localStorage.getItem("loggedInUser");
if(loggedInUser){
const userData = JSON.parse(loggedInUser);
setuser({role:userData.role});
setloggedInUserData(userData.data);
}
}, [])


useEffect(() => {
  if (!localStorage.getItem("employees")) {
    setLocalStorage();
  }
}, []);
console.log(user);

 
const handleLogin=(email,password)=>{
 if (email == "admin@me.com" && password == "123") {
  const adminData = { name: "Admin" };

  setuser({ role: "admin" });
  setloggedInUserData(adminData);

  localStorage.setItem(
    "loggedInUser",
    JSON.stringify({ role: "admin", data: adminData })
  );
}
else if(userData){
  const employee = userData?.find((e)=>email==e.email && password==e.password);
  if(employee){
  localStorage.setItem("loggedInUser",JSON.stringify({role:"employee",data:employee}));
  setloggedInUserData(employee);
  setuser({role:"employee"});
  }
 }
 else{
  alert("Invalid crednetials");
 }
 } 
 
  return (
    <>
    {!user?<Login handleLogin={handleLogin}/>:""}
    {/* {user=="admin"?<AdminDashboard/>:<EmployeeDashboard/>} */}
   {user?.role === "admin" && <AdminDashboard changeUser={setuser} data={loggedInUserData} />}
   {user?.role === "employee" && <EmployeeDashboard changeUser={setuser} data={loggedInUserData} />}

    </>
  )
}

export default App