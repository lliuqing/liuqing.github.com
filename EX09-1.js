/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:22:00
 * @version $Id$
 */
var map = new BMap.Map("l-map"); 
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

var myGeo = new BMap.Geocoder();    
myGeo.getPoint("西湖", function(point) {
  if (point) {
    map.centerAndZoom(point, 16);
    map.addOverlay(new BMap.Marker(point));
  }
}, "杭州市");

var local = new BMap.LocalSearch(map, {
	pageCapacity: 8,
    renderOptions: {
    	map: map, 
    	panel: "r-result"}
});
local.search("宾馆");  
