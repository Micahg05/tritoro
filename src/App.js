import "./App.css";
import aboutBanner1 from "./images/about-banner-1.png";
import aboutBanner2 from "./images/about-banner-2.jpg";
import logo from "./logo.png";
import author from "./images/author.jpg";
import blog1 from "./images/blog-1.png";
import blog2 from "./images/blog-2.jpg";
import blog3 from "./images/blog-3.jpg";
import heroBanner from "./images/hero-banner.png";
import logoLight from "./images/logo-light.png";
import property1 from "./images/property-1.jpg";
import property2 from "./images/property-2.jpg";
import property3 from "./images/property-3.jpg";
import property4 from "./images/property-4.png";
import service1 from "./images/service-1.png";
import service2 from "./images/service-2.png";
import service3 from "./images/service-3.png";
import {
  LogoFacebook,
  LogoTwitter,
  LocationOutline,
  LogoInstagram,
  LogoPinterest,
  CloseOutline,
  SearchOutline,
  PersonOutline,
  MailOutline,
  MenuOutline,
  HomeOutline,
  ArrowForwardOutline,
  CartOutline,
  Home as HomeIcon,
  LeafOutline,
  WineOutline,
  ShieldCheckmarkOutline,
  Location as LocationIcon,
  Camera,
  Film,
  BedOutline,
  ManOutline,
  SquareOutline,
  HeartOutline,
  AddCircleOutline,
  ResizeOutline,
  CarSportOutline,
  LibraryOutline,
  Person,
  Pricetags,
  Calendar,
  CallOutline,
  LogoLinkedin,
  LogoYoutube,
  WaterOutline,
  FitnessOutline,
  Football,
} from "react-ionicons";

function App() {
  // const elemToggleFunc = function (elem) {
  //   elem.classList.toggle("active");
  // };

  // const navbar = document.querySelector("[data-navbar]");
  // const overlay = document.querySelector("[data-overlay]");
  // const navCloseBtn = document.querySelector("[data-nav-close-btn]");
  // const navOpenBtn = document.querySelector("[data-nav-open-btn]");
  // const navbarLinks = document.querySelectorAll("[data-nav-link]");

  // const navElemArr = [overlay, navCloseBtn, navOpenBtn];

  // for (let i = 0; i < navbarLinks.length; i++) {
  //   navElemArr.push(navbarLinks[i]);
  // }

  // for (let i = 0; i < navElemArr.length; i++) {
  //   navElemArr[i].addEventListener("click", function () {
  //     elemToggleFunc(navbar);
  //     elemToggleFunc(overlay);
  //   });
  // }

  return (
    <div>
      <header class="header" data-header>
        <div class="overlay" data-overlay></div>

        <div class="header-top">
          <div class="container">
            <ul class="header-top-list">
              <li>
                <a href="mailto:info@homeverse.com" class="header-top-link">
                  <MailOutline />

                  <span>info@homeverse.com</span>
                </a>
              </li>

              <li>
                <a href="#" class="header-top-link">
                  <LocationOutline />

                  <address>15/A, Nest Tower, NYC</address>
                </a>
              </li>
            </ul>

            <div class="wrapper">
              <ul class="header-top-social-list">
                <li>
                  <a href="#" class="header-top-social-link">
                    <LogoFacebook />
                  </a>
                </li>

                <li>
                  <a href="#" class="header-top-social-link">
                    <LogoTwitter />
                  </a>
                </li>

                <li>
                  <a href="#" class="header-top-social-link">
                    <LogoInstagram />
                  </a>
                </li>

                <li>
                  <a href="#" class="header-top-social-link">
                    <LogoPinterest />
                  </a>
                </li>
              </ul>

              <button class="header-top-btn">Add Listing</button>
            </div>
          </div>
        </div>

        <div class="header-bottom">
          <div class="container">
            <a href="#" class="logo">
              <img src={logo} alt="Homeverse logo" />
            </a>

            <nav class="navbar" data-navbar>
              <div class="navbar-top">
                <a href="#" class="logo">
                  <img src={logo} alt="Homeverse logo" />
                </a>

                <button
                  class="nav-close-btn"
                  data-nav-close-btn
                  aria-label="Close Menu"
                >
                  <CloseOutline />
                </button>
              </div>

              <div class="navbar-bottom">
                <ul class="navbar-list">
                  <li>
                    <a href="#home" class="navbar-link" data-nav-link>
                      Home
                    </a>
                  </li>

                  <li>
                    <a href="#about" class="navbar-link" data-nav-link>
                      About
                    </a>
                  </li>

                  <li>
                    <a href="#service" class="navbar-link" data-nav-link>
                      Service
                    </a>
                  </li>

                  <li>
                    <a href="#property" class="navbar-link" data-nav-link>
                      Property
                    </a>
                  </li>

                  <li>
                    <a href="#blog" class="navbar-link" data-nav-link>
                      Blog
                    </a>
                  </li>

                  <li>
                    <a href="#contact" class="navbar-link" data-nav-link>
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>

            <div class="header-bottom-actions">
              <button class="header-bottom-actions-btn" aria-label="Search">
                <SearchOutline />

                <span>Search</span>
              </button>

              <button class="header-bottom-actions-btn" aria-label="Profile">
                <PersonOutline />

                <span>Profile</span>
              </button>

              <button class="header-bottom-actions-btn" aria-label="Cart">
                <CartOutline />

                <span>Cart</span>
              </button>

              <button
                class="header-bottom-actions-btn"
                data-nav-open-btn
                aria-label="Open Menu"
              >
                <MenuOutline />

                <span>Menu</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <main>
        <article>
          <section class="hero" id="home">
            <div class="container">
              <div class="hero-content">
                <p class="hero-subtitle">
                  <HomeIcon />
                  <span>Real Estate Agency</span>
                </p>
                <h2 class="h1 hero-title">Find Your Dream House By Us</h2>
                <p class="hero-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore.
                </p>
                <button class="btn">Make An Enquiry</button>
              </div>

              <figure class="hero-banner">
                <img src={heroBanner} alt="Modern house model" class="w-100" />
              </figure>
            </div>
          </section>
          <section class="about" id="about">
            <div class="container">
              <figure class="about-banner">
                <img src={aboutBanner1} alt="House interior" />
                <img src={aboutBanner2} alt="House interior" class="abs-img" />
              </figure>

              <div class="about-content">
                <p class="section-subtitle">About Us</p>

                <h2 class="h2 section-title">
                  The Leading Real Estate Rental Marketplace.
                </h2>

                <p class="about-text">
                  Over 39,000 people work for us in more than 70 countries all
                  over the This breadth of global coverage, combined with
                  specialist services
                </p>

                <ul class="about-list">
                  <li class="about-item">
                    <div class="about-item-icon">
                      <HomeOutline />
                    </div>

                    <p class="about-item-text">Smart Home Design</p>
                  </li>

                  <li class="about-item">
                    <div class="about-item-icon">
                      <LeafOutline />
                    </div>

                    <p class="about-item-text">Beautiful Scene Around</p>
                  </li>

                  <li class="about-item">
                    <div class="about-item-icon">
                      <WineOutline />
                    </div>

                    <p class="about-item-text">Exceptional Lifestyle</p>
                  </li>

                  <li class="about-item">
                    <div class="about-item-icon">
                      <ShieldCheckmarkOutline />
                    </div>

                    <p class="about-item-text">Complete 24/7 Security</p>
                  </li>
                </ul>

                <p class="callout">
                  "Enimad minim veniam quis nostrud exercitation llamco laboris.
                  Lorem ipsum dolor sit amet"
                </p>

                <a href="#service" class="btn">
                  Our Services
                </a>
              </div>
            </div>
          </section>
          <section class="service" id="service">
            <div class="container">
              <p class="section-subtitle">Our Services</p>

              <h2 class="h2 section-title">Our Main Focus</h2>

              <ul class="service-list">
                <li>
                  <div class="service-card">
                    <div class="card-icon">
                      <img src={service1} alt="Service icon" />
                    </div>

                    <h3 class="h3 card-title">
                      <a href="#">Buy a home</a>
                    </h3>

                    <p class="card-text">
                      over 1 million+ homes for sale available on the website,
                      we can match you with a house you will want to call home.
                    </p>

                    <a href="#" class="card-link">
                      <span>Find A Home</span>

                      <ArrowForwardOutline />
                    </a>
                  </div>
                </li>

                <li>
                  <div class="service-card">
                    <div class="card-icon">
                      <img src={service2} alt="Service icon" />
                    </div>

                    <h3 class="h3 card-title">
                      <a href="#">Rent a home</a>
                    </h3>

                    <p class="card-text">
                      over 1 million+ homes for sale available on the website,
                      we can match you with a house you will want to call home.
                    </p>

                    <a href="#" class="card-link">
                      <span>Find A Home</span>

                      <ArrowForwardOutline />
                    </a>
                  </div>
                </li>

                <li>
                  <div class="service-card">
                    <div class="card-icon">
                      <img src={service3} alt="Service icon" />
                    </div>

                    <h3 class="h3 card-title">
                      <a href="#">Sell a home</a>
                    </h3>

                    <p class="card-text">
                      over 1 million+ homes for sale available on the website,
                      we can match you with a house you will want to call home.
                    </p>

                    <a href="#" class="card-link">
                      <span>Find A Home</span>

                      <ArrowForwardOutline />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section class="property" id="property">
            <div class="container">
              <p class="section-subtitle">Properties</p>

              <h2 class="h2 section-title">Featured Listings</h2>

              <ul class="property-list has-scrollbar">
                <li>
                  <div class="property-card">
                    <figure class="card-banner">
                      <a href="#">
                        <img
                          src={property1}
                          alt="New Apartment Nice View"
                          class="w-100"
                        />
                      </a>

                      <div class="card-badge green">For Rent</div>

                      <div class="banner-actions">
                        <button class="banner-actions-btn">
                          <LocationIcon />

                          <address>Belmont Gardens, Chicago</address>
                        </button>

                        <button class="banner-actions-btn">
                          <Camera />

                          <span>4</span>
                        </button>

                        <button class="banner-actions-btn">
                          <Film />

                          <span>2</span>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <div class="card-price">
                        <strong>$34,900</strong>/Month
                      </div>

                      <h3 class="h3 card-title">
                        <a href="#">New Apartment Nice View</a>
                      </h3>

                      <p class="card-text">
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>

                      <ul class="card-list">
                        <li class="card-item">
                          <strong>3</strong>

                          <BedOutline />

                          <span>Bedrooms</span>
                        </li>

                        <li class="card-item">
                          <strong>2</strong>

                          <ManOutline />

                          <span>Bathrooms</span>
                        </li>

                        <li class="card-item">
                          <strong>3450</strong>

                          <SquareOutline />

                          <span>Square Ft</span>
                        </li>
                      </ul>
                    </div>

                    <div class="card-footer">
                      <div class="card-author">
                        <figure class="author-avatar">
                          <img src={author} alt="William Seklo" class="w-100" />
                        </figure>

                        <div>
                          <p class="author-name">
                            <a href="#">William Seklo</a>
                          </p>

                          <p class="author-title">Estate Agents</p>
                        </div>
                      </div>

                      <div class="card-footer-actions">
                        <button class="card-footer-actions-btn">
                          <ResizeOutline />
                        </button>

                        <button class="card-footer-actions-btn">
                          <HeartOutline />
                        </button>

                        <button class="card-footer-actions-btn">
                          <AddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="property-card">
                    <figure class="card-banner">
                      <a href="#">
                        <img
                          src={property2}
                          alt="Modern Apartments"
                          class="w-100"
                        />
                      </a>

                      <div class="card-badge orange">For Sales</div>

                      <div class="banner-actions">
                        <button class="banner-actions-btn">
                          <LocationIcon />

                          <address>Belmont Gardens, Chicago</address>
                        </button>

                        <button class="banner-actions-btn">
                          <Camera />

                          <span>4</span>
                        </button>

                        <button class="banner-actions-btn">
                          <Film />

                          <span>2</span>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <div class="card-price">
                        <strong>$34,900</strong>/Month
                      </div>

                      <h3 class="h3 card-title">
                        <a href="#">Modern Apartments</a>
                      </h3>

                      <p class="card-text">
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>

                      <ul class="card-list">
                        <li class="card-item">
                          <strong>3</strong>

                          <BedOutline />

                          <span>Bedrooms</span>
                        </li>

                        <li class="card-item">
                          <strong>2</strong>

                          <ManOutline />

                          <span>Bathrooms</span>
                        </li>

                        <li class="card-item">
                          <strong>3450</strong>

                          <SquareOutline />

                          <span>Square Ft</span>
                        </li>
                      </ul>
                    </div>

                    <div class="card-footer">
                      <div class="card-author">
                        <figure class="author-avatar">
                          <img src={author} alt="William Seklo" class="w-100" />
                        </figure>

                        <div>
                          <p class="author-name">
                            <a href="#">William Seklo</a>
                          </p>

                          <p class="author-title">Estate Agents</p>
                        </div>
                      </div>

                      <div class="card-footer-actions">
                        <button class="card-footer-actions-btn">
                          <ResizeOutline />
                        </button>

                        <button class="card-footer-actions-btn">
                          <HeartOutline />
                        </button>

                        <button class="card-footer-actions-btn">
                          <AddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="property-card">
                    <figure class="card-banner">
                      <a href="#">
                        <img
                          src={property3}
                          alt="Comfortable Apartment"
                          class="w-100"
                        />
                      </a>

                      <div class="card-badge green">For Rent</div>

                      <div class="banner-actions">
                        <button class="banner-actions-btn">
                          <LocationIcon />

                          <address>Belmont Gardens, Chicago</address>
                        </button>

                        <button class="banner-actions-btn">
                          <Camera />

                          <span>4</span>
                        </button>

                        <button class="banner-actions-btn">
                          <Film />

                          <span>2</span>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <div class="card-price">
                        <strong>$34,900</strong>/Month
                      </div>

                      <h3 class="h3 card-title">
                        <a href="#">Comfortable Apartment</a>
                      </h3>

                      <p class="card-text">
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>

                      <ul class="card-list">
                        <li class="card-item">
                          <strong>3</strong>

                          <BedOutline />

                          <span>Bedrooms</span>
                        </li>

                        <li class="card-item">
                          <strong>2</strong>

                          <ManOutline />

                          <span>Bathrooms</span>
                        </li>

                        <li class="card-item">
                          <strong>3450</strong>

                          <SquareOutline />

                          <span>Square Ft</span>
                        </li>
                      </ul>
                    </div>

                    <div class="card-footer">
                      <div class="card-author">
                        <figure class="author-avatar">
                          <img src={author} alt="William Seklo" class="w-100" />
                        </figure>

                        <div>
                          <p class="author-name">
                            <a href="#">William Seklo</a>
                          </p>

                          <p class="author-title">Estate Agents</p>
                        </div>
                      </div>

                      <div class="card-footer-actions">
                        <button class="card-footer-actions-btn">
                          <ResizeOutline />
                        </button>

                        <button class="card-footer-actions-btn">
                          <HeartOutline />
                        </button>

                        <button class="card-footer-actions-btn">
                          <AddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="property-card">
                    <figure class="card-banner">
                      <a href="#">
                        <img
                          src={property4}
                          alt="Luxury villa in Rego Park"
                          class="w-100"
                        />
                      </a>

                      <div class="card-badge green">For Rent</div>

                      <div class="banner-actions">
                        <button class="banner-actions-btn">
                          <LocationIcon />

                          <address>Belmont Gardens, Chicago</address>
                        </button>

                        <button class="banner-actions-btn">
                          <Camera />

                          <span>4</span>
                        </button>

                        <button class="banner-actions-btn">
                          <Film />

                          <span>2</span>
                        </button>
                      </div>
                    </figure>

                    <div class="card-content">
                      <div class="card-price">
                        <strong>$34,900</strong>/Month
                      </div>

                      <h3 class="h3 card-title">
                        <a href="#">Luxury villa in Rego Park</a>
                      </h3>

                      <p class="card-text">
                        Beautiful Huge 1 Family House In Heart Of Westbury.
                        Newly Renovated With New Wood
                      </p>

                      <ul class="card-list">
                        <li class="card-item">
                          <strong>3</strong>

                          <BedOutline />

                          <span>Bedrooms</span>
                        </li>

                        <li class="card-item">
                          <strong>2</strong>

                          <ManOutline />

                          <span>Bathrooms</span>
                        </li>

                        <li class="card-item">
                          <strong>3450</strong>

                          <SquareOutline />

                          <span>Square Ft</span>
                        </li>
                      </ul>
                    </div>

                    <div class="card-footer">
                      <div class="card-author">
                        <figure class="author-avatar">
                          <img src={author} alt="William Seklo" class="w-100" />
                        </figure>

                        <div>
                          <p class="author-name">
                            <a href="#">William Seklo</a>
                          </p>

                          <p class="author-title">Estate Agents</p>
                        </div>
                      </div>

                      <div class="card-footer-actions">
                        <button class="card-footer-actions-btn">
                          <ResizeOutline />
                        </button>

                        <button class="card-footer-actions-btn">
                          <HeartOutline />
                        </button>

                        <button class="card-footer-actions-btn">
                          <AddCircleOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section class="features">
            <div class="container">
              <p class="section-subtitle">Our Aminities</p>

              <h2 class="h2 section-title">Building Aminities</h2>

              <ul class="features-list">
                <li>
                  <a href="#" class="features-card">
                    <div class="card-icon">
                      <CarSportOutline />
                    </div>

                    <h3 class="card-title">Parking Space</h3>

                    <div class="card-btn">
                      <ArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="features-card">
                    <div class="card-icon">
                      <WaterOutline />
                    </div>

                    <h3 class="card-title">Swimming Pool</h3>

                    <div class="card-btn">
                      <ArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="features-card">
                    <div class="card-icon">
                      <ShieldCheckmarkOutline />
                    </div>

                    <h3 class="card-title">Private Security</h3>

                    <div class="card-btn">
                      <ArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="features-card">
                    <div class="card-icon">
                      <FitnessOutline />
                    </div>

                    <h3 class="card-title">Medical Center</h3>

                    <div class="card-btn">
                      <ArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="features-card">
                    <div class="card-icon">
                      <LibraryOutline />
                    </div>

                    <h3 class="card-title">Library Area</h3>

                    <div class="card-btn">
                      <ArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="features-card">
                    <div class="card-icon">
                      <BedOutline />
                    </div>

                    <h3 class="card-title">King Size Beds</h3>

                    <div class="card-btn">
                      <ArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="features-card">
                    <div class="card-icon">
                      <HomeOutline />
                    </div>

                    <h3 class="card-title">Smart Homes</h3>

                    <div class="card-btn">
                      <ArrowForwardOutline />
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" class="features-card">
                    <div class="card-icon">
                      <Football />
                    </div>

                    <h3 class="card-title">Kid’s Playland</h3>

                    <div class="card-btn">
                      <ArrowForwardOutline />
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section class="blog" id="blog">
            <div class="container">
              <p class="section-subtitle">News & Blogs</p>

              <h2 class="h2 section-title">Leatest News Feeds</h2>

              <ul class="blog-list has-scrollbar">
                <li>
                  <div class="blog-card">
                    <figure class="card-banner">
                      <img
                        src={blog1}
                        alt="The Most Inspiring Interior Design Of 2021"
                        class="w-100"
                      />
                    </figure>

                    <div class="blog-content">
                      <div class="blog-content-top">
                        <ul class="card-meta-list">
                          <li>
                            <a href="#" class="card-meta-link">
                              <Person />

                              <span>by: Admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#" class="card-meta-link">
                              <Pricetags />

                              <span>Interior</span>
                            </a>
                          </li>
                        </ul>

                        <h3 class="h3 blog-title">
                          <a href="#">
                            The Most Inspiring Interior Design Of 2021
                          </a>
                        </h3>
                      </div>

                      <div class="blog-content-bottom">
                        <div class="publish-date">
                          <Calendar />

                          <time datetime="2022-27-04">Apr 27, 2022</time>
                        </div>

                        <a href="#" class="read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="blog-card">
                    <figure class="card-banner">
                      <img
                        src={blog2}
                        alt="Recent Commercial Real Estate Transactions"
                        class="w-100"
                      />
                    </figure>

                    <div class="blog-content">
                      <div class="blog-content-top">
                        <ul class="card-meta-list">
                          <li>
                            <a href="#" class="card-meta-link">
                              <Person />

                              <span>by: Admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#" class="card-meta-link">
                              <Pricetags />

                              <span>Estate</span>
                            </a>
                          </li>
                        </ul>

                        <h3 class="h3 blog-title">
                          <a href="#">
                            Recent Commercial Real Estate Transactions
                          </a>
                        </h3>
                      </div>

                      <div class="blog-content-bottom">
                        <div class="publish-date">
                          <Calendar />

                          <time datetime="2022-27-04">Apr 27, 2022</time>
                        </div>

                        <a href="#" class="read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>

                <li>
                  <div class="blog-card">
                    <figure class="card-banner">
                      <img
                        src={blog3}
                        alt="Renovating a Living Room? Experts Share Their Secrets"
                        class="w-100"
                      />
                    </figure>

                    <div class="blog-content">
                      <div class="blog-content-top">
                        <ul class="card-meta-list">
                          <li>
                            <a href="#" class="card-meta-link">
                              <Person />

                              <span>by: Admin</span>
                            </a>
                          </li>

                          <li>
                            <a href="#" class="card-meta-link">
                              <Pricetags />

                              <span>Room</span>
                            </a>
                          </li>
                        </ul>

                        <h3 class="h3 blog-title">
                          <a href="#">
                            Renovating a Living Room? Experts Share Their
                            Secrets
                          </a>
                        </h3>
                      </div>

                      <div class="blog-content-bottom">
                        <div class="publish-date">
                          <Calendar />

                          <time datetime="2022-27-04">Apr 27, 2022</time>
                        </div>

                        <a href="#" class="read-more-btn">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section class="cta">
            <div class="container">
              <div class="cta-card">
                <div class="card-content">
                  <h2 class="h2 card-title">Looking for a dream home?</h2>

                  <p class="card-text">
                    We can help you realize your dream of a new home
                  </p>
                </div>

                <button class="btn cta-btn">
                  <span>Explore Properties</span>

                  <ArrowForwardOutline />
                </button>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer class="footer">
        <div class="footer-top">
          <div class="container">
            <div class="footer-brand">
              <a href="#" class="logo">
                <img src={logoLight} alt="Homeverse logo" />
              </a>

              <p class="section-text">
                Lorem Ipsum is simply dummy text of the and typesetting
                industry. Lorem Ipsum is dummy text of the printing.
              </p>

              <ul class="contact-list">
                <li>
                  <a href="#" class="contact-link">
                    <LocationOutline />

                    <address>Brooklyn, New York, United States</address>
                  </a>
                </li>

                <li>
                  <a href="tel:+0123456789" class="contact-link">
                    <CallOutline />

                    <span>+0123-456789</span>
                  </a>
                </li>

                <li>
                  <a href="mailto:contact@homeverse.com" class="contact-link">
                    <MailOutline />

                    <span>contact@homeverse.com</span>
                  </a>
                </li>
              </ul>

              <ul class="social-list">
                <li>
                  <a href="#" class="social-link">
                    <LogoFacebook />
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <LogoTwitter />
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <LogoLinkedin />
                  </a>
                </li>

                <li>
                  <a href="#" class="social-link">
                    <LogoYoutube />
                  </a>
                </li>
              </ul>
            </div>

            <div class="footer-link-box">
              <ul class="footer-list">
                <li>
                  <p class="footer-list-title">Company</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    About
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Blog
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    All Products
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Locations Map
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    FAQ
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>

              <ul class="footer-list">
                <li>
                  <p class="footer-list-title">Services</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Order tracking
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Wish List
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Login
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    My account
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Terms & Conditions
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Promotional Offers
                  </a>
                </li>
              </ul>

              <ul class="footer-list">
                <li>
                  <p class="footer-list-title">Customer Care</p>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Login
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    My account
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Wish List
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Order tracking
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    FAQ
                  </a>
                </li>

                <li>
                  <a href="#" class="footer-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="container">
            <p class="copyright">
              &copy; 2022 <a href="#">codewithsadee</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
