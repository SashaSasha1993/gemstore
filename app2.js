var app = angular.module("myApp", ['storeProducts', 'avatar', 'ngRoute']);

var gem = [
    {
	"name": "Dodecahedron",
	"price": 2.95,
	"description": "The first and simply the best",
	"reviews": [{
		"stars": 5,
		"body": "Ilovethisproduct!",
		"author": "joe@codingtemple.com"

	}, {
		"stars": 1,
		"body": "Thisproductsucks",
		"author": "ripal@codingtemple.com"

	}],
	"canPurchase": true,
	"soldOut": false,
	"images": [{
		"full": "images/gem-01.gif",
		"thumb": "images/gem-01.gif"

	}]

}, {
	"name": "Pentagonal Gem",
	"price": 5.95,
	"description": "For those who like strict",
	"reviews": [{
		"stars": 5,
		"body": "Ilovethisproduct!",
		"author": "joe@codingtemple.com"

	}, {
		"stars": 1,
		"body": "Thisproductsucks",
		"author": "ripal@codingtemple.com"

	}],
	"canPurchase": true,
	"soldOut": false,
	"images": [{
		"full": "images/gem-01.gif",
		"thumb": "images/gem-01.gif"

	}]

}, {
	"name": "Krasota",
	"price": 99.95,
	"description": "The rarest gem ever",
	"reviews": [{
		"stars": 5,
		"body": "Ilovethisproduct!",
		"author": "joe@codingtemple.com"

	}, {
		"stars": 1,
		"body": "Thisproductsucks",
		"author": "ripal@codingtemple.com"

	}],
	"canPurchase": true,
	"soldOut": false,
	"images": [{
		"full": "images/gem-01.gif",
		"thumb": "images/gem-01.gif"

	}]

}, {
	"name": "Prelest",
	"price": 73.95,
	"description": "The most beatiful in our collection",
	"reviews": [{
		"stars": 5,
		"body": "Ilovethisproduct!",
		"author": "joe@codingtemple.com"

	}, {
		"stars": 1,
		"body": "Thisproductsucks",
		"author": "ripal@codingtemple.com"

	}],
	"canPurchase": true,
	"soldOut": false,
	"images": [{
		"full": "images/gem-01.gif",
		"thumb": "images/gem-01.gif"

	}]

}, {
	"name": "Izymrud",
	"price": 34.65,
	"description": "Deep green as a eyes of your ex",
	"reviews": [{
		"stars": 5,
		"body": "Ilovethisproduct!",
		"author": "joe@codingtemple.com"

	}, {
		"stars": 1,
		"body": "Thisproductsucks",
		"author": "ripal@codingtemple.com"

	}],
	"canPurchase": true,
	"soldOut": false,
	"images": [{
		"full": "images/gem-01.gif",
		"thumb": "images/gem-01.gif"

	}]

}, {
	"name": "Almaz",
	"price": 155.95,
	"description": "You whould be impressed of it's shine",
	"reviews": [{
		"stars": 5,
		"body": "Ilovethisproduct!",
		"author": "joe@codingtemple.com"

	}, {
		"stars": 1,
		"body": "Thisproductsucks",
		"author": "ripal@codingtemple.com"

	}],
	"canPurchase": true,
	"soldOut": false,
	"images": [{
		"full": "images/gem-01.gif",
		"thumb": "images/gem-01.gif"

	}]

}, {
	"name": "Diamond",
	"price": 299.95,
	"description": "The most amazing gem ever",
	"reviews": [{
		"stars": 5,
		"body": "Ilovethisproduct!",
		"author": "joe@codingtemple.com"

	}, {
		"stars": 1,
		"body": "Thisproductsucks",
		"author": "ripal@codingtemple.com"
	}],
	"canPurchase": true,
	"soldOut": false,
	"images": [{
		"full": "images/gem-01.gif",
		"thumb": "images/gem-01.gif"
	}]
    
}];
    
app.config(['$routeProvider', function ($routeProvider) {//$locationProvider.html5Mode(true);
    $routeProvider.when("/", {
        templateUrl: "templates/main.html"    }).when("/page1", {
        templateUrl: "/templates/page1.html"    }).when("/page2", {
        templateUrl: "templates/page2.html"    
    })
}]);
    
   var config = {
    apiKey: "AIzaSyAdPiuZ5roADcWPwOUA3mdr1XNRq7wELHA",
    authDomain: "sasha-43243.firebaseapp.com",
    databaseURL: "https://sasha-43243.firebaseio.com",
    projectId: "sasha-43243",
    storageBucket: "sasha-43243.appspot.com",
    messagingSenderId: "128275243636"
  };
    
  firebase.initializeApp(config);    
var database = firebase.database();
var storageRef = firebase.storage().ref();





function writeUserData() {
    for (var i = 0; i < gem.length; i++) {
        database.ref("/products/" + gem[i].name).set({
            productname : gem[i].name,
            price : gem[i].price,
            description : gem[i].description,
            canPurchase : gem[i].canPurchase,
            soldOut : gem[i].soldOut,
            images : gem[i].images
        });
    }
};
    
    
app.controller("gemStoreCtrl", ['$scope', '$http', 'AvatarFactory', function ($scope, $http, AvatarFactory) {
    $scope.avatar = AvatarFactory;
    database.ref('/products/').on('value', function (snapshot) {
        $scope.gems = snapshot.val();
        $scope.$digest();
    })


}]);


