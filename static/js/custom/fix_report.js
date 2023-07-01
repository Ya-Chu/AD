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


// 圖片說明卡片動態生成

        function fig_content_add_value(obj){
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

        function readURL(input,id) {
            var mime= input.files[0].type;
            if (input.files && input.files[0]) {
                var reader = new FileReader();    
                reader.onload = function (e) {
                $(`#chooseFile${id}`).attr('value',e.target.result);
                $(`#imgPlaceholder${id}`).attr('src',e.target.result);
                
            }
        // base64 string conversion
            reader.readAsDataURL(input.files[0]);
        }
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
                    window.alert("檔案超過5MB，請重新新增卡片並上傳2MB以內圖片");
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
            `<div class="col mb-2 mb-md-3"><div class="card shadow w-100 h-100"><div class="card-header bg-warning text-gray-800"><div class="row justify-content-between"><div class="col-md-10 col-6"><div class="h4 d-inline-block mt-1">圖片說明</div></div><div class="col-md-2 col-6"><button class="btn btn-outline-danger" onclick="delete_card(this);">刪除</button></div></div></div><input type="file" accept='image/*' name="fileUpload[]" class="form-control" id="chooseFile${fig_id}" onchange="choose_upload(this,this.id)" multiple="multiple"> <img src="..." class="card-img-middle img-fluid" id="imgPlaceholder${fig_id}" alt="" name="imgPlaceholder[]"><div class="card-body"><p class="card-text"><label for="" class="form-label"><strong>說明：</strong></label><input type="text" value="無" class="form-control" id="Remarkchoice" name="Eremarkimg[]" id="btnDropdown" required></p></div></div></div>
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

        
		function check_all(obj,cName) { 
			var checkboxs = document.getElementsByClassName(cName); 
			for(var i=0;i<checkboxs.length;i++){checkboxs[i].checked = obj.checked;} 
		}
        function check_delete() {
	        if (confirm("確定刪除嗎?") == true) {
		    document.form_List.submit();
	        } else { return false;}
        }
        
        
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

        


