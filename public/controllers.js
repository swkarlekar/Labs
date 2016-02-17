var webcontrollers = angular.module('webcontrollers', []);

webcontrollers.controller('QuizGameController', ['$scope', '$timeout', '$interval', '$timer', function($scope, $timeout, $interval, $timer) {
    $scope.tableElements = [
    'Hydrogen', 'Helium', 'Lithium', 'Beryllium', 'Boron', 'Carbon', 'Nitrogen', 'Oxygen', 'Fluorine', 'Neon', 'Sodium', 'Magnesium', 'Aluminum', 'Silicon', 'Phosphorus', 'Sulfur', 'Chlorine', 'Argon', 'Potassium', 'Calcium', 'Scandium', 'Titanium', 'Vanadium', 'Chromium', 'Manganese', 'Iron', 'Cobalt', 'Nickel', 'Copper', 'Zinc', 'Gallium', 'Germanium', 'Arsenic', 'Selenium', 'Bromine', 'Krypton', 'Rubidium', 'Strontium', 'Yttrium', 'Zirconium', 'Niobium', 'Molybdenum', 'Technetium', 'Ruthenium', 'Rhodium', 'Palladium', 'Silver', 'Cadmium', 'Indium', 'Tin', 'Antimony', 'Tellurium', 'Iodine', 'Xenon', 'Cesium', 'Barium', 'Lanthanum', 'Cerium', 'Praseodymium', 'Neodymium', 'Promethium', 'Samarium', 'Europium', 'Gadolinium', 'Terbium', 'Dysprosium', 'Holmium', 'Erbium', 'Thulium', 'Ytterbium', 'Lutetium', 'Hafnium', 'Tantalum', 'Tungsten', 'Rhenium', 'Osmium', 'Iridium', 'Platinum', 'Gold', 'Mercury', 'Thallium', 'Lead', 'Bismuth', 'Polonium', 'Astatine', 'Radon', 'Francium', 'Radium', 'Actinium', 'Thorium', 'Protactinium', 'Uranium', 'Neptunium', 'Plutonium', 'Americium', 'Curium', 'Berkelium', 'Californium', 'Einsteinium', 'Fermium', 'Mendelevium', 'Nobelium', 'Lawrencium', 'Rutherfordium', 'Dubnium', 'Seaborgium', 'Bohrium', 'Hassium', 'Meitnerium', 'Darmstadtium', 'Roentgenium', 'Copernicium', 'Ununtrium', 'Flerovium', 'Ununpentium', 'Livermorium', 'Ununseptium', 'Ununoctium', 
    ];
    $scope.answeredElements = [];
    $scope.totalTime = 30; //in seconds
    var intervalPromise = null;
    var timeoutPromoise = null;

    $scope.start = function() {
        $scope.$broadcast('timer-start');
        //$scope.timerRunning = true;
        var timeLeft = parseInt($scope.totalTime.value); //in seconds
        $scope.answer = null;
        intervalPromise = $interval(function() { timeLeft -= 1;  document.querySelector("#time").textContent = timeLeft; }, 1000);
        timeoutPromoise = $timeout(function() {$scope.stopTimer();}, $scope.totalTime*1000)
    }
    $scope.stop = function() {
        //$scope.$broadcast('timer-stop');
        //$scope.timerRunning = false;
    }
    $scope.reset = function() {
        $scope.clearContents();
        $interval.cancel(intervalPromise);
        $timeout.cancel(timeoutPromoise);
        document.querySelector("#time").textContent = totalTime;
    }
    $scope.checkAnswer = function() {
    	if(containsElement($scope.tableElements, $scope.answer) && !containsElement($scope.answeredElements, $scope.answer)){
    		$scope.gotRightAnswer($scope.answer);
            $scope.recentlyAnswered = $scope.answer;
    	}
		var output = document.querySelector("#length");
    	output.textContent = $scope.answeredElements;
    }
	$scope.clearContents = function() {
		$scope.answer = null;
	}

	$scope.gotRightAnswer = function(x) {
		$scope.answeredElements.push(x)
        $scope.clearContents();
        $scope.loadSVG(x);
	}
    $scope.loadSVG = function(x) {
        var mySVG = document.getElementById("periodicTable");
        var svgDoc = mySVG.contentDocument; 
        var alpha = svgDoc.getElementById(x);
        alpha.setAttribute("filter", "url(#f1)");   
    }
    $scope.stopTimer = function() {
        $scope.answer = "Time's up!"
        $scope.stop = true;
        $interval.cancel(intervalPromise);
    }
    function containsElement(arr, x) {
        if(x != null || x != undefined){
            for(var i = 0; i < arr.length; i++){
                if(arr[i].toUpperCase() === x.toUpperCase()){
                    return true;
                }
            }
        } 
        return false;
    }
}]);

webcontrollers.controller('ContentController', ['$scope', function($scope) {
    $scope.extracurriculars = [
        {name: 'TARC', hoursPerWeek:'1.5 hrs'},
        {name: 'SHS', hoursPerWeek:'1.5 hrs'},
        {name: 'Club Luminous', hoursPerWeek:'1.5 hrs'},
        {name: 'NSA', hoursPerWeek:'1.5 hrs'},
    ];
}]);

webcontrollers.controller('LabController', ['$scope', function($scope) {
    $scope.labs = [
        {name: 'Lab00', url:'Lab00.html'},
        {name: 'Lab01', url: 'Lab01.html'}
    ];
}]);
