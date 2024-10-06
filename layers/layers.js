var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ElectricianServices_1 = new ol.format.GeoJSON();
var features_ElectricianServices_1 = format_ElectricianServices_1.readFeatures(json_ElectricianServices_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectricianServices_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectricianServices_1.addFeatures(features_ElectricianServices_1);
var lyr_ElectricianServices_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElectricianServices_1, 
                style: style_ElectricianServices_1,
                popuplayertitle: "Electrician Services",
                interactive: true,
                title: '<img src="styles/legend/ElectricianServices_1.png" /> Electrician Services'
            });
var format_ElectronicsRepairShops_2 = new ol.format.GeoJSON();
var features_ElectronicsRepairShops_2 = format_ElectronicsRepairShops_2.readFeatures(json_ElectronicsRepairShops_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ElectronicsRepairShops_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ElectronicsRepairShops_2.addFeatures(features_ElectronicsRepairShops_2);
var lyr_ElectronicsRepairShops_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ElectronicsRepairShops_2, 
                style: style_ElectronicsRepairShops_2,
                popuplayertitle: "Electronics Repair Shops",
                interactive: true,
                title: '<img src="styles/legend/ElectronicsRepairShops_2.png" /> Electronics Repair Shops'
            });
var format_EVStationsDC_3 = new ol.format.GeoJSON();
var features_EVStationsDC_3 = format_EVStationsDC_3.readFeatures(json_EVStationsDC_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EVStationsDC_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EVStationsDC_3.addFeatures(features_EVStationsDC_3);
var lyr_EVStationsDC_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EVStationsDC_3, 
                style: style_EVStationsDC_3,
                popuplayertitle: "EV Stations (DC)",
                interactive: true,
                title: '<img src="styles/legend/EVStationsDC_3.png" /> EV Stations (DC)'
            });
var format_EVStationsAC_4 = new ol.format.GeoJSON();
var features_EVStationsAC_4 = format_EVStationsAC_4.readFeatures(json_EVStationsAC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EVStationsAC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EVStationsAC_4.addFeatures(features_EVStationsAC_4);
var lyr_EVStationsAC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EVStationsAC_4, 
                style: style_EVStationsAC_4,
                popuplayertitle: "EV Stations (AC)",
                interactive: true,
                title: '<img src="styles/legend/EVStationsAC_4.png" /> EV Stations (AC)'
            });

lyr_OSMStandard_0.setVisible(true);lyr_ElectricianServices_1.setVisible(true);lyr_ElectronicsRepairShops_2.setVisible(true);lyr_EVStationsDC_3.setVisible(false);lyr_EVStationsAC_4.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_ElectricianServices_1,lyr_ElectronicsRepairShops_2,lyr_EVStationsDC_3,lyr_EVStationsAC_4];
lyr_ElectricianServices_1.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'craft': 'craft', 'opening_hours': 'opening_hours', 'description': 'description', 'wheelchair': 'wheelchair', 'building': 'building', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'addr:city': 'addr:city', 'name': 'name', });
lyr_ElectronicsRepairShops_2.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'craft': 'craft', 'office': 'office', 'name:en': 'name:en', 'shop': 'shop', 'wheelchair': 'wheelchair', 'check_date': 'check_date', 'payment:debit_cards': 'payment:debit_cards', 'payment:electronic_purses': 'payment:electronic_purses', 'payment:credit_cards': 'payment:credit_cards', 'payment:cash': 'payment:cash', 'addr:postcode': 'addr:postcode', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'website': 'website', 'level': 'level', 'phone': 'phone', 'opening_hours': 'opening_hours', 'description': 'description', 'addr:street': 'addr:street', 'addr:housenumber': 'addr:housenumber', 'name': 'name', });
lyr_EVStationsDC_3.set('fieldAliases', {'Charging stations': 'Charging stations', 'Lattitude': 'Lattitude', 'Longitude': 'Longitude', });
lyr_EVStationsAC_4.set('fieldAliases', {'AC': 'AC', 'LATTITUDE': 'LATTITUDE', 'LONGITUDE': 'LONGITUDE', });
lyr_ElectricianServices_1.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'craft': 'TextEdit', 'opening_hours': 'TextEdit', 'description': 'TextEdit', 'wheelchair': 'TextEdit', 'building': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'addr:city': 'TextEdit', 'name': 'TextEdit', });
lyr_ElectronicsRepairShops_2.set('fieldImages', {'fid': '', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'craft': 'TextEdit', 'office': 'TextEdit', 'name:en': 'TextEdit', 'shop': 'TextEdit', 'wheelchair': 'TextEdit', 'check_date': 'TextEdit', 'payment:debit_cards': 'TextEdit', 'payment:electronic_purses': 'TextEdit', 'payment:credit_cards': 'TextEdit', 'payment:cash': 'TextEdit', 'addr:postcode': 'TextEdit', 'addr:full': 'TextEdit', 'addr:city': 'TextEdit', 'website': 'TextEdit', 'level': 'TextEdit', 'phone': 'TextEdit', 'opening_hours': 'TextEdit', 'description': 'TextEdit', 'addr:street': 'TextEdit', 'addr:housenumber': 'TextEdit', 'name': 'TextEdit', });
lyr_EVStationsDC_3.set('fieldImages', {'Charging stations': 'TextEdit', 'Lattitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_EVStationsAC_4.set('fieldImages', {'AC': 'TextEdit', 'LATTITUDE': 'TextEdit', 'LONGITUDE': 'TextEdit', });
lyr_ElectricianServices_1.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'craft': 'no label', 'opening_hours': 'no label', 'description': 'no label', 'wheelchair': 'no label', 'building': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'addr:city': 'no label', 'name': 'no label', });
lyr_ElectronicsRepairShops_2.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'craft': 'no label', 'office': 'no label', 'name:en': 'no label', 'shop': 'no label', 'wheelchair': 'no label', 'check_date': 'no label', 'payment:debit_cards': 'no label', 'payment:electronic_purses': 'no label', 'payment:credit_cards': 'no label', 'payment:cash': 'no label', 'addr:postcode': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'website': 'no label', 'level': 'no label', 'phone': 'no label', 'opening_hours': 'no label', 'description': 'no label', 'addr:street': 'no label', 'addr:housenumber': 'no label', 'name': 'no label', });
lyr_EVStationsDC_3.set('fieldLabels', {'Charging stations': 'inline label - visible with data', 'Lattitude': 'no label', 'Longitude': 'no label', });
lyr_EVStationsAC_4.set('fieldLabels', {'AC': 'inline label - always visible', 'LATTITUDE': 'no label', 'LONGITUDE': 'no label', });
lyr_EVStationsAC_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});