Template.design_quiz.events({
    'change select[name=question1Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question1MulDiv').show();
            template.$('#question1FillDiv').hide();
            template.$('#question1FreeDiv').hide();
        }
        else if( selVal === "fb" ){
             template.$('#question1MulDiv').hide();
             template.$('#question1FillDiv').show();
             template.$('#question1FreeDiv').hide();
        }
        else {
            template.$('#question1MulDiv').hide();
            template.$('#question1FillDiv').hide();
            template.$('#question1FreeDiv').show();
       }
     },
     'change select[name=question2Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question2MulDiv').show();
            template.$('#question2FillDiv').hide();
        }
        else {
             template.$('#question2MulDiv').hide();
             template.$('#question2FillDiv').show();
        }
     },
     'change select[name=question3Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question3MulDiv').show();
            template.$('#question3FillDiv').hide();
        }
        else {
             template.$('#question3MulDiv').hide();
             template.$('#question3FillDiv').show();
        }
     },
     'change select[name=question4Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question4MulDiv').show();
            template.$('#question4FillDiv').hide();
        }
        else {
             template.$('#question4MulDiv').hide();
             template.$('#question4FillDiv').show();
        }
     },
         'change select[name=question5Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question5MulDiv').show();
            template.$('#question5FillDiv').hide();
        }
        else {
             template.$('#question5MulDiv').hide();
             template.$('#question5FillDiv').show();
        }
     },
         'change select[name=question6Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question6MulDiv').show();
            template.$('#question6FillDiv').hide();
        }
        else {
             template.$('#question6MulDiv').hide();
             template.$('#question6FillDiv').show();
        }
     },
         'change select[name=question7Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question7MulDiv').show();
            template.$('#question4FillDiv').hide();
        }
        else {
             template.$('#question7MulDiv').hide();
             template.$('#question7FillDiv').show();
        }
     },

         'change select[name=question8Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question8MulDiv').show();
            template.$('#question8FillDiv').hide();
        }
        else {
             template.$('#question8MulDiv').hide();
             template.$('#question8FillDiv').show();
        }
     },
         'change select[name=question9Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question9MulDiv').show();
            template.$('#question9FillDiv').hide();
        }
        else {
             template.$('#question9MulDiv').hide();
             template.$('#question9FillDiv').show();
        }
     },
         'change select[name=question10Selection]': function(event, template) {
        var selVal = $(event.target).val();
        console.log(selVal);
        if(selVal == 'mc') {
            template.$('#question10MulDiv').show();
            template.$('#question10FillDiv').hide();
        }
        else {
             template.$('#question10MulDiv').hide();
             template.$('#question10FillDiv').show();
        }
     },

    'click .open-insert-modal': function (e) {
    e.preventDefault();
    //{backdrop: "static"} it is use for only close button click than close
    $('#insertModal').modal({backdrop: "static"});
    },
});