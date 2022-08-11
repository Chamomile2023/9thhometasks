import React from "react";
import "../Home/Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container-fluid">
        <div className="home__hero">
          <div className="home__nav">
            <a href="#" className="home--logo">
              Bobur
            </a>
          </div>
          <div className="home__texting">
            <div className="home__pro">
              <img src="./img/pro_big.png" alt="" className="home__big" />
              <img src="./img/pro_sm.png" alt="" className="home__sm" />
            </div>
            <div className="home__next">
              <div className="home__text2">
                <img src="./img/pic.png" alt="" className="home--person" />
                <div className="home__head">
                  <p className="home--type2">Designsta</p>
                  <p className="home--type3">
                    Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar
                    zerikmadinglarmi?
                  </p>
                </div>
              </div>
              <div className="home__icon">
                <span className="home__ico">
                  <img src="./img/1.png" alt="" className="home--icon1" />
                  10
                </span>
                <span className="home__ico">
                  <img src="./img/2.png" alt="" className="home--icon1" />1
                </span>
                <span className="home__ico">
                  <img src="./img/3.png" alt="" className="home--icon1" />
                  10
                </span>
                <span className="home__ico">
                  <img src="./img/4.png" alt="" className="home--icon1" />
                </span>
                <span className="home__ico">
                  <img src="./img/5.png" alt="" className="home--icon1" />
                </span>
              </div>
            </div>
            <div className="home__next">
              <div className="home__text2">
                <img src="./img/look.png" alt="" className="home--person" />
                <div className="home__head">
                  <p className="home--type2">cloutexhibition</p>
                  <p className="home--type3">
                    YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga
                    yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni
                    o’sayotganini ko’rib hursand bo’ladi odam.
                  </p>
                </div>
              </div>
              <div className="home__icon">
                <span className="home__ico">
                  <img src="./img/1.png" alt="" className="home--icon1" />
                  10
                </span>
                <span className="home__ico">
                  <img src="./img/2.png" alt="" className="home--icon1" />1
                </span>
                <span className="home__ico">
                  <img src="./img/3.png" alt="" className="home--icon1" />
                  10
                </span>
                <span className="home__ico">
                  <img src="./img/4.png" alt="" className="home--icon1" />
                </span>
                <span className="home__ico">
                  <img src="./img/5.png" alt="" className="home--icon1" />
                </span>
              </div>
            </div>
            <div className="home__next">
              <div className="home__text2">
                <img src="./img/look1.png" alt="" className="home--person" />
                <div className="home__head">
                  <p className="home--type2">CreativePhoto</p>
                  <p className="home--type3">
                    Обетда...
                    <br />
                    Кечиринглар
                  </p>
                </div>
              </div>
              <img src="./img/loo.png" alt="" className="home--big" />
              <div className="home__icon">
                <span className="home__ico">
                  <img src="./img/1.png" alt="" className="home--icon1" />
                  10
                </span>
                <span className="home__ico">
                  <img src="./img/2.png" alt="" className="home--icon1" />1
                </span>
                <span className="home__ico">
                  <img src="./img/3.png" alt="" className="home--icon1" />
                  10
                </span>
                <span className="home__ico">
                  <img src="./img/4.png" alt="" className="home--icon1" />
                </span>
                <span className="home__ico">
                  <img src="./img/5.png" alt="" className="home--icon1" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
