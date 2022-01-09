import React from 'react';
import { Link } from 'react-router-dom';

function EventItem(props) {
  console.log(props.path)
  const single_event = props.single_event;
  const datetime = single_event.event_date.slice(0,10)+ "    " + single_event.event_date.slice(11,-4);
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={'/events/'+single_event.id} state={{single_event:single_event}}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={single_event.photo}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{single_event.title}</h5>
            <h2 className='cards__item__text__date'>{datetime}</h2>
          </div>
        </Link>
      </li>
    </>
  );
}

export default EventItem;