var Model = function() {
	var user = "User"


	this.getAllRooms = function (cb){
		$.ajax( {
			url: 'https://www.kth.se/api/places/v3/room/id/0e2af584-d1d1-40c8-83b1-e3fdb285dcc5',
			headers: {
				'api_key': 'arjYt564HFYiiias342z'
			},
			success: function(data) {
				console.log(data)
				cb(data);
			}
		})
	}
}

var model = new Model();
model.getAllRooms(function(room){
	var najs = room;
	console.log(najs)
});
