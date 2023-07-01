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

function EdriverLabel(){
    const title = document.querySelector("#Edive_mode").value;
    let labelAE = document.querySelector("#labelAE");
    let labelBE = document.querySelector("#labelBE");
    let labelCE = document.querySelector("#labelCE");
    let elA = document.querySelector("#ECoupling_belt_dd"); 
    let elC = document.querySelector("#ECoupling_belt_na1");
        if(title=="聯軸式"){                
            labelAE.textContent = "聯軸器型號"; 
            labelBE.textContent = "聯軸器（馬達端軸徑）";
            labelCE.textContent = "聯軸器（葉輪端軸徑）";
            elA.readOnly = false; 
            elC.readOnly = false;  
        }
        else if(title=="皮帶式"){
            labelAE.textContent = "皮帶型號";
            labelBE.textContent = "皮帶輪（馬達端）";
            labelCE.textContent = "皮帶輪（風車端）";
            elA.readOnly = false; 
            elC.readOnly = false; 
        }else if(title=="直結式"){
            labelAE.textContent = "NA";
            labelBE.textContent = "（馬達端軸徑）";
            labelCE.textContent = "NA";
            elA.readOnly = true; 
            elC.readOnly = true;  
        }else{                
            labelAE.textContent = "其他";
            labelBE.textContent = "其他（馬達端）";
            labelCE.textContent = '其他（葉輪端）';
            elA.readOnly = false; 
            elC.readOnly = false;
        }                
        document.getElementById("ECoupling_belt_dd").focus();  
}
