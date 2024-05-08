document.addEventListener('DOMContentLoaded', function() {

    function updateScreen() {        
        var firstFlexCredentials = document.querySelector('.firstFlexCredentials');
        var centerFlexCredentials = document.querySelector('.centerFlexCredentials');
        var lastFlexCredentials = document.querySelector('.lastFlexCredentials');
        var imgEnds = document.querySelectorAll('.imgEnd');
        var footerBanner = document.querySelector('.footerBanner');
        var footerText = document.querySelector('.footerText');
        var imgIconFooter = document.querySelectorAll('.imgIconFooter');
        var navCards = document.querySelectorAll('.navCards');
        var textTitles = document.querySelectorAll('.text-title');
        var textDesc = document.querySelectorAll('.text-desc');
        var buttonLink = document.querySelectorAll('.buttonLink');        
        var footerTitleCardHead = document.querySelector('.footerTitleCardHead');
        var footerTitleCardSecondary = document.querySelector('.footerTitleCardSecondary');
        var navTitleLink = document.querySelector('.navTitleLink');
        var navLinks = document.querySelectorAll('.navLinks');
        var introText = document.querySelectorAll('.introText');
        var introTextSub = document.querySelector('.introTextSub');
        var searchTitle = document.querySelectorAll('.searchTitle');
        var searchTitleSub = document.querySelector('.searchTitleSub');
        var searchBar = document.querySelector('.searchBar');
        var searchFooter = document.querySelectorAll('.searchFooter');
        var searchSub = document.querySelector('.searchSub');
        var creditsHeader = document.querySelectorAll('.creditsHeader');
        var creditsName = document.querySelectorAll('.creditsName');
        var creditsPos = document.querySelectorAll('.creditsPos');
        var endTitle = document.querySelector('.endTitle');
        var endTitle2 = document.querySelector('.endTitle2');
        var endSub = document.querySelector('.endSub');
        var endDivider = document.querySelector('.endDivider');
        var endQlinks = document.querySelector('.endQlinks');

        var mainTitle = document.querySelector('.mainTitle');
        var mainSub = document.querySelector('.mainSub');
        var mainIcon = document.querySelector('.mainIcon');

        var windowWidth = window.innerWidth;

        // Check if window width is below 1400px
        if (windowWidth < 1400) {

            imgEnds.forEach(function(element) {
                element.style.marginRight = '-40%';
            });

            imgIconFooter.forEach(function(element) {
                element.style.marginTop = '2rem';
                element.style.width = '10%';
                element.style.height = '10%';

            });

            
            navCards.forEach(function(element) {
                element.style.width = '90%';
                element.style.height = '275px';
            });

            navLinks.forEach(function(element) {
                element.style.fontSize = '.9rem';
            });

            textTitles.forEach(function(element) {
                element.classList.replace('fs-1', 'fs-3')

            });

            textDesc.forEach(function(element) {
                element.classList.replace('fs-3', 'fs-5')

            });

            buttonLink.forEach(function(element) {
                element.classList.replace('fs-3', 'fs-6')

            });

            introText.forEach(function(element) {
                element.classList.replace('fs-1', 'fs-3');
            });

            introTextSub.classList.replace('fs-2', 'fs-4');

            navTitleLink.classList.replace('fs-2', 'fs-4');

            searchTitle.forEach(function(element) {
                element.style.fontSize = 'calc(1.325rem + 0.9vw)';
            });
            searchTitleSub.classList.replace('fs-4', 'fs-6');
            searchBar.classList.replace('fs-4', 'fs-6');

            searchFooter.forEach(function(element) {
                element.classList.replace('fs-4', 'fs-6');
            });

            searchSub.classList.replace('fs-3', 'fs-5');


            creditsHeader.forEach(function(element) {
                element.classList.replace('fs-2', 'fs-4');
            });

            creditsName.forEach(function(element) {
                element.classList.replace('fs-3', 'fs-5');
            });

            creditsPos.forEach(function(element) {
                element.classList.replace('fs-4', 'fs-6');
            });

            footerTitleCardHead.style.fontSize = 'calc(1.3rem + 0.6vw)';
            footerTitleCardSecondary.style.fontSize = 'calc(1.375rem + 1.5vw)';
            

            footerBanner.style.marginTop = '-4.3%';
            footerText.style.marginLeft = '3rem';

            firstFlexCredentials.style.marginLeft = '-20%';
            firstFlexCredentials.classList.add('me-5');
            centerFlexCredentials.style.marginLeft = '10%';
            lastFlexCredentials.style.marginLeft = '-5%';


            endTitle.classList.replace('fs-2', 'fs-4');
            endTitle2.classList.replace('fs-1', 'fs-3');
            endSub.classList.replace('fs-5', 'fs-6');
            endDivider.style.marginLeft= '5%';
            endQlinks.classList.replace('fs-4', 'fs-5');


            mainTitle.style.fontSize = '3.5rem';
            mainSub.classList.replace('fs-3', 'fs-5');
            mainIcon.style.width = '10%';

        } else {

            imgEnds.forEach(function(element) {
                element.style.marginRight = '-30%';
            });

            imgIconFooter.forEach(function(element) {
                element.style.marginTop = '0';
                element.style.width = '8%';
                element.style.height = '8%';

            });

            navCards.forEach(function(element) {
                element.style.width = '90%';
                element.style.height = '350px';

            });

            navLinks.forEach(function(element) {
                element.style.fontSize = '1.3rem';
            });

            textTitles.forEach(function(element) {
                element.classList.replace('fs-3', 'fs-1')

            });

            textDesc.forEach(function(element) {
                element.classList.replace('fs-5', 'fs-3')

            });

            buttonLink.forEach(function(element) {
                element.classList.replace('fs-6', 'fs-3')

            });

            introText.forEach(function(element) {
                element.classList.replace('fs-3', 'fs-1');
            });

            introTextSub.classList.replace('fs-4', 'fs-2');

            searchTitle.forEach(function(element) {
                element.style.fontSize = 'calc(1.8rem + 0.9vw)';
            });
            searchTitleSub.classList.replace('fs-6', 'fs-4');
            searchBar.classList.replace('fs-6', 'fs-4');

            searchFooter.forEach(function(element) {
                element.classList.replace('fs-6', 'fs-4');
            });

            searchSub.classList.replace('fs-5', 'fs-3');

            creditsHeader.forEach(function(element) {
                element.classList.replace('fs-4', 'fs-2');
            });
            
            creditsName.forEach(function(element) {
                element.classList.replace('fs-5', 'fs-3');
            });

            creditsPos.forEach(function(element) {
                element.classList.replace('fs-6', 'fs-4');
            });
        

            navTitleLink.classList.replace('fs-4', 'fs-2');

            footerTitleCardHead.style.fontSize = 'calc(1.9rem + 0.6vw)';
            footerTitleCardSecondary.style.fontSize = 'calc(2rem + 1.5vw)';

            footerBanner.style.marginTop = '-2.9%';
            footerText.style.marginLeft = '5rem';

            firstFlexCredentials.style.marginLeft = '0';
            firstFlexCredentials.classList.remove('me-5');
            centerFlexCredentials.style.marginLeft = '0';
            lastFlexCredentials.style.marginLeft = '0';

            endTitle.classList.replace('fs-4', 'fs-2');
            endTitle2.classList.replace('fs-3', 'fs-1');
            endSub.classList.replace('fs-6', 'fs-5');
            endDivider.style.marginLeft= '10%';
            endQlinks.classList.replace('fs-5', 'fs-4');


            mainTitle.style.fontSize = '5rem';
            mainSub.classList.replace('fs-5', 'fs-3');
            mainIcon.style.width = '12%';
        }
    }

    window.addEventListener('load', updateScreen);
    window.addEventListener('resize', updateScreen);

    updateScreen();
});