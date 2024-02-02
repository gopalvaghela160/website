import logo from './logo.svg';
import './App.css';
import { IoCall } from "react-icons/io5";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";



import { FaPaintRoller } from "react-icons/fa6";
import { FaPaintBrush } from "react-icons/fa";
import { FaBrush } from "react-icons/fa6";


function App() {
  return (

    <section>
      {/* top info section start */}
      <div className='top-info'>
        <div className='container'>
          <div className='d-flex j-center align-center'>
            <div className='top-l'>
              <ul className='d-flex'>
                <li><IoCall /> +012 345 6789</li>
                <li><FaEnvelopeOpen /> info@paintpro.com</li>
              </ul>
            </div>
            {/* <div className='top-r'>
              <ul className='d-flex'>
                <li><i><FaFacebook /></i></li>
                <li><i><FaTwitter /></i></li>
                <li><i><FaInstagram /></i></li>
                <li><i><FaLinkedinIn /></i></li>
              </ul>
            </div> */}
            <div className='f-icon d-flex header-icon'>
                <i><FaTwitter /></i>
                <i><FaFacebook /></i>
                <i><FaYoutube /></i>
                <i><FaLinkedinIn /></i>
              </div>
          </div>
        </div>
      </div>
      {/* top info section end */}
      {/* nav section start */}
      <div className='menu-bar'>
        <div className='container'>
          <div className='d-flex j-center align-center'>
            <div className='menu-l'>
              <div className='d-flex j-center align-center'>
                <img src={require(`./image/logo.png`)} ></img>
                <h1>PaintPro</h1>

              </div>
            </div>
            <nav className='menu-r'>
              <ul className='d-flex'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICE</li>
                <li>PROJECT</li>
                <li>PAGES</li>
                <li>CONTACT</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* nav section end */}
      {/* slider section start */}
      <section>
        <div className='slider'>
          <div className='sliderCover'>
            <div className='container'>
              <div className='s-info'>
                <h1>Bring Life to Your Walls with Colors!</h1>
                <p>Revitalize your walls with our professional painting services. We're here to breathe new life into your home or workplace.</p>
                <div className='s-button d-flex'>
                  <button className='s-b-1'>Read More</button>
                  <a>Detali</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* slider section end */}

      {/* serives section start */}
      <div className='py'></div>
      <div className='icon-sec'>
        <div className='container'>
          <div className='row d-flex'>
            <div className='i-box w-33'>
              <div className='paint'>
                <i><FaPaintRoller className='paint-i' /></i>
              </div>
              <h3>Painting Services</h3>
              <p>Professional interior and exterior painting to rejuvenate your spaces.</p>
            </div>
            <div className='i-box w-33'>
              <div className='paint'>
                <i><FaPaintBrush className='paint-i' /></i>
              </div>
              <h3>Plastering</h3>
              <p>Flawless wall surfaces through expert plastering applications.</p>
            </div>
            <div className='i-box w-33'>
              <div className='paint'>
                <i><FaBrush className='paint-i' /></i>
              </div>
              <h3>Wallpaper Installation</h3>
              <p>Enhance your interiors with our wallpaper selection and installation services.</p>
            </div>


          </div>
        </div>
      </div>
      {/* serives section end */}
      {/* about section start */}
      <div className='py'>
        <div className='container'>
          <div className='about d-flex j-center align-center'>
            <div className='ab-img w-50'>
              <img src={require(`./image/about-1.jpg`)}></img>
            </div>
            <div className='ab-info w-50'>
              <h4>ABOUT US</h4>
              <h1>We Invite You to the Enchanting World of Colors.</h1>
              <p>Our professional painters are here to add color to your walls and breathe life into your spaces.</p>
              <p>
                We offer a wide range of services, including interior and exterior painting, plastering applications, and wallpaper installation. We're here to bring your imagination to life.</p>
              <a><button>Read More</button></a>
            </div>
          </div>
        </div>
      </div>
      {/* about section end */}
      {/* servies area section start */}
      <div className='py-1'>
        <div className='se-icon-sec'>
          <div className='container'>
            <div className='row d-flex'>
              <div className='se-i-box w-33'>
                <div className='se-paint'>
                  <i><FaBrush className='se-paint-i' /></i>
                </div>
                <h3>Painting Services</h3>
                <p>Professional interior and exterior painting to rejuvenate your spaces.</p>
                <button>Read More</button>
              </div>
              <div className='se-i-box w-33'>
                <div className='se-paint'>
                  <i><FaPaintRoller className='se-paint-i' /></i>
                </div>
                <h3>Plastering</h3>
                <p>Flawless wall surfaces through expert plastering applications.</p>
                <button>Read More</button>
              </div>
              <div className='se-i-box w-33'>
                <div className='se-paint'>
                  <i><FaPaintBrush className='se-paint-i' /></i>
                </div>
                <h3>Wallpaper Installation</h3>
                <p>Enhance your interiors with our wallpaper selection and installation services.</p>
                <button>Read More</button>
              </div>


            </div>
          </div>
        </div>
      </div>
      {/* servies area section end */}
      {/* why choose us section start */}
      <div className='py'>
        <div className='container'>
          <div className='why'>
            <h4>WHY CHOOSE US!</h4>
            <h1>Masters of Color and Transformation</h1>
            <p>Painting your walls is one of the most effective ways to rejuvenate and personalize your home or workplace. Painters work meticulously to beautify your living spaces and breathe life into your walls. Professional painting services demonstrate that painting is not just a job but an art. However, it takes a skilled team that pays attention to intricate details to truly excel in this craft and achieve the desired results.</p>
            <p>The job of a painter goes beyond simply adding color to walls. They also ensure the walls are smooth and flawless. Plastering applications address imperfections in walls and create a perfect canvas. This is a critical step for subsequent painting, and a professional painter carries it out meticulously.</p>
            <p>Painters are also experts in wallpaper applications. Wallpaper adds a unique touch and character to your space. A professional painter ensures that wallpaper is applied smoothly, allowing you to achieve the desired aesthetic look.</p>
            <p>Painters are also experts in wallpaper applications. Wallpaper adds a unique touch and character to your space. A professional painter ensures that wallpaper is applied smoothly, allowing you to achieve the desired aesthetic look.</p>
            <p>In conclusion, a professional painter is the best choice for transforming the look and feel of your home or workplace. You can trust their expertise to add color to your walls, personalize your living spaces, and enhance their beauty.</p>
          </div>
        </div>
      </div>
      {/* why choose us section end */}
      {/* our project section start */}
      <div className='container'>
        <div className='p-tital text-center'>
          <h4>OUR PROJECTS</h4>
          <h1>Professional Painting Services</h1>
        </div>
        <div className='p-info d-flex py'>
          <div className='p-left'>
            <button><h3>Painting</h3></button>
            <button><h3>Plastering </h3></button>
            <button><h3>Wallpaper</h3></button>
            <button><h3>Painting</h3></button>
          </div>
          <div className='p-right d-flex'>
            <div className='p-right-info w-50'>
              <h2>Professional Painting Services</h2>
              <p>Our professional painting services are designed to rejuvenate and personalize your living spaces. We offer a wide range of expert services, including interior and exterior painting, plastering applications, wallpaper installation, and more.</p>
              <p>Our skilled team is here to bring your vision to life, delivering exceptional results that transform your home or workplace.</p>
              <button>Read More</button>
            </div>
            <div className='p-right-img'>
              <img src={require(`./image/our.jpg`)}></img>
            </div>
          </div>
        </div>
      </div>
      {/* our project section end */}
      {/* team section start */}
      <div className='container'>
        <div className='team py-2'>
          <div className='t-tital text-center m-auto'>
            <h4>TEAM MEMBERS</h4>
            <h1>Experienced Team Comprising Master Painters</h1>
          </div>
          <div className='t-team w-25 py-2 d-flex'>
            <div className='t-box'>
              <div className='t-img'>
                <img src={require(`./image/team-1.jpg`)} ></img>
              </div>
              <div className='t-icon d-flex'>
                <i><FaFacebook /></i>
                <i><FaTwitter /></i>
                <i><FaInstagram /></i>
              </div>
              <div className='t-info text-center'>
                <h3>Adam Turner</h3>
                <span>Color Specialist</span>
              </div>
            </div>
            <div className='t-box'>
              <div className='t-img'>
                <img src={require(`./image/team-2.jpg`)} ></img>
              </div>
              <div className='t-icon d-flex'>
                <i><FaFacebook /></i>
                <i><FaTwitter /></i>
                <i><FaInstagram /></i>
              </div>
              <div className='t-info text-center'>
                <h3>Adam Turner</h3>
                <span>Color Specialist</span>
              </div>
            </div>
            <div className='t-box'>
              <div className='t-img'>
                <img src={require(`./image/team-3.jpg`)} ></img>
              </div>
              <div className='t-icon d-flex'>
                <i><FaFacebook /></i>
                <i><FaTwitter /></i>
                <i><FaInstagram /></i>
              </div>
              <div className='t-info text-center'>
                <h3>Adam Turner</h3>
                <span>Color Specialist</span>
              </div>
            </div>
            <div className='t-box'>
              <div className='t-img'>
                <img src={require(`./image/team-4.jpg`)} ></img>
              </div>
              <div className='t-icon d-flex'>
                <i><FaFacebook /></i>
                <i><FaTwitter /></i>
                <i><FaInstagram /></i>
              </div>
              <div className='t-info text-center'>
                <h3>Adam Turner</h3>
                <span>Color Specialist</span>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* team section end */}
      {/*  testimonial section start */}
      <div className="container">
        <div className="test text-center py">
          <div className="test-tital">
            <h4>TESTIMONIAL</h4>
            <h1>Customer Satisfaction Stories:<br></br> Experiences with Us</h1>
          </div>
          <div className="test-info">
            <div className='test-img'>
              <img src={require(`./image/testimonial-1.jpg`)}></img>
            </div>
            <div className='test-cont text-center'>
              <p>Your painters provided truly excellent service. They painted both the interior and exterior of our home, and the results were fantastic. Our walls are smooth, and the colors are vibrant. Thank you!</p>
              <h3>Olivia Anderson</h3>
              <span>Architect</span>
            </div>
          </div>
        </div>
      </div>
      {/*  testimonial section end */}
      {/*  blog  section start */}
      <div className="container">
        <div className="b-tital text-center">
          <h4>LATEST BLOG</h4>
          <h1>Journey into the World of Colors:<br></br> Painting and Decoration Guide</h1>
        </div>
        <div className="b-info py d-flex m-auto">
          <div className="b-box">
              <div className='b-img'>
                <img src={require(`./image/blog-1.jpg`)}></img>
              </div>
              <div className='b-const'>
                <p >27 Sep, 2023 ADMIN</p>
                <h3>Tips for Achieving a Professional Look When Painting Your Home</h3>
                <button>Read More</button>
              </div>
          </div>
          <div className="b-box">
              <div className='b-img'>
                <img src={require(`./image/blog-2.jpg`)}></img>
              </div>
              <div className='b-const'>
                <p >27 Sep, 2023 ADMIN</p>
                <h3>Tips for Achieving a Professional Look When Painting Your Home</h3>
                <button>Read More</button>
              </div>
          </div>
          <div className="b-box">
              <div className='b-img'>
                <img src={require(`./image/blog-3.jpg`)}></img>
              </div>
              <div className='b-const '>
                <p >27 Sep, 2023 ADMIN</p>
                <h3>Tips for Achieving a Professional Look When Painting Your Home</h3>
                <button>Read More</button>
              </div>
          </div>
        </div>
      </div>
      {/*  blog  section end */}
      {/*  footer section start */}
      <footer>
        <div className="container">
          <div className='f-main d-flex'>
            <div className='f-address w-25'>
              <h4>ADDRESS</h4>
              <p><i><FaMapMarkerAlt /></i>123 Street, New York, USA</p>
              <p><i><IoCall /> </i>+012 345 67890</p>
              <p><i><FaEnvelopeOpen /></i>info@paintpro.com</p>
              <div className='f-icon d-flex'>
                <i><FaTwitter /></i>
                <i><FaFacebook /></i>
                <i><FaYoutube /></i>
                <i><FaLinkedinIn /></i>
              </div>
            </div>
            <div className='f-address w-25'>
              <h4>Services</h4>
              <p><i><FaAngleRight /></i>Interior Painting</p>
              <p><i><FaAngleRight /></i>Exterior Painting</p>
              <p><i><FaAngleRight /></i>Wall Repair & Preparation</p>
              <p><i><FaAngleRight /></i>Staining & Varnishing</p>
              <p><i><FaAngleRight /></i>Special Effects & Painting</p>
              <p><i><FaAngleRight /></i>Commercial Painting</p>
            </div>
            <div className='f-address w-25'>
              <h4>QUICK LINKS</h4>
              <p><i><FaAngleRight /></i>About Us</p>
              <p><i><FaAngleRight /></i>Contact Us</p>
              <p><i><FaAngleRight /></i>Our Serivces</p>
              <p><i><FaAngleRight /></i>Terms & Condition</p>
              <p><i><FaAngleRight /></i>Support</p>
            </div>
            <div className='f-address w-25'>
              <h4>NEWSLETTER</h4>
              <p>Register your email address.</p>
            </div>
          </div>
        </div>
      </footer>
      {/*  footer section end */}

    </section>
  );
}

export default App;
