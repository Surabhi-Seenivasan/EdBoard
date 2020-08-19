function change_order(arg){
    console.log(arg);
    var clname=arg.className;
    console.log(clname);
    console.log(clname[6]);
    if(clname[6]=="1"){
        console.log("inside if");
        clname_new=clname.replace("1","2")
    }
    else{
        console.log("inside else");
        clname_new=clname.replace("2","1");
    }
    console.log(clname_new);
    arg.className=clname_new;
}