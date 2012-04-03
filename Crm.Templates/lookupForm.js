function ViewModel(){

	this.title = "Here is the title";
	this.description = "Here is the description";

	this.headings = ["Name","Phone","Business","Site","Title","Email Address"],

	this.records = [
		{name:"Darren",phone:"12345",business:"my business",site:"site",title:"title",email:"email@address"},
		{name:"Milly",phone:"67890",business:"her business",site:"site",title:"title",email:"email@address"},
		{name:"Finley",phone:"4444",business:"his business",site:"site",title:"title",email:"email@address"}
		];
}

$(function(){

	ko.applyBindings(new ViewModel());

});
