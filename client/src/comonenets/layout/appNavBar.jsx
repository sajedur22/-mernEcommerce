import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import logo from '../../assets/images/plainb-logo.svg'
import productStore from "../../store/ProductStore.js";
import UserStore from "../../store/UserStore.js";
import Submitbutton from "../user/submitbutton.jsx";
import {useNavigate} from "react-router-dom";
import CartStore from "../../store/CartStore.js";
import WishStore from "../../store/WishStore.js";

const AppNavBar = () => {
    const navigate=useNavigate()
    const{SearchKeyword,SetSearchKeyword}=productStore()
    const{isLogin,UserLogoutRequest}=UserStore()
    const{CartCount,CartListRequest}=CartStore()
    const{WishCount,WishListRequest}=WishStore()

    const OnLogout=async ()=>{
        let res=await UserLogoutRequest();
        sessionStorage.clear();
        localStorage.clear();
        navigate("/");
    }
    const OnProfile=()=>{
        navigate("/profile")
    }

    useEffect(() => {
        (async ()=>{
            if(isLogin()){
                await CartListRequest();
                await WishListRequest();
            }
        })()
    }, []);

    return (
          <>
              <div className="container-fluid text-white p-2 bg-success">
                  <div className="container">
                      <div className="row align-items-center justify-content-between">
                          <div className="col-12 col-md-6 text-center text-md-start mb-2 mb-md-0">

                                <span className="f-12 me-3">
                                    <i className="bi bi-envelope"></i> Support@PlanB.com
                                </span>
                                <span className="f-12 mx-2">
                                    <i className="bi bi-envelope"></i> 01774688159
                                </span>

                          </div>
                          <div className="col-12 col-md-6 text-center text-md-end">
                            <span className="mx-2">
                                   <i className="bi bi-whatsapp"></i>
                             </span>
                          <span className="mx-2">
                                  <i className="bi bi-youtube"></i>
                          </span>
                              <span className="mx-2">
                                       <i className="bi bi-facebook"></i>
                               </span>
                          </div>
                      </div>
                  </div>
              </div>

              <nav className={'navbar sticky-top bg-white navbar-expand-lg navbar-light py-3 shadow-sm'}>
                  <div className={'container '}>
                      {/* Logo */}
                      <Link className={'navbar-brand'} to={'/'}>
                          <img className={'img-fluid'} src={logo} alt={''} width={'95px'}/>
                      </Link>

                      {/* Toggler */}
                      <button className={'navbar-toggler'} type="button" data-bs-toggle={'collapse'}
                              data-bs-target={"#nav06"} aria-controls={"nav06"} aria-expanded={'false'}
                              aria-label={'Toggle navigation'}>
                          <span className={'navbar-toggler-icon'}></span>
                      </button>
                      {/* Menu + Buttons */}
                      <div className="collapse navbar-collapse" id="nav06">
                          <div className="d-flex flex-wrap align-items-center gap-2 mt-3 mt-lg-0 me-auto">
                              <Link className="btn btn-light" to="/">
                                  <i className="bi bi-house"></i> Home
                              </Link>

                              <div className="position-relative">
                                  <Link className="btn btn-light" to="/cart">
                                      <i className="bi bi-bag text-dark"></i> Cart
                                      {CartCount > 0 && (
                                          <span
                                              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">{CartCount}</span>
                                      )}
                                  </Link>
                              </div>

                              <div className="position-relative">
                                  <Link className="btn btn-light" to="/wish">
                                      <i className="bi bi-heart text-dark"></i> Wish
                                      {WishCount > 0 && (
                                          <span
                                              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{WishCount}</span>
                                      )}
                                  </Link>
                              </div>

                              <Link className="btn btn-light" to="/orders">
                                  <i className="bi bi-truck text-dark"></i> Order
                              </Link>
                          </div>
                      </div>


                      <div className={'d-flex flex-column flex-lg-row gap-2 align-items-start align-items-lg-center '}>
                          <div className={'input-group  '}>
                              <input className={'form-control '} value={SearchKeyword}
                                     onChange={(e) => SetSearchKeyword(e.target.value)} type={'text'}
                                     placeholder={'Searce'}
                                     aria-label='Searce'/>
                              <button className={''}>
                                  <Link to={SearchKeyword.length > 0 ? `/by-keyword/${SearchKeyword}` : `/`}
                                        className="bi bi-search btn "></Link>
                              </button>
                          </div>
                          <div className={'d-flex  justify-content-end justify-content-sm-end gap-2 '} >
                              {
                                  isLogin() ? (
                                      <>
                                          <Submitbutton text={"Logout"} onClick={OnLogout}
                                                        className={'rounded-2 btn ms-3 btn-success d-flex'}/>

                                          <Submitbutton text={"Profile"} onClick={OnProfile}
                                                        className={'rounded-2 btn ms-3 btn-success d-flex '}/>

                                      </>
                                  ) : (<Link type="button" className="btn ms-3 btn-success d-flex"
                                             to="/login">Login</Link>)
                              }
                          </div>

                      </div>

                  </div>

              </nav>
          </>
    );
};

export default AppNavBar;