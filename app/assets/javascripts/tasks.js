// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function ready() {
  $('#new_task').on('ajax:success', function(event, task_html) {
    // console.log(arguments);
    console.log(task_html);
    $('body').append(task_html)
    $('#task_name').val('');
    console.log('the ajax request was successful!');
  });
}


//$(ready);
// $(document).ready(ready);
// $(document).on("ready", ready);


//need the below for personal apps the "turbolinks:load" makes sure that when it renders a new page the ajax form is still works by attaching itself to the event twice
$(document).on('ready turbolinks:load', ready);
