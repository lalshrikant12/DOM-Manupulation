var lis=document.querySelector("li");

for(var i=0;i<lis.length;i++)
{
	lis[i].addEventListner("mouseover", function()
	{
		this.style.color="green";
	});

	lis[i].addEventListner("mouseout", function()
		{
			this.style.color="black";
		});
	lis[i].addEventListner("mouseout", function()
		{
			this.classList.toggle("done");
		});
}
