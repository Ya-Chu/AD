var hints
function operation(alert){
    $('#operation-guide').show();
    if (typeof(hints[alert])=="undefined"){
        $('#hint').text('無排除建議');
    }else{
        $('#hint').text(hints[alert]);
    }
    
}

function operationclose(){
    $('#operation-guide').hide();
}
function fetchHint(){
    $.ajax({
        url:"/ajaxHint/",
        type:"GET",
        dataType: 'json',
        success:function (recv) {
            hints = recv.response[0];
        }
    })
}
function fetchAlert(){
    $.ajax({
        url:"/ajaxAlert/",
        type:"GET",
        dataType: 'json',
        success:function (recv) {
            let alertList = recv.response[0];
            alertList.forEach((item) => {
                if (item.status == true){
                    $('#id'+item.alert).show();
                } else {
                    $('#id'+item.alert).hide();
                }
            });
            console.log(recv);
            // if (alertList['dataAlert'] == true){
            //     console.log(alertList['dataAlert']);
            //     $('#data-alert').show();
            // } else {
            //     $('#data-alert').hide();
            // }
            // if (alertList['mssqlAlert'] == true){
            //     $('#connect-alert').show();
            // } else {
            //     $('#connect-alert').hide();
            // }
            // if (alertList['ph1PhAlert'] == true){
            //     $('#ph1-ph-alert').show();
            // } else {
            //     $('#ph1-ph-alert').hide();
            // }
            // if (alertList['ph1OrpAlert'] == true){
            //     $('#ph1-orp-alert').show();
            // } else {
            //     $('#ph1-orp-alert').hide();
            // }
            // if (alertList['ph2PhAlert'] == true){
            //     $('#ph2-ph-alert').show();
            // } else {
            //     $('#ph2-ph-alert').hide();
            // }
            // if (alertList['ph2OrpAlert'] == true){
            //     $('#ph2-orp-alert').show();
            // } else {
            //     $('#ph2-orp-alert').hide();
            // }
            // if (alertList['fbcaInOrpAlert'] == true){
            //     $('#fbca-in-orp-alert').show();
            // } else {
            //     $('#fbca-in-orp-alert').hide();
            // }
            // if (alertList['fbcaOutPhAlert'] == true){
            //     $('#fbca-out-ph-alert').show();
            // } else {
            //     $('#fbca-out-ph-alert').hide();
            // }
            // if (alertList['fbcaOutOrpAlert'] == true){
            //     $('#fbca-out-orp-alert').show();
            // } else {
            //     $('#fbca-out-orp-alert').hide();
            // }
            // if (alertList['fbcaOutFAlert'] == true){
            //     $('#fbca-out-f-alert').show();
            // } else {
            //     $('#fbca-out-f-alert').hide();
            // }
            // if (alertList['fbcbInOrpAlert'] == true){
            //     $('#fbcb-in-orp-alert').show();
            // } else {
            //     $('#fbcb-in-orp-alert').hide();
            // }
            // if (alertList['fbcbOutPhAlert'] == true){
            //     $('#fbcb-out-ph-alert').show();
            // } else {
            //     $('#fbcb-out-ph-alert').hide();
            // }
            // if (alertList['fbcbOutOrpAlert'] == true){
            //     $('#fbcb-out-orp-alert').show();
            // } else {
            //     $('#fbcb-out-orp-alert').hide();
            // }
            // if (alertList['fbcbOutFAlert'] == true){
            //     $('#fbcb-out-f-alert').show();
            // } else {
            //     $('#fbcb-out-f-alert').hide();
            // }
            // if (alertList['fbcInFAlert'] == true){
            //     $('#fbc-in-f-alert').show();
            // } else {
            //     $('#fbc-in-f-alert').hide();
            // }             
            
        }
    })
}
