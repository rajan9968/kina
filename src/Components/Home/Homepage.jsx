import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from 'antd';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";  // Import autoplay styles
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function Homepage() {
  const videoRefs = useRef([]);
  const [playingStates, setPlayingStates] = useState(
    Array(12).fill(false) // initialize 12 videos as not playing
  );

  const togglePlayPause = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      updatePlayingState(index, true);
    } else {
      video.pause();
      updatePlayingState(index, false);
    }
  };

  const updatePlayingState = (index, isPlaying) => {
    setPlayingStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = isPlaying;
      return newStates;
    });
  };
  return (
    <div>
      <div className="page-content bg-white">
        {/*Swiper Banner Start */}
        <div className="main-slider style-1">
          <Carousel autoplay>
            <div>
              <img src="https://www.forevernew.co.in/pub/media/wysiwyg/home/4april-oct-LOG-IN-(Desktop).jpg" className='w-100' alt="" srcset="" />
            </div>
            <div>
              <img src="https://www.forevernew.co.in/pub/media/wysiwyg/home/4april-oct-LOG-IN-(Desktop).jpg" className='w-100' alt="" srcset="" />
            </div>
            <div>
              <img src="https://www.forevernew.co.in/pub/media/wysiwyg/home/4april-oct-LOG-IN-(Desktop).jpg" className='w-100' alt="" srcset="" />
            </div>
            <div>
              <img src="https://www.forevernew.co.in/pub/media/wysiwyg/home/4april-oct-LOG-IN-(Desktop).jpg" className='w-100' alt="" srcset="" />
            </div>
          </Carousel>
        </div>
        {/*Swiper Banner End*/}

        {/* icon-box1 End*/}
        {/*Recommend Section Start*/}
        <section className="content-inner-1 py-5" style={{ background: "#f7f7f7" }}>
          <div className="container-fluid">
            <div className="section-head text-center mb-2">
              <h2 className="title text-black">TRIPTII DIMRI'S FAVOURITES</h2>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 className="title mb-0 header-border" />
              </div>

            </div>
            <div className="container-fluid">
              <div className="row">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={6}


                  autoplay={{          // Auto-slide settings
                    delay: 5000,       // 3 seconds delay
                    disableOnInteraction: false,  // Continue sliding after user interaction
                  }}
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 1 },   // Mobile: 1 slide
                    576: { slidesPerView: 2 },   // Small screens: 2 slides
                    768: { slidesPerView: 3 },   // Medium screens: 3 slides
                    992: { slidesPerView: 3 }    // Large screens: 6 slides (col-lg-2)
                  }}
                >
                  {[...Array(12)].map((_, index) => (
                    <SwiperSlide key={index}>
                      {/* <div className="col-lg-2"> */}
                      <div
                        className="books-wrapper-3"
                        style={{
                          background: "#fff",
                          boxShadow: "0 1px 6px 1px rgba(54,74,99,.1)",
                          padding: 10,
                          borderRadius: 4,
                          textAlign: "center"
                        }}
                      >
                        <img
                          src="https://www.forevernew.co.in//pub/media/catalog/product/o/l/oldimlall_onbody_29569006_f.jpg?width=600&height=640&store=default&image-type=thumbnail"
                          alt="Book"
                          style={{ width: "100%", height: "auto" }}
                        />
                        <h6 style={{ fontSize: "14px", marginTop: "10px", textAlign: "left" }}>
                          Leticia Petite Corset Dress
                        </h6>
                        <div className="price text-start">
                          <span className="price-num">₹288</span>
                          <del>₹360</del>
                        </div>

                      </div>
                      {/* </div> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* icon-box1 */}
        <section className="content-inner-2" style={{ background: "#fff" }}>
          <div className="container-fluid">
            <img src="https://www.forevernew.co.in/pub/media/wysiwyg/embrace_summer_strip_dt_home.jpg" alt="" />
          </div>
        </section>
        <section className="content-inner-1 py-5" style={{ background: "#f7f7f7" }}>
          <div className="container-fluid">
            <div className="section-head text-center mb-2">
              <h2 className="title text-uppercase text-black">Refresh Your Wardrobe</h2>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 className="title mb-0 header-border" />
              </div>

            </div>
            <div className="container-fluid">
              <div className="row">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={6}


                  autoplay={{          // Auto-slide settings
                    delay: 5000,       // 3 seconds delay
                    disableOnInteraction: false,  // Continue sliding after user interaction
                  }}
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 1 },   // Mobile: 1 slide
                    576: { slidesPerView: 2 },   // Small screens: 2 slides
                    768: { slidesPerView: 3 },   // Medium screens: 3 slides
                    992: { slidesPerView: 4 }    // Large screens: 6 slides (col-lg-2)
                  }}
                >
                  {[...Array(12)].map((_, index) => (
                    <SwiperSlide key={index}>
                      {/* <div className="col-lg-2"> */}
                      <div
                        className="books-wrapper-3"
                        style={{
                          background: "#fff",
                          boxShadow: "0 1px 6px 1px rgba(54,74,99,.1)",
                          padding: 10,
                          borderRadius: 4,
                          textAlign: "center"
                        }}
                      >
                        <img
                          src="https://www.forevernew.co.in/media/wysiwyg/petite_05.jpg"
                          alt="Book"
                          style={{ width: "100%", height: "auto" }}
                        />
                        {/* <h6 style={{ fontSize: "14px", marginTop: "10px" }}>
                          Book {index + 1}
                        </h6>
                        <div className="price">
                          <span className="price-num">₹288</span>
                          <del>₹360</del>
                        </div> */}
                        <a
                          href="#"
                          className="btn btn-primary m-t15 btnhover btnhover2"
                          style={{ padding: "6px", marginTop: "10px" }}
                        >
                          <i className="flaticon-shopping-cart-1 m-r10" />
                          Waistcoat
                        </a>
                      </div>
                      {/* </div> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>

        {/* Book Sale */}
        <section className="content-inner-1 py-5" style={{ background: "#f7f7f7" }}>
          <div className="container-fluid">
            <div className="section-head text-center mb-2">
              <h2 className="title text-uppercase text-black">Shop Dresses</h2>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 className="title mb-0 header-border" />
              </div>

            </div>
            <div className="container-fluid">
              <div className="row">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={6}


                  autoplay={{          // Auto-slide settings
                    delay: 5000,       // 3 seconds delay
                    disableOnInteraction: false,  // Continue sliding after user interaction
                  }}
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 1 },   // Mobile: 1 slide
                    576: { slidesPerView: 2 },   // Small screens: 2 slides
                    768: { slidesPerView: 3 },   // Medium screens: 3 slides
                    992: { slidesPerView: 3 }    // Large screens: 6 slides (col-lg-2)
                  }}
                >
                  {[...Array(12)].map((_, index) => (
                    <SwiperSlide key={index}>
                      {/* <div className="col-lg-2"> */}
                      <div
                        className="books-wrapper-3"
                        style={{
                          background: "#fff",
                          boxShadow: "0 1px 6px 1px rgba(54,74,99,.1)",
                          padding: 10,
                          borderRadius: 4,
                          textAlign: "center"
                        }}
                      >
                        <img
                          src="https://www.forevernew.co.in/pub/media/wysiwyg/midi_dresses_05.jpg"
                          alt="Book"
                          style={{ width: "100%", height: "auto" }}
                        />

                        <a
                          href="#"
                          className="btn btn-primary m-t15 btnhover btnhover2"
                          style={{ padding: "6px", marginTop: "10px" }}
                        >
                          <i className="flaticon-shopping-cart-1 m-r10" />
                          MIDI DRESSES
                        </a>
                      </div>
                      {/* </div> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* Book Sale End */}
        {/* Feature Product */}
        <section className="content-inner-1 py-5" style={{ background: "#f7f7f7" }}>
          <div className="container-fluid">
            <div className="section-head text-center mb-2">
              <h2 className="title text-uppercase text-black">TRENDS</h2>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 className="title mb-0 header-border" />
              </div>

            </div>
            <div className="container-fluid">
              <div className="row">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={6}


                  autoplay={{          // Auto-slide settings
                    delay: 5000,       // 3 seconds delay
                    disableOnInteraction: false,  // Continue sliding after user interaction
                  }}
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 1 },   // Mobile: 1 slide
                    576: { slidesPerView: 2 },   // Small screens: 2 slides
                    768: { slidesPerView: 3 },   // Medium screens: 3 slides
                    992: { slidesPerView: 4 }    // Large screens: 6 slides (col-lg-2)
                  }}
                >
                  {[...Array(12)].map((_, index) => (
                    <SwiperSlide key={index}>
                      {/* <div className="col-lg-2"> */}
                      <div
                        className="books-wrapper-3"
                        style={{
                          background: "#fff",
                          boxShadow: "0 1px 6px 1px rgba(54,74,99,.1)",
                          padding: 10,
                          borderRadius: 4,
                          textAlign: "center"
                        }}
                      >
                        <img
                          src="https://www.forevernew.co.in/pub/media/wysiwyg/perfectly-paired.webp"
                          alt="Book"
                          style={{ width: "100%", height: "auto" }}
                        />

                      </div>
                      {/* </div> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* Feature Product End */}
        {/* Special Offer*/}
        <section className="content-inner-1 py-5" style={{ background: "#f7f7f7" }}>
          <div className="container-fluid">
            <div className="section-head text-center mb-2">
              <h2 className="title text-uppercase text-black">In the spotlight</h2>
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h2 className="title mb-0 header-border" />
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <Swiper
                  modules={[Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={6}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 5 },
                  }}
                >
                  {[...Array(12)].map((_, index) => (
                    <SwiperSlide key={index}>
                      <div
                        className="books-wrapper-3"
                        style={{
                          position: "relative",
                          background: "#fff",
                          boxShadow: "0 1px 6px 1px rgba(54,74,99,.1)",
                          padding: 10,
                          borderRadius: 4,
                          textAlign: "center",
                          overflow: "hidden", // ensure gradient doesn't overflow
                        }}
                      >
                        <video
                          ref={(el) => (videoRefs.current[index] = el)}
                          src="https://cdn4.fireworktv.com/medias/2025/4/25/1745580898-rvsxkyno/watermarked/720/Yoursummerstylemoodboardbroughttolifebykat_diaries.Frombolddenimtopasteltonesanddelicaterufflesthiseditcaptureseverythingweloveabouttheseason.What%E2%80%99syourgo-tosummertrendSharewit.mp4"
                          style={{ width: "100%", height: "auto" }}
                          muted
                          playsInline
                          loop
                        ></video>

                        {/* Gradient overlay */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            width: "100%",
                            height: "30%",
                            background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
                            pointerEvents: "none", // so it doesn't block button clicks
                          }}
                        />

                        <h6
                          style={{
                            fontSize: "14px",
                            marginTop: "-24%",
                            textAlign: "left",
                            position: "relative", // keep above gradient
                            zIndex: 1,
                          }}
                        >
                          Wardrobe
                        </h6>
                        <div style={{ marginTop: "10px", position: "relative", zIndex: 1 }}>
                          <button className="our-btn" onClick={() => togglePlayPause(index)}>
                            {playingStates[index] ? (
                              <>
                                <PauseCircleOutlined style={{ marginRight: 5, fontSize: '1.5em' }} />
                              </>
                            ) : (
                              <>
                                <PlayCircleOutlined style={{ marginRight: 5, fontSize: '1.5em' }} />
                              </>
                            )}
                          </button>

                        </div>
                      </div>

                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* Special Offer End */}

        {/* Newsletter */}
        <section
          className="py-5 newsletter-wrapper"
          style={{
            background: "url(frontend/images/background/fobl.png)",
            backgroundPosition: "center",
            backgroundSize: "cover"
          }}
        >
          <div className="container">
            <div className="subscride-inner">
              <div className="row style-1 justify-content-xl-between justify-content-lg-center align-items-center text-xl-start text-center">
                <div
                  className="col-xl-7 col-lg-12 wow fadeInUp"
                  data-wow-delay="0.1s"
                >
                  <div className="section-head mb-0">
                    <h2 className="title text-white my-lg-3 mt-0">
                      Click here to get the latest updates on new book releases.
                    </h2>
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-6 wow fadeInUp text-end"
                  data-wow-delay="0.2s"
                >
                  <a href="https://ambitionpublications.com/book-shop">
                    <button className="btn btn-primary">
                      <i className="fa-solid fa-book" />
                      &nbsp;&nbsp;&nbsp;&nbsp; Ambition Books&nbsp;&nbsp;&nbsp;&nbsp;
                      <i className="fa fa-arrow-right" aria-hidden="true" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
