var map;

DG.then(function () {
    map = DG.map('map', {
        center: [43.638528129882964, 51.19230499447864],
        zoom: 16
    });
    DG.marker([43.638528129882964, 51.19230499447864]).addTo(map).bindPopup('Актауское управление электрических сетей');
});
