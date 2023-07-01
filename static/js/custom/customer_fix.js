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


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
'use strict'
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')
// Loop over them and prevent submission
Array.prototype.slice.call(forms)
.forEach(function (form) {
    form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
    }

    form.classList.add('was-validated')
    }, false)
})
})()

function star(obj,objName,objValue){
    let StarQ = objName.substr(0, 7);
    let stop = Number(objValue)+1;
    for(i=stop;i<6;i++){
        let empty= document.querySelector(`#${StarQ}_${i}`);
        empty.style.color = '#858796';
    }
    for(i=1;i<stop;i++) {  
        let twinkle =document.querySelector(`#${StarQ}_${i}`);
        twinkle.style.color = 'orange';
    }
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
