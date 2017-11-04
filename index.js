var latitude
var longitude

var map = new BMap.Map("allmap");
map.centerAndZoom(new BMap.Point(116.331398,39.897445),17);
map.enableScrollWheelZoom(true);

document.getElementById("file-input").onchange = function (e) {
    // EXIF.getData(e.target.files[0], function () {
    //     latitude = EXIF.getTag(this, 'GPSLatitude')
    //     longitude = EXIF.getTag(this, 'GPSLongitude')
    //         console.log(latitude)
    //         console.log(longitude)
    // });
    EXIF.getData(e.target.files[0], function () {
        latitude = EXIF.getTag(this, 'GPSLatitude')
        longitude = EXIF.getTag(this, 'GPSLongitude')

        latitude = latitude[0].numerator + latitude[1].numerator / 60  + latitude[2].numerator / (latitude[2].denominator) / 3600

        longitude = longitude[0].numerator + longitude[1].numerator / 60 + longitude[2].numerator / (longitude[2].denominator) / 3600

        BMap.Convertor.translate(new BMap.Point(longitude,latitude),0,function(point){
            console.log(point);

            var marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            map.panTo(point);
        });
 
    });
}






