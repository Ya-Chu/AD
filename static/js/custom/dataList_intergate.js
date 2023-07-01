let eList = document.querySelectorAll('.datalist');
eList.forEach(element=>{
  $(`#${element.id}`).dataList();  
})

function delete_hidden_input(obj){
    obj.required = true;
    let delete_input_element = document.querySelector(`#${obj.id}_T`);
    delete_input_element.remove();   
}  