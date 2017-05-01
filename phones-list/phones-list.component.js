angular.module('phonesList').component('phonesList', {
    templateUrl:"phones-list/phones-list.template.html",
    controller: function(Phone) {
		this.orderProp = "age";
		this.phones = Phone.query();
	}
  });

