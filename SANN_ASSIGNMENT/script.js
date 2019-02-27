for(var i=0; i<5; i++){
    document.getElementById('customerID-'+ i).innerHTML =text[i].Customer_ID;
    document.getElementById('customerNAME-'+ i).innerHTML = text[i].Customer_Name;
    document.getElementById('businessNAME-'+ i).innerHTML =text[i].Business_Name;
    document.getElementById('emailID-'+ i).innerHTML =text[i].Email_ID;
    document.getElementById('mobileNo-'+ i).innerHTML =text[i].Mobile_Number;
    document.getElementById('businessLocation-'+ i).innerHTML =text[i].Business_Location;
}