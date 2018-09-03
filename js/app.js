$( () => {

    let slideNumber = 1;
    let timer1;
    let timer2;

    let mobileMenu = () => {
        $('nav').find('ol').toggleClass('viewMenu');
    }

    let changeHOne = (i) => {
        const hOne = ['sit <span class="greenText">on</span> our <span class="greenText">chair</span> ',
            'new in sit <span class="greenText"> on </span> chair',
            'mid season sale'];
        return hOne[i-1];
    }
    let changeSlideText = (i) => {
        const slideText = [' Ego memini me tum specimen.Somniabunt sederem quasi rex. Septem mane ad me nocte. Non vis ad operari, ego diffusis erravi. Sed arca clausum est. Nam plerumque clausus ad me dictum est. Et postquam fornicata es in pubs panis et cervisie',
            'Dico parvulum orationibus Ne obliviscaris, fili mi Ad includit omnes Accinge te et plumis in Liberati autem a peccato custodiat te Donec venit ad sandman Qui somno oculi aperti sunt Stricta tenaci supposuerat capiti tuo',
            'longe Auferat a me longe est Navis taking Absit a memorias De pertinet, qui, si vitam sive per mortem in luce stellarum Ego autem in luce stellarum persequimur Usque ad finem vitae meae Et nescio si suus valet ultra ad eum longe est Navis' ];
        return slideText[i-1];
    }


    let hideSlide = () => {
        $('.sliderPics').fadeOut(500);
        $('.sliderArticle').find('h2').fadeOut(500);
        $('.sliderText').fadeOut(500);
        $('.sliderButton').fadeOut(500);
    }

    let changeSlide = (slideNumer) => {
        if (slideNumber>3) slideNumber=1;
        let slideName = "url(\"images/chair" + slideNumber + ".png\"";
        $('.sliderPics').css('background-image', slideName);
        $('.sliderPics').fadeIn(500);
        $('.sliderArticle').find('h2').html( changeHOne(slideNumber) );
        $('.sliderArticle').find('h2').fadeIn(500);
        $('.sliderText').html( changeSlideText(slideNumber) );
        $('.sliderText').fadeIn(500);
        $('.sliderButton').fadeIn(500);

        timer1 = setTimeout(nextSlide, 5000);
        timer2 = setTimeout(hideSlide, 4500);
    }

    let nextSlide = () => {
        slideNumber++;
        if (slideNumber>3) slideNumber=1;
        let slideName = "url(\"images/chair" + slideNumber + ".png\"";
        $('.sliderPics').css('background-image', slideName);
        $('.sliderPics').fadeIn(500);
        $('.sliderArticle').find('h2').html( changeHOne(slideNumber) );
        $('.sliderArticle').find('h2').fadeIn(500);
        $('.sliderText').html( changeSlideText(slideNumber) );
        $('.sliderText').fadeIn(500);
        $('.sliderButton').fadeIn(500);


        timer1 = setTimeout(nextSlide, 5000);
        timer2 = setTimeout(hideSlide, 4500);
    }


        $('body').on('load', nextSlide() );

        $('.mobileMenu').on( 'click', mobileMenu );

        $('aside').on('click', function() {

        })

});
