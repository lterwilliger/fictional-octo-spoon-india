$(document).ready(function() {
    console.log("document is ready!");
    // Get element info
    var frst = document.getElementById("firstTime");
    var retr = document.getElementById("againTime");
    frst.style.display = "none";
    retr.style.display = "none";
    let alphaRegex = /^[a-zA-Z]*$/;
    var el = document.getElementById("submitButton");
    var elName = document.getElementById("username");

// clear button function calls
    $('#btnClear').click(function(){
            clearElement("#username", "input");
            clearElement("#phone", "input");
            clearElement("#checkIn", "input");
            clearElement("#checkOut", "input");
            clearElement("#password", "input");
            clearElement("#email", "input");

      });
      function isChecked(){
        if ($(this).is(':checked') && $(this).val() == 'first' ) {
          //console.log("first is checked");
            var frs = document.getElementById("firstTime");
            var again = document.getElementById("againTime");
            if (frs.style.display === "none") {
              frs.style.display = "block";
              again.style.display = "none";
            } else {
              frs.style.display = "none";
            }
        }
        else if ($(this).is(':checked') && $(this).val() == 'return' ) {
          var frs = document.getElementById("firstTime");
          var again = document.getElementById("againTime");
          if (again.style.display === "none") {
            again.style.display = "block";
            frs.style.display = "none";
          } else {
            again.style.display = "none";
          }
        }
        else {
          console.log("Something else");
        }
      }
      $('input:radio[name="radioDefault"]').change(
        function(){
          isChecked();
      });
    $('#submitButton').click(function() {

        if ($('#noSpaces').val()) {
            console.log("there is something in this text box");
            $('#noSpaces').removeClass("error")
        } else {
            console.log("there is NOTHING in this text box");
            $('#noSpaces').removeClass("success").addClass("error").focus();
            //bring focus to it
            //change the placeholder text

        }

    })
// Clear element by type
    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html("");
        }
        else if(elementType=="input"){
            $(elementId).val("");
        }
        else {
          $(elementId).val("");
        }
    }



});
