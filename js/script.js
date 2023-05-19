
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    animateOut:'fadeOut',
    autoplayTimeout:4444,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


    $('.reserve-items').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery:{enabled:true},
    zoom: {
        enabled: true, 
        duration: 400, 
        easing: 'ease-in-out',
    },
   
});
    $('.gellary').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery:{enabled:true},
    zoom: {
        enabled: true, 
        duration: 400, 
        easing: 'ease-in-out',
    },
})

$('.blog-item').magnificPopup({
    delegate: 'a',
    type:'image',
    gallery:{enabled:true},
    zoom: {
        enabled: true, 
        duration: 400, 
        easing: 'ease-in-out',
    },
})


$(function(){
      $('.circlechart').circlechart();
});
    
$('.btn-search').click(function(){
    $('.search-feild').slideToggle(300);
})
$('.banner').click(function(){
    $('.search-feild').slideUp(300);
})
$('#btn-close').click(function(){
    $('.search-feild').slideUp(300);
})


$('.top').hide();
$(window).scroll(function(){
    var topbar = $(document).scrollTop();
    if(topbar>150){
        $('.top').show();
    }else {
        $('.top').hide();
    }
})


let popup = document.getElementById('popup');

function opnepopup(){
	popup.classList.add('showpopup');
}

let showmodal = document.getElementById('mdoalcontent');


function openmodal(){
	mdoalcontent.classList.add('showmodal');
}


function closepopup() {
	popup.classList.remove('showpopup');
}

function closemodal() {
	mdoalcontent.classList.remove('showmodal');
}


$('.time-datepicker').datetimepicker();
