import React from "react";
import LandingBodyTop from '../LandBodyTop';
import LandingHeader from "../LandingHeader";
import ListingFilter from "./ListingFilter";
import ListingItem from "./ListingItem";
import LandFooter from "../LandFooter";
function ListingHome(){
    return(
        <>
          <LandingHeader /> 
          <ListingFilter />
          <ListingItem />
          <LandFooter />
        </>
    )
}
export default ListingHome;