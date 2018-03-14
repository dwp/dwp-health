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






  
// Own functionality

$(document).ready(function() {
  
  $("tr").each(function() {
    var $name = $(this).find('.col-heading').text();
    $(this).before( "<tr class='done' style='display:none'><td colspan='6'>" + $name + " added to &lsquo;my referrals&rsquo;&nbsp;&nbsp;<a href='#' class='undo'>Undo</a></td></tr>" );
  });
  
  var $ownButtons = $(".add a");
  var $undoButtons = $(".undo");

  $ownButtons.click(function() {

    var $row = $(this).parent().parent();
    var $rowBefore = $row.prev();
    var $name = $(this).parent().parent().find('.col-heading').text();

    $rowBefore.css('display', 'table-row');
    $row.css('display', 'none');

    // Updates totals

    $availableTotal = parseInt($("#available-refs-total").text()) - 1;
    $("#available-refs-total").html($availableTotal);

    $teamTotal = parseInt($("#team-refs-total").text()) + 1;
    $("#team-refs-total").html($teamTotal);

    $myTotal = parseInt($("#my-refs-total").text()) + 1;
    $("#my-refs-total").html($myTotal);

    return false;

  });

  $undoButtons.click(function() {

    var $row = $(this).parent().parent();
    var $rowAfter = $row.next();
    var $name = $(this).parent().parent().find('.col-heading').text();

    $rowAfter.css('display', 'table-row');
    $row.css('display', 'none');

    // Updates totals

    $availableTotal = parseInt($("#available-refs-total").text()) + 1;
    $("#available-refs-total").html($availableTotal);

    $teamTotal = parseInt($("#team-refs-total").text()) - 1;
    $("#team-refs-total").html($teamTotal);

    $myTotal = parseInt($("#my-refs-total").text()) - 1;
    $("#my-refs-total").html($myTotal);

    return false;

  });

});


$(document).ready(function(){
    $("[data-toggle-content]").click(function(event){
        var element = $(this).data("toggleContent");
        $("#" + element).toggleClass("hidden");
    });
});










