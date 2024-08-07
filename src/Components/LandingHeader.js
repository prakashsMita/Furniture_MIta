import React from "react";

function LandingHeader(){
    return(
        <>
         <div>
            {/* Top Menu */}
            <div className="hom-top">
                <div className="container">
                    <div className="row">
                        <div className="hom-nav">
                            <a className="top-log logofont fw-bold">
                                {/*}
                                <img
                                    src="https://bizbookdirectorytemplate.com/images/home/179083357bizbook-white.png"
                                    style={{ width: "192px", height: "auto" }}
                                    alt=""
                                    className="ic-logo"
                                />
                                {*/}
                                FURNITURE       
                            </a>
                            <div className="menu">
                                <h4>Dindigul</h4>
                            </div>

                            {/* Top Search */}
                            <div className="top-ser">
                                {/* Uncomment the form and update it as needed */}
                                
                            </div>

                            <ul className="bl">
                                
                                <li>
                                    <a className="">Add business</a>
                                </li>
                                <li>
                                    <a className="btn btn-primary">Login</a>
                                </li>
                            </ul>

                            
                        </div>
                    </div>
                </div>
            </div>
            {/* End Top Menu */}
        </div>
        </>
    )
}
export default LandingHeader;