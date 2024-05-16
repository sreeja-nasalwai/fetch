function getData(){
  fetch("http://localhost:3000/users")
  .then((res)=>res.json())
  .then((data)=>{
    fetch("http://localhost:3000/users")
    .then((res)=>res.json())
    .then((data)=>{
        const table = document.createElement('table');
        table.className = "custom-table"; // Add class to the table
        
        // Create table header row
        const headerRow = table.insertRow();
        for (const key in data[0]) {
            const th = document.createElement('th');
            th.textContent = key;
            headerRow.appendChild(th);

            
        }
        
        // Create table rows with data
        data.forEach((user, index) => {
            const row = table.insertRow();
            for (const key in data[0]) {
                if (Object.prototype.hasOwnProperty.call(user, key)) {
                    const cell = row.insertCell();
                    cell.textContent = user[key];
                }
            }
        });
        
        // Append table to a container in your HTML (assuming there's a div with id "table-container")
        const tableContainer = document.getElementById('table-container');
        tableContainer.innerHTML = ''; // Clear existing content
        tableContainer.appendChild(table);
    })})
    .catch((error) => console.error('Error:', error));
  }

function deleteData(){
  const id1=document.getElementById("id").value
  fetch(`http://localhost:3000/users/${id1}`,{method:"DELETE"})
  .then((res)=>res.json())
  .then((data)=>console.log(data))
}
function postData(){
  const id1=document.getElementById("id").value
  const name1=document.getElementById("name").value 
  const branch1=document.getElementById("branch").value 
const section1=document.getElementById("sec").value 
 fetch("http://localhost:3000/users",
 {
   method:"POST",
   headers: {
      'Content-Type': 'application/json'
  },
   body:JSON.stringify({
      "id":id1,
      "name":name1,
      "branch":branch1,
      "section":section1
   })
 }) 
 .then((res)=>res.json())
  .then((data)=>console.log(data))
}
function updateData(){
  const id1=document.getElementById("id").value
  const name1=document.getElementById("name").value 
  const branch1=document.getElementById("branch").value
  fetch(`http://localhost:3000/users/${id1}`,
  {
    method:"PATCH",
    body:JSON.stringify({
      "name":name1,
      "branch":branch1
    })
  })
  .then((res)=>res.json())
  .then((data)=>console.log(data))
}