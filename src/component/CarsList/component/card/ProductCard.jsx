import React, {useState } from 'react'
import './ProductCard.sass'


const ProductCard = ({ data }) => {
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
            <div>
                <div className='modal' id={`modal-${carContent.id}`}>
                    <div className='modal-header'>
                        <div className='title'>Vehicle Information</div>
                        <button data-close-button className='close-button' onClick={() => setOpenModal(false)}>&times;</button>
                    </div>
                    <div className='modal-body'>
                        <div className='car-name'>{carContent.year}&nbsp;{carContent.make}&nbsp;{carContent.model}</div>
                        <div className='car-text'>{carContent.submodel}</div>
                        
                        <div className='car-text'>{carContent.engine}&nbsp;{carContent.transmission}</div>
                        <div style={{ background: carContent.colorHex, width: `10px`, height: `10px` }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div className='car-text'>{carContent.color}-{carContent.colorHex}</div>
                    </div>
                </div>
                <div id='overlay'></div>
            </div>
            }
      </div>
  );
};

export default ProductCard;