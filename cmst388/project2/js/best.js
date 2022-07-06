

function runit(blam)
{

  var alpha = /^[a-zA-Z]+$/;
  var alphanum = /[a-zA-Z0-9]+/;
  var emailx = /^.+@.+$/;
  var acodex = /[0-9]{3}/;
  var numberx = /[0-9]{7}/;
  var first = blam.fname.value;
  var last = blam.lname.value;
  var address = blam.address.value;
  var city = blam.city.value;
  var state = blam.state.value;
  var acode = blam.acode.value;
  var number = blam.number.value;
  var email = blam.email.value;
  var meal = blam.meal.value;
  var contact = blam.contact.value;

for (var i = 0; i < blam.length; i++) {
  if (first == "")
    {
      alert("FIRST NAME NEEDED");
      first.focus();
        return false;
     }

  if (!(first.match(alpha)))
  {
    alert("FIRST NAME A-Z a-z NEEDED");
    first.focus();
      return false;
  }

  if (last == "")
    {
      alert("LAST NAME NEEDED");
      last.focus();
        return false;
     }

  if (!(last.match(alpha)))
  {
    alert("LAST NAME A-Z a-z NEEDED");
    last.focus();
      return false;
  }

  if (address == "")
    {
      alert("ADDRESS NEEDED");
      address.focus();
        return false;
     }

  if (!(address.match(alphanum)))
  {
    alert("ADDRESS 0-9 A-Z a-z NEEDED");
    first.focus();
      return false;
  }

  if (city == "")
    {
      alert("CITY NEEDED");
      city.focus();
        return false;
     }

  if (state == "")
    {
      alert("STATE NEEDED");
      state.focus();
        return false;
     }

   if (acode == "")
     {
       alert("AREA CODE NEEDED");
       state.focus();
         return false;
      }

  if (!(acode.match(acodex)))
  {
    alert("AREA CODE [###] NEEDED");
    first.focus();
      return false;
  }

  if (number == "")
    {
      alert("NUMBER NEEDED");
      state.focus();
        return false;
     }

   if (email == "")
     {
       alert("EMAIL NEEDED");
       email.focus();
         return false;
      }

   if (!(email.match(emailx)))
   {
     alert("EMAIL [abc123@456xyz.all] NEEDED");
     first.focus();
       return false;
   }

   if (meal == "")
     {
       alert("MEAL NEEDED");
       state.focus();
         return false;
      }

      if (contact == "")
        {
          alert("CONTACT NEEDED");
          state.focus();
            return false;
         }
}


}
