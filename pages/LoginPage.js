var util=require('../util/GenericMethods.js');

var loginPage= function(){
	this.IsScreenerHomePresent=function(){
		var screenerHomeElement= element(by.css('a.logo'));
		return util.IsElementPresent(screenerHomeElement);	
	};
	
	this.IsSearchTextPresent=function(){
		var searchElement=element(by.id('input-0'));
		return util.IsElementPresent(searchElement);
	};
	
	this.IsLoginLinkPresent=function(){
		var loginLink=element(by.css('span.ng-scope:nth-child(2)'));
		return util.IsElementPresent(loginLink);
	};
};
module.exports= new loginPage();