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

function check_all(obj,cName) { 
    var checkboxs = document.getElementsByClassName(cName); 
    for(var i=0;i<checkboxs.length;i++){checkboxs[i].checked = obj.checked;} 
}
function check_delete() {
    if (confirm("確定刪除嗎?") == true) {
    document.form_List.submit();
    } else {
        return false;
    }
}

function timeInterval() {
    let start = document.getElementById("Iservice_data_f"); 
    let end = document.getElementById("Iservice_data_t");
    let start_ts = (Date.parse(start.value)).valueOf();
    // console.log(start_ts);
    let end_ts = (Date.parse(end.value)).valueOf();
    // console.log(end_ts);
    if(start_ts > end_ts){
        window.alert("開始時間大於結束時間，請重新選擇時間區間");
        start.value = end.value;
    }            
}
function EtimeInterval() {
    let start = document.getElementById("Eservice_data_f"); 
    let end = document.getElementById("Eservice_data_t");
    let start_ts = (Date.parse(start.value)).valueOf();
    // console.log(start_ts);
    let end_ts = (Date.parse(end.value)).valueOf();
    // console.log(end_ts);
    if(start_ts > end_ts){
        window.alert("開始時間大於結束時間，請重新選擇時間區間");
        start.value = end.value;
    }            
}

function getfannumber()
{
var x=document.getElementById("Iworknumber");
var  worknumber=x.value;
$("#fannumber").find("option").remove(); 
    $.ajax({
        type: 'post',
        url:'../ajax/getfannum.php',
        data:{worknumber:worknumber},
        dataType: "json",
         success:function(recv){
                var html = '<option value="">請選取風機編號</option>';
                    
                for(var i=0;i<recv.length;i++){
                    html +='<option value="'+recv[i]+'">'+recv[i]+'</option>';
                }
                $('#fannumber').append(html);
        
        },
        
        });

}
$('#form_Insert').submit(function(e){
     e.preventDefault();
    var arr2=$(this).serializeArray();
    $(this).unbind('submit').submit();
    console.log(arr2);
    $.ajax({
        type: 'post',
        url:'../ajax/sendemail.php',
        data:(arr2),
         success:function(recv2){
            
            alert(recv2);
         
        },
        
        });
    });
    $("#fannumber").change(function(){
        // alert(fanmunber);
        $.ajax({
                type: 'post',
                url:'../ajax/getfantype.php',
                data:{fannumber:$('#fannumber').val()},
                dataType: "json",
                success:function(recv){
                        // alert(recv); 
                        $("#Ifan_type").val(recv);                      
                    },
               
            });
});

$("#Icustomer").change(function(){
    // alert(fanmunber);
    $.ajax({
            type: 'post',
            url:'../ajax/getaddress.php',
            data:{Icustomer:$('#Icustomer').val()},
            dataType: "json",
            success:function(recv){
                    //  alert(recv); 
                    $("#Iaddress").val(recv);                      
                },
           
        });
});
$("#Iwho").change(function(){
    // alert(fanmunber);
    $.ajax({
            type: 'post',
            url:'../ajax/getemail.php',
            data:{Iwho:$('#Iwho').val()},
            dataType: "json",
            success:function(recv){
                    //  alert(recv); 
                    // $("#Iaddress").val(recv);    
                    $("#emml").val(recv);                     
                },
           
        });
});
$("#setfinish").click(function(){
    alert("維修已完成");
    // alert(fanmunber);
    $.ajax({
            type: 'post',
            url:'../ajax/finish.php',
            async: false,
            data:{finish:$('#setfinish').val()},
            dataType: "json",
            success:function(recv){
                // window.location.reload();
                    // $("#Iaddress").val(recv);    
                                       
                },
           
        });
});
$("#Icustomer").change(function(){
    // alert(fanmunber);
    $.ajax({
            type: 'post',
            url:'../ajax/getinfo.php',
            data:{Icustomer:$('#Icustomer').val()},
            dataType: "json",
            success:function(recv){
                var html = '<option value="">請選取聯絡人</option>';
        
        for(var i=0;i<recv.length;i++){
            html +='<option value="'+recv[i]+'">'+recv[i]+'</option>';
        }
       
        $('#Ip_info').append(html);                     
                },
           
        });
});

