function ViewModel(){

	this.title = "Whatever you want as the title";
	this.description = "Here is the description";
	this.headings = ["Full Name", "Phone", "Business", "Site", "Title", "Email Address", "Something else"];
    this.columnWidth = 150;
	this.entities = [
                    ["Darren Lewis", "000-111-2222","Octono Limited", "Birmingham", "Developer", "darren.lewis@octono.com" ,"another value"],
		            ["Milly Lewis", "333-444-7777", "2e2", "Leeds", "Developer", "milly@here.com","another value"],
		            ["Finley", "4444", "his business", "site", "title", "email@address","another value"],
                    ["Darren", "12345", "my business", "site", "title", "email@address","another value"],
		            ["Milly", "67890", "her business", "site", "title", "email@address","another value"],
		            ["Finley", "4444", "his business", "site", "title", "email@address","another value"]
		           ];
	this.actions = { 
                    ok: function () { alert('ok'); }, 
                    cancel: function () { alert('cancel'); },
                    create: function () { alert('create'); },
                    properties: function () { alert('properties'); },
                    remove: function () { alert('remove'); } 
                };
}

$(function () {

    ko.applyBindings(new ViewModel());

});
