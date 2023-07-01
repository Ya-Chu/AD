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


