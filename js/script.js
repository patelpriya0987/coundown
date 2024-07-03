let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let hour = document.getElementById("hour");
let minit = document.getElementById("minit");
let second = document.getElementById("second");


const startCoundown = () => {
    console.log("start");

    let hv = JSON.parse(hour.value);
    let mv = JSON.parse(minit.value);
    let sv = JSON.parse(second.value);

    console.log(hv, mv, sv);
    let h = hv;
    let m = mv;
    let s = sv;

    hr.innerHTML = h;
    min.innerHTML = m;
    sec.innerHTML = s;
    
    console.log(hr, min, sec);
        const start = () => {

            console.log("start");

            const interval = setInterval(() => {
                s--;
                if(s < 10){
                    sec.innerHTML = "0" + s;
                }else{
                    sec.innerHTML = s;
                }

                if(s <= 0){
                    s = 59;
                    m--;
                    if(m < 10){
                        min.innerHTML = "0" + m;
                    }else{
                        min.innerHTML = m;
                    }
                }

                if(m <= 0){
                    if(h == 0 && m == 0){
                        clearInterval(interval);
                    }else{
                        m = 59;
                        h--;
                        if(h < 10){
                            hr.innerHTML = "0" + h;
                        }else{
                            hr.innerHTML = h;
                        }
                    }
                }
            
            }, 1000)
            
        }

        start();

}