var GenericMethods=function(){
	
	this.clickElement=function(element){
		element.click();
	};
	
	this.enterValue=function(element,value){
		element.sendKeys(value);
	};
	
	this.clearText=function(element){
		element.clear();
	};
	
	this.getAttribute=function(element,value){
		return element.getAttribute(value);
	};
	
	this.clickFirstElement=function(items){
		items.first().click();
		
	};
	
	this.IsElementPresent=function(element){
		return element.isPresent();
	};
};

module.exports= new GenericMethods();