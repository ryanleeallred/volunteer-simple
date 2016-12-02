var app = angular.module('app', ['ngTouch', 'ui.grid']);

app.controller('MainCtrl', ['$scope', function ($scope) {

  $scope.gridOptions = {
    enableSorting: false,
    columnDefs: [
      {
          field: 'Task'

      },
      {
          field: './pdf/death_date_and_maiden_name.pdf',
          displayName: 'Instructions',
          enableCellEdit: false,
          cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a ng-href="{{col.field}}" class="pdf_link" download="death_date_and_maiden_name.pdf">Death Date & Maiden Name Instructions</a></div>'
      },
      {
          field: 'http://bit.ly/2gatfNk',
          displayName: 'Document',
          enableCellEdit: false,
          cellTemplate: '<div class="ngCellText" ng-class="col.colIndex()"><a ng-href="{{col.field}}" class="doc_link">http://bit.ly/2gatfNk</a></div>'
      }
    ],
  };


  $scope.gridOptions.data = [
    {
        "Task": "Find a Death Date",
        "Instructions": "",
        "Link": ""
    },
    {
        "Task": "Find a Maiden Name",
        "Instructions": "",
        "Link": ""
    }
  ];
    // },
    // {
    //     "Title": "Million Maiden Names Project",
    //     "Link": ""
    // },
    // {
    //     "Title": "FamilySearch Coverage Project",
    //     "Link": "Carney"
    // },
    // {
    //     "Title": "Academic Partner Projects",
    //     "Link": "Carney"
    // },
    // {
    //     "Title": "Deep Learning Project",
    //     "Link": "Carney"
    // }

}]);
