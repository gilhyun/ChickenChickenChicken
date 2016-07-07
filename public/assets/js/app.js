angular.module("myApp", ["ngTable", "ngResource"]);
(function() {
  "use strict";

  angular.module("myApp").controller("demoController", demoController);
  demoController.$inject = ["NgTableParams", "IssueService"];

  function demoController(NgTableParams, IssueService) {
    this.tableParams = new NgTableParams({}, {
      getData: function(params) {
        return IssueService.query({
          repo: 'ng-table'
        }, function(data, headersGetter) {
          return data;
        }).$promise;
      }
    });
  }
})();

(function() {
  "use strict";
  
  angular.module("myApp").factory("IssueService", ["$resource", function($resource) {
    return $resource("/api", {
      state: "open"
    }, {
      query: {
        method: "GET",
        isArray: true
      }
    });
  }]);
})();
