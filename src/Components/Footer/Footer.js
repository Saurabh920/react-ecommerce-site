import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol} from 'mdb-react-ui-kit';



export default function Footer() {
  return (
    <MDBFooter bgColor='success' className='text-black text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Ecommerce Site</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias.
              Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est
              atque cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>OTHERS</h5>

            <ul className='list-unstyled mb-0'>
              <li>
                <a href='#!' className='text-black'>
                  
                Goals
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  About Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                Contact Us
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                  More
                </a>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase mb-0' >Follow Us</h5>

            <ul className='list-unstyled'>
              <li>
                <a href='#!' className='text-black'>
                <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href='#!' className='text-black'>
                <i class="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-black' href='/'>
          EcommerceSite
        </a>
      </div>
    </MDBFooter>
  );
}