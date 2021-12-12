import React from 'react';
import { Link } from 'react-router-dom';

function EventItem(props) {
  console.log(props.path)
  const single_event = props.single_event;
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={'/events/'+single_event.id} state={{single_event:single_event}}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{single_event.title}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default EventItem;