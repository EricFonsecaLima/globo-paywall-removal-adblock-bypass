// ==UserScript==
// @name         Globo.com paywall removal and adblock bypass
// @namespace    https://github.com/EricFonsecaLima
// @version      0.2
// @description  Removes the paywall and bypass your adblock in 'globo.com' pages
// @match        http*://*.globo.com/*
// @author       github.com/EricFonsecaLima
// @icon         https://www.google.com/s2/favicons?domain=globo.com
// @run-at       document-end
// ==/UserScript==

(function() {
    var tentativasId = 0;
    var tentativasClass = 0;

    function waitForElementById(id, callback){
        var exec = setInterval(function(){
            if(document.getElementById(id)){
                clearInterval(exec);
                callback();
            } else if (tentativasId > 39){
                clearInterval(exec);
                console.log('nao encontrado: ' + id);
            } else { tentativasId++; }
        }, 500);
    }
    function waitForElementByClass(classname, callback){
        var exec = setInterval(function(){
            if(document.getElementsByClassName(classname)[0]){
                clearInterval(exec);
                callback();
            } else if (tentativasClass > 49){
                clearInterval(exec);
                console.log('nao encontrado: ' + classname);
            } else { tentativasClass++; }
        }, 500);
    }
    if(window.location.hostname.includes('.globo.com')) {
        var body = document.body.cloneNode(true);
        waitForElementByClass('paywall-cpt', function(){
            //document.getElementsByClassName('paywall-cpt')[0].remove();
            document.body.replaceWith(body);
        });
        waitForElementById('detecta-adblock', function(){
            document.getElementById('detecta-adblock').remove();
        });
        waitForElementByClass('barber-barrier-cpnt', function(){
            document.getElementsByClassName('barber-barrier-cpnt')[0].remove();
        });
        waitForElementByClass('banner-bottom-fixed-cpnt', function(){
            document.getElementsByClassName('banner-bottom-fixed-cpnt')[0].remove();
        });
        waitForElementByClass('mobiliarioFooter', function(){
            document.getElementsByClassName('mobiliarioFooter')[0].remove();
        });
        waitForElementByClass('barreiraJornada', function(){
            document.getElementsByClassName('barreiraJornada')[0].remove();
        });
        waitForElementByClass('paywall__site-container', function(){
            document.getElementsByClassName('paywall__site-container')[0].style.overflow = 'auto';
        });
            document.body.style.overflow = 'auto';
            document.html.style.overflow = 'auto';
    }
})();
