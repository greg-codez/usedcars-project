import React, { useState } from 'react'
import './ProductCard.sass'


const ProductCard = ( props ) => {
  const { data, selectedMake, selectedModel, selectedYear } = props;
  const [openModal, setOpenModal] = useState(false),
  [carContent, setModalContent] = useState()

  function modalCarContent(car) {
    setModalContent(car)
    //console.log(carContent)
    setOpenModal(true)
  }

  return (
      <div className="product-card" key={data.id}>
        <img src={data.image} alt={data.name} />
        <div className="product-details">
          <h2>{data.year}&nbsp;{data.make}&nbsp;{data.model}</h2>
          <p>{data.engine}&nbsp;{data.transmission}</p>
          <button className='learnMore' data-modal-target={data.id} value={data.id} onClick={() => modalCarContent(data)}>Learn more</button>
        </div>
      {openModal && carContent &&

          <div className="modal-container" id={`modal-${carContent.id}`}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="picture">
                <img src={data.image} alt={data.name} />
                </div>
                <div className="text-wrap">
                  <h2>{carContent.year}&nbsp;{carContent.make}&nbsp;{carContent.model}</h2>
                  <p>{carContent.engine}&nbsp;{carContent.transmission}</p>
                  <p>{carContent.engine}&nbsp;{carContent.transmission}</p>
                  
                </div>
                <div className="close-btn" onClick={() => setOpenModal(false)}>
                  &times;
                </div>
              </div>

              <div id='overlay'></div>
            </div>
            }
      </div>
  );
};

export default ProductCard;