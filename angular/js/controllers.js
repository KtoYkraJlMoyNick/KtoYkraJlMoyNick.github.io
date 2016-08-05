"use strict";
// контроллер filterCtrlLeft
filterApp.controller('filterCtrlLeft', function ($scope, $http, infoBlock){

  $scope.sortType     = 'name'; // значение сортировки по умолчанию
  $scope.sortReverse  = true;  // обратная сортировка

// получения json
  $http.get('items.json').success(function(data) {
    $scope.items = data;
  });

// сортировка по алфавиту
  $scope.sortByName = function() {
   if ( $scope.sortReverse ) {
     $scope.sortReverse  = false;
   } else {
     $scope.sortReverse  = true;
   }
  };

// добавление данных в сервис
  $scope.addInfo = function (item,$event) {
    var target = $event.target,
        activated = document.querySelector('.activated');

    if (activated) {
      activated.classList.remove('activated');
    }

    while (target.tagName != 'LI') {
      target = target.parentNode;
    }
    infoBlock.setInfo(item);
    target.classList.add('activated');
    //angular.element(target).addClass('activated');
  }
});

// контроллер filterCtrlRight
filterApp.controller('filterCtrlRight', function($scope, $http, infoBlock){

  $scope.selection = [];

// получения json
  $http.get('items.json').success(function(data) {
    $scope.items = data;
  });

// получение возможных вариантов категорий/свойств элементов списка
  $scope.getCategories = function () {
    var unit = $scope.items,
        resultArr = [];

    for (var i=0; i<unit.length; i++) {
      resultArr = resultArr.concat(unit[i].flags);
    }

    return unique(resultArr);
  }

 // Определение выбранных свойств для фильтра
    $scope.toggleSelection = function toggleSelection(property) {
         var idx = $scope.selection.indexOf(property);
     
         if (idx > -1) {
           $scope.selection.splice(idx, 1);
         } else {
           $scope.selection.push(property);
         }
       };

// Фильтр элементов списка по выбранным свойствам
  $scope.itemFilter = function(item) {
   var filters = $scope.selection || [];
   var matched = true;

   filters.forEach(function(property) {
     var matchingService = item.flags.filter(function(element, idx, array) {
     return element == property;
      }) || [];
      matched = matched && matchingService.length > 0;
   });
   return matched;
 };

// добавление данных в сервис
 $scope.addInfo = function (item, $event) {
   var target = $event.target,
       activated = document.querySelector('.activated');

   if (activated) {
     activated.classList.remove('activated');
   }

   while (target.tagName != 'LI') {
     target = target.parentNode;
   }

   infoBlock.setInfo(item);
   angular.element(target).addClass('activated');
 }

});

function unique(arr) {
  var obj = {};
  for (var i = 0; i < arr.length; i++) {
    var str = arr[i];
    obj[str] = true;
  }
  return Object.keys(obj);
}

// контроллер middleCtrl
filterApp.controller('middleCtrl', function($scope, infoBlock){
  $scope.title =  "info";
  $scope.name;
  $scope.flags = [];

  $scope.$watch(
        function(){ return infoBlock.getInfo()},
        function(newVal, oldVal) {
            $scope.name = newVal.name;
            $scope.flags = newVal.flags;
        },
        true
    )
});
