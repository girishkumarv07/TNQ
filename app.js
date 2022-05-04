
let getDropData =async () => {
    let data = await window.fetch("./dropData.json");
    let gotData = await data.json();
    // console.log(gotData);
    gotData.map(e => {
        // console.log(e)
        let selList = document.getElementById("dropDownShip");
        selList.innerHTML += `
            <option value="${e}">${e}</option>
        `;
    })
}
getDropData();

let contentLoader = document.getElementById("shipContent");

let changeDrop = () => {
    let valueSelected = document.getElementById("dropDownShip").value;
    // console.log(valueSelected);
    let getDataContent =async () => {
        let dataContent = await window.fetch("./content.json");
        let gotDataContent = await dataContent.json();
        // console.log(gotDataContent);
        gotDataContent.map(s => {
            // console.log(s.ship_id, s.ship_type, s.ship_name, s.roles)
            if (valueSelected == s.ship_id) {
                contentLoader.innerHTML = `
                <div>${s.ship_name}</div>
                <div>
                    <div><img src="${s.image}" alt="${s.ship_name}"></div>
                    <div>
                        <div>${s.ship_type}</div>
                        <div>${s.roles}</div>
                    </div>
                </div>
                `;
            }
            
        })
    }
    getDataContent();
}
