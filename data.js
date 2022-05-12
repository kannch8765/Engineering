var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.22338044354194508,
        "pitch": -0.09539693639876035,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -0.10673280639934646,
          "pitch": -0.24512964746805466,
          "rotation": 7.0685834705770345,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.1108291437710136,
          "pitch": 0.24688936319630628,
          "title": "Welcome!",
          "text": "Faculty of Engineering"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium",
      "name": "Engineering Auditorium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -1.3165878213377127,
        "pitch": -0.2916277452716134,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": 0.033482553589774255,
          "pitch": 0.02453222542916933,
          "rotation": 0,
          "target": "2-engineering-auditorium-atrium"
        },
        {
          "yaw": 2.9253836200739887,
          "pitch": 0.017741638600135445,
          "rotation": 0,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2780845592683079,
          "pitch": 0.11820681097055896,
          "title": "This way to",
          "text": "Atrium"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": -0.03311657744303531,
        "pitch": 0.05586875666342728,
        "fov": 1.2344983363832869
      },
      "linkHotspots": [
        {
          "yaw": -3.0589754475219966,
          "pitch": 0.041234861479242824,
          "rotation": 0,
          "target": "1-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.8157058813401434,
          "pitch": 0.04158264251929644,
          "title": "This way to",
          "text": "Auditorium"
        }
      ]
    }
  ],
  "name": "Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
