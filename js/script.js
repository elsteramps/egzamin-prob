//---------dodawanie klasy "active" do istniejących klas "header__burger" i "menu" dla prawidlowego ich wyświetlania po kliknięciu w burger---------------// 
$(document).ready(function() {
    $('.header__burger').click(function(e) {
        $('.header__burger, .menu').toggleClass('active');
    });
})