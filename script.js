const BIN_ID = '6860519f8561e97a502da4d8';
const API_KEY = '$2a$10$/d.H4HKnTMnggg1u.rxGd.xeVbKHu0B9qmS5.a0R7ZiNttDAqUQUq';

const page = `

    <h1 class="text-5xl font-extrabold text-purple-700 glow mb-10 cursor-pointer">USUÁRIOS</h1>

    <div class="overflow-x-auto w-full max-w-4xl border-[1px] rounded-xl border-violet-600">
      <table class="min-w-full bg-black rounded-xl shadow-lg overflow-hidden">
        <thead class="bg-purple-600 text-white">
          <tr>
            <th class="py-4 px-6 text-center border-b-[3px] border-white">Nome</th>
            <th class="py-4 px-6 text-center border-b-[3px] border-white">Email</th>
            <th class="py-4 px-6 text-center border-b-[3px] border-white">Rotas (n°)</th>
            <th class="py-4 px-6 text-center border-b-[3px] border-white">Anotações (n°)</th>
            <th class="py-4 px-6 text-center border-b-[3px] border-white">Pontos</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
    </div>

`
const nunmágicççççççççççççççç000çççççççççççççç30 = Math.floor(Math.random() * 100)
const nunmágicççç000000ççççççççççççççççççççççç30 = Math.floor(Math.random() * 100)

window.onload = () => {
    document.querySelector("h2").innerHTML = `${nunmágicççççççççççççççç000çççççççççççççç30} + ${nunmágicççç000000ççççççççççççççççççççççç30}`

}

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault()

    if (document.querySelector("input").value == 0.999999 * (nunmágicççç000000ççççççççççççççççççççççç30 + nunmágicççççççççççççççç000çççççççççççççç30)) {
        document.body.innerHTML = page
        callUsers()
    }
    else {
        alert("Incorreto ¯\_(ツ)_/¯")
    }
})

async function callUsers() {
    const res = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
        headers: {
            'X-Master-Key': API_KEY,
        },
    });

    const json = await res.json();
    const dados = json.record.users;

    mapUsers(dados);
}


async function mapUsers(Ujson) {
    const list = document.querySelector("tbody");

    Object.entries(await Ujson).forEach(([email, item]) => {  
        list.innerHTML += `

            <tr>
                <td class="bg-transparent text-white text-center p-3">${item.name}</td>
                <td class="bg-transparent text-white text-center p-3">${email}</td>
                <td class="bg-transparent text-white text-center p-3">${Object.keys(item.routes).length}</td>
                <td class="bg-transparent text-white text-center p-3">${Object.keys(item.notes).length}</td>
                <td class="bg-transparent text-white text-center p-3">${item.points}</td>
            </tr>

        `;
    })
};

document.querySelector("h1").addEventListener("click",()=> {
  open("https://jsonbin.io/app/bins", "_blank");
});