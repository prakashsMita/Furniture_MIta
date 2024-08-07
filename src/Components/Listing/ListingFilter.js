import React from "react";
import { Outlet, Link } from "react-router-dom";
function ListingFilter(){
    return(
        <>
        <div>
            
            <section>
            <div id="results" className="" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-4 col-10">
                        <h4><strong>145</strong> result for All listing</h4>
                    </div>
                    <div className="col-lg-9 col-md-8 col-2">
                        <a href="#0" className="side_panel btn_search_mobile"></a>  
                         <div className="row g-0 custom-search-input-2 inner">
                             <div className="col-lg-4">
                                 <div className="form-group">
                                     <input className="form-control" type="text" placeholder="What are you looking for..." />
                                     {/* <i className="icon_search"></i> */}
                                 </div>
                             </div>
                             <div className="col-lg-4">
                                 <div className="form-group">
                                     <input className="form-control" type="text" placeholder="Where" />
                                     {/* <i className="i"></i> */}
                                     
                                 </div>
                             </div>
                             <div className="col-lg-3">
                                 <select className="form-control wide">
                                     <option>All Categories</option>	
                                     <option>Shops</option>
                                     <option>Hotels</option>
                                     <option>Restaurants</option>
                                     <option>Bars</option>
                                     <option>Events</option>
                                     <option>Fitness</option>
                                 </select> 
                             </div>
                             <div className="col-lg-1 bg-warning text-center rounded">
                                 {/* <input type="submit" className="bg-warning" /> */}
                                 <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search my-2" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
                             </div>
                         </div>
                    </div>
                </div>
                
            </div>
             
        </div>
             </section>
  
 
         </div>
        </>
    )
}
export default ListingFilter;