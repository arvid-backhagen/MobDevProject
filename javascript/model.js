
function cb(data){
	console.log(data);
};

$.ajax( {
	url: 'https://www.kth.se/api/places/v3/room/name/v2',
	headers: {'api_key': 'arjYt564HFYiiias342z'},
	success: function(data) {
		console.log(data);
		cb(data);
	},
	error: function(exception){
		console.log(exception);
	}
});


var vhuset = {"V1": [
  {
    "_id": "5b3e2d05-8da8-405e-ac62-7960935363ab",
    "id": 5513,
    "uid": "5b3e2d05-8da8-405e-ac62-7960935363ab",
    "roomNumber": "153",
    "placeName": "V1",
    "kthPopularName": "",
    "kthLokalkod": "V1",
    "name": "",
    "typeName": "Hörsal",
    "campus": "KTH Campus",
    "buildingName": "Väg och vatten",
    "buildingUid": "8ba7e678-f7ee-4c19-a45b-bbf8c8196587",
    "streetAddress": "Teknikringen",
    "streetNumber": "76",
    "streetAddressDisabled": "",
    "streetNumberDisabled": "",
    "country": "Sverige",
    "city": "Stockholm",
    "zip": "114 28",
    "floor": "4",
    "geoData": {
      "lat": 59.351143,
      "long": 18.071363
    },
    "isSchedulable": true,
    "isBookable": true,
    "imageUrls": [
      {
        "url": "https://facility.admin.kth.se/Undervisningslokaler/Bilder_API/V_huset/Bilder/V1_Page_1.jpg",
        "_id": "5915314e44505930fe850f41"
      },
      {
        "url": "https://facility.admin.kth.se/Undervisningslokaler/Bilder_API/V_huset/Bilder/V1_Page_2.jpg",
        "_id": "5915314e44505930fe850f40"
      },
      {
        "url": "https://facility.admin.kth.se/Undervisningslokaler/Bilder_API/V_huset/Info/V1_A4_ny_logga%20%5bConverted%5d.jpg",
        "_id": "5915314e44505930fe850f3f"
      }
    ],
    "url": "",
    "numSeats": "110",
    "numSeatsExamination": "18",
    "floorName": "04",
    "floorId": "90",
    "floorUid": "428eca94-5632-41c8-aca0-9bc8ae8755f1",
    "shouldBeIndexed": "true",
    "equipment": [
      {
        "name": {
          "sv": "Trådlöst nätverk",
          "en": "Wireless network"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Trådlöst nätverk",
          "en": "Wireless network"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Projektor",
          "en": "Projector"
        },
        "groupName": "Teknikstöd",
        "makeName": "Mitsubishi",
        "description": {
          "sv": "Projektor",
          "en": "Projector"
        },
        "componentGroup": true,
        "groupCount": 1
      },
      {
        "name": {
          "sv": "Overheadprojektor",
          "en": "Overhead projector"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Overheadprojektor",
          "en": "Overhead projector"
        },
        "componentGroup": true,
        "groupCount": 1
      },
      {
        "name": {
          "sv": "Ingång",
          "en": "Input"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "VGA-ingång",
          "en": "VGA input"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Högtalare",
          "en": "Loudspeakers"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Högtalare",
          "en": "Loudspeakers"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Mörkläggning",
          "en": "Blackout"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Mörkläggningsgardiner",
          "en": "Blackout curtains"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Kontroll",
          "en": "Control"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Touchpanel",
          "en": "Touch Panel"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Whiteboardtavla",
          "en": "Whiteboard"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Whiteboardtavla",
          "en": "Whiteboard"
        },
        "componentGroup": false,
        "groupCount": 0
      }
    ],
    "updatedAt": "2017-05-12T03:50:00.206Z",
    "kthLokalBeteckning": "CAMPUS\\AB0043\\011\\04\\153",
    "buildingId": 19,
    "requiresUpdate": true,
    "roomId": 5513,
    "__v": 13
  }
], "V2" : [
  {
    "_id": "90b43360-caed-4c81-8b35-ac8d6b537571",
    "id": 5619,
    "uid": "90b43360-caed-4c81-8b35-ac8d6b537571",
    "roomNumber": "253",
    "placeName": "V2",
    "kthPopularName": "",
    "kthLokalkod": "V2",
    "name": "",
    "typeName": "Hörsal",
    "campus": "KTH Campus",
    "buildingName": "Väg och vatten",
    "buildingUid": "8ba7e678-f7ee-4c19-a45b-bbf8c8196587",
    "streetAddress": "Teknikringen",
    "streetNumber": "76",
    "streetAddressDisabled": "",
    "streetNumberDisabled": "",
    "country": "Sverige",
    "city": "Stockholm",
    "zip": "114 28",
    "floor": "5",
    "geoData": {
      "lat": 59.351143,
      "long": 18.071363
    },
    "isSchedulable": true,
    "isBookable": true,
    "imageUrls": [
      {
        "url": "https://facility.admin.kth.se/Undervisningslokaler/Bilder_API/V_huset/Bilder/V2_Page_1.jpg",
        "_id": "5915314e44505930fe850f4d"
      },
      {
        "url": "https://facility.admin.kth.se/Undervisningslokaler/Bilder_API/V_huset/Bilder/V2_Page_2.jpg",
        "_id": "5915314e44505930fe850f4c"
      },
      {
        "url": "https://facility.admin.kth.se/Undervisningslokaler/Bilder_API/V_huset/Info/V2_A4_ny_logga%20%5bConverted%5d.jpg",
        "_id": "5915314e44505930fe850f4b"
      }
    ],
    "url": "",
    "numSeats": "110",
    "numSeatsExamination": "18",
    "floorName": "05",
    "floorId": "91",
    "floorUid": "636e3d88-a74b-4546-bd2f-103754a40f60",
    "shouldBeIndexed": "true",
    "equipment": [
      {
        "name": {
          "sv": "Trådlöst nätverk",
          "en": "Wireless network"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Trådlöst nätverk",
          "en": "Wireless network"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Projektor",
          "en": "Projector"
        },
        "groupName": "Teknikstöd",
        "makeName": "Mitsubishi",
        "description": {
          "sv": "Projektor",
          "en": "Projector"
        },
        "componentGroup": true,
        "groupCount": 1
      },
      {
        "name": {
          "sv": "Overheadprojektor",
          "en": "Overhead projector"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Overheadprojektor",
          "en": "Overhead projector"
        },
        "componentGroup": true,
        "groupCount": 1
      },
      {
        "name": {
          "sv": "Ingång",
          "en": "Input"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "VGA-ingång",
          "en": "VGA input"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Högtalare",
          "en": "Loudspeakers"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Högtalare",
          "en": "Loudspeakers"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Mörkläggning",
          "en": "Blackout"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Mörkläggningsgardiner",
          "en": "Blackout curtains"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Kontroll",
          "en": "Control"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Touchpanel",
          "en": "Touch Panel"
        },
        "componentGroup": false,
        "groupCount": 0
      },
      {
        "name": {
          "sv": "Whiteboardtavla",
          "en": "Whiteboard"
        },
        "groupName": "Teknikstöd",
        "makeName": "",
        "description": {
          "sv": "Whiteboardtavla",
          "en": "Whiteboard"
        },
        "componentGroup": false,
        "groupCount": 0
      }
    ],
    "updatedAt": "2017-05-12T03:50:00.206Z",
    "kthLokalBeteckning": "CAMPUS\\AB0043\\011\\05\\253",
    "buildingId": 19,
    "requiresUpdate": true,
    "roomId": 5619,
    "__v": 13
  }
]
}