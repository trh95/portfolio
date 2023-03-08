        //---NAVBAR HAMBURGER---

        const menuBtn =document.querySelector('.menu-btn');
        const mobileMenu = document.querySelector('.mobile-nav');

        menuBtn.addEventListener('click', () => {
		    menuBtn.classList.toggle('open');
            mobileMenu.classList.toggle('is-active');
	    });
        // --- SHOW ANIMATION ---

            ScrollReveal({
                reset: false,
                distance: '60px',
                duration: 2500,
                delay: 400
            });

            ScrollReveal().reveal('.menu', {delay: 100, origin: 'right'});
            ScrollReveal().reveal('#nav .logo img', {delay: 100, origin: 'left'});
            ScrollReveal().reveal('#vulture', {delay: 200, origin: 'bottom'});
            ScrollReveal().reveal('.introText', {delay: 100, origin: 'left'});
            ScrollReveal().reveal('.about .social .social-icon', {delay: 100, origin: 'bottom'});
            ScrollReveal().reveal('.intro .cvBtn', {delay: 100, origin: 'bottom'});
            ScrollReveal().reveal('.right-img img', {delay: 100, origin: 'right'});
            ScrollReveal().reveal('.c1', {delay: 500, origin: 'left'});
            ScrollReveal().reveal('.c2', {delay: 300, origin: 'left'});
            ScrollReveal().reveal('.c3', {delay: 100, origin: 'left'});
            ScrollReveal().reveal('#left', {delay: 700, origin: 'top'});
            ScrollReveal().reveal('#tnt', {delay: 700, origin: 'bottom'});
            
           
            window.onscroll = function() {
                if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
                    document.getElementById("boomContact").classList.add('active');
                } else {
                    document.getElementById("boomContact").classList.remove('active');
                }
               };

       

        //---MAIN MOVING---

        let text = document.getElementById('text');
        let vulture = document.getElementById('vulture');
        let back1 = document.getElementById('back1');
        let front1 = document.getElementById('front1');
        let nav = document.getElementById('nav');
        let detonatorT = document.getElementById('detonatorT');
        let boomContact = document.getElementById('boomContact');

        window.addEventListener('scroll', function(){
            let value = window.scrollY;

            text.style.top = 70 + value * -0.22 + '%';
            back.style.top = value * 0.3 + 'px';
            vulture.style.top = value * -0.5 + 'px';
            vulture.style.left = value * 0.5 + 'px';
            detonatorT.style.top = value * 0.09 + 'px';
            
           
        });

        //--- SVG LINE DRAW ---

        let path = document.querySelector('path')
        let pathLength = path.getTotalLength()

        path.style.strokeDasharray = pathLength + ' ' + pathLength;

        path.style.strokeDashoffset = pathLength;

        window.addEventListener('scroll',() =>{
            // What % down is it?
            var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

            // Length to offset the dashes
            var drawLength = pathLength * scrollPercentage;

            // Draw in reverse
            path.style.strokeDashoffset = pathLength - drawLength;

        });

        
