// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
      language: {
        url: "https://cdn.datatables.net/plug-ins/1.11.3/i18n/zh_Hant.json" 
    }
  });
});
