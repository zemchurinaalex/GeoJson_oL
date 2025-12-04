const osmlayer = new ol.layer.Tile({
    source: new ol.source.OSM(),
    visible: true
});


const vectorLayer = new ol.layer.Vector({  
    source: new ol.source.Vector ({
        url: 'landuse.geojson',
        format: new ol.format.GeoJSON()
    }),
    style: function(feature) {
        const type = feature.get('lu');
        let color;
        if (type ==='wood') color = '#add3a5';
        else if (type === 'prom') color = '#e797b2';
        else if (type === 'residential') color = '#dedede';
        return new ol.style.Style({
            fill: new ol.style.Fill ({color}),
            stroke: new ol.style.Stroke({color: '#000000ff', width: 1})
        });
    },
    visible: true
});

const map = new ol.Map({
    target: 'map', layers: [osmlayer, vectorLayer],
    view: new ol.View({
        center: ol.proj.fromLonLat([56.20,57.98]),
        zoom: 12,
    }),
});

document.getElementById('Lyr_OSM').addEventListener('change',function(){
    osmlayer.setVisible(this.checked);
})
document.getElementById('gson_lyr').addEventListener('change',function(){
    vectorLayer.setVisible(this.checked);
})