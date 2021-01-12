'use strict';

const e = React.createElement;
const { useState } = React;
const plusSVG = "asssets/icons/plus.svg";

const FAQBar = () => {

  const [data, setData] = useState([{
    id: 0,
    question: "Hoe werkt het?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem.",
    open: false,
  },
  {
    id: 1,
    question: "Vraag 2",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius lorem lacus, vel sodales lectus tempor in. Nulla et urna quis nisi congue rhoncus. Etiam id posuere lectus. Ut rhoncus ut libero non ultrices. Quisque malesuada dolor eget posuere convallis. Pellentesque vitae massa fermentum nunc porttitor tempor vitae gravida mi. Nullam leo lectus, pellentesque eu pretium a, interdum porta dui. Ut auctor dapibus rhoncus. Pellentesque vel metus non ante molestie lacinia sed vel sem.",
    open: false,
  }])



    return (
      data.map((item) => 
      <div key={item.id} className="faq-bar" onClick={() => setData([{ ...data, open: !item.open }])}>
        <div key={item.id} id={item.id}  className="faq-bar faq-bar__heading">
          <strong>{item.question}</strong>
          <figure>
            <img src={plusSVG} alt="plus"/>
          </figure>
        </div>
      {!item.open && <div  className="faq-bar__answer"><p>{item.answer}</p> </div>}
      </div>
      )
    )
}

const domContainer = document.querySelector('#FAQBar');
ReactDOM.render(e(FAQBar), domContainer);