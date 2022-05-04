// select.value
let tableData = document.getElementById("selectedList");
let handleClick = () => {
    tableData.innerHTML = ``;
    var selval = document.getElementById("statusdd").value
    // console.log(selval)
    // return selval;

    let getData = async () => {
        let data = await fetch("./content.json");
        let gotData = await data.json();
        console.log(gotData);
        let tableHead = document.getElementById("headTable");
        tableHead.innerHTML = `
            <tr>
                <th>Capsule ID</th>
                <th>Capsule Serial</th>
                <th>Details</th>
            </tr>
        `;
        gotData.map(e => {
            if (selval === e.status) {
                tableData.innerHTML += `
                    <tr>
                        <td>${e.capsule_id}</td>
                        <td>${e.capsule_serial}</td>
                        <td>${e.details}</td>
                    </tr>
                `;

            }
        });
    }
    getData();

}

// capsule_id: "dragon1"
// capsule_serial: "C101"
// details: "Reentered after three weeks in orbit"
// landings: 1
// missions: Array(1)
// 0: {name: 'COTS 1', flight: 7}
// length: 1
// [[Prototype]]: Array(0)
// original_launch: "2010-12-08T15:43:00.000Z"
// original_launch_unix: 1291822980
// reuse_count: 0
// status: "retired"
// type: "Dragon 1.0"
