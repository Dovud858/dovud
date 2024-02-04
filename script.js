let links = document.querySelectorAll('.scroll');
let targetID;

links.forEach(function OnClickFunction(element) {
    element.addEventListener('click', function(event){
        event.preventDefault();
        targetID = element.getAttribute('href');
        document.querySelector(targetID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

$('.bio').on('mouseover', function() {
    $('.mee_img').css('filter', 'brightness(100%)')
});

$('.bio').on('mouseout', function() {
    $('.mee_img').css('filter', 'brightness(75%)')
});

$('.img_section').on('mouseover', function() {
    $('.mee_img').css('width', '105%')
});

$('.img_section').on('mouseout', function() {
    $('.mee_img').css('width', '100%')
});

$('.main_img1').on('mouseover', function() {
    $('.main_img1').css('filter', 'brightness(110%)')
});

$('.main_img1').on('mouseout', function() {
    $('.main_img1').css('filter', 'brightness(50%)')
});

$('.main_img2').on('mouseover', function() {
    $('.main_img2').css('filter', 'brightness(250%)')
});

$('.main_img2').on('mouseout', function() {
    $('.main_img2').css('filter', 'brightness(100%)')
})

$('.main_img3').on('mouseover', function() {
    $('.main_img3').css('filter', 'brightness(100%)')
});

$('.main_img3').on('mouseout', function() {
    $('.main_img3').css('filter', 'brightness(50%)')
});

$('.main_img4').on('mouseover', function() {
    $('.main_img4').css('filter', 'brightness(100%)')
});

$('.main_img4').on('mouseout', function() {
    $('.main_img4').css('filter', 'brightness(50%)')
});

$('.row_1').on('mouseover', function() {
    $('.row_1').css('filter', 'brightness(100%)')
});

$('.row_1').on('mouseout', function() {
    $('.row_1').css('filter', 'brightness(70%)')
});

$('.row_2').on('mouseover', function() {
    $('.row_2').css('filter', 'brightness(100%)')
});

$('.row_2').on('mouseout', function() {
    $('.row_2').css('filter', 'brightness(70%)')
});

$('.row_3').on('mouseover', function() {
    $('.row_3').css('filter', 'brightness(100%)')
});

$('.row_3').on('mouseout', function() {
    $('.row_3').css('filter', 'brightness(70%)')
});

$('.row_4').on('mouseover', function() {
    $('.row_4').css('filter', 'brightness(100%)')
});

$('.row_4').on('mouseout', function() {
    $('.row_4').css('filter', 'brightness(70%)')
});

$('.row_5').on('mouseover', function() {
    $('.row_5').css('filter', 'brightness(100%)')
});

$('.row_5').on('mouseout', function() {
    $('.row_5').css('filter', 'brightness(70%)')
});

$('.row_6').on('mouseover', function() {
    $('.row_6').css('filter', 'brightness(100%)')
});

$('.row_6').on('mouseout', function() {
    $('.row_6').css('filter', 'brightness(70%)')
});
