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

function addline_i(content) {  
var x=document.all.myTable1.insertRow();
var x1=x.insertCell(0);
var x2=x.insertCell(1);
x1.innerHTML = '<td style="font-size:16px"><select class="form-select gstyle" aria-label="Default select example"><option selected>請選擇職級</option><option value="1">系統管理員</option><option value="2">品管</option><option value="3">生管</option><option value="4">業務</option><option value="5">維修單位</option><option value="6">不登錄觀看產品銘牌</option></select></td>';
x2.innerHTML = '<td style="font-size:16px" align="center"><input type="button" class="btn btn-danger btn-label" value="删除此列" onclick="del_i()"></td>'
}

function del_i(){document.all.myTable1.deleteRow(window.event.srcElement.parentElement.parentElement.rowIndex);}
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
