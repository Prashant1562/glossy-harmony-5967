import React from 'react';
import ImgCarousel from '../Components/Navbar/ImgCarousel';
import { Stack } from "@chakra-ui/react";

const Home = () => {
  return (

    <div style={{
        display: "flex",
        flexDirection:"column",
        justifyContent:"center",
        marginBottom:"30px"
      }}>

        {/* carousel */}

 <div style={{ display: "flex",justifyContent: "center",width:"90%",margin:"auto"}}>
      
      <ImgCarousel/>

      <img
        style={{ maxHeight:"488px",cursor:"pointer" }}
        src="https://ii2.pepperfry.com/media/wysiwyg/banners/RHS-WEB_2x_1301_16-jan.jpg"
        alt="featur"
      />
    </div>

    {/* banner */}

    <div style={{width:"90%",margin:"auto"}}>
            <img style={{width: "100%",marginTop:"30px"}} src = "https://ii3.pepperfry.com/media/wysiwyg/banners/2021_web_regBanner1x_2712.jpg" alt = "banner"/>
        </div>

{/* shop by room */}

<div
        style={{
          display: "flex",
          alignItems: "center",
         
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "40px 0px 20px",
          }}
        >
          Shop By Room
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_1.jpg"
              alt=""
            />
            <p style={{ fontSize: "20px", color: "#121212" }}>
              Shop Living Room →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_2.jpg"
              alt=""
            />
            <p style={{ fontSize: "20px", color: "#121212" }}>Shop Bedroom →</p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_3.jpg"
              alt=""
            />
            <p style={{ fontSize: "20px", color: "#121212" }}>
              Shop Dinning Room →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section4_web_04012023_4.jpg"
              alt=""
            />
            <p style={{ fontSize: "20px", color: "#121212" }}>
              Shop Study Room →
            </p>
          </Stack>
        </Stack>
      </div>

      {/* what the fry deals */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
        What The Fry Deals

        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/HP_Deal_web_12112022_5.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" ,textAlign:"left"}}
            >
              For ₹79 at 80% Off
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              Modern Solid Mattress
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/HP_Deal_web_12112022_6.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" ,textAlign:"left"}}
            >
              For ₹119 at 91% Off
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              Solid Wood Products
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_3.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
              For ₹349 at 65% Off
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484",textAlign:"left" }}>
              Geometric Bedding
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Home_Deal19_web_19012023_4.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
              For ₹129 at 86% Off
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              Wall Shelf + Key Holder
            </p>
          </Stack>
        </Stack>
      </div>
      {/* trends  */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
        Trends In Furniture And Decor
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_1.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
          Pantone Color Sofas
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484",textAlign:"left" }}>
              Explore Starting ₹10349 →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_2.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
              Gentle Lighting Shelf Lamps
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484",textAlign:"left" }}>
              Explore Starting ₹1999 →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section6_web_04012023_3.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" ,textAlign:"left"}}
            >
              Maximalist Pieces by Chumbak
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              Explore Starting ₹4495 →
            </p>
          </Stack>
        </Stack>
      </div>
      {/* -----------------------------arrivals--------------------- */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          New Arrivals
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_1.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" ,textAlign:"left"}}
            >
              Premium Office Chairs

            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484",textAlign:"left" }}>
              06+ Optinons<br />
              Starting ₹14499 →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_2.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
              Unique Collectibles
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
          120+ Options <br />
              Starting ₹249 →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section7_web_04012023_3.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
              Printed Cushion Covers
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              150+ Options<br />
              Starting ₹149 →
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_newarrival_17012023_web.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
          Upholsterted Beds
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              70+ Options <br />
              Starting ₹9199 →
            </p>
          </Stack>
        </Stack>
      </div>

      {/* winter */}


      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
        The Winter Edit
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_1.jpg"
              alt=""
            />
           
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_2.jpg"
              alt=""
            />
            
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section8_web_04012023_3.jpg"
              alt=""
            />
           
          </Stack>
        </Stack>
      </div>


{/* Top brands */}

<div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          Top Brands On Pepperfry
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_1.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212" ,textAlign:"left"}}
            >
              Popular For Sofas

            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484",textAlign:"left" }}>
              600+ Optinons
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_2.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
              Popular For Office Chairs
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
          45+ Options 
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_3.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
              Popular For Home Decor
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              290+ Options
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section9_web_04012023_4.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "20px", fontWeight: "600", color: "#121212",textAlign:"left" }}
            >
          Popular For Serveware
            </p>
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              120+ Options 
            </p>
          </Stack>
        </Stack>
      </div>

{/* inspiration */}

<div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          Inspiration From Our Blog
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_1.jpg"
              alt=""
            />
            
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484",textAlign:"left" }}>
            How to Declutter YOur House Based on Your<br/>
             Personality Type ? | Read More→
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_2.jpg"
              alt=""
            />
          
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
          5 Elegant Ideas for Your Dreamy Modern <br/>
          Master Bedroom | Read More→
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_3.jpg"
              alt=""
            />
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              7 Decor Ideas to Spruce up YOur Hallway | <br/>
              Read More→
            </p>

          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "320px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/Hp_section10_web_04012023_4.jpg"
              alt=""
            />
            
            <p style={{ fontSize: "16px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              8 Treands YOu Can Use This Holiday Season in<br/>Your Home | Read More
              Read More→
            </p>
          </Stack>
        </Stack>
      </div>











 {/* ---------------------- Customers---------------------------- */}
 <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "87%",
          cursor : "pointer" }}
        >
          Customers Speak
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_7.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "16px", fontWeight: "500", color: "#121212",textAlign:"left" }}
            >
              Bought these two grey puffy stools from pepperfry.
              <br /> Found them to be surprisingly strong! Blends...
            </p>
            <p
              style={{
                fontSize: "15px",
                marginTop: "22px",
                fontWeight: "500",
                color: "#121212",
                textAlign:"left"
              }}
            >
              Suman Senapatia
            </p>
            <p style={{ fontSize: "15px", margin: "0px", color: "#848484",textAlign:"left" }}>
              Visakhapatnam
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer" }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/happy_customer_block_2_2906_0222.png"
              alt=""
            />
            <p
              style={{ fontSize: "16px", fontWeight: "500", color: "#121212",textAlign:"left" }}
            >
              I purchased Candy Study Chair in Pink Colour by <br />
              Alex Daisy from pepperfry looks awesome and My...
            </p>
            <p
              style={{
                fontSize: "15px",
                marginTop: "22px",
                fontWeight: "500",
                color: "#121212",
                textAlign:"left"
              }}
            >
              Baba Kattubadi
            </p>
            <p style={{ fontSize: "15px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              Hyderabad
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "420px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/Testimonial_web_261221_9.jpg"
              alt=""
            />
            <p
              style={{ fontSize: "16px", fontWeight: "500", color: "#121212",textAlign:"left" }}
            >
              Purchased an ergonomic chair, I thought it would <br />
              not be fitting for me but once it got delivered, got it...
            </p>
            <p
              style={{
                fontSize: "15px",
                marginTop: "22px",
                fontWeight: "500",
                color: "#121212",
                textAlign:"left"
              }}
            >
              Satya Madhana
            </p>
            <p style={{ fontSize: "15px", margin: "0px", color: "#848484" ,textAlign:"left"}}>
              Secunderabad
            </p>
          </Stack>
        </Stack>
      </div>


      {/* -----------------------------Need Help Buying?------------------------------- */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h5
          style={{
            fontSize: "36px",
            fontFamily: "serif",
            fontWeight: "bold",
            margin: "50px 0px 10px",
            textAlign: "left",
            width: "90%",
          cursor : "pointer" }}
        >
          Need Help Buying?
        </h5>
        <Stack direction={"row"}>
          <Stack direction={"column"}>
            <img
              style={{ width: "220px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_1.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
                textAlign: "left",
              }}
            >
              Here's How To Choose The
              <br /> Right Sofa
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "220px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_2.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
                textAlign: "left",
              }}
            >
              How To Buy A Perfect Bed
              <br /> For Your Room
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "220px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_3.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
                textAlign: "left",
              }}
            >
              Your Guide To Buy The
              <br /> Perfect Mattress
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "220px", cursor : "pointer"  }}
              src="https://ii1.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_4.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
                textAlign: "left",
              }}
            >
              Everything About Cabinets
              <br />And Sideboards
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "220px", cursor : "pointer"  }}
              src="https://ii2.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_5.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
                textAlign: "left",
              }}
            >
              What To Look For While
              <br /> Buying A Chair
            </p>
          </Stack>
          <Stack direction={"column"}>
            <img
              style={{ width: "220px", cursor : "pointer"  }}
              src="https://ii3.pepperfry.com/media/wysiwyg/banners/hp_need_help_p_6.jpg"
              alt=""
            />
            <p
              style={{
                fontSize: "17px",
                margin: "10px 0px 0px 0px",
                color: "#121212",
              }}
            ></p>
          </Stack>
        </Stack>
      </div>


    </div>
  )
}

export default Home