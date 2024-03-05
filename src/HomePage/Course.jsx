import React from 'react'

const Course = () => {
  return (
    <>
    <style>{`
    

/* ===== FOR DEMO ===== */
.demo {
    height: 400px; 
    width: 1200px;
    margin: 0 auto;  
    -webkit-box-shadow: -1px 9px 18px -5px rgba(17,17,17,1);
    -moz-box-shadow: -1px 9px 18px -5px rgba(17,17,17,1);
    box-shadow: -1px 9px 18px -5px rgba(17,17,17,1);
    overflow: hidden;
    background-color: #000;
    position: relative;

}

.demo-description {
    flex: 0 0 25%;
    padding-right: 30px;
}

.demo-description__title {
    font-family: 'Abril Fatface', cursive;
    font-size: 40px;
    letter-spacing: 1.5px;
    margin: 0;
    margin-Left:650px;
}

.demo-description__p {
    font-size: 17px;
}


/* ====== MAIN CODE ===== */
.coursemeal {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
}

.coursemeal__div {
    flex: 0 0 33.3333333%;
    position: relative;
}

.responsive-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.coursemeal-info {
    background-color: rgba(0,0,0, 0.3);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 15%;

    display: flex; 
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    transition: all 0.4s;
}

.coursemeal-info__link:link,
.coursemeal-info__link:visited {
    font-family: 'Abril Fatface', cursive;
    font-size: 30px;
    color: #fff;
    text-align: center;
    letter-spacing: 1.8px;
    margin: 0;
    text-decoration: none;

    transition: all 0.4s;
}

.coursemeal__div:hover .coursemeal-info {
    height: 100%;
    background-color: rgba(0,0,0, 0.6);
}



@media only screen and (max-width: 1200px) {
    body {
        flex-wrap: wrap;
    }

    .demo-description { 
        padding: 0;
        flex: 0 0 100%;
        text-align: center;
    }

}

@media only screen and (max-width: 991px) {
    .demo-description  {
        margin-bottom: 30px;
    }

    .coursemeal  {
        height: 900px;
        flex-wrap: wrap;
    }

    .coursemeal__div {
        flex: 0 0 100%;
        height: 33.33333%;
    }

    .responsive-img img {
        height: 100%;
    }

    .coursemeal__div:nth-of-type(2) img {
        object-position: 50% 70%;
    }

    .coursemeal-info {
        height: 20%
    }
}

@media only screen and (max-width: 767px) {
    .coursemeal__div:nth-of-type(1) img {
        object-position: 50% 75%;
    }

    .coursemeal__div:nth-of-type(3) img {
        object-position: 50% 60%;
    }    

    .coursemeal-info__title {
        font-size: 25px;
    }    
}`}</style>
    <div className="demo-description">
      <h1 className="demo-description__title"> Courses </h1>
    
    </div>
    <div className="demo coursemeal">
      {/* APPETIZERS*/}
      <div className="coursemeal__div ">
        <picture className="responsive-img">
          <source
            media="(min-width: 992px)"
            srcSet="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg"
          />
          <source
            media="(min-width: 767px)"
            srcSet="https://i.postimg.cc/1RTdCYhB/appetizer-img-2.jpg"
          />
          <source srcSet="https://i.postimg.cc/TwnctQr7/appetizer-img-3.jpg" />
          <img
            src="https://i.postimg.cc/jSTZmp8H/appetizer-img-1.jpg"
            alt="Appetizer"
          />
        </picture>
        <div className="coursemeal-info">
          <a href="#" className="coursemeal-info__link">
            Appetizer
          </a>
        </div>
      </div>
      {/* MAIN COURSE*/}
      <div className="coursemeal__div">
        <picture className="responsive-img">
          <source
            media="(min-width: 992px)"
            srcSet="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg"
          />
          <source
            media="(min-width: 767px)"
            srcSet="https://i.postimg.cc/9XYj186s/maindish-img-2.jpg"
          />
          <source srcSet="https://i.postimg.cc/pLY8dt4q/maindish-img-3.jpg" />
          <img
            src="https://i.postimg.cc/V6NCCRK0/maindish-img-1.jpg"
            alt="Main Course"
          />
        </picture>
        <div className="coursemeal-info">
          <a href="#" className="coursemeal-info__link">
            Main Course
          </a>
        </div>
      </div>
      {/* DESSERTS*/}
      <div className="coursemeal__div">
        <picture className="responsive-img">
          <source
            media="(min-width: 992px)"
            srcSet="https://i.postimg.cc/9FfLh6ZZ/dessert-img-1.jpg"
          />
          <source
            media="(min-width: 767px)"
            srcSet="https://i.postimg.cc/FsRXBnKn/dessert-img-2.jpg"
          />
          <source srcSet="https://i.postimg.cc/ZKcFCVFZ/dessert-img-3.jpg" />
          <img
            src="https://i.postimg.cc/ZKcFCVFZ/dessert-img-1.jpg"
            alt="Desserts"
          />
        </picture>
        <div className="coursemeal-info">
          <a href="#" className="coursemeal-info__link">
            Dessert
          </a>
        </div>
      </div>
    </div>
  </>
  
  )
}

export default Course
