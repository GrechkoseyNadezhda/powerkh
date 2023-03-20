import $ from 'jquery';
// window.$ = window.jQuery = $;
import 'slick-carousel'
import './slick';


console.log('Hello')



$(function(){
    $('.blog-section__slider').slick({
        arrows: false,
        dots: true,
        infinite: true,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 1500,
        draggable: true,
        swipe: true,
        touchMove: true,
        
    });
})

// const blogSlider = document.querySelector('.blog-section__slider-item')

// blogSlider.style.display = 'block';

// blogSlider.style.width = '100px'