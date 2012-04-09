
//LATEST VERSION OF THE CODE IS AVAILABLE AT http://github.com/Daxaar

function ViewModel(){

	this.title = "This is the title of the page";
	this.description = "Here is the description";
    //Add as many columns as you like to the headings array
	this.headings = ["Full Name", "Phone", "Business", "Site", "Title", "Email Address"];
    //Fixed width for now.  I'll hook something up that sets based on length of content
    this.columnWidth = 150;
	//Array of data.  Make sure the number of elements in the array matches the heading count
    this.entities = [
                    ["Darren Lewis", "000-111-2222","Octono Limited", "Birmingham", "Developer", "darren@octono.com"],
		            ["Noriyuki Haga", "333-444-7777", "Swan Yamaha", "Up North", "Motorcycle Rider", "nori@here.com"],
                    ["Darren Lewis", "000-111-2222", "Octono Limited", "Birmingham", "Developer", "darren@octono.com"],
		            ["Noriyuki Haga", "333-444-7777", "Swan Yamaha", "Up North", "Motorcycle Rider", "nori@here.com"],
                    ["Darren Lewis", "000-111-2222", "Octono Limited", "Birmingham", "Developer", "darren@octono.com"],
		            ["Noriyuki Haga", "333-444-7777", "Swan Yamaha", "Up North", "Motorcycle Rider", "nori@here.com"],
                    ["Darren Lewis", "000-111-2222", "Octono Limited", "Birmingham", "Developer", "darren@octono.com"],
		            ["Noriyuki Haga", "333-444-7777", "Swan Yamaha", "Up North", "Motorcycle Rider", "nori@here.com"],
                    ["Darren Lewis", "000-111-2222", "Octono Limited", "Birmingham", "Developer", "darren@octono.com"],
		            ["Noriyuki Haga", "333-444-7777", "Swan Yamaha", "Up North", "Motorcycle Rider", "nori@here.com"],
                    ["Darren Lewis", "000-111-2222", "Octono Limited", "Birmingham", "Developer", "darren@octono.com"],
		            ["Noriyuki Haga", "333-444-7777", "Swan Yamaha", "Up North", "Motorcycle Rider", "nori@here.com"],
                    ["Darren Lewis", "000-111-2222", "Octono Limited", "Birmingham", "Developer", "darren@octono.com"],
		            ["Noriyuki Haga", "333-444-7777", "Swan Yamaha", "Up North", "Motorcycle Rider", "nori@here.com"]
		           ];
    //actions for each of the buttons on the form
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
