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
	
	this.clickFirstElement=functions(items){
		items.first().click();
	};
};

module.exports= new GenericMethods();