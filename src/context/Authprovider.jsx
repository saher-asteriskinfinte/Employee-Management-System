import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';
export const Authcontext = createContext();

const Authprovider = ({children}) => {

const [userData, setuserData] = useState(null);

useEffect(() => {
const {employees}=getLocalStorage();
setuserData(employees);
}, [])
const refreshEmployees = () => {
  const { employees } = getLocalStorage();
  setuserData(employees);
};
    
  return (
    <div>
        <Authcontext.Provider value={[userData,setuserData,refreshEmployees]}>{children}</Authcontext.Provider>
    </div>
  )
}

export default Authprovider