(function () {
  "use strict";

  var viewer = new Cesium.Viewer("cesiumContainer");

  // Show GeoJSON data
  viewer.dataSources.add(
    Cesium.GeoJsonDataSource.load("./ShizuokaShinsuiiki.geojson", {
      stroke: Cesium.Color.HOTPINK,
      fill: Cesium.Color.PINK.withAlpha(0.5),
      strokeWidth: 3,
    })
  );
})();
