window.onload = function() {

    var tableName = "zip_yoy";

    var layerSource = {
            user_name: 'nygeog',
            type: 'cartodb',
            sublayers: [{
                sql: "SELECT * FROM " + tableName, // Earthquake data
                cartocss: $("#yoy2004").html() // Simple visualization
            }]
    }
    
    // Instantiate new map object, place it in 'map' element
    var map_object = new L.Map('map', {
        center: [40.7127, -74.0059], // San Francisco
        zoom: 10
    });

    // Create layer selector
    function createSelector(layer) {
        var cartocss = "";
        var $options = $(".layer_selector").find("li");
        $options.click(function(e) {
            var $li = $(e.target);
            var selected = $li.attr('data');

            $options.removeClass('cartocss_selected');
            $li.addClass('cartocss_selected');

            cartocss = $('#'+selected).text();

            layer.setCartoCSS(cartocss);
        });
    }

    // Pull tiles from CartoDB's basemaps
    L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap<\/a> contributors'
    }).addTo(map_object);

    // for storing sublayer outside of createlayer
    var sublayers;

    // Add data layer to your map
    cartodb.createLayer(map_object,layerSource)
        .addTo(map_object)
        .done(function(layer) {
            sublayer = layer.getSubLayer(0);
            createSelector(sublayer);
            
         $('#map').append(legend.render().el);

        })
        .error(function(err) {
            console.log("error: " + err);
        });
}