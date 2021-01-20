class TimeTable {
 constructor(hrs, subject){
    this.hrs = hrs;
    this.subject = subject;
   
  }
}
  
  let tt1 = new TimeTable("8:00-10:00", "matemtyka");
  let tt2 = new TimeTable("10:00-12:00","fizyka");
  let tt3 = new TimeTable("12:00-14:00","chemia");

  
   var time = [];
     
   
   time.push(tt1);
   time.push(tt2);  
   time.push(tt3);
   time.push(tt1);
   time.push(tt2);

 var html = '<table>';
 html += '<tr>';
 for( var j in time[0] ) {
  html += '<th>' + j + '</th>';
 }
 html += '</tr>';
 for( var i = 0; i < time.length; i++) {
  html += '<tr>';
  for( var j in time[i] ) {
    html += '<td>' + time[i][j] + '</td>';
  }
  html += '</tr>';
 }
 html += '</table>';
 document.getElementById('container').innerHTML = html;




            