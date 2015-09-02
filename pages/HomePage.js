var util=require('../util/GenericMethods.js');

var homePage=function(){
	this.enterCompanyName=function(companyName){
		var ele=element(by.id('input-0'));
		util.enterValue(ele,companyName);
		
	};

	this.getSearchCounts=function(){
		return element.all(by.css('li.ng-scope span.ng-scope')).then(function(elements){
			return elements.length;
		});
	};
};
module.exports= new homePage();