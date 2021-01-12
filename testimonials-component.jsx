'use strict';

const e = React.createElement;
const plusSVG = "~/asssets/icons/plus.svg";

const Testimonials = () => {

  const data = [
  {
    id: 0,
    name: "Danos",
    stars: 4,
    review: "For anybody who is ready to learn how to manage their money properly. Over the last few months this little side hustle has become my main source of income. As well as taking substantial USD profits, my trading stack has doubled over the last 3 months. Incredible 🙂 Thanks guys!",
  },
  {
    id: 1,
    name: "Danos",
    stars: 5,
    review: "For anybody who is ready to learn how to manage their money properly. Over the last few months this little side hustle has become my main source of income. As well as taking substantial USD profits, my trading stack has doubled over the last 3 months. Incredible 🙂 Thanks guys!",
  },
  {
    id: 2,
    name: "Danos",
    stars: 5,
    review: "For anybody who is ready to learn how to manage their money properly. Over the last few months this little side hustle has become my main source of income. As well as taking substantial USD profits, my trading stack has doubled over the last 3 months. Incredible 🙂 Thanks guys!",
  },
]

  const RenderSliders = () => (
    data.map((item) => (
        <div key={item.id} className="testimonials-slider__slide bottom-curves bottom-curves--white-black">
          <div className="testimonials-slider__rating">
            <ul>
            {
                  Array.from(Array(item.stars).keys()).map((index) => {
                    return <li key={index}> <figure> <img src={plusSVG} alt="star" /></figure> </li>
                  })
            }
            </ul>
          </div>
          <span className="font-xsmall">{item.name}</span>
          <p>
            {item.review}
          </p>
        </div>
        
    ))
  )


    return (
      <div className="testimonials-slider__container">
        <RenderSliders />
      </div>
    )
}

const domContainer = document.querySelector('#testimonialsComponent');
ReactDOM.render(e(Testimonials), domContainer);