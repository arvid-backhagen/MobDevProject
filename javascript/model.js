var Model = function() {
	var user = "User"


	this.getAllRooms = function (cb){
		$.ajax( {
			url: 'https://www.kth.se/api/places/v3/room/id/0e2af584-d1d1-40c8-83b1-e3fdb285dcc5',
			headers: {
				'name': 'api_key',
				'in': 'header',
				'value': 'arjYt564HFYiiias342z'
			},
			success: function(data) {
				console.log(data)
				cb(data);
			}
		})
	}

	this.getRoom = function (cb) {
		$.ajax( {
			url: 'https://www.kth.se/api/places/v3/room/id/0e2af584-d1d1-40c8-83b1-e3fdb285dcc5',
			headers: {
				'name': 'api_key',
				'value': 'arjYt564HFYiiias342z'
			},
			success: function(data) {
				console.log(data)
				cb(data);
			}
		})
	}
}

var model = new Model();
var first = model.getAllRooms();
var second = model.getRoom();
console.log(first);
console.log(second);