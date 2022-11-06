import React , { createContext, useContext, useState } from "react"; import Child1 from "./Child1";

import Child2 from "./Child2";
export const global = createContext(); function UseContextHook()
{
return(<global.Provider value="JESSY">
<h1>My name is {"JESSY"}.</h1>
<Child1 />
</global.Provider>
);
}
export default UseContextHook;
