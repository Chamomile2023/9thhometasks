import React from "react";
import "./Aside.scss";

const Aside = () => {
  let data = {
    img: ["./img/girl.png", "./img/boy.png", "./img/settings.svg"],
    text: ["Mushtariy", "Shuhratbek"],
    email: ["@Mushtar565266", "@mrshukhrat"],
  };

  return (
    <div className="aside">
      <div className="container-fluid adiit">
        <div className="aside__hero">
          <div className="aside__input">
            <img src="./img/search.png" alt="" className="aside--search" />
            <input
              type="text"
              className="aside--input"
              placeholder="Search Twitter"
            />
          </div>
          <div className="aside__images">
            <img src="./img/pictures.png" alt="" className="aside--img" />
          </div>
          <div className="aside__card">
            <h3 className="aside--title1">You might like</h3>
            <div className="aside__p">
              <img src={data.img[0]} alt="" className="aside--circle" />
              <p className="aside--parag">
                <h5 className="aside--title">{data.text[0]}</h5>
                <span className="aside--span">{data.email[0]}</span>
              </p>
              <button className="aside--btn">Follow</button>
            </div>
            <div className="aside__p">
              <img src={data.img[1]} alt="" className="aside--circle" />
              <p className="aside--parag">
                <h5 className="aside--title">{data.text[1]}</h5>
                <span className="aside--span">{data.email[1]}</span>
              </p>
              <button className="aside--btn">Follow</button>
            </div>
            <p className="aside--show">Show more</p>
          </div>
          <div className="aside__trend add">
            <div className="aside__setting">
              <h3 className="aside--title1 addition">Trends for you</h3>
              <img src={data.img[2]} alt="" className="aside--setting" />
            </div>
            <div className="aside__data">
              <span className="aside--span">Trending in Germany</span>
              <h5 className="aside--title">Revolution</h5>
              <span className="aside--span ">50.4K Tweets</span>
            </div>
            <p className="aside--show">Show more</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
