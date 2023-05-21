let body = document.getElementById('body');
body.style.backgroundColor = '#17202A';



let container = document.createElement('div');
container.style.textAlign = 'center';
container.style.marginTop = '50px'
    // container.style.display = 'flex';
    // container.style.width = '100vw';
    // container.style.height = '100vh';
    // container.style.justifyContent = 'center';
    // container.style.alignItems = 'center';



let name = document.createElement('h1');
name.innerHTML = 'Covid 19 Tracker';
name.style.color = '#ECF0F1';



let search = document.createElement('input');
search.setAttribute('type', 'text');
search.setAttribute('placeholder', 'Enter the country name like : India');
search.style.width = '40%';
search.style.height = '40px';
search.style.borderRadius = '4px';
search.style.marginTop = '30px'
    // search.style.display = 'inline-block'



let btn = document.createElement('button');
btn.innerHTML = 'Search';
btn.setAttribute('type', 'button');
btn.classList.add('btn', 'btn-primary');
btn.style.marginLeft = '20px';
btn.style.marginBottom = '5px';
btn.addEventListener('click', output);






async function output() {
    let value = search.value;
    let url = `https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true`;
    let request = await fetch(url);
    let res = await request.json();
    // console.log(res);
    for (let i = 0; i < res.length; i++) {
        try {
            if ((res[i].country) == (value)) {
                // console.log(res[i].country);
                // console.log(res[i].infected);
                let para1 = document.createElement('h6');
                para1.innerHTML = `Country Name : ${res[i].country}`;
                para1.style.color = '#ECF0F1';
                para1.style.paddingTop = '15px';
                let para2 = document.createElement('h6');
                para2.innerHTML = `Infected : ${res[i].infected}`;
                para2.style.color = '#ECF0F1';
                para2.style.paddingTop = '15px';
                let para3 = document.createElement('h6');
                para3.innerHTML = `Tested : ${res[i].tested}`;
                para3.style.color = '#ECF0F1';
                para3.style.paddingTop = '15px';
                let para4 = document.createElement('h6');
                para4.innerHTML = `Deceased : ${res[i].deceased}`;
                para4.style.color = '#ECF0F1';
                para4.style.paddingTop = '15px';
                let para5 = document.createElement('h6');
                para5.innerHTML = `Recovered : ${res[i].recovered}`;
                para5.style.color = '#ECF0F1';
                para5.style.paddingTop = '15px';

                container.append(para1, para2, para3, para4, para5);
            }
        } catch (error) {
            // console.log(`${res[i].country} is not valid`);
        }
    }
}


container.append(name, search, btn);
document.body.append(container);