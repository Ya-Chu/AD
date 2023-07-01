$("#logout").click(function(){
    // alert(fanmunber);
    $.ajax({
            type: 'post',
            url:'../ajax/destroy_session.php',
            
            success:function(recv){
                        alert(recv); 
                                        
                },
           
        });
});

$('#form07').submit(function(e){
    e.preventDefault();
   // console.log( $(this).serializeArray() );
   var arr=$(this).serializeArray();
   // document.location.href="qc_generate_insert.php";
   $(this).unbind('submit').submit();
   console.log(arr);
   $.ajax({
       type: 'post',
       url:'../ajax/intodatabase.php',
       async: false,
       data:(arr),
        success:function(recv){
           
           alert(recv);
           // document.location.href="qc_generate_insert.php";
           // document.location.href="qc_generate_insert.php";
           // if($data_form[0]==8){document.location.href="qc_generate.php";}
           // else{document.location.href="qc_generate_insert.php";}
       },
       
       });
   });
   $('#form02').submit(function(e){
    e.preventDefault();
    console.log( $(this).serializeArray() );
     $(this).unbind('submit').submit();
   var arr2=$(this).serializeArray();
   //   document.location.href="qc_generate_insert.php";
   console.log(arr2);
   $.ajax({
       type: 'post',
       async: false,
       url:'../ajax/intodatabase.php',
       data:(arr2),
        success:function(recv2){
           
            alert(recv2);
           // var IInsert_contect=recv2;
           // console.log(IInsert_contect);
           //  document.location.href="qc_generate_insert.php";
           // document.location.href="qc_generate_insert.php";
           // if($data_form[0]==8){document.location.href="qc_generate.php";}
           // else{document.location.href="qc_generate_insert.php";}
       },
       
       });
   });
   $('#form04').submit(function(e){
    e.preventDefault();
   //  console.log( $(this).serializeArray() );
    
   var arr4=$(this).serializeArray();
   $(this).unbind('submit').submit();
   console.log(arr4);
   $.ajax({
       type: 'post',
       async: false,
       url:'../ajax/intodatabase.php',
       data:(arr4),
        success:function(recv4){
           
           alert(recv4);
           // document.location.href="qc_generate_insert.php";
           // if($data_form[0]==8){document.location.href="qc_generate.php";}
           // else{document.location.href="qc_generate_insert.php";}
       },
       
       });
   });
   $('#form08').submit(function(e){
    e.preventDefault();
   //  console.log( $(this).serializeArray() );
    
   var arr8=$(this).serializeArray();
   $(this).unbind('submit').submit();
   console.log(arr8);
   $.ajax({
       type: 'post',
       async: false,
       url:'../ajax/intodatabase.php',
       data:(arr8),
        success:function(recv8){
           
           alert(recv8);
           // document.location.href="qc_generate_insert.php";
           // if($data_form[0]==8){document.location.href="qc_generate.php";}
           // else{document.location.href="qc_generate_insert.php";}
       },
       
       });
   });
   $('#form01').submit(function(e){
    e.preventDefault();
   //  console.log( $(this).serializeArray() );
    
   var arr1=$(this).serializeArray();
   $(this).unbind('submit').submit();
   console.log(arr1);
   $.ajax({
       type: 'post',
       async: false,
       url:'../ajax/intodatabase.php',
       data:(arr1),
       success:function(recv1){
           
        alert(recv1);
        // document.location.href="qc_generate_insert.php";
        // if($data_form[0]==8){document.location.href="qc_generate.php";}
        // else{document.location.href="qc_generate_insert.php";}
    },
       });
    //    alert("產品資料表以寫入資料庫，若要修改或列印請至品質控管功能");
    //    window.location.reload();
   });
   // $('#status07').click(function(){
   //     // alert("送風機封面以寫入資料庫，若要修改或列印請至品質控管功能");
   //     document.location.href="qc_generate.php";});
   // $('#status02').click(function(){
   
   //     alert("動平衡測試以寫入資料庫，若要修改或列印請至品質控管功能");
   //     document.location.href="qc_generate.php";});
   // $('#status04').click(function(){
     
   //     alert("風機性能曲線以寫入資料庫，若要修改或列印請至品質控管功能");
   //     document.location.href="qc_generate.php";});
       // document.location.href="qc_generate.php";
   
   // var form1=document.getElementById("form1");
   // a=form1[0].value;
   // console.log(a);
// let a=new Array();
//  var formData=$("form1").serialize();
// var arr=$("#form1").serializeArray() ;
// console.log($("#form1").serializeArray() );
// console.log( $('#form1').serializeObject());
// var fields;
// console.log( fields = $( ":input" ).serializeArray());
//     console.log($(this).closest('form1').serialize());
// var  worknumber=x.value;
function timeInterval() { 
   let start = document.getElementById("timeStart"); 
   let end = document.getElementById("timeEnd");
   let start_ts = (Date.parse(start.value)).valueOf();
   let end_ts = (Date.parse(end.value)).valueOf();
   if(start_ts > end_ts){
       window.alert("開始量測時間大於結束量測時間，請重新選擇時間區間");
       start.value = end.value;
   }            
}
function addline1(content) {  
var x=document.all.myTable1.insertRow();
var x1=x.insertCell(0);
var x2=x.insertCell(1);
var x3=x.insertCell(2);
var x4=x.insertCell(3);
var x5=x.insertCell(4);
var x6=x.insertCell(5);
var x7=x.insertCell(6);
var x8=x.insertCell(7);
var x9=x.insertCell(8);
x1.innerHTML="<input type='text' name='Iinput01[]' class='form-control'>";
x2.innerHTML="<input type='text' name='Iinput02[]' class='form-control'>";
x3.innerHTML="<input type='text' name='Iinput03[]' class='form-control'>";
x4.innerHTML="<input type='text' name='Iinput04[]' class='form-control'>";
x5.innerHTML="<input type='text' name='Iinput05[]' class='form-control'>";
x6.innerHTML="<input type='text' name='Iinput06[]' class='form-control'>";
x7.innerHTML="<input type='text' name='Iinput07[]' class='form-control'>";
x8.innerHTML="<input type='text' name='Iinput08[]' class='form-control'>";
x9.innerHTML="<input type='button' value='删除此項' onclick='del1()' class='btn btn-danger' style='font-size:16px;'>" 
}
function IdriverLabel(){
   const title = document.querySelector("#Idive_mode").value;
   let tags = document.getElementsByClassName("driverInput");
   let labelAI = document.querySelector("#labelAI");
   let labelBI = document.querySelector("#labelBI");
   let labelCI = document.querySelector("#labelCI");
   let elA = document.querySelector("#ICoupling_belt_dd"); 
   let elB = document.querySelector("#ICoupling_belt_na");
   let elC = document.querySelector("#ICoupling_belt_na1");

   if(title.length === 0){
       const str="請先選擇驅動方式才能填寫欄位"
       labelAI.textContent = str; 
       labelBI.textContent = str;
       labelCI.textContent = str; 
       for(let i=0;i<tags.length;i++){tags[i].readOnly = true;}
   }            
   else {   
       if(title=="聯軸式"){                
           labelAI.textContent = "聯軸器型號"; 
           labelBI.textContent = "聯軸器（馬達端軸徑）";
           labelCI.textContent = "聯軸器（葉輪端軸徑）";  
           elB.readOnly = false; 

           elA.readOnly = false; 
        //    elA.required= true;
           elA.setAttribute("value",""); 
        //    elC.required= true;
            elC.readOnly = false; 
           elC.setAttribute("value",""); 
       }
       else if(title=="皮帶式"){
           labelAI.textContent = "皮帶型號";
           labelBI.textContent = "皮帶輪（馬達端）";
           labelCI.textContent = "皮帶輪（風車端）";
           elB.readOnly = false;

           elA.readOnly = false;
        //    elA.required= true;
           elA.setAttribute("value",""); 
           elC.readOnly = false; 
        //    elC.required= true;
           elC.setAttribute("value",""); 
       }else if(title=="直結式"){
           labelAI.textContent = "NA";
           labelBI.textContent = "（馬達端軸徑）";
           labelCI.textContent = "NA";
           elB.readOnly = false;            
        //    elA.removeAttribute("required");
        //    elA.setAttribute('readonly', true);
           elA.readOnly = true; 
           elA.setAttribute("value","NA"); 
        //    console.log(elA);                                
            // elC.removeAttribute("required"); 
            elC.readOnly = true;  
            elC.setAttribute("value","NA");
            // elC.setAttribute('readonly', true);
            // console.log(elC); 
            
       }else{                
           labelAI.textContent = "其他";
           labelBI.textContent = "其他（馬達端）";
           labelCI.textContent = '其他（葉輪端）';
           elB.readOnly = false;
            
           elA.readOnly = false; 
        //    elA.required= true;
           elA.setAttribute("value",""); 
           elC.readOnly = false; 
        //    elC.required= true;
           elC.setAttribute("value",""); 
       }                
    //    for(let i=0;i<tags.length;i++){
    //        tags[i].readOnly = false;
    //    }
       document.getElementById("ICoupling_belt_dd").focus();  
   }
}


function del1(){   document.all.myTable1.deleteRow(window.event.srcElement.parentElement.parentElement.rowIndex);   }