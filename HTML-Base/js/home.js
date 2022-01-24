$(document).ready(function(){

    //Exclusive Slider [Multiple]
    $('#exclusiveProjects').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><i class="pgi-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="pgi-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                  slidesToShow: 3,
                }
              },
              {
                breakpoint: 990,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                }
              },
              {
                breakpoint: 749,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              }
        ]
    });

    //Exclusive Slider [Single]
    $('#exclusiveSingle').slick({
        infinite: true,
        //fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><i class="pgi-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="pgi-angle-right"></i></button>',
        dots: true,
        asNavFor: '#exclusiveSingleCustomNav',
        // customPaging: function(slick,index) {
        //     if (slick.slideCount < 6) {
        //       var targetTitle = slick.$slides.eq(index).find('.p-ttl').html();
        //       return '<span>'+ targetTitle +'</span>';
        //     } else {
        //       return `<button type="button" role="tab" aria-label="${slick.currentSlide} of ${slick.slideCount}" tabindex="-1">${index}</button>`
        //     }
        // },
        responsive: [
          {
            breakpoint: 749,
            settings: {
              arrows: false,
            }
          }
        ]
    });

    $('#exclusiveSingleCustomNav').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '#exclusiveSingle',
      dots: false,
      arrows:false,
      centerMode: false,
      focusOnSelect: true,
      responsive: [
        {
          breakpoint: 749,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });

    const exclusiveProjectsCount = $('#exclusiveSingle').slick('getSlick').slideCount;
    if( exclusiveProjectsCount >= 4) {
      $('#exclusiveSingleCustomNav').addClass('d-none');
    }

    //Featured Projects
    $('#featuredProjects').slick({
        infinite: true,
        //fade: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        prevArrow: '<button type="button" class="slick-prev"><i class="pgi-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="pgi-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                }
            }
        ]
    });

    //Top projects slider
    $('#topProjects').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        prevArrow: '<button type="button" class="slick-prev"><i class="pgi-angle-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="pgi-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 3
                }
              },
              {
                breakpoint: 766,
                settings: {
                  slidesToShow: 2,
                  arrows: false,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  arrows: false,
                }
              }
        ]
    });

    $('#newsUpdates').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: '<button type="button" class="slick-prev"><i class="pgi-angle-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="pgi-angle-right"></i></button>',
      responsive: [
        {
            breakpoint: 1450,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 749,
            settings: {
              slidesToShow: 1,
              arrows: false,
            }
          }
    ]
    });

    $('.js-sticky').stickit({
      top: 120,
      screenMinWidth: 1183
    });

    $("#priceRangeSlider").ionRangeSlider({
      type: "double",
      min: 1000,
      max: 100000,
      from: 20000,
      to: 60000,
      prefix: "₹",
      prettify_enabled: true,
      prettify_separator: ",",
    });

    $("#landAreaRangeSlider").ionRangeSlider({
      type: "double",
      min: 500,
      max: 20000,
      from: 3000,
      to: 5000,
      postfix: "sq.ft",
      prettify_enabled: true,
      prettify_separator: ",",
    });

    $("#buidupAreaRangeSlider").ionRangeSlider({
      type: "double",
      min: 500,
      max: 20000,
      from: 3000,
      to: 5000,
      postfix: "sq.ft",
      prettify_enabled: true,
      prettify_separator: ",",
    });

});