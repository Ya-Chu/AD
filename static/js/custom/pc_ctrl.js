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
    if (confirm("請確認品質控管，所有相關表單已刪除，否則無法刪除。") == true) {
    document.form_List.submit();
    } else {
        return false;
    }
}
// function double_check()
// {
// var tags = document.getElementsByName('FDNewsID[]');
// var tags1 = document.getElementsByName('FDNewsID1[]');
//     console.log(tags[0].checked);
//     for (var x=0,x<=tags.length,x++;)
// }    
function double_check()
{
    var tags = document.getElementsByName('FDNewsID[]');
    var tags1 = document.getElementsByName('FDNewsID1[]');
    // console.log(tags[0].checked);
    for(var x=0;x<tags.length;x++)
        if (tags[x].checked==true)
            {   
                tags1[x].setAttribute( "checked",""); }
        else
           { tags1[x].removeAttribute("checked");}
}   
