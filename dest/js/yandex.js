function init(){var e=new ymaps.Map("map",{center:[52.031288,113.50334],zoom:18});myPieChart=new ymaps.Placemark([52.031288,113.50333]),e.behaviors.disable("scrollZoom"),e.behaviors.disable("drag"),e.geoObjects.add(new ymaps.Placemark([52.031288,113.50334],{balloonContent:"<strong>Чита, Лермонтова 2, офис 101</strong>"},{iconLayout:"default#image",iconImageHref:"img/map-marker.png",iconImageSize:[50,50]}))}!function(e,a,n,t,m,i,r){e.ym=e.ym||function(){(e.ym.a=e.ym.a||[]).push(arguments)},e.ym.l=1*new Date,i=a.createElement(n),r=a.getElementsByTagName(n)[0],i.async=1,i.src="https://mc.yandex.ru/metrika/tag.js",r.parentNode.insertBefore(i,r)}(window,document,"script"),ym(55709932,"init",{clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0}),ymaps.ready(init);