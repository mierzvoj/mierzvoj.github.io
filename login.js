


function student(){
            var student;
            for (var j = 0; j < 4; j++) {
                student = {
                    rank: "Rank" + j,
                    stuclass: "Class" + j,
                };
                var table = document.getElementById("myTable");
                var row = table.insertRow(j);
                var cell1 = row.insertCell(0);
                var cell2 = row.insertCell(1);
                ;

                
                cell1.innerHTML = student.rank,
                cell2.innerHTML = student.stuclass;
            }
}