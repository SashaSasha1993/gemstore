var app = angular.module("myApp", ['storeProducts']);
var x = [];

var gem = [{
        name: "Dodecahedron",
        price: 2.95,
        description: "The first and simply the best",
        reviews: [{
                stars: 5,
                body: "Ilovethisproduct!",
                author: "joe@codingtemple.com"
            },
            {
                stars: 1,
                body: "Thisproductsucks",
                author: "ripal@codingtemple.com"
            }],
        canPurchase: true,
        soldOut: false,
        images: [{
            full: 'images/gem-01.gif',
            thumb: 'images/gem-01.gif'
        }]
},
    {
        name: "Pentagonal Gem",
        price: 5.95,
        description: "For those who like strict",
        reviews: [{
                stars: 5,
                body: "Ilovethisproduct!",
                author: "joe@codingtemple.com"
            },
            {
                stars: 1,
                body: "Thisproductsucks",
                author: "ripal@codingtemple.com"
            }],
        canPurchase: true,
        soldOut: false,
        images: [{
            full: 'images/gem-01.gif',
            thumb: 'images/gem-01.gif'
        }]
            },
    {
        name: "Krasota",
        price: 99.95,
        description: "The rarest gem ever",
        reviews: [{
                stars: 5,
                body: "Ilovethisproduct!",
                author: "joe@codingtemple.com"
            },
            {
                stars: 1,
                body: "Thisproductsucks",
                author: "ripal@codingtemple.com"
            }],
        canPurchase: true,
        soldOut: false,
        images: [{
            full: 'images/gem-01.gif',
            thumb: 'images/gem-01.gif'
        }]
            },
    {
        name: "Prelest",
        price: 73.95,
        description: "The most beatiful in our collection",
        reviews: [{
                stars: 5,
                body: "Ilovethisproduct!",
                author: "joe@codingtemple.com"
            },
            {
                stars: 1,
                body: "Thisproductsucks",
                author: "ripal@codingtemple.com"
            }],
        canPurchase: true,
        soldOut: false,
        images: [{
            full: 'images/gem-01.gif',
            thumb: 'images/gem-01.gif'
        }]
            },
    {
        name: "Izymrud",
        price: 34.65,
        description: "Deep green as a eyes of your ex",
        reviews: [{
                stars: 5,
                body: "Ilovethisproduct!",
                author: "joe@codingtemple.com"
            },
            {
                stars: 1,
                body: "Thisproductsucks",
                author: "ripal@codingtemple.com"
            }],
        canPurchase: true,
        soldOut: false,
        images: [{
            full: 'images/gem-01.gif',
            thumb: 'images/gem-01.gif'
        }]
            },
    {
        name: "Almaz",
        price: 155.95,
        description: "You whould be impressed of it's shine",
        reviews: [{
                stars: 5,
                body: "Ilovethisproduct!",
                author: "joe@codingtemple.com"
            },
            {
                stars: 1,
                body: "Thisproductsucks",
                author: "ripal@codingtemple.com"
            }],
        canPurchase: true,
        soldOut: false,
        images: [{
            full: 'images/gem-01.gif',
            thumb: 'images/gem-01.gif'
        }]
            },
    {
        name: "Diamond",
        price: 299.95,
        description: "The most amazing gem ever",
        reviews: [{
                stars: 5,
                body: "Ilovethisproduct!",
                author: "joe@codingtemple.com"
            },
            {
                stars: 1,
                body: "Thisproductsucks",
                author: "ripal@codingtemple.com"
            }],
        canPurchase: true,
        soldOut: false,
        images: [{
            full: 'images/gem-01.gif',
            thumb: 'images/gem-01.gif'
        }]
            }
           ];



app.controller("gemStoreCtrl", function ($scope) {
    $scope.gems = gem;




});


//app.controller("ReviewController", function($scope){
//    $scope.newReview = {};
//    
//    
//    
//    $scope.addReview = function(products) {
//        if(!products.reviews){
//            products.reviews = [];
//            $scope.newReview = {};
//        }
//        
//            products.reviews.push($scope.newReview);//TODO: Make an API call to send this new review to the server};
//    }
//               });






