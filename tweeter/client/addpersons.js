Template.addperson.events({
 'click .js-save':function(){
     let ppic= $("#ppic").val();
     let uname= $("#uname").val();
     let uage= $("#uage").val();
     let descr= $("#descr").val();

    console.log("saving");
    tweetdb.insert({
        profpic:ppic,
        Name:uname,
        Age:uage,
        Desc:descr

    });

     $("#addModal").modal("hide");
 }
});