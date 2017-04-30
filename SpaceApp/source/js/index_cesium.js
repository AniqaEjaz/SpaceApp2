
const {dialog} = require('electron')


/*Create Globe with high Quality Texture */
/*var viewer = new Cesium.Viewer('cesiumContainer', {
    infoBox : true,
    selectionIndicator : false,
    shadows : true
});*/
var viewer = new Cesium.Viewer('cesiumContainer');


//create3DModel()
//createModel( 5000) ;

//viewer.dataSources.add('./data/simple.czml');
//viewer.dataSources.add(Cesium.CzmlDataSource.load('8./data/simple.czml'));
    
//Load with default styling Add Pakistan Map topojson.
/*var pak =   viewer.dataSources.add(Cesium.GeoJsonDataSource.load('./images/map.topojson', {
       //stroke: Cesium.Color.FIREBRICK ,
       fill: Cesium.Color.GREEN.withAlpha(0.7)
       //strokeWidth: 3
}));
*/
var nust =   viewer.dataSources.add(Cesium.GeoJsonDataSource.load('./data/geo-json-data/geojason-places.geojson', {
       //stroke: Cesium.Color.FIREBRICK ,
       //fill: Cesium.Color.GREEN.withAlpha(0.7)
       //strokeWidth: 3
}));

viewer.dataSources.add(Cesium.GeoJsonDataSource.load('./data/geo-json-data/geojason-places.geojson', {}));
viewer.dataSources.add(Cesium.GeoJsonDataSource.load('./data/geo-json-data/geojson-natural.geojson', {}));

function  isb(){

var isb = viewer.entities.add({
  name : 'Islamabad',
  position : Cesium.Cartesian3.fromDegrees( 73.008150,33.722069),
  point : {
    pixelSize : 5,
	  color : Cesium.Color.BLUE,
	  outlineColor : Cesium.Color.WHITE,
	  outlineWidth : 2,
      scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)
  },
  label : {
	text : 'Islamabad',
    font : '14pt serif',
    style: Cesium.LabelStyle.FILL_AND_OUTLINE,
    outlineWidth : 2,
    //verticalOrigin : Cesium.VerticalOrigin.BOTTOM,
    pixelOffset : new Cesium.Cartesian2(0, -9),
    //scaleByDistance : new Cesium.NearFarScalar(1.5e2, 2.0, 1.5e7, 0.5)
    translucencyByDistance : new Cesium.NearFarScalar(1.5e2, 1.0, 8.0e6, 0.0)
  }
  });

}

    var positionsA = [73.1201564972098,33.644409775774,

73.1458920949878,33.6927135131419,

73.1716276927658,33.7410172505099,

73.1973632905439,33.7893209878779,

73.2230988883219,33.8376247252459,

73.2488344860999,33.8859284626138,

73.2745700838779,33.9342321999818,

73.3003056816559,33.9825359373498,

73.326041279434,34.0308396747178,

73.351776877212,34.0791434120857,

73.37751247499,34.1274471494537,

73.403248072768,34.1757508868217,

73.428983670546,34.2240546241897,

73.4547192683241,34.2723583615576,

73.4804548661021,34.3206620989256,

73.5061904638801,34.3689658362936,

73.5319260616581,34.4172695736616,

73.5576616594361,34.4655733110295,

73.5833972572141,34.5138770483975,

73.6091328549922,34.5621807857655,

73.6348684527702,34.6104845231335,

73.6606040505482,34.6587882605014,

73.6863396483262,34.7070919978694,

73.7120752461042,34.7553957352374,

73.7378108438823,34.8036994726054,

73.7635464416603,34.8520032099733,

73.7892820394383,34.9003069473413,

73.8150176372163,34.9486106847093,

73.8407532349943,34.9969144220772,

73.8664888327724,35.0452181594452,

73.8922244305504,35.0935218968132,

73.9179600283284,35.1418256341812,

73.9436956261064,35.1901293715491,

73.9694312238844,35.2384331089171,

73.9951668216625,35.2867368462851,

74.0209024194405,35.3350405836531,

74.0466380172185,35.383344321021,

74.0723736149965,35.431648058389,

74.0981092127745,35.479951795757,

74.1238448105526,35.528255533125,

74.1495804083306,35.5765592704929,

74.1753160061086,35.6248630078609,

74.2010516038866,35.6731667452289,

74.2267872016646,35.7214704825969,

74.2525227994426,35.7697742199648,

74.2782583972207,35.8180779573328,

74.3039939949987,35.8663816947008,

74.3297295927767,35.9146854320688 ];
    var timeDynamicCoordinatesR = [];
    k=0;j=0;l=0;
    tstep =0;
    for(i =0 ; i< (positionsA.length/2); )
    {
        timeDynamicCoordinatesR[i] = tstep; 
        timeDynamicCoordinatesR[i + 1] = positionsA[k]; 
        timeDynamicCoordinatesR[i + 2] = positionsA[k+1];
        timeDynamicCoordinatesR[i + 3] = 500;   // convert radius to meters

        i = i + 4;
        k = k + 2;
        tstep = tstep + 60;
    }


var builtInCzml = [{
    "id" : "document",
    "version" : "1.0",
    "clock" : {
      "interval" : "2017-08-04T16:00:00Z/2017-08-04T16:02:00Z",
      "currentTime" : "2017-08-04T16:00:00Z",
      "multiplier" : 1,
      "range" : "LOOP_STOP",
      "step" : "SYSTEM_CLOCK_MULTIPLIER"
    }
}, {
    "id" : "Flight",
    "availability" : "2017-08-04T16:00:00Z/2017-08-04T16:02:00Z",
    "model" : {
        "show" : false,
        "gltf" : "../node_modules/cesium/SampleData/models/CesiumAir/Cesium_Air.glb"
    },
    "billboard" : {
        "eyeOffset" : {
            "cartesian" : [0.0, 0.0, 0.0]
        },
        "horizontalOrigin" : "CENTER",
        "image" : "../source/images/airport.png",
        "pixelOffset" : {
            "cartesian2" : [0.0, 0.0]
        },
        "scale" : 0.8,
        "show" : true,
        "verticalOrigin" : "BOTTOM"
    },
    "label" : {
        "fillColor" : {
            "rgba" : [255, 255, 0, 255]
        },
        "font" : "bold 10pt Segoe UI Semibold",
        "horizontalOrigin" : "LEFT",
        "outlineColor" : {
            "rgba" : [0, 0, 0, 255]
        },
        "pixelOffset" : {
            "cartesian2" : [10.0, 0.0]
        },
        "scale" : 1.0,
        "show" : true,
        "style" : "FILL",
        "text" : "Vehicle",
        "verticalOrigin" : "CENTER"
    },
    "path" : {
        "material" : {
            "solidColor" : {
                "color" : {
                    "rgba" : [255, 255, 0, 255]
                }
            }
        },
        "width" : 5.0,
        "show" : true
    },
    "position" : {
        "interpolationAlgorithm" : "LAGRANGE",
        "interpolationDegree" : 1,
        "epoch" : "2017-08-04T16:00:00Z",
        "cartographicDegrees" : timeDynamicCoordinatesR
    }
}];

var czmlDataSource = new Cesium.CzmlDataSource();
czmlDataSource.load(builtInCzml, 'Sample CZML with 3D model');
viewer.dataSources.add(czmlDataSource);



var pinBuilder = new Cesium.PinBuilder();

var bluePin = viewer.entities.add({
    name : 'Blank blue pin',
    position : Cesium.Cartesian3.fromDegrees(-75.170726, 39.9208667),
    billboard : {
        image : pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM
    }
});

var questionPin = viewer.entities.add({
    name : 'Question mark',
    position : Cesium.Cartesian3.fromDegrees(-75.1698529, 39.9220071),
    billboard : {
        image : pinBuilder.fromText('?', Cesium.Color.BLACK, 48).toDataURL(),
        verticalOrigin : Cesium.VerticalOrigin.BOTTOM
    }
});

var url = Cesium.buildModuleUrl('Assets/Textures/maki/grocery.png');
var groceryPin = Cesium.when(pinBuilder.fromUrl(url, Cesium.Color.GREEN, 48), function(canvas) {
    return viewer.entities.add({
        name : 'Grocery store',
        position : Cesium.Cartesian3.fromDegrees(-75.1705217, 39.921786),
        billboard : {
            image : canvas.toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });
});

//Create a red pin representing a hospital from the maki icon set.
var hospitalPin = Cesium.when(pinBuilder.fromMakiIconId('hospital', Cesium.Color.RED, 48), function(canvas) {
    return viewer.entities.add({
        name : 'Hospital',
        position : Cesium.Cartesian3.fromDegrees(-75.1698606, 39.9211275),
        billboard : {
            image : canvas.toDataURL(),
            verticalOrigin : Cesium.VerticalOrigin.BOTTOM
        }
    });
});






/*






var start = Cesium.JulianDate.fromDate(new Date(2017, 4, 30, 16));
var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());
positionsA = [73.1201564972098,33.644409775774, 0, 500,

73.1458920949878,33.6927135131419 ,60,  500
  ];

var czml = [{
    "id" : "document",
    "name" : "CZML Satellite - Time Dynamic",
    "version" : "1.0"
}, {
    "id" : "ISB - GILGIT",
    "name" : "ISB - GILGIT",
    "availability" :"2012-08-04T16:00:00Z/2012-08-04T16:05:00Z",
    "position" : {
        "epoch" : "2012-08-04T16:00:00Z",
        "cartographicDegrees" : [
            0,   -70, 20, 150000,
            100, -80, 44, 150000,
            200, -90, 18, 150000,
            300, -98, 52, 150000
        ]
    },
   "model": {
        "gltf" : "../node_modules/cesium/SampleData/models/CesiumAir/Cesium_Air.glb",
        "scale" : 2.0,
        "minimumPixelSize": 128
    },
    "path" : {
        "color" : { "rgba" : [255, 255, 255, 255] },
        "outlineColor" : { "rgba" : [255, 0, 0, 255] },
        "width" : 1,
        "outlineWidth" : 2,
        "leadTime" : 10,
        "trailTime" :10,
        "resolution" : 5
    }
  
}]

        


viewer.dataSources.add(Cesium.CzmlDataSource.load(czml));


*/



function createModel( height) {

    positionsA = [73.1201564972098,33.644409775774, 0, 500,

73.1458920949878,33.6927135131419 ,60,  500
  ];
    var timeDynamicCoordinatesR = [];
    k=0;j=0;l=0;
    tstep =0;
    /*for(i =0 ; i< positionsA.length/2; )
    {
        timeDynamicCoordinatesR[i] = tstep; 
        timeDynamicCoordinatesR[i + 1] = positionsA[k]; 
        timeDynamicCoordinatesR[i + 2] = positionsA[k+1];
       // timeDynamicCoordinatesR[i + 3] = 500;   // convert radius to meters

        i = i + 3;
        k = k + 2;
        tstep = tstep + 60;
    }*/





    viewer.entities.removeAll();

    var position = Cesium.Cartesian3.fromDegrees( 73.1201564972098,33.644409775774, height);
    var heading = Cesium.Math.toRadians(295);
    var pitch = 0;
    var roll = 0;
    var hpr = new Cesium.HeadingPitchRoll(heading, pitch, roll);
    var orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
    //Set bounds of our simulation time
    var start = Cesium.JulianDate.fromDate(new Date(2015, 2, 25, 16));
    var stop = Cesium.JulianDate.addSeconds(start, 360, new Cesium.JulianDate());

    //Make sure viewer is at the desired time.
    viewer.clock.startTime = start.clone();
    viewer.clock.stopTime = stop.clone();
    viewer.clock.currentTime = start.clone();
    viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; //Loop at the end
    viewer.clock.multiplier = 10;

    //Set timeline to simulation bounds
    viewer.timeline.zoomTo(start, stop);
     var entity = viewer.entities.add({
        name : 'Flight Path',
        
        availability : new Cesium.TimeIntervalCollection([new Cesium.TimeInterval({
                start : start,
                stop : stop
        })]),
        position : positionsA,
        /*
        polyline : {
            interpolationAlgorithm:"LAGRANGE",
        interpolationDegree:5,
        referenceFrame:"INERTIAL",
        epoch :start,
        positions : positionsA,
        width : 5,
        material : Cesium.Color.RED
    },*/
    path : {
        show : true,
        leadTime : 0,
        trailTime : 60,
        width : 10,
        resolution : 1,
        material : new Cesium.PolylineGlowMaterialProperty({
            glowPower : 0.3,
            color : Cesium.Color.PALEGOLDENROD
        })
    },
        orientation : orientation,
        model : {
            uri : '../node_modules/cesium/SampleData/models/CesiumAir/Cesium_Air.glb',
            minimumPixelSize : 128,
            maximumScale : 20000
        }
    
    });
    viewer.trackedEntity = entity;
}