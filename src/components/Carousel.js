import Slider from 'react-slick'
import photo from '../assets/images/photos/Wolfgang.jpg'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="carousel_list">
      <Slider {...settings} className="list">
        <div className="item">
          <div className="item_text">
            <p className="text">
              I have worked with a number of software developers before but none
              of them quite reached the level of professionalism, diligence and
              enthusiasm that I experienced with Vitaliy and his team. They are
              incredibly easy to work with and almost always find great
              programming solutions to our requirements.
              <br />
              What I especially liked about the SoftFormance team is their
              passion and understanding for our project. It’s like working with
              friends. Friends that deliver on their promises. I have nothing
              but praise for the work of SoftFormance team and look forward to
              working with this agency in the future.
            </p>

            <p className="name">Wolfgang Männel</p>
            <p className="position">
              Founder and Managing Director,<span>Fotografen365</span>
            </p>
          </div>
          <div className="item_photo">
            <img src={photo} alt="Wolfgang Männel" />
          </div>
        </div>
        <div className="item">
          <div className="item_text">
            <p className="text">
              I have worked with a number of software developers before but none
              of them quite reached the level of professionalism, diligence and
              enthusiasm that I experienced with Vitaliy and his team. They are
              incredibly easy to work with and almost always find great
              programming solutions to our requirements.
              <br />
              What I especially liked about the SoftFormance team is their
              passion and understanding for our project. It’s like working with
              friends. Friends that deliver on their promises. I have nothing
              but praise for the work of SoftFormance team and look forward to
              working with this agency in the future.
            </p>

            <p className="name">Wolfgang Männel</p>
            <p className="position">
              Founder and Managing Director,<span>Fotografen365</span>
            </p>
          </div>
          <div className="item_photo">
            <img src={photo} alt="Wolfgang Männel" />
          </div>
        </div>
        <div className="item">
          <div className="item_text">
            <p className="text">
              I have worked with a number of software developers before but none
              of them quite reached the level of professionalism, diligence and
              enthusiasm that I experienced with Vitaliy and his team. They are
              incredibly easy to work with and almost always find great
              programming solutions to our requirements.
              <br />
              What I especially liked about the SoftFormance team is their
              passion and understanding for our project. It’s like working with
              friends. Friends that deliver on their promises. I have nothing
              but praise for the work of SoftFormance team and look forward to
              working with this agency in the future.
            </p>

            <p className="name">Wolfgang Männel</p>
            <p className="position">
              Founder and Managing Director,<span>Fotografen365</span>
            </p>
          </div>
          <div className="item_photo">
            <img src={photo} alt="Wolfgang Männel" />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Carousel
