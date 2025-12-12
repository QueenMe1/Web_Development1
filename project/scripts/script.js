const nav = document.getElementById('nav');
const menuButton = document.querySelector('.nav-bar');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active')
});

const stateInfo = {
    NGKE: {
        name : "Kebbi",
        slo: "State Slogan: Land Of Equity",
        text : "Kebbi’s economy relies on farming, fishing, and festivals like Argungu Fishing. Birnin Kebbi blends tradition with community life. The slogan emphasizes fairness and unity.",
        funfact: "Kebbi hosts the famous Argungu Fishing Festival every year.",
    },

    NGNI: {
        name: "Niger",
        slo: "The Power State",
        text: "Niger is Nigeria’s largest state by land area. It generates hydroelectric power and supports farming. Minna is relaxed and culturally significant.",
        funfact: "Kainji Dam, one of Nigeria’s first hydroelectric plants, is in Niger",
    },

    NGKW: {
        name: "Kwara",
        slo: "",
        text: "Kwara blends northern and Yoruba cultures in a peaceful setting. Ilorin is known for universities, history, and friendly communities. Agriculture is a mainstay.",
        funfact: "",
    },

    NGOG: {
        name: "Ogun",
        slo: "",
        text: "",
        funfact: "",
    },

    NGOY: {
        name: "Oyo",
        slo: "",
        text: "",
        funfact: "",
    },

    NGLA: {
        name: "Lagos",
        slo: "",
        text: "",
        funfact: "",
    },

    NGBO: {
        name: "Borno",
        slo: "",
        text: "",
        funfact: "",
    },

    NGAD: {
        name: "Adamawa",
        slo: "",
        text: "",
        funfact: "",
    },

    NGTA: {
        name: "Taraba",
        slo: "",
        text: "",
        funfact: "",
    },

    NGBE: {
        name: "Benue",
        slo: "",
        text: "",
        funfact: "",
    },

    NGCR: {
        name: "Cross River",
        slo: "",
        text: "",
        funfact: "",
    },

    NGSO: {
        name: "Sokoto",
        slo: "",
        text: "",
        funfact: "",
    },

    NGZA: {
        name: "Zamfara",
        slo: "",
        text: "",
        funfact: "",
    },

    NGYO: {
        name: "Yobe",
        slo: "",
        text: "",
        funfact: "",
    },

    NGKT: {
        name: "Katsina",
        slo: "",
        text: "",
        funfact: "",
    },

    NGJI: {
        name: "Jigawa",
        slo: "",
        text: "",
        funfact: "",
    },

    NGON: {
        name: "Ondo",
        slo: "",
        text: "",
        funfact: "",
    },
    
    NGDE: {
        name: "Delta",
        slo: "",
        text: "",
        funfact: "",
    },

    NGBY: {
        name: "Bayelsa",
        slo: "",
        text: "",
        funfact: "",
    },

    NGRI: {
        name: "Rivers",
        slo: "",
        text: "",
        funfact: "",
    },

    NGAK: {
        name: "Akwa Ibom",
        slo: "",
        text: "",
        funfact: "",
    },

    NGAB: {
        name: "Abia",
        slo: "",
        text: "",
        funfact: "",
    },

    NGEB: {
        name: "Ebonyi",
        slo: "",
        text: "",
        funfact: "",
    },

    NGAN: {
        name: "Anambra",
        slo: "",
        text: "",
        funfact: "",
    },

    NGED: {
        name: "Edo",
        slo: "",
        text: "",
        funfact: "",
    },

    NGBA: {
        name: "Bauchi",
        slo: "",
        text: "",
        funfact: "",
    },

    NGPL: {
        name: "Plateau",
        slo: "",
        text: "",
        funfact: "",
    },

    NGNA: {
        name: "Nassarawa",
        slo: "",
        text: "",
        funfact: "",
    },

    NGGO: {
        name: "Gombe",
        slo: "",
        text: "",
        funfact: "",
    },

    NGEN: {
        name: "Enugu",
        slo: "",
        text: "",
        funfact: "",
    },

    NGKO: {
        name: "Kogi",
        slo: "",
        text: "",
        funfact: "",
    },

    NGOS: {
        name: "Osun",
        slo: "",
        text: "",
        funfact: "",
    },

    NGIM: {
        name: "Imo",
        slo: "",
        text: "",
        funfact: "",
    },

    NGEK: {
        name: "Ekiti",
        slo: "",
        text: "",
        funfact: "",
    },

    NGKD: {
        name: "Kaduna",
        slo: "",
        text: "",
        funfact: "",
    },

    NGKN: {
        name: "Kano",
        slo: "",
        text: "",
        funfact: "",
    },

    NGFC: {
        name: "Federal Capital Territory",
        slo: "",
        text: "",
        funfact: "",
    },
}

const infoCenter = document.getElementById("info-center");
const stateName = document.getElementById("state-name");
const slogan = document.getElementById("slogan");
const stateText = document.getElementById("state-text");
const funfact = document.getElementById("funfact")

document.querySelectorAll(".state").forEach(state => {
    state.addEventListener("click", () => {
        const id = state.id;
        const info = stateInfo[id];
        document.getElementById("info-center").classList.add("show");

        if (info) {
            stateName.textContent = info.name;
            slogan.textContent = info.slo;
            stateText.textContent = info.text;
            funfact.textContent = info.funfact;

        }
    });
});