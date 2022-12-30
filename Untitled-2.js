const getRes = async(url) => {
    const res = await fetch(url);
    if(!res.ok){
        throw new Error('status: ${res.status}');
    }
    return await res.json();
}

getRes('user.json')
    .then(product=> {
        for(let key in product){
            let a = product[key];
            document.getElementById("product").innerHTML = a;
        }
    }
        );

