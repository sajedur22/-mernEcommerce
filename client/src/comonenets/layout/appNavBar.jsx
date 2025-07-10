import React from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/plainb-logo.svg'
import productStore from "../store/ProductStore.js";
//import collapse from "bootstrap/js/src/collapse.js";

const AppNavBar = () => {
    const{SearchKeyword,SetSearchKeyword}=productStore()

    return (
        <div>
          <div className={'container-fluid text-white p-2  bg-success'}>
              <div className={'container'}>
                  <div className={'row justify-content-around'}>
                      <div className={'col-md-6 '}>
                       <span>
                       <span className={'f-12'}>
                          <i className="bi bi-envelope"></i>support@planB.com
                      </span>
                          <span className={'f-12 mx-2'}>
                          <i className="bi bi-telephone"></i>01571422223
                      </span>
                           </span>
                      </div>
                      <div className={'col-md-6'}>
                          <span className={'float-end'}>
                          <span className={'bodySmal mx-2'}><i className="bi bi-whatsapp"></i></span>
                          <span className={'bodySmal mx-2'}><i className="bi bi-youtube"></i></span>
                          <span className={'bodySmal mx-2'}><i className="bi bi-facebook"></i></span>
                          </span>
                      </div>
                  </div>
              </div>
          </div>

            <nav className={'navbar sticky-top bg-white navbar-expand-lg navbar-light py-3'}>
                <div className={'container'}>
                    <Link className={'navbar-brand'} to={'/'}>
                        <img className={'img-fluid'} src={logo} alt={''} width={'95px'}/>
                    </Link>
                    <button className={'navbar-toggler'} type="button" data-bs-toggle={'collapse'} data-bs-target={"#nav06"} aria-controls={"nav06"} aria-expanded={'false'} aria-label={'Toggle navigation'} >
                        <span className={'navbar-toggler-icon'}></span>
                    </button>
                    <div className={'collapse navbar-collapse'} id={'nav06'}>
                        <ul className={'navbar-nav mt-3 mt-lg-0 mb-2 mg-lg-0 ms-lg-3'}>
                            <span className={'nav-item me-4'}>
                                <Link className={'nav-link'} to={'/'}>Home</Link>
                            </span>
                        </ul>
                    </div>
                    <div className={'d-lg-flex'}>
                        <div className={'input-group'}>

                                <input className={'form-control'} value={SearchKeyword} onChange={(e)=>SetSearchKeyword(e.target.value)} type={''} placeholder={'searce'} aria-label='searce'/>
                            <button className={''} >
                                <Link to={SearchKeyword.length>0?`/by-keyword/${SearchKeyword}`:`/`} className="bi bi-search btn btn-outline-danger"></Link>

                            </button>

                            <Link to={'/cart'} type={'button'} className={' btn ms-2 btn-light position-relative '}>
                                <i className="bi text-dark bi-bag"></i>
                            </Link>
                            <Link to={'/wish'} type={'button'} className={'btn ms-2 btn-light position-relative'}>
                                <i className="bi text-dark bi-heart"></i>
                            </Link>
                            <Link to={'/profile'} type={'button'} className={'rounded-2 btn ms-3 btn-success d-flex'}>
                                profile
                            </Link>
                            <Link to={'/profile'} type={'button'} className={'rounded-2 btn ms-3 btn-success d-flex'}>
                                logout
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default AppNavBar;