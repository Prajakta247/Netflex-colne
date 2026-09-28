let lang = "English";

const data = {
    English: {
        main: "Enjoy big movies, hit series and more from ₹149.",
        join: "Join today. Cancel anytime.",
        ready: "Ready to watch? Enter your email to create or restart your membership.",
        headings: ["Your Next Watch", "New on Netflex", "Horror Movie"],
        plans: "A Plan To Suit Your Needs",
        finish: "Finish Sign-Up",
        movies: [
            "Gatta Kushti 2", "Min vaaps Aaunga", "Peddi",
            "Idhayam Murali", "Durandhar 2", "Mardaani 3", "Ikka",
            "The Robbin Hero", "The Last Hause", "Extinction"
        ]
    },

    Hindi: {
        main: "₹149 से बड़ी फिल्में, हिट सीरीज़ और बहुत कुछ देखें।",
        join: "आज ही जुड़ें। कभी भी रद्द करें।",
        ready: "देखने के लिए तैयार हैं? अपनी सदस्यता शुरू करने के लिए ईमेल दर्ज करें।",
        headings: ["आपकी अगली पसंद", "Netflex पर नया", "हॉरर फिल्में"],
        plans: "आपकी जरूरत के अनुसार प्लान",
        finish: "साइन-अप पूरा करें",
        movies: [
            "गट्टा कुश्ती 2", "मैं वापस आऊंगा", "पेड्डी",
            "इधयम मुरली", "दुरंधर 2", "मर्दानी 3", "इक्का",
            "द रॉबिन हीरो", "द लास्ट हाउस", "एक्सटिंक्शन"
        ]
    },

    Marathi: {
        main: "₹149 पासून मोठे चित्रपट, हिट सीरीज आणि बरेच काही पहा.",
        join: "आजच सामील व्हा. कधीही रद्द करा.",
        ready: "पाहण्यासाठी तयार आहात? तुमची सदस्यता सुरू करण्यासाठी ईमेल टाका.",
        headings: ["तुमची पुढील निवड", "Netflex वर नवीन", "हॉरर चित्रपट"],
        plans: "तुमच्या गरजेनुसार प्लॅन",
        finish: "साइन-अप पूर्ण करा",
        movies: [
            "गट्टा कुस्ती 2", "मी परत येईन", "पेड्डी",
            "इधयम मुरली", "दुरंधर 2", "मर्दानी 3", "इक्का",
            "द रॉबिन हिरो", "द लास्ट हाउस", "एक्सटिंक्शन"
        ]
    }
};

document.querySelector(".buttons button:first-child").onclick = () => {

    let box = document.createElement("div");

    box.innerHTML = `
        <div style="background:#222;padding:20px;border-radius:10px;text-align:center">
            <b onclick="this.parentElement.parentElement.remove()">✕</b>
            <h3>Select Language</h3>

            <button onclick="changeLang('English')">English</button>
            <button onclick="changeLang('Hindi')">Hindi</button>
            <button onclick="changeLang('Marathi')">Marathi</button>
        </div>
    `;

    Object.assign(box.style,{
        position:"fixed",
        inset:0,
        display:"grid",
        placeItems:"center",
        background:"#000b",
        zIndex:9999
    });

    document.body.appendChild(box);
};

function changeLang(x) {

    lang = x;
    let d = data[x];

    document.querySelector(".buttons button:first-child").innerText = x;

    document.querySelector(".content h2").innerText = d.main;
    document.querySelectorAll(".content p")[0].innerText = d.join;
    document.querySelectorAll(".content p")[1].innerText = d.ready;

    document.querySelectorAll(".next-page h2").forEach((h,i) => {
        if(d.headings[i]) h.innerText = d.headings[i];
    });


    document.querySelectorAll(".movie p").forEach((p,i) => {
        if(d.movies[i]) p.innerText = d.movies[i];
    });

    document.querySelector(".plans h2").innerText = d.plans;

    document.querySelector(".finish").innerText = d.finish;
}