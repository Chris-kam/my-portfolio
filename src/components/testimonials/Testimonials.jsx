import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


//import swiper core and require modules
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

//Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi distinctio fugiat quidem aliquam libero ad nobis veritatis beatae cumque dolorum tempora unde a quisquam, accusantium iste ducimus animi laboriosam eveniet.'
  },
  {
    avatar: AVTR2,
    name: 'Shata Wale',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi distinctio fugiat quidem aliquam libero ad nobis veritatis beatae cumque dolorum tempora unde a quisquam, accusantium iste ducimus animi laboriosam eveniet.'
  },
  {
    avatar: AVTR3,
    name: 'Bright Snow',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi distinctio fugiat quidem aliquam libero ad nobis veritatis beatae cumque dolorum tempora unde a quisquam, accusantium iste ducimus animi laboriosam eveniet.'
  },
  {
    avatar: AVTR4,
    name: 'Kweme despite',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi distinctio fugiat quidem aliquam libero ad nobis veritatis beatae cumque dolorum tempora unde a quisquam, accusantium iste ducimus animi laboriosam eveniet.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container" 
       //Swiper Module
       modules={[Pagination]} spaceBetween={40}
       slidesPerView={1}
       pagination={{clickable: true}}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
            <SwiperSlide className="testimonial">
               <div className="client__avatar">
                <img src={avatar} alt={name}/>
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
           </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials