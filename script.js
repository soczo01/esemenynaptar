const datumElem = document.getElementById("datum");
const elozoGomb = document.getElementById("elozo");
const kovetkezoGomb = document.getElementById("kovetkezo");
const racsElem = document.getElementById("racs");

let datum = new Date();
let ev = datum.getFullYear();
let honap = datum.getMonth();

const napok = ["H", "K", "Sze", "Cs", "P", "Szo", "V"];

function frissitNaptar() {
    datumElem.textContent = `${ev}. ${honap + 1}. hónap`;
    racsElem.innerHTML = "";
    napok.forEach(nap => {
        const napFejlec = document.createElement("div");
        napFejlec.className = "nap-fejlec";
        napFejlec.textContent = nap;
        racsElem.appendChild(napFejlec);
    });

    const elsoNap = new Date(ev, honap, 1);
    const kezdNap = elsoNap.getDay() === 0 ? 6 : elsoNap.getDay() - 1;
    for (let i = 0; i < kezdNap; i++) {
        const uresCella = document.createElement("div");
        uresCella.className = "nap";
        racsElem.appendChild(uresCella);
    }

    const napokSzama = new Date(ev, honap + 1, 0).getDate();
    const maiDatum = new Date();
    for (let i = 1; i <= napokSzama; i++) {
        const napCella = document.createElement("div");
        napCella.className = "nap";
        napCella.textContent = i;

        if (ev === maiDatum.getFullYear() && honap === maiDatum.getMonth() && i === maiDatum.getDate()) {
            napCella.classList.add("ma");
        }

        racsElem.appendChild(napCella);
    }
}

elozoGomb.addEventListener("click", () => {
    honap--;
    if (honap < 0) {
        honap = 11;
        ev--;
    }
    frissitNaptar();
});

kovetkezoGomb.addEventListener("click", () => {
    honap++;
    if (honap > 11) {
        honap = 0;
        ev++;
    }
    frissitNaptar();
});

frissitNaptar();
