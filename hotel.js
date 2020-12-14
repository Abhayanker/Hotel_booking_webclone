function validateform()
{
var x=myform.rooms.value;
if(x==null || x=="")
  {
  	a+="Select the No. of Rooms\n";
  }

if(a=="")
	{
	alert("Your Room is Booked We will send you Mail regarding to your Booking");
	return true;
	}
	else
	{
	alert(a);
	}
}