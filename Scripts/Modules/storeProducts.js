angular.module("storeProducts", []);

angular.module("storeProducts").directive("gemPanels", function(){
    return {
        restrict: 'A',        
        templateUrl: './templates/store-panels.html',  
        controller:['$scope', function($scope) {
            $scope.tab = 1;
            $scope.selectTab = function(newTab){
            $scope.tab = newTab;
        }
        }
        
    ]
    }});



angular.module("storeProducts").directive("storeReviews", function() {
    return{
     restrict: 'A',
        templateUrl:'./templates/store-review.html',
        controller: ['$scope', function($scope) {
          $scope.newReview = {};
    
    
    
    $scope.addReview = function(product) {
        if(!product.reviews){
            product.reviews = [];
            $scope.newReview = {};
        }
        
            product.reviews.push($scope.newReview);  
        }
    } ]
                    
    }
});


