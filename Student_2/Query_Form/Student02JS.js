function summary(forms){
    document.getElementById("u_name").innerHTML=form.Name.value;
    document.getElementById("u_email").innerHTML=form.Email.value;
    document.getElementById("summary").style.display="block";
}

function edit(b){
    document.getElementById("summary").style.display="none"
    document.getElementById("queryform").style.display="block"
}

function querychecker(){
    let inputtedName = document.formquery.name.value;
    let inputtedMail = document.formquery.mail.value;
    let inputteddetails = document.formquery.details.value;
        
    if (inputtedName == ""){
        alert("Please enter a name.");
        return false;
    }

    if (inputtedMail == ""){ 
        alert("Please input a valid Email"); 
        return false;
    }

    if (inputteddetails == ""){
        alert("Please input Details");
        return false;
    }

    let count=0;
    for (leti=0;i<form.length;i++){
            if (form[i].checked){
                values[values.length]=form[i].value;
                count+=1
	    }
    
        if(count==o){
            alert("details input is required");
            flag=false;
        }

        if (flag==true){
            let var1=document.getElementById("queryform");
            var1.style("display")="none";
            summary(form);
        } 
    }

    let count = 0;
    for (let i=0; i < form.length; i++){
        if (form(i).checked){
           values(values.length)=form[i],value;
		   count+=1
	    }
        if (count=0){
            alert("subject is required")
	        return false;
        }
        if (flag=true){
            let var1=document.getElementById("queryform")
		    var1.style["display"] = "none";
		    summary(form);
        }
    }
}