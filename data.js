// ==========================================
// Helper function for image hotspots
// ==========================================
function imageHotspot(yaw, pitch, title, imageFile, caption = "", width = 300) {
    return {
        yaw,
        pitch,
        title,
        text: `
            <figure style="margin:0;text-align:center;">
                <img src="img/${imageFile}"
                     alt="${title}"
                     style="width:${width}px;max-width:100%;border-radius:6px;">
                ${caption ? `<figcaption style="margin-top:8px;">${caption}</figcaption>` : ""}
            </figure>
        `
    };
}

var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 0.5397928499379567,
        "pitch": 0.10979487695893653,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.42638978873532807,
          "pitch": 0.34826658994684223,
          "rotation": 0,
          "target": "1-entrance-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-entrance-2",
      "name": "Entrance 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 0.42559211917687634,
        "pitch": 0.04267114729975496,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.47897513840831074,
          "pitch": 0.08250310976966091,
          "rotation": 0,
          "target": "2-centre-room"
        },
        {
          "yaw": -2.6652833857179914,
          "pitch": 0.37374359080261144,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-centre-room",
      "name": "Crush Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5542130410974746,
          "pitch": 0.15281214451710312,
          "rotation": 0,
          "target": "1-entrance-2"
        },
        {
          "yaw": -3.056214417016113,
          "pitch": -0.0854222390635524,
          "rotation": 0,
          "target": "4-stairs"
        },
        {
          "yaw": 0.10330599295450682,
          "pitch": 0.0867492782646977,
          "rotation": 0,
          "target": "10-council-chamber-corridor-start"
        },
        {
          "yaw": 0.6326411465373614,
          "pitch": 0.09178509329974816,
          "rotation": 0,
          "target": "16-mayor-corridor-2"
        },
        {
          "yaw": -1.0008344894363859,
          "pitch": 0.18763116484025844,
          "rotation": 0,
          "target": "3-ridgeway-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-ridgeway-room-1",
      "name": "Ridgeway Room (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8077992368669804,
          "pitch": -0.0759532986779643,
          "rotation": 0,
          "target": "2-centre-room"
        }
      ],
      "infoHotspots": [
            imageHotspot(
            -2.05,
            -0.324119215766808821,
            "Tunstall Manor Court",
            "Tunstall Manor Court.jpg"
        ),
        {
          "yaw": -0.4718685247589427,
          "pitch": -0.12839985176884916,
          "title": "Thomas Ryles",
          "text": "<img src='img/Thomas Ryles.jpeg' style='width:300px;'>"
        },
        {
          "yaw": 0.34242904213523495,
          "pitch": -0.14221923896307942,
          "title": "Sutherland Road",
          "text": "<img src='img/Sutherland Road.jpeg' style='width:300px;'>"
        },
        {
          "yaw": 0.737778687105898,
          "pitch": -0.14830540165295147,
          "title": "Turbine farm",
          "text": "<img src='img/Picture1.png' style='width:300px;'>"
        },
        {
          "yaw": 2.1320785942725715,
          "pitch": -0.20560036068254206,
          "title": "In the Bottle Oven",
          "text": "<img src='img/Bottle Oven.jpeg' style='width:300px;'>"
        }
      ]
    },
    {
      "id": "4-stairs",
      "name": "stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -2.597938665048275,
        "pitch": 0.016914503865315567,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 3.045180744720599,
          "pitch": 0.32777411214770424,
          "rotation": 0,
          "target": "2-centre-room"
        },
        {
          "yaw": -2.0434376834778636,
          "pitch": -0.1883546583728979,
          "rotation": 0,
          "target": "5-top-of-stairs-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4444064781635184,
          "pitch": 0.13412592199360063,
          "title": "Title",
          "text": "<img src='images/example.png' style='width:200px;'>"
        },
        {
          "yaw": 2.9813279865440165,
          "pitch": -0.41720523972814405,
          "title": "Title",
          "text": "A"
        },
        {
          "yaw": 3.1370161416857165,
          "pitch": 0.14806342089091196,
          "title": "Title",
          "text": "A"
        },
        {
          "yaw": 2.7757479932342317,
          "pitch": 0.13473558520390583,
          "title": "Title",
          "text": "A"
        },
        {
          "yaw": -1.3798663841364593,
          "pitch": -0.8770429072407762,
          "title": "Title",
          "text": "A"
        }
      ]
    },
    {
      "id": "5-top-of-stairs-1",
      "name": "Top of Stairs (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 0.898547699112461,
        "pitch": -0.022998140898739194,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.4488042601895774,
          "pitch": -0.006606925430878263,
          "rotation": 0,
          "target": "6-elizabeths-room-1"
        },
        {
          "yaw": -2.4976964968989144,
          "pitch": -0.0674625406210243,
          "rotation": 0,
          "target": "8-chair-room-1"
        },
        {
          "yaw": 1.5466764648547358,
          "pitch": 0.09254719197959638,
          "rotation": 0,
          "target": "4-stairs"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9758826362332265,
          "pitch": -0.34765890469123306,
          "title": "Borough of stoke upon trent",
          "text": "<img src='img/Borough of stoke upon trent.jpeg' style='width:300px;'>"
        },
        {
          "yaw": -2.487250063149034,
          "pitch": -0.6366625673390356,
          "title": "Jubilee Hall",
          "text": "<img src='img/Jubilee Hall.jpeg' style='width:300px;'>"
        },
        {
          "yaw": 0.43779019392487406,
          "pitch": -0.4643727263462196,
          "title": "Queen Elizabeth",
          "text": "<img src='img/Queen Elibabeth.jpeg' style='width:300px;'>"
        }
      ]
    },
    {
      "id": "6-elizabeths-room-1",
      "name": "Elizabeths room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 2.990972604222547,
        "pitch": 0.07613387828454776,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 3.015141708300293,
          "pitch": -0.09749639860644521,
          "rotation": 0,
          "target": "7-elizabeths-room-2-"
        },
        {
          "yaw": -0.2700722586699751,
          "pitch": -0.05930531977069364,
          "rotation": 0,
          "target": "5-top-of-stairs-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.8507245129893075,
          "pitch": -0.3539341758546932,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 2.98090749227274596,
          "pitch": -0.5046192118847667274,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-elizabeths-room-2-",
      "name": "Queen Elizabeth's Room 2 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -0.29536341187596626,
        "pitch": 0.003710534547805011,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.2798124576521879,
          "pitch": 0.39161475998454165,
          "rotation": 0,
          "target": "6-elizabeths-room-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-chair-room-1",
      "name": "Chair Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 1.0221179450164275,
        "pitch": 0.03596267722376112,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.9470006504779,
          "pitch": 0.1111842058871364,
          "rotation": 0,
          "target": "9-chair-room-2"
        },
        {
          "yaw": 1.7739915513705418,
          "pitch": 0.07432180917423459,
          "rotation": 0,
          "target": "5-top-of-stairs-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.15996860272531066,
          "pitch": -0.01936839817153313,
          "title": "Stained glass",
          "text": "<img src='img/IMG_2486.jpeg' style='width:300px;'>"
        },
        {
          "yaw": -0.1939498400702675,
          "pitch": -0.014134028074401783,
          "title": "Stained glass",
          "text": " <img src='img/stainglass1.png' style='width:300px;'>"
        },
        {
          "yaw": 0.4037950516450941,
          "pitch": -0.017045100333465513,
          "title": "Stained glass",
          "text": "<img src='img/stainglass3.png' style='width:300px;'>"
        },
        {
          "yaw": 1.708468785217251,
          "pitch": -0.2442684826642676,
          "title": "King George V",
          "text": "<img src='img/Kingpic.png' style='width:300px;'>"
        }
      ]
    },
    {
      "id": "9-chair-room-2",
      "name": "Chair Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -2.3337973655768494,
        "pitch": 0.02968427638244009,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.2726491033142384,
          "pitch": 0.056895701159300316,
          "rotation": 0,
          "target": "8-chair-room-1"
        },
        {
          "yaw": -2.9528072558330063,
          "pitch": -0.002941907486512463,
          "rotation": 0,
          "target": "5-top-of-stairs-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.1983580933019073,
          "pitch": -0.04211080676632761,
          "title": "Title",
          "text": "<img src='img/stainglass3.png' style='width:300px;'>"
        },
        {
          "yaw": -1.4963032708431605,
          "pitch": -0.06785328184485984,
          "title": "Title",
          "text": "<img src='img/IMG_2486.jpeg' style='width:300px;'>"
        },
        {
          "yaw": -1.6922215917759313,
          "pitch": -0.05664559607620312,
          "title": "Title",
          "text": "<img src='img/stainglass1.png' style='width:300px;'>"
        }
      ]
    },
    {
      "id": "10-council-chamber-corridor-start",
      "name": "Council Chamber Corridor start",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 0.048332194670614115,
        "pitch": 0.0037105345478032348,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.05477307227859285,
          "pitch": 0.11150290006375485,
          "rotation": 0,
          "target": "11-council-chamber-corridor"
        },
        {
          "yaw": -2.166908025641595,
          "pitch": 0.1662464482711581,
          "rotation": 0,
          "target": "2-centre-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-council-chamber-corridor",
      "name": "Council Chamber Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 0.15442992704972802,
        "pitch": -0.04823694912145626,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 0.1300635936940786,
          "pitch": 0.022695549912654656,
          "rotation": 0,
          "target": "12-leads-to-council-chamber-1"
        },
        {
          "yaw": -3.018176783856589,
          "pitch": 0.014585783421161125,
          "rotation": 0,
          "target": "10-council-chamber-corridor-start"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-leads-to-council-chamber-1",
      "name": "Leads to council Chamber (1)",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 2.543025057113937,
        "pitch": -0.00366697284152373,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.986330292528949,
          "pitch": 0.11014326522179196,
          "rotation": 0,
          "target": "11-council-chamber-corridor"
        },
        {
          "yaw": 1.790788324890081,
          "pitch": -0.018488746849845583,
          "rotation": 0,
          "target": "13-council-chamber-2"
        }
      ],
      "infoHotspots": [
        {
        },
        {
        },
        {
          "yaw": -0.7322214177577884,
          "pitch": -0.47299232062749574,
          "title": "Kenneth Roberts",
          "text": "<img src='img/Kenneth Roberts.jpeg' style='width:300px;'>"
        },
        {
        },
        {
        },
        {
        },
        {
        },
        {
          "yaw": -2.2502487553269876,
          "pitch": -0.24797970489730758,
          "title": "",
          "text": "<img src='img/guy.jpeg' style='width:300px;'>"
        }
      ]
    },
    {
      "id": "13-council-chamber-2",
      "name": "Council chamber 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -2.0408696887087387,
        "pitch": -0.005565801821697747,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -1.4751278264303682,
          "pitch": 0.023411625557645976,
          "rotation": 0,
          "target": "12-leads-to-council-chamber-1"
        },
        {
          "yaw": -2.6035193511869856,
          "pitch": 0.1523479618136534,
          "rotation": 0,
          "target": "14-council-chamber-4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-council-chamber-4",
      "name": "Council Chamber 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.01663236507096677,
          "pitch": -0.0154549639795043,
          "rotation": 0,
          "target": "13-council-chamber-2"
        },
        {
          "yaw": -0.9505752494772004,
          "pitch": -0.007813198955400225,
          "rotation": 0,
          "target": "12-leads-to-council-chamber-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-mayor-corridor",
      "name": "mayor corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -2.3977298174406734,
        "pitch": 0.12271235923035739,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.481916391685637,
          "pitch": 0.3194809435380641,
          "rotation": 0,
          "target": "16-mayor-corridor-2"
        },
        {
          "yaw": 0.7933968458377763,
          "pitch": 0.1307181071502459,
          "rotation": 0,
          "target": "18-stage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-mayor-corridor-2",
      "name": "mayor corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -2.4605817884493053,
        "pitch": 0.11991701053977266,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.4712265598743635,
          "pitch": 0.07960229098133098,
          "rotation": 0,
          "target": "2-centre-room"
        },
        {
          "yaw": 0.690401051584109,
          "pitch": 0.4070838945335211,
          "rotation": 0,
          "target": "15-mayor-corridor"
        },
        {
          "yaw": -2.8859292603720625,
          "pitch": 0.09086596645768807,
          "rotation": 0,
          "target": "17-mayor-room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6664224398638972,
          "pitch": 0.009768522265053647,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 0.07036323246300746,
          "pitch": 0.06338524770038134,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 1.2211956844656608,
          "pitch": 0.060449231408277626,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 3.002064745826895,
          "pitch": 0.05812051946649888,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": -2.6293911488181028,
          "pitch": 0.018412614558922513,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "17-mayor-room",
      "name": "mayor room",
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
      "faceSize": 1920,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6502251506846601,
          "pitch": 0.18597932732541977,
          "rotation": 0,
          "target": "16-mayor-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-stage",
      "name": "stage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": 2.7293894830302943,
        "pitch": 0.14950128427966014,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": 1.8232365736086678,
          "pitch": 0.18566754706660404,
          "rotation": 0,
          "target": "15-mayor-corridor"
        },
        {
          "yaw": 2.7298953389368013,
          "pitch": -0.11605927185050646,
          "rotation": 0,
          "target": "19-balcony-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-balcony-2",
      "name": "balcony 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 480,
      "initialViewParameters": {
        "yaw": -0.7947707200362792,
        "pitch": 0.1931219056109832,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.8260751335605399,
          "pitch": 0.10025104335013602,
          "rotation": 0,
          "target": "18-stage"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
