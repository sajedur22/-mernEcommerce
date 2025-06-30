import React from 'react';

const AppNavBar = () => {
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
        </div>
    );
};

export default AppNavBar;