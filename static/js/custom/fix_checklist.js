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

function one_generate(){
    let btnList = document.querySelector("#btnList");
    var str="";
    var generate_arr=[];
    let rList = document.querySelectorAll("[type='radio']");
    rList.forEach(element => {                
        if((element.checked === true && (element.value === "髒污" || element.value ==="損壞" || element.value ==="2"))){
            generate_arr.push(element.id);
            str+=`<input class="btn btn-outline-danger mx-2 mb-3" name="Enext_fix[]" value="${element.id}" readonly>`
        }else{return;}
    })
    console.log(generate_arr);
    btnList.innerHTML =str;
}

function screw_InputFocus(){
    document.getElementById("Screw_ab_input").focus();
    document.getElementById("Screw_ab_input").required = true;
}
function screw_Required(){
    document.getElementById("Screw_ab_input").required = false;
}

function check_NA(obj){
    let disableClass = obj.className;
    let disableList = document.querySelectorAll(`[class='${disableClass}']`);
    disableList.forEach(element => {                
        if((obj.checked === true && element.type ==="radio")){
            element.checked = false;  
            element.disabled = true;
        }else{element.disabled = false;}
    })
    $("#one").trigger('click');
}

function default_NA(){
    let checkedList = document.querySelector("#divEdit").querySelectorAll('input[type=checkbox]:checked');
    checkedList.forEach(element => {                
        let disableList = document.querySelectorAll(`[class='${element.className}']`);
        disableList.forEach(item=>{
            if(item.type==="radio"){                   
                item.checked = false;  
                item.disabled = true;
            }
            else{item.disabled = false;}
        })    
    })           
}
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
$(':radio').change(function(e){
                
    $("#one").trigger('click'); 
});


