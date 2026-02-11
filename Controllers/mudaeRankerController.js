mudaeRanker.controller('mudaeRankerController', ['$scope', '$http', 'Characters', function($scope, $http, Characters) {

$scope.characters = Characters.getCharacters();
$scope.getModeClassName = Characters.getModeClassName;
$scope.getThemeClassName = Characters.getThemeClassName;
$scope.getNextModeName = Characters.getNextModeName;
$scope.getLeftCompare = Characters.getLeftCompare;
$scope.getRightCompare = Characters.getRightCompare;
$scope.getRankingInProgress = Characters.getRankingInProgress;
$scope.hasCharacters = Characters.hasCharacters;
$scope.toggleTheme = Characters.toggleTheme;

$scope.inputMode = Characters.getInputMode();
$scope.setInputMode = function (mode)
{
	$scope.inputMode = mode;
	Characters.setInputMode(mode);
}

$scope.sortableConfig = {
	onEnd: function (event)
	{
		Characters.dragAndDropSortEnd(event);
	}
}

}]);
