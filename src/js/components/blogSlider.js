import $ from 'jquery';
// window.$ = window.jQuery = $;
import 'slick-carousel';
// import '../../components/blogSlider/slick';


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
        pauseOnFocus: false,
        pauseOnHover: false,
    });
})