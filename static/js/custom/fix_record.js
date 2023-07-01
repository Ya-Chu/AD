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

//維修零件表動態生成
function delete_c(obj){
    // fileid=console.log(obj.value)
    // $.ajax({
    //                     type: 'post',
    //                     url:'../ajax/delete_fix_file.php',
    //                     data:{fileid:obj.value},
                        
    //                     success:function(recv){
    //                             // alert(recv); 
                                                 
    //                         },
    //                     // error:function(xhr){alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
                        
    //                 });
     obj.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}
function add_c(){
    let conponent_str =
        `<div class="col"><div class="card shadow-lg mt-5"><div class="card-header bg-secondary text-light"><div class="container-fluid"><div class="row align-items-center"><div class="col-4"><span class="">更換零件</span></div><div class="col-8"><div class="row justify-content-end"><button type="button" class="btn btn-danger mx-md-2 mb-1 mb-md-0" onclick="delete_c(this)">刪除</button><button type="button" class="btn btn-primary" onclick="add_c()">新增</button></div></div></div></div></div><div class="card-body"><div class="col-md-12 my-2"><label for="" class="form-label">零件名稱：</label><input type="text" class="form-control" id="" name="Ecomponent_name[]" aria-describedby="" value="" required></div><div class="col-md-12 my-2"><label for="" class="form-label">零件型號：</label><input type="text" class="form-control" id="" name="Ecomponent_type[]" aria-describedby="" value="" required></div><div class="col-md-12 my-2"><label for="" class="form-label">零件數量：</label><input type="number" class="form-control" id="" name="Ecomponent_num[]" aria-describedby="" value="" required></div></div></div></div>
        `;
    $('#component_List').append(conponent_str);
}


// 圖片說明卡片動態生成
        function edit_file_info(obj)
        {
            $.ajax({
                                type: 'post',
                                url:'../ajax/update_file_info.php',
                                data:{fileid:obj.value,id:obj.id},
                                
                                success:function(recv){
                                        // alert(recv); 
                                                         
                                    },
                                // error:function(xhr){alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
                                
                            });
        }

        function choose_upload(obj,id){
    //create id
    let digit = id.replace('chooseFile', '').length
    id=id.slice(-`${digit}`);
    
    if (obj.files && obj.files[0]) {
        let imgSize = obj.files[0].size;
        let mime = obj.files[0].type;
        let reader = new FileReader();
        if(mime.split("/")[0]!="image"){
            window.alert("僅接受圖片類型檔案(*.jpg, .*jpeg, .*png)，請重新新增卡片並上傳正確格式");
            obj.parentElement.parentElement.remove();  
            return;
        }
        else if(imgSize>5120000){
            window.alert("檔案超過5MB，請重新新增卡片並上傳5MB以內圖片");
            obj.parentElement.parentElement.remove();                     
            return; 
        }else{
            // readAsDataURL(); pic review; set <input value="file name">
            reader.onload = function (e) {
                console.log(e.target.result);
                $(`#imgPlaceholder${id}`).attr('src',e.target.result);               
            }
            reader.readAsDataURL(obj.files[0]);              
            $(`#chooseFile${id}`).attr('value',obj.files[0].name);
        }    
    }
} 
        
        var fig_id=1;
        function fig_add() {
            fig_id++;
            let conponent_str =
            `<div class="col mb-2 mb-md-3"><div class="card shadow w-100 h-100"><div class="card-header bg-warning text-gray-800"><div class="row justify-content-between"><div class="col-md-10 col-6"><div class="h4 d-inline-block mt-1">圖片說明</div></div><div class="col-md-2 col-6"><button type="button" class="btn btn-outline-danger" onclick="delete_card(this);">刪除</button></div></div></div><input type="file" accept='image/*' name="fileUpload[]" class="form-control" id="chooseFile${fig_id}" onchange="choose_upload(this,this.id)" multiple="multiple"> <img src="..." class="card-img-middle img-fluid" id="imgPlaceholder${fig_id}" alt="" name="imgPlaceholder[]"><div class="card-body"><p class="card-text"><label for="" class="form-label"><strong>說明：</strong></label><input type="text" value="無" class="form-control" id="Remarkchoice" name="Eremarkimg[]" id="btnDropdown" required></p></div></div></div>
            `;
            $('#card_List').append(conponent_str);
        }
        function delete_card(obj){
           console.log(obj.value);
           let fileid=obj.value;

            $.ajax({
                                type: 'post',
                                url:'../ajax/delete_fix_file.php',
                                data:{fileid:fileid},
                                success:function(recv){
                                        // alert(recv); 
                                                         
                                    },
                                // error:function(xhr){alert("發生錯誤: " + xhr.status + " " + xhr.statusText);
                                
                            });
             obj.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
// 圖片說明動態生成結束


// 維修工法動態生成
        var counter=0;   
        function add_value(obj){
            obj.setAttribute("value",`${obj.value}`);
        }
        function add_fix_method(){
            let fix_method_str = document.getElementById("fix_method_box").innerHTML;
            counter++;
            let conponent_str = `<div class="col-md-3"><button type="button" class="btn btn-outline-primary mx-1 my-1 rounded-pill"><div class="input-group"><input list="fix_method" class="form-control fix_method" aria-label="Inputfix_method" name="Ework_method[]" id="Iwork_method[${counter}]" value="" onchange="add_value(this);" placeholder="請搜尋維修工法" required><datalist id="fix_method"><option value=""></option><option value="軸承組更換"><option value="軸對軸雷射對心"><option value="皮帶對心"><option value="葉輪更換"><option value="葉輪清潔"><option value="頻譜分析"><option value="線上動平衡校正"><option value="軸心更換"><option value="皮帶輪組更換"><option value="皮帶更換"></datalist><span class="input-group-text border-0 bg-white" onclick="return close_fix_method(this),!1"><strong>X</strong></span></div></button></div>`
            let render_str = fix_method_str + conponent_str;
            document.getElementById("fix_method_box").innerHTML=render_str;
        }
        function close_fix_method(obj){
            obj.parentElement.parentElement.parentElement.remove();
        }
        
        function timeInterval() { 
			let start = document.getElementById("FixtimeStart"); 
            let end = document.getElementById("FixtimeEnd");
            let start_ts = (Date.parse(start.value)).valueOf();
            let end_ts = (Date.parse(end.value)).valueOf();
            if(start_ts > end_ts){
                window.alert("開始時間大於結束時間，請重新選擇時間區間");
                start.value = end.value;
            }            
		}

//維修工法動態生成結束

        function addline_i(content) {  
            var x=document.all.componentTable.insertRow();
            var x1=x.insertCell(0);
            var x2=x.insertCell(1);
            var x3=x.insertCell(2);
            var x4=x.insertCell(3);  
            x1.innerHTML = '<td class="col-4"><input type="text" name="Ecomponent_name[]" class="form-control"></td>';
            x2.innerHTML = '<td class="col-4"><input type="text" name="Ecomponent_type[]" class="form-control"></td>';
            x3.innerHTML = '<td class="col-3"><input type="number" name="Ecomponent_num[]" class="form-control"></td>';
            x4.innerHTML = '<td class="col-1"><input type="button" class="btn btn-danger" value="删除此列" onclick="del_i()"></td>';  
	    }

        function del_i(){document.all.componentTable.deleteRow(window.event.srcElement.parentElement.parentElement.rowIndex);}
        
		function check_all(obj,cName) { 
			var checkboxs = document.getElementsByClassName(cName); 
			for(var i=0;i<checkboxs.length;i++){checkboxs[i].checked = obj.checked;} 
		}
        function check_delete() {
	        if (confirm("確定刪除嗎?") == true) {
		    document.form_List.submit();
	        } else { return false;}
        }
 


