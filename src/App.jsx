

import manImg from './assets/man-img.png';
import designImg from './assets/design-img.png';
import girlImg from './assets/girl-img.png';
import letterImg from './assets/letter-img.png';
import facebook from './assets/fb.svg';
import instagram from './assets/insta.svg';
import twitter from './assets/tw.svg';
import linkedin from './assets/in.svg';
import hamburger from './assets/menu.svg';


function App() {

  return (
    <div>
      <div className="container container_wrapper">
        <nav className="navbar">
          <ul className="nav__list">
            <li className="nav__item"> <a href='#' className='navLink'>Works</a></li>
            <li className="nav__item"> <a href='#' className='navLink'>Blog</a></li>
            <li className="nav__item"> <a href='#' className='navLink'>Contact</a></li>

          </ul>
        </nav>
        <div className='hamburger'>
          <button className='hamburgerButton'>
            <img className='hamburger' src={hamburger} alt="hamburger" />
          </button>
        </div>
      </div>
      <div className='container'>
        <div className='mainContainer'>


          <div className='mainContainer__content'>
            <h1 className='mainTitle'>
              Hi, I am John,
              Creative Technologist
            </h1>

            <p className='mainSubtitle'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className='button'>

            <button className='mainBtn'> Download Resume</button>
            </div>
          </div>

          <div className='mainImg'>
            <img src={manImg} alt="man" />
          </div>
        </div>
      </div>


      <section className='headerSection'>
        <div className='container cardBox'>

          <div className='headerCards'>
            <div className='headerCard'>
              <h2 className='cardTitle'>
                Making a design system from scratch
              </h2>
              <div className='cardItem'>
                12 Feb 2020 | Design,pattern
              </div>

              <div className='cardText'>

                <p className='cardSubtitle'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>

          </div>


          <div className='headerCards'>
            <div className='headerCard'>
              <h2 className='cardTitle'>
                Creating pixel perfect icons in Figma
              </h2>
              <div className='cardItem'>
                12 Feb 2020 | Design,pattern
              </div>

              <p className='cardSubtitle'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.            </p>
            </div>

          </div>

        </div>


      </section>


      <section className='worksBox'>
        <div className='container worksItem'>
          
          <div className='worksCard'>
            <img src={designImg} alt="design" />
            <div className='worksItems'>
              <div>

                <h2 className='worksTitle'>
                  Designing Dashboards
                </h2>
              </div>
              <div>
                <p className='yearIcon'>2018</p>
              </div>
              <div>
                <p className='worksSubtitle'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>

              </div>
            </div>
          </div>

          <div className='worksCard'>
            <img src={girlImg} alt="girl Img" />
            <div className='worksItems'>
              <div>

                <h2 className='worksTitle'>
                  Designing Dashboards
                </h2>
              </div>
              <div>
                <p className='yearIcon'>2018</p>
              </div>
              <div>
                <p className='worksSubtitle'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>

              </div>
            </div>
          </div>


          <div className='worksCard'>
            <img src={letterImg} alt="letter Img" />
            <div className='worksItems'>
              <div>

                <h2 className='worksTitle'>
                  Designing Dashboards
                </h2>
              </div>
              <div>
                <p className='yearIcon'>2018</p>
              </div>
              <div>
                <p className='worksSubtitle'>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='footer'>
        <div className='container footerItems'>
          <div className='footerWrapper'>

            <div className='footerLinks'>
              <a href='https://www.facebook.com/?locale=ru_RU' className='facebook'>
                <img src={facebook} alt="Facebook Img" />
              </a>
            </div>

            <div className='footerLinks'>
              <a href='https://www.instagram.com/' className='instagram'>
                <img src={instagram} alt="Instagram" />
              </a>
            </div>

            <div className='footerLinks'>
              <a href='https://twitter.com/?lang=ru' className='twitter'>
                <img src={twitter} alt="Twitter Img" />
              </a>
            </div>

            <div className='footerLinks'>
              <a href='https://www.linkedin.com/login/ru' className='linkedin'>
                <img src={linkedin} alt="Linkedin Img" />
              </a>
            </div>
          </div>
          <div className='footerItem'>
            <p className='footerSubtitle'>Copyright ©2020 All rights reserved </p>
          </div>
        </div>

      </section>
    </div>



  )

}
export default App

