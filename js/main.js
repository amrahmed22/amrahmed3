let about= $('#About').offset().top;
let blog= $('#Blog').offset().top;




$(window).scroll(function () { 
    let scroll =$(window).scrollTop();

    if (scroll>=about) {
        $('nav').css('backgroundColor', 'black');
        $('#btn').fadeIn(500);
    }
    else
    {
        $('nav').css('backgroundColor', 'transparent');
        $('#btn').fadeOut(500);


    }
});


$('#btn').click(function () { 

    $('html , body').animate({scrollTop:'0px'})
});


$('a').click(function(e)
{
    let link = $(e.target).attr('href')
    let off= $(link).offset().top;
    $('html , body').animate({scrollTop:off+'px'})

    
})







$(window).scroll(function()
{
    let wscroll = $(window).scrollTop();

    if(wscroll<=blog-500)
    {
        let counter1 = 0;
let x = setInterval(() => {
    if (counter1==168) {
        clearInterval(x)
    }
    document.getElementById('c1').innerHTML=counter1;
    counter1++;
}, 10);
let counter2 = 0;
let y = setInterval(() => {
    if (counter2==115) {
        clearInterval(y)
    }
    document.getElementById('c2').innerHTML=counter2;
    counter2++;
}, 10);
let counter3 = 0;
let z = setInterval(() => {
    if (counter3==96) {
        clearInterval(z)
    }
    document.getElementById('c3').innerHTML=counter3;
    counter3++;
}, 10);
let counter4 = 0;
let a = setInterval(() => {
    if (counter4==73) {
        clearInterval(a)
    }
    document.getElementById('c4').innerHTML=counter4;
    counter4++;
}, 10);
    }
})

$(document).ready(function () {
    $('#loading .spinner').fadeOut(1000,()=>{
        $('#loading').fadeOut(1000,()=>{
            $('body').css('overflow-y','auto')
        })
    })
});