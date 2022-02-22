function printdate(){
    let today = new Date();
    let date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    console.log('current date ',date);
}

function printmonth(){
    let today = new Date();
    let month = today.getMonth()+1
    console.log('current month ',month);
}

function getbatchinfo(){
    console.log('Thorium W3D1, todays topic is nodejs module system')
}

module.exports.printdate = printdate;
module.exports.printmonth = printmonth;
module.exports.getbatchinfo = getbatchinfo;
