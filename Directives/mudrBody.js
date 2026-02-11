mudaeRanker.directive('mudrBody', ['Characters', function(Characters) {
	return {
		restrict: 'A',
		scope: false,
		link: function(scope, element, attrs) {
			element.on('click', function(event) {
				if (!Characters.inMessageBox)
				{
					Characters.minimizeActiveCard();
					if (!scope.$$phase && !scope.$root.$$phase)
					{
						scope.$applyAsync();
					}
				}
			});
		}
	}
}]);