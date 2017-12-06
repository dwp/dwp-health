/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})

$(document).on('ready',function()
{
  $('.click_row').on('click',function(e)
  {
    e.preventDefault();
    var href = $(this).attr('href');
    window.location.href = href;
  });
});




$("input[type='checkbox'][class='mon-fil']").on("change",function(){
  if($(this).is(':checked')){
    $("#monday-filter").show();
  }else{
    $("#monday-filter").hide();
  }
});

$("input[type='checkbox'][class='tue-fil']").on("change",function(){
  if($(this).is(':checked')){
    $("#tuesday-filter").show();
  }else{
    $("#tuesday-filter").hide();
  }
});

$("input[type='checkbox'][class='wed-fil']").on("change",function(){
  if($(this).is(':checked')){
    $("#wednesday-filter").show();
  }else{
    $("#wednesday-filter").hide();
  }
});

$("input[type='checkbox'][class='thu-fil']").on("change",function(){
  if($(this).is(':checked')){
    $("#thursday-filter").show();
  }else{
    $("#thursday-filter").hide();
  }
});

$("input[type='checkbox'][class='fri-fil']").on("change",function(){
  if($(this).is(':checked')){
    $("#friday-filter").show();
  }else{
    $("#friday-filter").hide();
  }
});

$("input[type='checkbox'][class='sat-fil']").on("change",function(){
  if($(this).is(':checked')){
    $("#saturday-filter").show();
  }else{
    $("#saturday-filter").hide();
  }
});


$("input[type='checkbox'][class='time-slot1']").on("change",function(){
  if($(this).is(':checked')){
    $("#time1-filter").show();
  }else{
    $("#time1-filter").hide();
  }
});

$("input[type='checkbox'][class='time-slot2']").on("change",function(){
  if($(this).is(':checked')){
    $("#time2-filter").show();
  }else{
    $("#time2-filter").hide();
  }
});

$("input[type='checkbox'][class='time-slot3']").on("change",function(){
  if($(this).is(':checked')){
    $("#time3-filter").show();
  }else{
    $("#time3-filter").hide();
  }
});

$("input[type='checkbox'][class='access-floor']").on("change",function(){
  if($(this).is(':checked')){
    $("#special-access").show();
  }else{
    $("#special-access").hide();
  }
});
$("input[type='checkbox'][class='interpreter']").on("change",function(){
  if($(this).is(':checked')){
    $("#special-interpreter").show();
  }else{
    $("#special-interpreter").hide();
  }
});

$("input[type='checkbox'][class='same-gender']").on("change",function(){
  if($(this).is(':checked')){
    $("#special-gender").show();
  }else{
    $("#special-gender").hide();
  }
});

$("input[type='checkbox'][class='security-req']").on("change",function(){
  if($(this).is(':checked')){
    $("#special-security").show();
  }else{
    $("#special-security").hide();
  }
});

$("input[type='checkbox'][class='doctor-req']").on("change",function(){
  if($(this).is(':checked')){
    $("#special-doctor").show();
  }else{
    $("#special-doctor").hide();
  }
});



$("input[type='checkbox']").on("change",function(){
  if($(this).is(':checked')){
    $("#no-filter").remove();
  }
});





















