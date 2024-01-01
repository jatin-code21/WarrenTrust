import React, { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

// Components

import { CustomButton, ProductCard, LandingHero } from "../UI";

// Images

import classes from "./Home.module.css";
import {
  demo  
} from "../../Assets/Home";
import wave from "../../Assets/Home/waves.svg";

// Contexts

import { sellerAuthContext } from "../../Contexts";

const Home = () => {
  const redirect = useNavigate();
  const { isSellerAuthenticated } = useContext(sellerAuthContext);
  const exploreRef = useRef(null);
  const scrollDown = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className={classes.home_page}>
        <div className={classes.landing_slide}>
          <div className={classes.landing}>
            <h1 className={classes.landing_text}>
              Transfer the <br /> Warranty Card <br /> more securely
            </h1>
            <div className={classes.btn}>
              <CustomButton
                onClick={scrollDown}
                label="Explore"
                filled
                href="explore"
              />
              {!isSellerAuthenticated && (
                <CustomButton
                  // onClick={handleClick}
                  label="Become a Seller"
                  // filled
                />
              )}
            </div>
          </div>
          <div className={classes.model}>
           
            {/* <LandingHero /> */}
          </div>
        </div>

        <div ref={exploreRef} className={classes.featured_section}>
          {/* <img src={wave} style={{ height: "300px" }} alt="wave" /> */}
          <h1 className={classes.featured_text}>Product's Warranty Cards</h1>
          <div className={classes.featured_products}>
            <div className={classes.translated1}>
              <ProductCard
                show
                name="Iron 1"
                price="239"
                image={demo}
                id="62e2f81ce3b9bf471a9055f6"
              />
            </div>
            <div className={classes.translated}>
              <ProductCard
                show
                name="Full Sleeve Color Block Men Sweatshirt"
                price="649"
                image={demo}
                id="62e2fa38e3b9bf471a90561e"
              />
            </div>
            <ProductCard
              show
              name="Sports Sneakers Shoes for Men"
              price="277"
              image={demo}
              id="62e2fb08e3b9bf471a905630"
            />
            <div className={classes.translated}>
              <ProductCard
                show
                name="Backpack Fizz Bag (Grey)"
                price="1169"
                image={demo}
                id="62e2fc07e3b9bf471a905642"
              />
            </div>
            <div className={classes.translated5}>
              <ProductCard
                show
                name="Badminton Shoes For Men (Yellow)"
                price="2922"
                image={demo}
                id="62e2fcc3e3b9bf471a905654"
              />
            </div>
          </div>
        </div>
        {/* <div className={classes.our_products_section}>
          <h1 className={classes.our_products_text}>Our Products</h1>
          <div className={classes.our_product1}>
            <div className={classes.product_small_images}>
              <img
                src={shoe1}
                className={classes.product_small_image1}
                alt=""
              />
              <img
                src={shoe2}
                className={classes.product_small_image2}
                alt=""
              />
            </div>
            <div className={classes.content}>
              <h1 className={classes.our_product_text}>Sneakers</h1>
              <CustomButton
                label="Explore"
                filled
                padding="15px 40px"
                fontSize="23px"
                onClick={() => {
                  redirect("/category?category=shoes");
                }}
              />
            </div>
          </div>
          <div className={classes.our_product2}>
            <div>
              <div className={classes.content}>
                <h1 className={classes.our_product_text}>Hoodies</h1>
                <CustomButton
                  label="Explore"
                  filled
                  padding="15px 40px"
                  fontSize="23px"
                  onClick={() => {
                    redirect("/category?category=hoodies");
                  }}
                />
              </div>
            </div>
            <div className={classes.product_small_images}>
              <img
                src={hoodie1}
                className={classes.product_small_image1}
                alt=""
              />

              <img
                src={hoodie2}
                className={classes.product_small_image2}
                alt=""
              />
            </div>
          </div>

          <div className={classes.our_product3}>
            <div className={classes.product_small_images}>
              <img src={bag1} className={classes.product_small_image1} alt="" />
              <img src={bag2} className={classes.product_small_image2} alt="" />
            </div>
            <div className={classes.content}>
              <h1 className={classes.our_product_text}>Bagpacks</h1>
              <CustomButton
                label="Explore"
                filled
                padding="15px 40px"
                fontSize="23px"
                onClick={() => {
                  redirect("/category?category=bagpacks");
                }}
              />
            </div>
          </div>
          <div className={classes.our_product4}>
            <div>
              <div className={classes.content}>
                <h1 className={classes.our_product_text}>T-shirts</h1>
                <CustomButton
                  label="Explore"
                  filled
                  padding="15px 40px"
                  fontSize="23px"
                  onClick={() => {
                    redirect("/category?category=tshirts");
                  }}
                />
              </div>
            </div>
            <div className={classes.product_small_images}>
              <img
                src={tshirt1}
                className={classes.product_small_image1}
                alt=""
              />
              <img
                src={tshirt2}
                className={classes.product_small_image2}
                alt=""
              />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
