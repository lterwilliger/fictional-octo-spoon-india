$(document).ready(function() {
    console.log("document is ready!");
    // Get element info
    var frst = document.getElementById("firstTime");
    var retr = document.getElementById("againTime");
    frst.style.display = "none";
    retr.style.display = "none";

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
      $('input:radio[name="radioDefault"]').change(
        function(){
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
          //   var x = document.getElementById("firstTime");
          //   if (x.style.display === "none") {
          //     x.style.display = "block";
          //   } else {
          //     x.style.display = "none";
          //   }
          // }
    });
 $('#btnLoadData').click(function() {
    console.log("clicked");

//     let jsonURL = "https://www.w3schools.com/jquery/demo_ajax_json.js";

//     let jsonURL = "demo.json";

    let jsonURL = "https://lterwilliger.github.io/fictional-octo-spoon-india/demo.json";

    $.ajax({
        url: jsonURL,
        dataType: "json",
        success: function(data) {
            //can log either the entire data or invoke specific properties data.zipCode...
            console.log(data.username);
            
            //loads first name into my first input box (in example #1)
            $("#username").val(data.username);
            console.log(data.username);

            $('input[type=checkbox]').each(function () {
                if (data.radioDefault === $(this).val())
                {
                  $(this).prop('checked', true)
                    console.log($(this));
               }

            });
            //console.log (sList);

            $.each(data, function (key, val) {
                //step through results
                console.log(key, val);
                //get each data item
                //put it in the right place
                //$("#dataContainer").append(key + " " + val);
                $(`#${key}`).val(val);
                
            });
        }
    });
});
    
  
// Clear element by type
    function clearElement(elementId, elementType){
        if(elementType == "html"){
            $(elementId).html("");
        }
        else if(elementType=="input"){
            $(elementId).val(" ");
        }
        else {
          $(elementId).val(" ");
        }
    }
	function checkInput() {
	  let x = document.getElementById(" ").value;
	  let text;
	  
	
	}
});
