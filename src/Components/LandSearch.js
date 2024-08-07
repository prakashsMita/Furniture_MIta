import React from "react";
import { Link } from "react-router-dom";
function LandSearch(){
    return(
        <>
         <div>
           <section className="section-padding homepage-search-block position-relative secbanfilterbg">
            <div className="container">
            <div className="row">
            <div className="col-lg-8 mx-auto pt-lg-5">
            <div className="homepage-search-title text-center">
            <h1 className="mb-3 text-shadow text-gray-900 font-weight-bold">Find Best Deals in <span className="font-weight-light">Dindigul</span></h1>
            <h5 className="mb-5 text-shadow text-gray-800 font-weight-normal">Let our experts find the best
            coupons and deals for you!</h5>
            </div>
            <div className="homepage-search-form">
            <form className="form-noborder">
            <div className="form-row">
             
            <div className="col-lg-10 col-md-10 col-12 form-group">
            <input type="text" placeholder="Search for stores, coupons, &amp; offers…" className="form-control border-0 form-control-lg shadow-sm" />
            </div>

            <div className="col-lg-2 col-md-2 col-12 form-group">
           <Link to='/ListingHome'><button type="submit" className="btn btn-primary btn-block btn-lg btn-gradient shadow-sm">
                Find
            </button></Link> 
            </div>

            </div>
            </form>
            </div>
            <h6 className="mb-0 mt-1 text-shadow text-center text-gray-500-700 font-weight-normal">E.g. Coupans,
            Offers, Brands, Stores, Restaurant &amp; more...</h6>
            </div>
            </div>
            </div>
            </section>

        </div>
        </>
    )
}
export default LandSearch;