/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-05 09:32:50
 * @version $Id$
 */
var map = new BMap.Map("1-map"); 
map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);

var myGeo = new BMap.Geocoder();    
myGeo.getPoint("杭州市海曙路58号", function(point) {
  if (point) {
    map.centerAndZoom(point, 16);
    map.addOverlay(new BMap.Marker(point));
  }
}, "杭州市");

map.enableScrollWheelZoom();
var start = "杭州市海曙路58号" ,end = "宾馆";
var transit = new BMap.TransitRoute(map, {
  renderOptions: {
    map: map,
    panel: "results"
  }
  onResultsHtmlSet : function(){
  	$("#r-result").show()
  } 
});
transit.search(start,end);