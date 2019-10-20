(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(55709932, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});

	
ymaps.ready(init);    
function init() {
    var myMap = new ymaps.Map("map", {
        center: [52.031288, 113.503340],
        zoom: 18
    });
    myPieChart = new ymaps.Placemark([
        52.031288, 113.503330
        ]);
    myMap.behaviors.disable('scrollZoom'); 
    myMap.behaviors.disable('drag');
    myMap.geoObjects
    .add(new ymaps.Placemark([52.031288, 113.503340], {
        balloonContent: '<strong>Чита, Лермонтова 2, офис 101</strong>'
    }, 
// custom icon
{
    iconLayout: 'default#image',
                // Путь до нашей картинки
                iconImageHref: 'img/map-marker.png', 
                // Размер по ширине и высоте
                iconImageSize: [50, 50],
            }
            ));
}  