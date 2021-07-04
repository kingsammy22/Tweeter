Template.tweeting.events({
    'click .js-tw'(){
        savetweet();
       
    },
    'keyup #twmsg'(event){
        if (event.keyCode === 13){
            savetweet();
        }
    }
});

function savetweet(){
    let usermsg= $("#twmsg").val();

    twdb.insert({
     "msg":usermsg
    });
    $("#twmsg").val("");
}