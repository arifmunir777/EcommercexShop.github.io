

// // let headcss=
// // {
  
// // width: "1200px!important",
// // padding: "20px",
// // backgroundColor:"white !important",
// // color: "whitesmoke !important",
// // boxShadow:" -2px -1px 27px -14px rgba(0,0,0,0.75)",
// // }
// // function headfun()
// // {
// // let boxmenu=document.getElementById("box-menu");
// // console.log(boxmenu);
// // if(scrollY>100)
// // {
// //     console.log(screenY)
// //   // boxmenu.style.width="1200px !important";
// //   boxmenu.style.backgroundColor="green";
   

// // }
// // }

// window.onscroll = function() {myFunction()
//     {
// let boxmenu=document.getElementById("nav");
// // let boxmenu=document.getElementsByClassName("navbar");
// console.log(boxmenu);
 
//   if (document.body.scrollTop() > 50 || document.documentElement.scrollTop > 50) {
     
//     // boxmenu.style.width="100%";
//        boxmenu.style.width="1800px ";
//   } else {
//     // document.getElementById("myP").className = "";
//   }
 
 
// }
 
$(document).ready(function()
{
     
      $('.active-banner-slider').slick({
        
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow:$('.fa-arrow-right'),
        prevArrow:$('.fa-arrow-left'),

     });

     $('.slider-full').slick({
        
      slidesToShow: 3,
      slidesToScroll: 1,
      // nextArrow:$('.fa-arrow-right'),
      // prevArrow:$('.fa-arrow-left'),
      responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 1,
             infinite: true,
             
           }
         },
         {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1
           }
         }
      ]
   });
   
   $('.carousel-slider').slick({
        
      slidesToShow: 4,
      slidesToScroll: 1,
      // nextArrow:$('.fa-arrow-right'),
      // prevArrow:$('.fa-arrow-left'),

   });
   
   
     
})
$(document).ready(function()
{
   $('.active-exclusive-product-slider').slick({
        
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:$('.exclusive-right .fa-arrow-circle-right'),
      prevArrow:$('.fa-arrow-circle-left'),

   });

})