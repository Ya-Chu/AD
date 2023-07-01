document.getElementById('file').addEventListener('change', (e) => {
  const file = e.target.files[0];

  if (!file) {
    return;
  }

  new Compressor(file, {
    quality: 0.6,

    // The compression process is asynchronous,
    // which means you have to access the `result` in the `success` hook function.
    success(result) {
      const formData = new FormData();

      // The third parameter is required for server
      formData.append('file', result, result.name);

      // Send the compressed image file to server with XMLHttpRequest.
      axios.post('/path/to/upload', formData).then(() => {
        console.log('Upload success');
      });
    },
    error(err) {
      console.log(err.message);
    },
  });

});

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


// fix_record Insert圖片說明卡片動態生成

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
    `<div class="col mb-2 mb-md-3"><div class="card shadow w-100 h-100"><div class="card-header bg-warning text-gray-800"><div class="row justify-content-between"><div class="col-md-10 col-6"><div class="h4 d-inline-block mt-1">圖片說明</div></div><div class="col-md-2 col-6"><button class="btn btn-outline-danger" onclick="delete_card(this);">刪除</button></div></div></div><input type="file" accept='image/*' name="fileUpload[]" class="form-control" id="chooseFile${fig_id}" onchange="choose_upload(this,this.id)" multiple="multiple"> <img src="..." class="card-img-middle img-fluid" id="imgPlaceholder${fig_id}" alt="" name="imgPlaceholder[]"><div class="card-body"><p class="card-text"><label for="" class="form-label"><strong>說明：</strong></label><input type="text" value="無" class="form-control" id="Remarkchoice" name="Iremarkimg[]" id="btnDropdown" required></p></div></div></div>
    `;
    $('#card_List').append(conponent_str);
}

function delete_card(obj){
    obj.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
}
// fix_record Insert圖片說明動態生成結束



// fix_record Insert 維修工法動態生成
        var counter=0;
        function add_value(obj){
            obj.setAttribute("value",`${obj.value}`);
        }
        function add_fix_method(){
            counter++;
            let conponent_str = `<div class="col-md-3"><button type="button" class="btn btn-outline-primary mx-1 my-1 rounded-pill"><div class="input-group"><input list="fix_method" class="form-control fix_method" aria-label="Inputfix_method" name="Iwork_method[]" id="Iwork_method[${counter}]" value="" onchange="add_value(this);" placeholder="請搜尋維修工法" required><datalist id="fix_method"><option value=""></option><option value="軸承組更換"><option value="軸對軸雷射對心"><option value="皮帶對心"><option value="葉輪更換"><option value="葉輪清潔"><option value="頻譜分析"><option value="線上動平衡校正"><option value="軸心更換"><option value="皮帶輪組更換"><option value="皮帶更換"></datalist><span class="input-group-text border-0 bg-white" onclick="return close_fix_method(this),!1"><strong>X</strong></span></div></button></div>`
            $('#fix_method_box').append(conponent_str);
        }
        function close_fix_method(obj){
            obj.parentElement.parentElement.parentElement.remove();
        }       
        // function timeInterval() { 
		// 	let start = document.getElementById("FixtimeStart"); 
        //     let end = document.getElementById("FixtimeEnd");
        //     let start_ts = (Date.parse(start.value)).valueOf();
        //     let end_ts = (Date.parse(end.value)).valueOf();
        //     if(start_ts > end_ts){
        //         window.alert("開始時間大於結束時間，請重新選擇時間區間");
        //         start.value = end.value;
        //     }            
		// }
//fix_record 維修工法動態生成結束

// 維修零件表js開始(生成、刪除表格列) 
        // function addline_i(content) {  
        //     var x=document.all.componentTable.insertRow();
        //     var x1=x.insertCell(0);
        //     var x2=x.insertCell(1);
        //     var x3=x.insertCell(2);
        //     var x4=x.insertCell(3);  
        //     x1.innerHTML = '<td class="col-4"><input type="text" name="Icomponent_name[]" class="form-control"></td>';
        //     x2.innerHTML = '<td class="col-4"><input type="text" name="Icomponent_type[]" class="form-control"></td>';
        //     x3.innerHTML = '<td class="col-3"><input type="number" name="Icomponent_num[]" class="form-control"></td>';
        //     x4.innerHTML = '<td class="col-1"><input type="button" class="btn btn-danger" value="删除此列" onclick="del_i()"></td>';  
	    // }

        // function del_i(){document.all.componentTable.deleteRow(window.event.srcElement.parentElement.parentElement.rowIndex);}
        function delete_c(obj){
             obj.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        function add_c(){
            let conponent_str =
            `<div class="col"><div class="card shadow-lg mt-5"><div class="card-header bg-secondary text-light"><div class="container-fluid"><div class="row align-items-center"><div class="col-4"><span class="">更換零件</span></div><div class="col-8"><div class="row justify-content-end"><button type="button" class="btn btn-danger mx-md-2 mb-1 mb-md-0" onclick="delete_c(this)">刪除</button><button type="button" class="btn btn-primary" onclick="add_c()">新增</button></div></div></div></div></div><div class="card-body"><div class="col-md-12 my-2"><label for="" class="form-label">零件名稱：</label><input type="text" class="form-control" id="" name="Icomponent_name[]" aria-describedby="" value="" required></div><div class="col-md-12 my-2"><label for="" class="form-label">零件型號：</label><input type="text" class="form-control" id="" name="Icomponent_type[]" aria-describedby="" value="" required></div><div class="col-md-12 my-2"><label for="" class="form-label">零件數量：</label><input type="number" class="form-control" id="" name="Icomponent_num[]" aria-describedby="" value="" required></div></div></div></div>
            `;
            $('#component_List').append(conponent_str);
        }
// 維修零件表js結束


//fix_checklist 一鍵生成下次建議維修 開始

        function one_generate(){
            let btnList = document.querySelector("#btnList");
            var str="";
            var generate_arr=[];
            let rList = document.querySelectorAll("[type='radio']");
            rList.forEach(element => {                
                if((element.checked === true && (element.value === "髒污" || element.value ==="損壞" || element.value ==="2"))){
                    generate_arr.push(element.id);
                    str+=`<input class="btn btn-outline-danger mx-2 mb-3" name="Inext_fix[]" value="${element.id}" readonly>`
                }else{return;}
            })
            console.log(generate_arr);
            btnList.innerHTML =str;
        }
//fix_checklist 一鍵生成下次建議維修 結束

//fix_checklist 螺絲 input focus效果
        function screw_InputFocus(){
            document.getElementById("Screw_ab_input").focus();
            document.getElementById("Screw_ab_input").required = true;
        }
        function screw_Required(){
            document.getElementById("Screw_ab_input").required = false;
        }


//fix_checklist check_NA 開始
        function check_NA(obj){
            let disableClass = obj.className;
            let disableList = document.querySelectorAll(`[class='${disableClass}']`);
            disableList.forEach(element => {                
                if((obj.checked === true && element.type ==="radio")){
                    element.checked = false;  
                    element.disabled = true;
                }else{element.disabled = false;}
            })
            $("#step2").trigger('click');
        }
             $('#fix001').submit(function(e){
             e.preventDefault();
          
             
            var arr1=$(this).serializeArray();
            $(this).unbind('submit').submit();
            console.log(arr1);
            $.ajax({
                type: 'post',
                async: false,
                url:'../ajax/intodatabase.php',
                data:(arr1),
                beforeSend: function(){
                    $('#trigger_loading').trigger('click'); // show modal here
                },
                success:function(recv){  
                     alert(recv); 
                },
            
                // 
                });
            });
            $('#fix002').submit(function(e){
             e.preventDefault();
          
             
            var arr2=$(this).serializeArray();
            $(this).unbind('submit').submit();
            console.log(arr2);
            $.ajax({
                type: 'post',
                async: false,
                url:'../ajax/intodatabase.php',
                data:(arr2),
                 success:function(recv2){
                    
                   
                      alert(recv2);
                 
                },
                
                });
                
                
            });
            $('#fix003').submit(function(e){
             e.preventDefault();
          
             
            var arr3=$(this).serializeArray();
            $(this).unbind('submit').submit();
            console.log(arr3);
            $.ajax({
                type: 'post',
                async: false,
                url:'../ajax/intodatabase.php',
                data:(arr3),
                 success:function(recv3){
                    
                     alert(recv3);
                 
                },
                
                });
            });

            $(':radio').change(function(e){
                
                    $("#step2").trigger('click'); 
               });

//fix_checklist check_NA 結束        

