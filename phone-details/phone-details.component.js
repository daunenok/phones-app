angular.module('phoneDetails').component('phoneDetails', {
    templateUrl:'phone-details/phone-details.template.html',
    controller: ["Phone", "$routeParams", function(Phone, $routeParams) {
    	var self = this;

    	self.setImage = function(imageUrl) {
    		self.mainImageUrl = imageUrl;
    	};

		self.phone = Phone.get({phoneId: $routeParams.phoneId},
            function(phone) {
                self.setImage(phone.images[0]);
            });
	}]
  });