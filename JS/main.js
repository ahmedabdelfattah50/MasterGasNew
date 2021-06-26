$(document).ready(function(){
  // ##################### Start Global #####################
  // direction of the body (rtl) or (ltr)
  var bodyDirection = $('body').css('direction');

  // this for insilize the init of wow.js plugn
  new WOW().init();  

  // --------- scripts for list of maps items --------- 
  // $$$$$$$$$$$ index Maps Control $$$$$$$$$$$
  // this is the section 1 of ourMaps_Section
  var ourMaps_Section_1 = document.querySelector('#ourMaps_Section_1'), 
  // this is the section 2 of ourMaps_Section
  ourMaps_Section_2 = document.querySelector('#ourMaps_Section_2'),
  // this is the OurMaps_1_tab_btn
  OurMaps_1_tab_btn = document.querySelector('#OurMaps_1_tab_btn'),  
  // this is the OurMaps_2_tab_btn
  OurMaps_2_tab_btn = document.querySelector('#OurMaps_2_tab_btn');

  // this when we click on the OurMaps_1_tab_btn
  $(OurMaps_1_tab_btn).on('click' , function() {    
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(ourMaps_Section_1).css('display' , 'flex');
    $(ourMaps_Section_2).css('display' , 'none');
  });

  // this when we click on the OurMaps_2_tab_btn
  $(OurMaps_2_tab_btn).on('click' , function() {    
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(ourMaps_Section_1).css('display' , 'none');
    $(ourMaps_Section_2).css('display' , 'flex');
  });

  // Change by click on next button
  $('#change_sections_next').on('click',function ($e) {
    $e.preventDefault(); 
    $('#change_sections').find('.change_tab_item.active').prev().addClass('active');
    $('#change_sections').find('.change_tab_item.active').next().removeClass('active'); 
    mapsDataTarget = $('#change_sections').find('.change_tab_item.active').data('target');
    
    // this will be changed manually when adding new items
    if(mapsDataTarget == "ourMaps_Section_1"){
      $(ourMaps_Section_1).css('display' , 'flex');
      $(ourMaps_Section_2).css('display' , 'none');
    } else {
      $(ourMaps_Section_2).css('display' , 'flex');
      $(ourMaps_Section_1).css('display' , 'none');
    }
  });

  // Change by click on prev button
  $('#change_sections_prev').on('click',function ($e) {
    $e.preventDefault();  
    $('#change_sections').find('.change_tab_item.active').next().addClass('active');
    $('#change_sections').find('.change_tab_item.active').prev().removeClass('active');
    mapsDataTarget = $('#change_sections').find('.change_tab_item.active').data('target');
    
    if(mapsDataTarget == "ourMaps_Section_2"){
      $(ourMaps_Section_2).css('display' , 'flex');
      $(ourMaps_Section_1).css('display' , 'none');
    } else {
      $(ourMaps_Section_1).css('display' , 'flex');
      $(ourMaps_Section_2).css('display' , 'none');
    }
  });



  // $$$$$$$$$$$ vehicles_converting Maps Control $$$$$$$$$$$
  // this is the section 1 of ourMaps_Section
  var convertingMaps_Section_1 = document.querySelector('#convertingMaps_Section_1'), 
  // this is the section 2 of ourMaps_Section
  convertingMaps_Section_2 = document.querySelector('#convertingMaps_Section_2'),
  // this is the OurMaps_1_tab_btn
  OurMaps_1_tab_btnConvert = document.querySelector('#OurMaps_1_tab_btn'),  
  // this is the OurMaps_2_tab_btn
  OurMaps_2_tab_btnConvert = document.querySelector('#OurMaps_2_tab_btn');

  // this when we click on the OurMaps_1_tab_btn
  $(OurMaps_1_tab_btnConvert).on('click' , function() {    
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(convertingMaps_Section_1).css('display' , 'flex');
    $(convertingMaps_Section_2).css('display' , 'none');
  });

  // this when we click on the OurMaps_2_tab_btn
  $(OurMaps_2_tab_btnConvert).on('click' , function() {    
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(convertingMaps_Section_1).css('display' , 'none');
    $(convertingMaps_Section_2).css('display' , 'flex');
  });

  // Change by click on next button
  $('#change_sections_nextConvert').on('click',function ($e) {
    $e.preventDefault(); 
    $('#change_sectionsConvert').find('.change_tab_item.active').prev().addClass('active');
    $('#change_sectionsConvert').find('.change_tab_item.active').next().removeClass('active'); 
    mapsDataTarget = $('#change_sectionsConvert').find('.change_tab_item.active').data('target');
    
    // this will be changed manually when adding new items
    if(mapsDataTarget == "convertingMaps_Section_1"){
      $(convertingMaps_Section_1).css('display' , 'flex');
      $(convertingMaps_Section_2).css('display' , 'none');
    } else {
      $(convertingMaps_Section_2).css('display' , 'flex');
      $(convertingMaps_Section_1).css('display' , 'none');
    }
  });

  // Change by click on prev button
  $('#change_sections_prevConvert').on('click',function ($e) {
    $e.preventDefault();  
    $('#change_sectionsConvert').find('.change_tab_item.active').next().addClass('active');
    $('#change_sectionsConvert').find('.change_tab_item.active').prev().removeClass('active');
    mapsDataTarget = $('#change_sectionsConvert').find('.change_tab_item.active').data('target');
    
    if(mapsDataTarget == "convertingMaps_Section_2"){
      $(convertingMaps_Section_2).css('display' , 'flex');
      $(convertingMaps_Section_1).css('display' , 'none');
    } else {
      $(convertingMaps_Section_1).css('display' , 'flex');
      $(convertingMaps_Section_2).css('display' , 'none');
    }
  });



  // $$$$$$$$$$$ Cng Stations Maps Control $$$$$$$$$$$
  // this is the section 1 of ourMaps_Section
  var cngStationsMaps_Section_1 = document.querySelector('#cngStationsMaps_Section_1'), 
  // this is the section 2 of ourMaps_Section
  cngStationsMaps_Section_2 = document.querySelector('#cngStationsMaps_Section_2'),
  // this is the OurMaps_1_tab_btn
  OurMaps_1_tab_btnCngStations = document.querySelector('#OurMaps_1_tab_btnCngStations'),  
  // this is the OurMaps_2_tab_btn
  OurMaps_2_tab_btnCngStations = document.querySelector('#OurMaps_2_tab_btnCngStations');

  // this when we click on the OurMaps_1_tab_btn
  $(OurMaps_1_tab_btnCngStations).on('click' , function() {    
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(cngStationsMaps_Section_1).css('display' , 'flex');
    $(cngStationsMaps_Section_2).css('display' , 'none');
  });

  // this when we click on the OurMaps_2_tab_btn
  $(OurMaps_2_tab_btnCngStations).on('click' , function() {    
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(cngStationsMaps_Section_1).css('display' , 'none');
    $(cngStationsMaps_Section_2).css('display' , 'flex');
  });

  // Change by click on next button
  $('#change_sections_nextCngStations').on('click',function ($e) {
    $e.preventDefault(); 
    $('#change_sectionsCngStations').find('.change_tab_item.active').prev().addClass('active');
    $('#change_sectionsCngStations').find('.change_tab_item.active').next().removeClass('active'); 
    mapsDataTarget = $('#change_sectionsCngStations').find('.change_tab_item.active').data('target');
    
    // this will be changed manually when adding new items
    if(mapsDataTarget == "convertingMaps_Section_1"){
      $(cngStationsMaps_Section_1).css('display' , 'flex');
      $(cngStationsMaps_Section_2).css('display' , 'none');
    } else {
      $(cngStationsMaps_Section_2).css('display' , 'flex');
      $(cngStationsMaps_Section_1).css('display' , 'none');
    }
  });

  // Change by click on prev button
  $('#change_sections_prevCngStations').on('click',function ($e) {
    $e.preventDefault();  
    $('#change_sectionsCngStations').find('.change_tab_item.active').next().addClass('active');
    $('#change_sectionsCngStations').find('.change_tab_item.active').prev().removeClass('active');
    mapsDataTarget = $('#change_sectionsCngStations').find('.change_tab_item.active').data('target');
    
    if(mapsDataTarget == "convertingMaps_Section_2"){
      $(cngStationsMaps_Section_2).css('display' , 'flex');
      $(cngStationsMaps_Section_1).css('display' , 'none');
    } else {
      $(cngStationsMaps_Section_1).css('display' , 'flex');
      $(cngStationsMaps_Section_2).css('display' , 'none');
    }
  });


  // ########### navbar ###########

  // $$$$$$ navbar $$$$$$
  var navBar = $('.navbar'),
  goUp = $('.go_up');

  $(window).scroll(function(){
  // navbar change
  if($(this).scrollTop() > 80){
    navBar.css('padding','0px 15px');
    $('.navbar .navbar-brand img').css({
      "width": "125px",
      "height": "45px"
    });
  } else {

    if( bodyWidth < 992 ){
      navBar.css('padding','10px 10px');

      $('.navbar .navbar-brand img').css({
        "width": "135px",
        "height": "55px"
      });
    } else {
      navBar.css('padding','15px 15px');

      $('.navbar .navbar-brand img').css({
        "width": "135px",
        "height": "55px"
      });
    }
  }

  // $$$$$$ this for icon to go up when scroll $$$$$$
  if($(this).scrollTop() > 100){
    if(goUp.is(":hidden")){
      goUp.fadeIn();
    }} else {
      goUp.fadeOut();
    }
  });

  // $$$$$$ this for the animation of the icon go up $$$$$$
  goUp.click(function(event){
    event.preventDefault();
    $('html , body').animate({
        scrollTop: 0
    },100);
  });

  // ---------- menu in navbar ----------
  var bodyWidth = $('body').innerWidth();

    if(bodyWidth <= 751){
      $('#searchField').attr('data-toggle', "modal");
      $('#telephoneField').attr('data-toggle', "modal");
      $('#addressField').attr('data-toggle', "modal");
      $('#calcuField').attr('data-toggle', "modal");
    } else {
      $('#searchField').removeAttr('data-toggle');
      $('#telephoneField').removeAttr('data-toggle');
      $('#addressField').removeAttr('data-toggle');
      $('#calcuField').removeAttr('data-toggle');
    }

    $('.navbar .langLink .navbar-toggler').click(function(){
      $('.navbar .collapse').hide();
      if( $('.NavbarMobile .navMenuMobile').width() > 0 ){
        $(".NavbarMobile .navMenuMobile").css('width','0');
        $('.NavbarMobile .navMenuMobile a').hide();
      } else {
        if( bodyWidth >= 768 && bodyWidth <= 992 ){
          $(".NavbarMobile .navMenuMobile").css('width','40%');
          $('.NavbarMobile .navMenuMobile .menuAllSections .nav-item').css('padding','20px');
        } else if(bodyWidth >= 558 && bodyWidth <= 767){
          $(".NavbarMobile .navMenuMobile").css('width','38%');
          $('.NavbarMobile .navMenuMobile .menuAllSections .nav-item').css('padding','20px');
        } else if(bodyWidth >= 270 && bodyWidth <= 557){
          $(".NavbarMobile .navMenuMobile").css('width','60%');
          $('.NavbarMobile .navMenuMobile .menuAllSections .nav-item').css('padding','20px');
        }
        $('.NavbarMobile .navMenuMobile a').css('display','flex');
        $('.NavbarMobile .navMenuMobile .menuAllSections .nav-item').css('padding','20px');
      }
    });

    $('.NavbarMobile .navMenuMobile .closebtn').click(function () {  
      $(".NavbarMobile .navMenuMobile").css('width','0');
      $('.NavbarMobile .navMenuMobile a').hide();
    });
  // ##################### End Global #####################

  
  // ##################### Start Animation classes #####################
  if(bodyDirection == 'rtl'){
    // ############## Start Global ##############
    $('.pageHeader h2').addClass('fadeInUp');
    $('.pageHeader p').addClass('fadeInUp');
    $('.InquiriesComplaints .InquiriesComplaintsContent').addClass('fadeInUp');
    $('.InquiriesComplaints .InquiriesComplaintsBtns').addClass('fadeInDown');
    // ############## End Global ##############
    // ############## Start index page Animations ##############
    $('main .mainTools li').addClass('fadeInUp');
    $('.mainBranches .totalMainBranches .branchSection').addClass('fadeInUp');
    $('.gasOffers .gasOffersArticle').addClass('fadeInUp');
    $('.gasOffers .totalGasOffers .gasOffersImg').addClass('fadeInDown');
    $('.ourMaps .ourMaps_Section .ourMaps_Section_Tabs .nav-pills .nav-link').addClass('fadeInRight');
    $('.ourPartners .ourPartnersLinks a').addClass('fadeInUp');
    // ############## End index page Animations ##############
    // ############## Start hsse page Animations ##############
    $('.aboutHsse .aboutHsseHeader').addClass('fadeInUp');
    $('.aboutHsse .aboutHsseContent').addClass('fadeInUp');
    $('.aboutHsse .aboutHsseImg').addClass('fadeInLeft');
    $('.safetyConditions .safetyConditionsImg').addClass('fadeInLeft');
    $('.safetyConditions .safetyConditionsContent .safetyConditionsHeader').addClass('fadeInUp');
    $('.safetyConditions .safetyConditionsContent .conditionSections').addClass('fadeInUp');
    // ############## End hsse page Animations ##############
    // ############## Start cng_mobile page Animations ##############
    $('.aboutCngMobile .aboutCngMobileHeader').addClass('fadeInUp');
    $('.aboutCngMobile p').addClass('fadeInUp');
    $('.aboutCngMobile .imgVideoContainer').addClass('fadeInUp');
    $('.transmissionMechanism .transmissionMechanismHeader').addClass('fadeInUp');
    $('.transmissionMechanism p').addClass('fadeInUp');
    $('.GallaryWithVideo .imgVideoContainer').addClass('fadeInUp');
    // ############## End cng_mobile page Animations ##############
    // ############## Start cng_stations page Animations ##############
    $('.aboutCngStations .aboutCngStationsHeader').addClass('fadeInUp');
    $('.aboutCngStations p').addClass('fadeInUp');
    $('.cngStationsMaps .cngStationsMapsHeader').addClass('fadeInUp');
    $('.cngStationsMaps .cngStationsMaps_Section .cngStationsMaps_Section_Tabs .nav-pills .nav-link').addClass('fadeInRight');
    $('.ourAdvantages .ourAdvantagesContent h2').addClass('fadeInUp');
    $('.whyOurClientsChooseUs .whyOurClientsChooseUsHeader').addClass('fadeInUp');
    $('.whyOurClientsChooseUs .whyOurClientsChooseUsImg').addClass('fadeInRight');
    $('.whyOurClientsChooseUs .whyOurClientsChooseUsContent .chooseSections').addClass('fadeInUp');
    // ############## End cng_stations page Animations ##############
    // ############## Start our_Partners page Animations ##############
    $('.ourPartnersLogos .logoSec').addClass('fadeInUp');
    // ############## End our_Partners page Animations ##############
    // ############## Start our_Clients page Animations ##############
    $('.ourClientsInfo .clientSection').addClass('fadeInUp');
    // ############## End our_Clients page Animations ##############
    // ############## Start vehicles_converting page Animations ##############
    $('.aboutVehiclesConverting .aboutVehiclesConvertingHeader').addClass('fadeInUp');
    $('.aboutVehiclesConverting p').addClass('fadeInUp');
    $('.aboutVehiclesConverting .aboutVehiclesConvertingImgVideo').addClass('fadeInRight');
    $('.BenefitsConvertingVehicles .BenefitsConvertingVehiclesHeader').addClass('fadeInUp');
    $('.BenefitsConvertingVehicles .BenefitsConvertingVehiclesImg').addClass('fadeInLeft');
    $('.BenefitsConvertingVehicles .BenefitsConvertingVehiclesContent .benefitSections').addClass('fadeInUp');
    $('.convertingMaps .convertingMapsHeader').addClass('fadeInUp');
    $('.convertingMaps .convertingMaps_Section .convertingMaps_Section_Tabs .nav-pills .nav-link').addClass('fadeInRight');
    // ############## End vehicles_converting page Animations ##############
    // ############## Start cylindersTestDetails page Animations ##############
    $('.cylindersTestDetails .cylindersTestDetailsHeader').addClass('fadeInUp');
    $('.cylindersTestDetails p').addClass('fadeInUp');
    $('.cylindersTestDetails .cylindersTestImg').addClass('fadeInRight');
    // ############## End cylindersTestDetails page Animations ##############
    // ############## Start jobsDetails page Animations ##############
    $('.jobsDetails .jobsDetailsHeader').addClass('fadeInUp');
    $('.jobsDetails p').addClass('fadeInUp');
    $('.jobsDetails .form-group').addClass('fadeInUp');
    // ############## End jobsDetails page Animations ##############    
    // ############## Start briefAboutCompany page Animations ##############
    $('.aboutOurCompany .aboutOurCompanyHeader').addClass('fadeInUp');
    $('.aboutOurCompany .aboutOurCompanyContent p').addClass('fadeInUp');
    $('.ourVision .ourVisionHeader').addClass('fadeInUp');
    $('.ourVision .ourVisionContent p').addClass('fadeInUp');
    $('.ourGoal .ourGoalHeader').addClass('fadeInUp');
    $('.ourGoal .ourGoalContent p').addClass('fadeInUp');
    $('.ourValues .ourValuesHeader h2').addClass('fadeInUp');
    $('.aboutOurCompany .aboutOurCompanyImg').addClass('fadeInRight');
    // ############## End briefAboutCompany page Animations ##############   
  } else {  
    // ############## Start Global ##############
    $('.pageHeader h2').addClass('fadeInUp');
    $('.pageHeader p').addClass('fadeInUp');
    $('.InquiriesComplaints .InquiriesComplaintsContent').addClass('fadeInUp');
    $('.InquiriesComplaints .InquiriesComplaintsBtns').addClass('fadeInDown');
    // ############## End Global ##############
    // ############## Start index page Animations ##############
    $('main .mainTools li').addClass('fadeInUp');
    $('.mainBranches .totalMainBranches .branchSection').addClass('fadeInUp');
    $('.gasOffers .gasOffersArticle').addClass('fadeInDown');
    $('.gasOffers .totalGasOffers .gasOffersImg').addClass('fadeInUp');
    $('.ourMaps .ourMaps_Section .ourMaps_Section_Tabs .nav-pills .nav-link').addClass('fadeInLeft');
    $('.ourPartners .ourPartnersLinks a').addClass('fadeInUp');
    // ############## End index page Animations ##############
    // ############## Start hsse page Animations ##############
    $('.aboutHsse .aboutHsseHeader').addClass('fadeInUp');
    $('.aboutHsse .aboutHsseContent').addClass('fadeInUp'); 
    $('.aboutHsse .aboutHsseImg').addClass('fadeInRight');
    $('.safetyConditions .safetyConditionsImg').addClass('fadeInRight');   
    $('.safetyConditions .safetyConditionsContent .safetyConditionsHeader').addClass('fadeInUp');
    $('.safetyConditions .safetyConditionsContent .conditionSections').addClass('fadeInUp');
    // ############## End hsse page Animations ##############
    // ############## Start cng_mobile page Animations ##############
    $('.aboutCngMobile .aboutCngMobileHeader').addClass('fadeInUp');
    $('.aboutCngMobile p').addClass('fadeInUp');
    $('.aboutCngMobile .imgVideoContainer').addClass('fadeInUp');
    $('.transmissionMechanism .transmissionMechanismHeader').addClass('fadeInUp');
    $('.transmissionMechanism p').addClass('fadeInUp');
    $('.GallaryWithVideo .imgVideoContainer').addClass('fadeInUp');
    // ############## End cng_mobile page Animations ##############
    // ############## Start cng_station page Animations ##############
    $('.aboutCngStations .aboutCngStationsHeader').addClass('fadeInUp');
    $('.aboutCngStations p').addClass('fadeInUp');
    $('.cngStationsMaps .cngStationsMapsHeader').addClass('fadeInUp');
    $('.cngStationsMaps .cngStationsMaps_Section .cngStationsMaps_Section_Tabs .nav-pills .nav-link').addClass('fadeInLeft');
    $('.ourAdvantages .ourAdvantagesContent h2').addClass('fadeInUp');
    $('.whyOurClientsChooseUs .whyOurClientsChooseUsHeader').addClass('fadeInUp');
    $('.whyOurClientsChooseUs .whyOurClientsChooseUsImg').addClass('fadeInLeft');
    $('.whyOurClientsChooseUs .whyOurClientsChooseUsContent .chooseSections').addClass('fadeInUp');
    // ############## End cng_station page Animations ##############
    // ############## Start our_Partners page Animations ##############
    $('.ourPartnersLogos .logoSec').addClass('fadeInUp');
    // ############## End our_Partners page Animations ##############
    // ############## Start our_Clients page Animations ##############
    $('.ourClientsInfo .clientSection').addClass('fadeInUp');
    // ############## End our_Clients page Animations ##############
    // ############## Start vehicles_converting page Animations ##############
    $('.aboutVehiclesConverting .aboutVehiclesConvertingHeader').addClass('fadeInUp');
    $('.aboutVehiclesConverting p').addClass('fadeInUp');
    $('.aboutVehiclesConverting .aboutVehiclesConvertingImgVideo').addClass('fadeInLeft');
    $('.BenefitsConvertingVehicles .BenefitsConvertingVehiclesHeader').addClass('fadeInUp');
    $('.BenefitsConvertingVehicles .BenefitsConvertingVehiclesImg').addClass('fadeInRight');
    $('.BenefitsConvertingVehicles .BenefitsConvertingVehiclesContent .benefitSections').addClass('fadeInUp');
    $('.convertingMaps .convertingMapsHeader').addClass('fadeInUp');
    $('.convertingMaps .convertingMaps_Section .convertingMaps_Section_Tabs .nav-pills .nav-link').addClass('fadeInLeft');
    // ############## End vehicles_converting page Animations ##############
    // ############## Start cylindersTestDetails page Animations ##############
    $('.cylindersTestDetails .cylindersTestDetailsHeader').addClass('fadeInUp');
    $('.cylindersTestDetails p').addClass('fadeInUp');
    $('.cylindersTestDetails .cylindersTestImg').addClass('fadeInLeft');
    // ############## End cylindersTestDetails page Animations ##############
    // ############## Start jobsDetails page Animations ##############
    $('.jobsDetails .jobsDetailsHeader').addClass('fadeInUp');
    $('.jobsDetails p').addClass('fadeInUp');
    $('.jobsDetails .form-group').addClass('fadeInUp');
    // ############## End jobsDetails page Animations ##############
    // ############## Start briefAboutCompany page Animations ##############
    $('.aboutOurCompany .aboutOurCompanyHeader').addClass('fadeInUp');
    $('.aboutOurCompany .aboutOurCompanyContent p').addClass('fadeInUp');
    $('.ourVision .ourVisionHeader').addClass('fadeInUp');
    $('.ourVision .ourVisionContent p').addClass('fadeInUp');
    $('.ourGoal .ourGoalHeader').addClass('fadeInUp');
    $('.ourGoal .ourGoalContent p').addClass('fadeInUp');
    $('.ourValues .ourValuesHeader h2').addClass('fadeInUp');
    $('.aboutOurCompany .aboutOurCompanyImg').addClass('fadeInLeft');
    // ############## End briefAboutCompany page Animations ##############   
  }

  
    // ##################### Start aboutCompanySlider #####################
    if( bodyDirection == 'rtl'){
      // main slider properites Arabic
      $('.aboutCompanySlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        rtl: true,
        prevArrow: $('.aboutCompanySliderPrevSlider'),
        nextArrow: $('.aboutCompanySliderNextSlider'),
      });
    } else {
      // main slider properites English
      $('.aboutCompanySlider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        rtl: false,
        prevArrow: $('.aboutCompanySliderPrevSlider'),
        nextArrow: $('.aboutCompanySliderNextSlider')
      });
    }
    // ##################### End aboutCompanySlider #####################
    
    // ##################### Start ourServicesSlider #####################
    if( bodyDirection == 'rtl'){
    $('.ourServices .ourServicesSlider').slick({
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      autoplaySpeed: 2000,
      rtl: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
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
    } else {
      $('.ourServices .ourServicesSlider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: false,
        arrows: true,
        responsive: [
          {
            breakpoint: 1190,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
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
    }
    // ##################### End ourServicesSlider #####################

    // ##################### Start transferOffers #####################
    if( bodyDirection == 'rtl'){
      $('.transferOffers .transferOffersSlider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: true,
        responsive: [
          {
            breakpoint: 1190,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 2,
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
      } else {
        $('.transferOffers .transferOffersSlider').slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          autoplaySpeed: 2000,
          rtl: false,
          arrows: true,
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
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
      }
    // ##################### End transferOffers #####################

    // ##################### Start latestNews #####################
    if( bodyDirection == 'rtl'){
      $('.latestNews .latestNewsSlider').slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: true,
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
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
      } else {
        $('.latestNews .latestNewsSlider').slick({
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          autoplaySpeed: 2000,
          rtl: false,
          arrows: true,
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
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
      }
      // ##################### End latestNews #####################


    // ##################### Start ourServicesSlider #####################
    // ourServicesSlider slider
    if( bodyDirection == 'rtl'){
      $('.GallaryWithVideo .GallarySlider').slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: true,
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
        });
      } else {
        $('.GallaryWithVideo .GallarySlider').slick({
          dots: false,
          infinite: true,
          centerMode:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: false,
          arrows: true,
            responsive: [
              {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false
                }
              }
            ]
        });
      }
    // ##################### End ourServicesSlider #####################


    // ##################### Start certificateSlider #####################
    if( bodyDirection == 'rtl'){
      $('.certificateSection .certificateSlider').slick({
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        rtl: false,
        arrows: true,
        swipe: true,
      swipeToSlide: true, 
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
        });
      } else {
        $('.certificateSection .certificateSlider').slick({
          dots: false,
          infinite: true,
          centerMode:true,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: false,
          autoplaySpeed: 2000,
          rtl: false,
          arrows: true,
            responsive: [
              {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 577,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false
                }
              }
            ]
        });
      }
    // ##################### End certificateSlider #####################

    // ##################### Start newestNewsSlider #####################
    if( bodyDirection == 'rtl'){
      $('.newestNews .newestNewsSlider').slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: true,
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
        });
      } else {
        $('.newestNews .newestNewsSlider').slick({
          dots: false,
          infinite: true,
          centerMode:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: false,
          arrows: true,
            responsive: [
              {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false
                }
              }
            ]
        });
      }
    // ##################### End newestNewsSlider #####################

    // ##################### Start oldNewsSlider #####################
    if( bodyDirection == 'rtl'){
      $('.oldNews .oldNewsSlider').slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: true,
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
        });
      } else {
        $('.oldNews .oldNewsSlider').slick({
          dots: false,
          infinite: true,
          centerMode:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: false,
          arrows: true,
            responsive: [
              {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false
                }
              }
            ]
        });
    }
    // ##################### End oldNewsSlider #####################

    // ##################### Start oldestNewsSlider #####################
    if( bodyDirection == 'rtl'){
      $('.oldestNews .oldestNewsSlider').slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: true,
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
        });
      } else {
        $('.oldestNews .oldestNewsSlider').slick({
          dots: false,
          infinite: true,
          centerMode:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: false,
          arrows: true,
            responsive: [
              {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false
                }
              }
            ]
        });
      }
    // ##################### End oldestNewsSlider #####################

    // ##################### Start ourAdvantagesSlider #####################
    if( bodyDirection == 'rtl'){
      $('.ourAdvantages .ourAdvantagesSlider').slick({
        dots: false,
        infinite: true,
        centerMode: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true,
        arrows: true,
          responsive: [
            {
              breakpoint: 1190,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
              }
            }
          ]
        });
      } else {
        $('.ourAdvantages .ourAdvantagesSlider').slick({
          dots: false,
          infinite: true,
          centerMode:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: false,
          arrows: true,
            responsive: [
              {
                breakpoint: 1190,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: false
                }
              },
              {
                breakpoint: 992,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false
                }
              }
            ]
        });
      }
      // ##################### End ourAdvantagesSlider #####################
});