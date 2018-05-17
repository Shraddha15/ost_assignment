$(document).ready(function(){

  $("#danger").hide();
  $("#success").hide();


          // 3. Set the click event to do the validation
         $("#btnsave").click(function () {
           $("#danger").hide();
           $("#success").hide();

           jQuery.validator.addMethod("alphanumeric1", function(value, element) {
           return this.optional(element) || /^[A-Za-z.]+$/i.test(value);
           }, "Letters  and dot only please");

           jQuery.validator.addMethod("checkcompanyname", function(value, element) {
           return this.optional(element) || /^[A-Za-z.-]+$/i.test(value);
           }, "Letters,dash  and dot only please");

            $("form[name='prof_form']").validate({
               rules: {
                  firstname:{
                    required:true,
                    maxlength:50,
                    minlength:3,
                    alphanumeric1:true


                  },
                  lastname:{
                    required:true,
                    maxlength:50,
                    minlength:3,
                    alphanumeric1:true

                  },
                  describe:{
                    required:true,
                    maxlength:220,
                    minlength:5
                  },
                  companyname:{
                    required:true,
                    maxlength:50,
                    checkcompanyname:true

                  },
                  designation:{
                    required:true,
                    minlength:2,
                    maxlength:50,
                    checkcompanyname:true
                  },
                  country:{
                    required:true
                  },
                  dateofjoining:{
                    required:true
                  },
                  linkedin:{
                    maxlength:20,
                    url:true
                  },
                  instagram:{
                    maxlength:20,
                    url:true
                  }



                },

               messages:{
                  firstname:{
                    required:"please provide firstname",
                    maxlength:"should be less than 50",
                    minlength:"should be more than 3"
                  },
                  lastname:{
                    required:"please provide lastname",
                    maxlength:"should be less than 50",
                    minlength:"should be more than 3"
                  },
                  describe:{
                    required:"please provide description",
                    maxlength:"should be less than 220",
                    minlength:"should be more than 5"
                  },
                  companyname:{
                    required:"please provide comapany name ",
                    maxlength:"should be less than 50"
                  },
                  designation:{
                    required:"please provide designation ",
                    maxlength:"should be less than 50",
                    minlength:"should be more than 2"

                  },

                  country:{
                    required:"please enter country"
                  },
                  dateofjoining:{
                    required:"please enter joining date"
                  },
                  linkedin:{
                    maxlength:"should be less than 50",
                    url:"invalid url"
                  },
                  instagram:{
                    maxlength:"should be less than 50",
                    url:"invalid url"
                  }
                },


                //

            });



            if($("form[name='prof_form']").valid())
            {
              //alert("hooo");
              $("#success").show();

            }else {
              $("#danger").show();
              //alert("jkhkh");

            }







            //alert("Validation Success!");






});

$("btncancel").click(function(){
  $("#danger").hide();
  $("#success").hide();

$("form[name='prof_form']").reset();
  //return false;

});
});
