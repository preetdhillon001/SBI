import React from 'react';
import LeftImage from './../SBI.webp'

const Home = () => {
  return (
    <div>
        <div className='container'>
            <div className='row'>

                <div className='hero-left col-md-6'>
                    <h2>Welcome to <span className='hero-logo'>SBI Bank</span></h2>
                    <p>Experience the benefits of banking with SBI Bank! Join us today and enjoy a $200 CAD bonus upon opening your account.</p>
                    <button className="hero-button cbtn btn-primary">Open your Account with us</button>
                </div>
                <div className='col-md-6'>
                    <img src={LeftImage}/>
                </div>
            </div>

            <BodyArea/>


            
           
        </div>
      
    </div>
  );
};


const BodyArea = () => {
    return (
       
            <div className='row'>

            

                <div className='body-content col-md-4'>

                    <h3>Checquing Account</h3>
                    <p>With an SBI Bank checking account, you can conveniently deposit and withdraw funds through multiple channels, including ATMs, online banking, mobile apps, and branch locations. This accessibility ensures that your money is always easily accessible whenever you need it.</p>

                </div>

            <div className='body-content col-md-4'>

            <h3>Saving Account</h3>
            <p>With an SBI Bank checking account, you have the flexibility to deposit and withdraw funds conveniently through multiple channels, including ATMs, online banking, mobile apps, and our branch network. This accessibility ensures that your funds are always within reach whenever you need them.</p>

            </div>

            <div className='body-content col-md-4'>

            <h3>Current Account</h3>
            <p>With an SBI Bank checking account, accessing your funds is simple and convenient. You can deposit and withdraw money effortlessly through a range of channels, including ATMs, online banking, mobile apps, and our network of bank branches. This accessibility ensures that your funds are always within reach whenever you need them.</p>

            </div>

          


            </div>

       
    );
}

export default Home;
