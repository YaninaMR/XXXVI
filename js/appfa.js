
$(document).ready(function(){

	var useruid = window.location.hash.substring(1);
	  console.log(useruid); 

	    firebase.auth().onAuthStateChanged(function(user) {
	        if (user) {
	            var containerContact = $('#follower-other');
	                   var usercod = user.uid;
	                   console.log(usercod);
				    firebase.database().ref('/user/' + useruid + '/data').on('value', function(snapshot) {
				       console.log(snapshot.child('photo').val());
				       console.log(snapshot.child('name').val());
				       console.log(snapshot.val().photo);
				       console.log(snapshot.val().name);

						var userPhoto = $('<img>', {
						  'class': 'responsive-img circle user img-cont',
						  'src': snapshot.child('photo').val()
						});

						var pName = $('<h3/>', {
						  'class': 'user-name-profile',
						}).text(snapshot.child('name').val());

						$('#user-photo').append(userPhoto);
						$('#user-name').append(pName);
				    });
	        }
	    });
	
		
});