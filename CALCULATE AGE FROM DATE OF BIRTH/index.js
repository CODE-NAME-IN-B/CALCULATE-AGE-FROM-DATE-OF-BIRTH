function ageCalculator()
 {  
    var userinput = document.getElementById("DOB").value;  
    var dob = new Date(userinput);  
    if(userinput==null || userinput=='') {  
      document.getElementById("message").innerHTML = "**Choose a date please!";    
      return false;   
    } 
    else {  
      
    //حساب فرق الشهر من الشهر الي تو   
    var month_diff = Date.now() - dob.getTime();
    
    //تحويل الفرق المحسوب في التاريخ 
    var age_dt = new Date(month_diff);   
      
    //استخراج السنه من التاريخ      
    var year = age_dt.getUTCFullYear();  
      
    //تو نحسب عمر المستخدم 
    var age = Math.abs(year - 1970);  
      
    //عرض العمر المحسوب   
    return document.getElementById("result").innerHTML =    
             "Age is: " + age + " years. ";  


}
}