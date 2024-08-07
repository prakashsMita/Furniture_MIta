import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faCartShopping, faPhone, faGlobe, faBriefcase, faComments, faEye, faFileInvoice, faTshirt, faMobileAlt, faHome, faBasketballBall, faPuzzlePiece, faBook, faCar, faDesktop, faPaintBrush, faGift, faLeaf, faGem, faWrench  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Outlet, Link } from "react-router-dom";

function ListingItem(){
    return(
        <>
        <div>
           <section className="bg_eff0ef">
                <div className="container py-lg-4">
                     

     <div className="row mt-100">
                        
      
        
          <div className="col-3">
            <h4>Industries <small>By</small></h4>



            


            <div className="left-menu">
      <div className="category-section">
        <h5>Retail and Consumer Goods - 150</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faTshirt} /> Apparel and Accessories - 45</div>
        <div className="subcategory"><FontAwesomeIcon icon={faMobileAlt} /> Electronics - 60</div>
        <div className="subcategory"><FontAwesomeIcon icon={faHome} /> Home Goods - 45</div>
        <div className="borderline"></div>
      </div>

      <div className="category-section">
        <h5>Health and Beauty - 120</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faMobileAlt} /> Personal Care Products - 50</div>
        <div className="subcategory"><FontAwesomeIcon icon={faMobileAlt} /> Supplements - 40</div>
        <div className="subcategory"><FontAwesomeIcon icon={faMobileAlt} /> Pharmaceuticals - 30</div>
        <div className="borderline"></div>
      </div>
     
      <div className="category-section">
        <h5>Home Improvement and DIY - 90</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faWrench} /> Tools and Equipment - 30</div>
        <div className="subcategory"><FontAwesomeIcon icon={faWrench} /> Building Materials - 30</div>
        <div className="subcategory"><FontAwesomeIcon icon={faWrench} /> Decor and Furniture - 30</div>
        <div className="borderline"></div>
      </div>
     
      <div className="category-section">
        <h5> Sports and Outdoors - 80</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faBasketballBall} /> Sports Equipment - 30</div>
        <div className="subcategory"><FontAwesomeIcon icon={faBasketballBall} /> Apparel - 30</div>
        <div className="subcategory"><FontAwesomeIcon icon={faBasketballBall} /> Recreational Items - 20</div>
        <div className="borderline"></div>
      </div>
      
      <div className="category-section">
        <h5> Toys and Games - 70</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faPuzzlePiece} /> Children's Toys - 30</div>
        <div className="subcategory"><FontAwesomeIcon icon={faPuzzlePiece} /> Board Games - 20</div>
        <div className="subcategory"><FontAwesomeIcon icon={faPuzzlePiece} /> Video Games - 20</div>
        <div className="borderline"></div>
      </div>
      
      <div className="category-section">
        <h5> Books and Media - 60</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faBook} /> Books - 30</div>
        <div className="subcategory"><FontAwesomeIcon icon={faBook} /> Music - 15</div>
        <div className="subcategory"><FontAwesomeIcon icon={faBook} /> Movies - 15</div>
        <div className="borderline"></div>
      </div>

      <div className="category-section">
        <h5> Automotive - 50</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faCar} /> Parts and Accessories - 20</div>
        <div className="subcategory"><FontAwesomeIcon icon={faCar} /> Vehicles - 20</div>
        <div className="subcategory"><FontAwesomeIcon icon={faCar} /> Maintenance Services - 10</div>
        <div className="borderline"></div>
      </div>

      <div className="category-section">
        <h5> Office Supplies - 40</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faDesktop} /> Stationery - 15</div>
        <div className="subcategory"><FontAwesomeIcon icon={faDesktop} /> Office Furniture - 15</div>
        <div className="subcategory"><FontAwesomeIcon icon={faDesktop} /> Tech Equipment - 10</div>
        <div className="borderline"></div>
      </div>

      <div className="category-section">
        <h5> Art and Crafts - 30</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faPaintBrush} /> Art Supplies - 15</div>
        <div className="subcategory"><FontAwesomeIcon icon={faPaintBrush} /> Craft Kits - 10</div>
        <div className="subcategory"><FontAwesomeIcon icon={faPaintBrush} /> Artwork - 5</div>
        <div className="borderline"></div>
      </div>

      <div className="category-section">
        <h5> Subscription Services - 25</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faGift} /> Subscription Boxes - 15</div>
        <div className="subcategory"><FontAwesomeIcon icon={faGift} /> Digital Subscriptions - 10</div>
        <div className="borderline"></div>
      </div>

      <div className="category-section">
        <h5> Luxury Goods - 20</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faGem} /> High-End Fashion - 10</div>
        <div className="subcategory"><FontAwesomeIcon icon={faGem} /> Jewelry - 5</div>
        <div className="subcategory"><FontAwesomeIcon icon={faGem} /> Collectibles - 5</div>
        <div className="borderline"></div>
      </div>

      <div className="category-section">
        <h5> Eco-Friendly Products - 15</h5>
        <div className="subcategory"><FontAwesomeIcon icon={faLeaf} /> Sustainable Goods - 10</div>
        <div className="subcategory"><FontAwesomeIcon icon={faLeaf} /> Green Technology - 5</div>
        <div className="borderline"></div>
      </div>  
    </div>

            {/*}
            <div className="accordion-wrapper">
                <div className="accordion">
                  <input type="radio" name="radio-a" id="check1" checked className="radioaccordion" />
                  <label className="accordion-label" for="check1">Accordion 1</label>
                  <div className="accordion-content">
                    <p>Hey there, you are watching codiesbugs &#128522;</p>
                  </div>
                </div>
                <div className="accordion">
                  <input type="radio" name="radio-a" id="check2"  className="radioaccordion" />
                  <label className="accordion-label" for="check2">Accordion 2</label>
                  <div className="accordion-content">
                    <p>I hope you are enjoing the video, don't forget to give your feedback in comment section</p>
                  </div>
                </div>
                <div className="accordion">
                  <input type="radio" name="radio-a" id="check3"  className="radioaccordion" />
                  <label className="accordion-label" for="check3">Accordion 3</label>
                  <div className="accordion-content">
                    <p>If you liked then don't forget to subscribe the channel for latest videos. </p>
                  </div>
                </div>
              </div>*/ }
              
          </div>


          <div className="col-7">
              <h4>Results  <small>299 Services</small></h4>


            
            { /* Biz Listing */ }    
            {Array.from({ length: 10 }, (_, key) => (
            <div {...{ key }}  className="serviceslisting"  >
               
              <div className="p-2">
              <div className="row">

              <div className="col-sm-5">

              <div className="verifiedicon">
              <img className="verifiedicon_pr" src="./assets/img/Listing/best-deal.png"   alt="" />  
              </div>
                <div className="row ml-0">
                <div className="col-sm-6 padd-r-10">
                  <img className="listimgprime img-fluid" src="./assets/img/Landing/Topoffer/01.jpg"  alt="" />
                </div>
                <div className="col-sm-6">
                    <div className="row">
                    <div className="col-sm-6 padd-rb-10"><img className="listimgsec img-fluid" src="./assets/img/Landing/Topoffer/01.jpg"   alt="" /></div>
                    <div className="col-sm-6 padd-rb-10"><img className="listimgsec img-fluid" src="./assets/img/Landing/Topoffer/chair-ads-design-template-4622b9d54e1fc1e2d0541a637f22bb05_screen.jpg"   alt="" /></div>
                    <div className="col-sm-6 padd-rb-10"><img className="listimgsec img-fluid" src="./assets/img/Landing/Topoffer/modern-office-furniture-design-template-fe508aaf4353b4bdf7dfaa61f7993846.jpg"   alt="" /></div>
                    <div className="col-sm-6 padd-rb-10"><img className="listimgsec img-fluid" src="./assets/img/Landing/Topoffer/copy-of-modern-furniture-instagram-post-adver-design-template-ce43bb6399367824328e1392d7739de9_screen.jpg"   alt="" /></div>
                    </div>
                </div>
                </div>

                <div className="row">
                    <h3>Service Keywords :</h3>
                    <div className="col-sm-12">
                      <div className="servicestagsmini cursor"  >Web Design</div>
                      <div className="servicestagsmini cursor"  >Digital Marketing</div>
                      <div className="servicestagsmini cursor"  >Search Engine Optimization</div>
                    </div>
                    </div>


              </div>

              <div className="col-sm-7">
              <div className="p-0">
                                <div className="custom-card-body">
                                
                                <h6 className="mb-1 fw-bold"><a className="text-gray-900" href="#">Vaahaa Naturals | Organic Farm</a></h6>
                                  
                                    <p className="text-gray-300 mb-0"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Muthanampatti, Near Surabi College, Palani Rd, post, Papanampatti, Tamil Nadu 624709</p>
                                    <p className="text-gray-300 mb-0"> <FontAwesomeIcon icon={faPhone} /> +91 8494922226 | +91 8098111311</p>
                                    <p className="text-gray-300 mb-3"> <FontAwesomeIcon icon={faGlobe} /> www.vaahaanaturals.com</p>


                                    <p className="text-gray-300 mb-0"><span className="text-black font12"><FontAwesomeIcon icon={faCartShopping} /> Products Listed : 180</span></p>
                                    <p className="text-gray-300 mb-0"><span className="text-black font12"><FontAwesomeIcon icon={faBriefcase} /> Job Openings : 180</span></p>

                                     <div className="row">
                                      <div className="width5per"> </div>
                                      <div className="width90per">
                                        
                                        <div className="socialicolistinsid cursor">
                                          <a><FontAwesomeIcon icon={faFacebook} /></a>
                                        </div>

                                        <div className="socialicolistinsid cursor">
                                          <a><FontAwesomeIcon icon={faInstagram} /></a>
                                        </div>

                                        <div className="socialicolistinsid cursor">
                                          <a><FontAwesomeIcon icon={faTwitter} /></a>
                                        </div>
                                          
                                      </div>
                                      </div>

                                </div>
                 </div>

               
              </div>

              </div>
              <div className="row">
                
                <div className="col-sm-12 ">
                  <div className="profviewico">
                    <i className="fa fa-eye"></i> visitors : 123
                  </div>
                  <Link to="/user/home">
                  <a className="btn btn-list listbutt cursor"><FontAwesomeIcon icon={faEye} /> View</a>
                  </Link>

                  <button type="button" className="btn btn-list listbutt cursor"><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp</button>

                  <button type="button" className="btn btn-list listbutt cursor"><FontAwesomeIcon icon={faComments} /> Chat</button>

                  <button type="button" className="btn btn-list listbutt cursor"><FontAwesomeIcon icon={faFileInvoice} /> Get Quote</button>


                </div>
              </div>
              
            </div>
            



          </div>
           ))}

          { /* End Biz Listing */ }    



          {/* 
            <div {...{ key }}  className="serviceslisting"  >
              <h2>Vivartha Innovations
                <div className="pull-right socialicolist">
                  <a><i className="fa fa-heart" aria-hidden="true"></i></a>
                </div>
               </h2>
              <div className="padd-5">
              <div className="row">

              <div className="col-sm-5">
                <div className="row ml-0">
                <div className="col-sm-6 padd-r-10">
                  <img className="listimgprime img-fluid" src="assets/images/8.png"  alt="" />
                </div>
                <div className="col-sm-6">
                    <div className="row">
                    <div className="col-sm-6 padd-rb-10"><img className="listimgsec img-fluid" src="assets/images/8.png"   alt="" /></div>
                    <div className="col-sm-6 padd-rb-10"><img className="listimgsec img-fluid" src="assets/images/8.png"   alt="" /></div>
                    <div className="col-sm-6 padd-rb-10"><img className="listimgsec img-fluid" src="assets/images/8.png"   alt="" /></div>
                    <div className="col-sm-6 padd-rb-10"><img className="listimgsec img-fluid" src="assets/images/8.png"   alt="" /></div>
                    </div>
                </div>
                </div>
              </div>

              <div className="col-sm-7">
              <div className="p-3">
                                <div className="custom-card-body">
                                <h6 className="mb-3 fw-bold"><a className="text-gray-900" href="#">Vaahaa Naturals | Organic Farm</a></h6>
                                  
                                    <p className="text-gray-300 mb-0"> <FontAwesomeIcon icon={faMapMarkerAlt} /> Muthanampatti, Near Surabi College, Palani Rd, post, Papanampatti, Tamil Nadu 624709</p>
                                    <p className="text-gray-300 mb-0"> <FontAwesomeIcon icon={faPhone} /> +91 8494922226 | +91 8098111311</p>
                                    <p className="text-gray-300 mb-3"> <FontAwesomeIcon icon={faGlobe} /> www.vaahaanaturals.com</p>


                                    <p className="text-gray-300 mb-0"><span className="text-black font12"><FontAwesomeIcon icon={faCartShopping} /> Products Listed : 180</span></p>
                                    <p className="text-gray-300 mb-0"><span className="text-black font12"><FontAwesomeIcon icon={faBriefcase} /> Job Openings : 180</span></p>

                                     <div className="row">
                                      <div className="width5per"> </div>
                                      <div className="width90per">
                                        
                                        <div className="socialicolistinsid cursor">
                                          <a><i className="fa fa-google-plus" aria-hidden="true"></i></a>
                                        </div>

                                        <div className="socialicolistinsid cursor">
                                          <a><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                        </div>

                                        <div className="socialicolistinsid cursor">
                                          <a><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                        </div>
                                          
                                      </div>
                                      </div>

                                </div>
                 </div>

               
              </div>

              </div>
              <div className="row">
                <h3>Service Keywords :</h3>
                <div className="col-sm-12">
                  <div className="servicestagsmini cursor"  >Web Design</div>
                  <div className="servicestagsmini cursor"  >Digital Marketing</div>
                  <div className="servicestagsmini cursor"  >Search Engine Optimization</div>
                 </div>
                <div className="col-sm-12 ">
                  <div className="profviewico">
                    <i className="fa fa-eye"></i> Views : 123
                  </div>

                  <a href="" className="btn btn-list listbutt cursor"><i className="fa fa-location-arrow" aria-hidden="true"></i> View</a>

                  <button type="button" className="btn btn-list listbutt cursor"><i className="fa fa-comment" aria-hidden="true"></i> Whatsapp</button>

                  <button type="button" className="btn btn-list listbutt cursor"><i className="fa fa-comments" aria-hidden="true"></i> Chat</button>

                  <button type="button" className="btn btn-list listbutt cursor"><i className="fa fa-file-text" aria-hidden="true"></i> Get Quote</button>


                </div>
              </div>
              
            </div>
            



          </div>
          
          */}





          </div>


          <div className="col-sm-2">
            <h4>Free  <small>Ads</small></h4>

            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg w-75" src="./assets/img/Listing/ad2.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg w-75" src="./assets/img/Listing/ad2.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg w-75" src="./assets/img/Listing/ad2.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg w-75" src="./assets/img/Listing/ad2.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
            <img className="img-fluid rounded rightadsimg w-75" src="./assets/img/Listing/ad2.png"  />
            <img className="img-fluid rounded rightadsimg" src="./assets/img/Listing/ad.png"  />
          </div>
        
      
     
                       


                       
                    </div>
                    
                </div>
                </section>

        </div>
        </>
    )
}
export default ListingItem;