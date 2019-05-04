$(document).ready(function() {

    $("#openNav").show();

    document.getElementById("progress-container").style.visibility = "visible";
    document.getElementById("workShopID").style.visibility = "visible";
    $('#titleWorkShop').show();
    $('#map').show();
    $('#whyChooseUsID').show();
    $('.containerChild').show();


    document.getElementById("openNav").addEventListener("click", function() {
        document.getElementById("mySidenav").style.width = "250px";


    });

    document.getElementById("closeNav").addEventListener("click", function() {
        document.getElementById("mySidenav").style.width = "0px";

    });


    function myFunction() {
        if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
            document.getElementById("openNav").style.lineHeight = "50px";

        }

    }

w
    function scrollBar() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    window.onscroll = function() {
        myFunction();
        scrollBar();
    };


});

let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.defaultFontSize = 16;
Chart.defaults.global.defaultFontColor = '#777';

let massPopChart = new Chart(myChart, {
    type: 'bar', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['Hunter', 'Codepen', 'Wix', 'GreenWorld', 'BreakIt', 'Wordpress'],
        datasets: [{
            label: 'HUNTER',
            data: [
                1017594,
                181045,
                453060,
                506519,
                805162,
                605072
            ],
            //backgroundColor:'green',
            backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)'
            ],
            borderWidth: 1,
            borderColor: '#777',
            hoverBorderWidth: 3,
            hoverBorderColor: '#000'
        }]
    },
    options: {
        title: {
            display: true,
            text: 'Number of active users around the world',
            fontSize: 25
        },
        legend: {
            display: true,
            position: 'right',
            labels: {
                fontColor: '#000'
            }
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }
        },
        tooltips: {
            enabled: true
        }
    }
});


$(".intro").click(function() {
    $('html,body').animate({
        scrollTop: $("main").offset().top
    }, 2000);
});


$(".trust").click(function() {
    $('html,body').animate({
        scrollTop: $(".workWIth").offset().top
    }, 2000);
});

$(".choose").click(function() {
    $('html,body').animate({
        scrollTop: $("#myChart").offset().top
    }, 2000);
});

$(".create").click(function() {
    $('html,body').animate({
        scrollTop: $("#titleWorkShop").offset().top
    }, 2000);
});

$(".contacts").click(function() {
    $('html,body').animate({
        scrollTop: $("#titleContacts").offset().top
    }, 2000);
});

$(".creator").click(function() {
    $('html,body').animate({
        scrollTop: $("#theBoss").offset().top
    }, 2000);
});


$(".home").click(function() {
    $('html,body').animate({
        scrollTop: $(".parallax").offset().top
    }, 2000);
});


//This function is used to check if the input is allowed
function testInfo(input, re, textsvar) {
    var OK = re.exec(input);
    if (!OK) $(textsvar).text("Wrong");
    else $(textsvar).text("Right");
}
//check if the input is numbers
$("#fname").keyup(function() {
    var re = /^[A-Za-z]+$/;
    testInfo($('#fname').val(), re, "#checkFirstNmae");
});


$("#lname").keyup(function() {
    var re = /^[A-Za-z]+$/;
    testInfo($('#lname').val(), re, "#checkLastName");
});


$("#number").keyup(function() {
    var re = /^[0]{1}[0-9]{6,15}$/;
    testInfo($('#number').val(), re, "#checkNumber");
});



$("#gmail").keyup(function() {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    testInfo($('#gmail').val(), re, "#checkGmail");
});