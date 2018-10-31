import React from "react";
import { Route } from "react-router-dom";
import App from "../Components/App";
import Posts from "../Components/Posts";
import Header from "../Components/header";
const ReactRouter =()=>{
return (
<React.Fragment>
<Header />
<Route exact path="/" component={App} />
<Route  path="/posts" component={Posts} />
</React.Fragment>
);}
export default ReactRouter;