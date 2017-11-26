import * as $ from 'jquery'
import Swiper from 'swiper'

const responsiveBreakports = {
  1024: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 30
  },
  640: {
    slidesPerView: 1,
    spaceBetween: 0
  },
  320: {
    slidesPerView: 1,
    spaceBetween: 0
  }
}

function createSlider(id, opts = {}) {
  new Swiper(`.${id}-slider`, Object.assign({
    pagination: `.${id}-pagination`,
    paginationClickable: true,
    nextButton: `.${id}-slider-next`,
    prevButton: `.${id}-slider-prev`
  }, opts))
}

$(() => {
  createSlider('home')
  createSlider('testimonials', {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: responsiveBreakports
  })
  createSlider('product-list', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: responsiveBreakports
  })
  createSlider('post', {
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: responsiveBreakports
  })
})