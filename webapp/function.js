function next(){
    var firstname = document.getElementsByClassName("fn")[0].value;
    var middlename = document.getElementsByClassName("mn")[0].value;
    var surname = document.getElementsByClassName("sn")[0].value;

    var fullname = document.getElementsByClassName("res-nm")[0].innerHTML = surname + ", " + firstname + " " + middlename;
    var id_no = document.getElementsByClassName("res-studno")[0].innerHTML = document.getElementsByClassName("studno")[0].value;
    var section = document.getElementsByClassName("res-grdsec")[0].innerHTML = document.getElementsByClassName("sctn")[0].value;

    if(firstname.length == 0 || surname.length == 0){
        alert("Please fill all the required informations.");
    }

    if(!localStorage.Student_Name)
    localStorage.Student_Name = JSON.stringify([])
    Student_Name = JSON.parse(localStorage.Student_Name)
    Student_Name.forEach(function(info){})

    if(fullname){
        Student_Name.push(fullname)
        localStorage.Student_Name = JSON.stringify(Student_Name)
        Student_Name.forEach(function(info){})
    }

    if(!localStorage.Student_id_no)
    localStorage.Student_id_no = JSON.stringify([])
    Student_id_no = JSON.parse(localStorage.Student_id_no)
    Student_id_no.forEach(function(info){})

    if(id_no){
        Student_id_no.push(id_no)
        localStorage.Student_id_no = JSON.stringify(Student_id_no)
        Student_id_no.forEach(function(info){})
    }

    if(!localStorage.Student_Section)
    localStorage.Student_Section = JSON.stringify([])
    Student_Section = JSON.parse(localStorage.Student_Section)
    Student_Section.forEach(function(info){})

    if(section){
        Student_Section.push(section)
        localStorage.Student_Section = JSON.stringify(Student_Section)
        Student_Section.forEach(function(info){})
    }
}


function calculate(){
    var df2 = document.getElementsByClassName("df2")[0].value;
    var entrep = document.getElementsByClassName("entrep")[0].value;
    var gb2 = document.getElementsByClassName("gb2")[0].value;
    var gc2 = document.getElementsByClassName("gc2")[0].value;
    var gp2 = document.getElementsByClassName("gp2")[0].value;
    var pe4 = document.getElementsByClassName("pe4")[0].value;
    var ridl2 = document.getElementsByClassName("ridl2")[0].value;
    var rp = document.getElementsByClassName("rp")[0].value;
    var wi = document.getElementsByClassName("wi")[0].value;

    if(!df2){
      alert("Invalid")
      
    }

    var total = document.getElementsByClassName("res-tog")[0].innerHTML = df2 + entrep + gb2 + gc2 + gp2 + pe4 + ridl2 + rp + wi;
    var average = document.getElementsByClassName("res-ga")[0].innerHTML = total/9;

    if(average >= 90){
        document.getElementsByClassName("res-rem")[0].innerHTML = "OUTSTANDING (PASSED)";
    }
    else if(average >= 85){
        document.getElementsByClassName("res-rem")[0].innerHTML = "VERY SATISFACTORY (PASSED)";
    }
    else if(average >= 80){
        document.getElementsByClassName("res-rem")[0].innerHTML = "SATISFACTORY (PASSED)";
    }
    else if(average >= 75){
        document.getElementsByClassName("res-rem")[0].innerHTML = "FAIRLY SATISFACTORY (PASSED)";
    }
    else if(average < 75){
        document.getElementsByClassName("res-rem")[0].innerHTML = "DID NOT MEET EXPECTATIONS (FAILED)";
    }

    if(!localStorage.Drafting_2)
    localStorage.Drafting_2 = JSON.stringify([])
    Drafting_2 = JSON.parse(localStorage.Drafting_2)
    Drafting_2.forEach(function(grade){})

    if(df2){
        Drafting_2.push(df2)
        localStorage.Drafting_2 = JSON.stringify(Drafting_2)
        Drafting_2.forEach(function(grade){})
    }

    if(!localStorage.Entrepreneurship)
    localStorage.Entrepreneurship = JSON.stringify([])
    Entrepreneurship = JSON.parse(localStorage.Entrepreneurship)
    Entrepreneurship.forEach(function(grade){})

    if(entrep){
        Entrepreneurship.push(entrep)
        localStorage.Entrepreneurship = JSON.stringify(Entrepreneurship)
        Entrepreneurship.forEach(function(grade){})
    }

    if(!localStorage.General_Biology_2)
    localStorage.General_Biology_2 = JSON.stringify([])
    General_Biology_2 = JSON.parse(localStorage.General_Biology_2)
    General_Biology_2.forEach(function(grade){})

    if(gb2){
        General_Biology_2.push(gb2)
        localStorage.General_Biology_2 = JSON.stringify(General_Biology_2)
        General_Biology_2.forEach(function(grade){})
    }

    if(!localStorage.General_Chemistry_2)
    localStorage.General_Chemistry_2 = JSON.stringify([])
    General_Chemistry_2 = JSON.parse(localStorage.General_Chemistry_2)
    General_Chemistry_2.forEach(function(grade){})

    if(gc2){
        General_Chemistry_2.push(gc2)
        localStorage.General_Chemistry_2 = JSON.stringify(General_Chemistry_2)
        General_Chemistry_2.forEach(function(grade){})
    }

    if(!localStorage.General_Physics_2)
    localStorage.General_Physics_2 = JSON.stringify([])
    General_Physics_2 = JSON.parse(localStorage.General_Physics_2)
    General_Physics_2.forEach(function(grade){})

    if(gp2){
        General_Physics_2.push(gp2)
        localStorage.General_Physics_2 = JSON.stringify(General_Physics_2)
        General_Physics_2.forEach(function(grade){})
    }

    if(!localStorage.Physical_Education_4)
    localStorage.Physical_Education_4 = JSON.stringify([])
    Physical_Education_4 = JSON.parse(localStorage.Physical_Education_4)
    Physical_Education_4.forEach(function(grade){})

    if(pe4){
        Physical_Education_4.push(pe4)
        localStorage.Physical_Education_4 = JSON.stringify(Physical_Education_4)
        Physical_Education_4.forEach(function(grade){})
    }

    if(!localStorage.Research_in_Daily_Life_2)
    localStorage.Research_in_Daily_Life_2 = JSON.stringify([])
    Research_in_Daily_Life_2 = JSON.parse(localStorage.Research_in_Daily_Life_2)
    Research_in_Daily_Life_2.forEach(function(grade){})

    if(ridl2){
        Research_in_Daily_Life_2.push(ridl2)
        localStorage.Research_in_Daily_Life_2 = JSON.stringify(Research_in_Daily_Life_2)
        Research_in_Daily_Life_2.forEach(function(grade){})
    }

    if(!localStorage.Research_Project)
    localStorage.Research_Project = JSON.stringify([])
    Research_Project = JSON.parse(localStorage.Research_Project)
    Research_Project.forEach(function(grade){})

    if(rp){
        Research_Project.push(rp)
        localStorage.Research_Project = JSON.stringify(Research_Project)
        Research_Project.forEach(function(grade){})
    }

    if(!localStorage.Work_Immersion)
    localStorage.Work_Immersion = JSON.stringify([])
    Work_Immersion = JSON.parse(localStorage.Work_Immersion)
    Work_Immersion.forEach(function(grade){})

    if(wi){
        Work_Immersion.push(wi)
        localStorage.Work_Immersion = JSON.stringify(Work_Immersion)
        Work_Immersion.forEach(function(grade){})
    }
}