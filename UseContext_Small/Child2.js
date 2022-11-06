import React, { useContext } from "react"; import { global } from "./UseContextHook"; function Child2()
{
const name = useContext(global); return(<div>
<h1>My parent name is {name}.</h1>
</div>

)
}
export default Child2;
