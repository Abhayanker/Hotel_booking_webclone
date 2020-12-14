function validateForm()
{
var x=myForm.fname.value;
var y=myForm.textarea.value;
var xlen=myForm.mob.value.length;
var numbers = /^[0-9]+$/; 
var a=" "; 
var e=myForm.email.value;
var atpos=e.indexOf("@");
var dotpos=e.indexOf(".");
if (x==null || x=="")
  {
  	a+="First name must be filled out\n";
  }
if(xlen<10 || xlen>10)
  {
	a+="mobile no should be 10 digits\n";
  }
if(myForm.mob.value.match(numbers))  
{  
 
}  
else  
{  
a+="mobile no must have numeric characters only\n";  

}

if (y==null || y=="")
  {
  	a+="First name must be filled out\n";
  }

if ( (myForm.executive[0].checked == false ) && (myForm.executive[1].checked == false ) )
  {
	a+="Confirm to Talk\n";
  }

if (atpos<1 || dotpos<atpos+2 || dotpos+2>=e.length)
  {
  a+="enter valid valid e-mail address \n";
   }

	
if(a==" ")
	{
	alert("Will Responce you ASAP");
	return true;
	}
	else
	{
	alert(a);
	}
}