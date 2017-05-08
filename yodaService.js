(function (){
    var app = angular.module('angularApp');
    
    app.factory('yodaService', function($http){
        
        function talkLikeYoda (yodaSpeak){
            var promise = $http({
                method: 'GET',
                url:'https://yoda.p.mashape.com/yoda?sentence='+ yodaSpeak+"'",
                headers: {
                    "X-Mashape-Key": 'VPMy88hQzemsh6ryG0sXLzBeN5nip1a9h2MjsnafLj0Cc7rLvB',
                    "Accept": "text/plain"
                }
            }).then(function(input) {
                speech = input;
                return speech
            });  
                        return promise;
        }  
        return{
            talkLikeYoda: talkLikeYoda
        }
    })
})();