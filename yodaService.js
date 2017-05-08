(function (){
    var app = angular.module('angularApp');
    
    app.factory('yodaService', function($http){
        function yodaInput (yodaSpeak){
            return yodaSpeak
        }
        
        
        function talkLikeYoda (){
            var promise = $http({
                method: 'GET',
                url:'https://yoda.p.mashape.com/yoda?sentence='+ yodaInput
'
            }).then(function(input) {
                console.log(input)
                ;
                
                });
                        return promise;
        }  
        return{
            yodaInput:yodaInput,
            talkLikeYoda: talkLikeYoda
        }
    })
})();