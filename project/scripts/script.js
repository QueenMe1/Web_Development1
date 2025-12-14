const nav = document.getElementById('nav');
const menuButton = document.querySelector('.nav-bar');

menuButton.addEventListener('click', () => {
    nav.classList.toggle('active')
});



const stateInfo = {
    NGKE: {
        name : "Kebbi - Capital: Birnin Kebbi",
        slo: "Land Of Equity",
        text : "Kebbi’s economy relies on farming, fishing, and festivals like Argungu Fishing. Birnin Kebbi blends tradition with community life. The slogan emphasizes fairness and unity.",
        funfact: "Kebbi hosts the famous Argungu Fishing Festival every year.",
    },

    NGNI: {
        name: "Niger - Capital: Minna",
        slo: "The Power State",
        text: "Niger is Nigeria’s largest state by land area. It generates hydroelectric power and supports farming. Minna is relaxed and culturally significant.",
        funfact: "Kainji Dam, one of Nigeria’s first hydroelectric plants, is in Niger",
    },

    NGKW: {
        name: "Kwara - Capital: Ilorin",
        slo: "State of Harmony",
        text: "Kwara blends northern and Yoruba cultures in a peaceful setting. Ilorin is known for universities, history, and friendly communities. Agriculture is a mainstay.",
        funfact: "Kwara hosts one of Nigeria’s earliest Air Force educational institutions.",
    },

    NGOG: {
        name: "Ogun - Capital: Abeokuta",
        slo: "Gateway State",
        text: "Ogun is an industrial hub with factories and educational institutions. Abeokuta is known for historic sites like Olumo Rock. The state links Lagos with the rest of Nigeria.",
        funfact: "Olumo Rock was used as a fortress during ancient wars.",
    },

    NGOY: {
        name: "Oyo - Capital: Ibadan",
        slo: "Pace Setter State",
        text: "Oyo is deeply rooted in the history of the old Oyo Empire. Ibadan is one of West Africa’s largest cities. The state leads in educational and cultural influence.",
        funfact: "The University of Ibadan is Nigeria’s oldest university.",
    },

    NGLA: {
        name: "Lagos - Capital: Ikeja",
        slo: "Centre of Excellence",
        text: "Lagos is Nigeria’s most bustling economic engine and population center. Business, entertainment, and trade define the state. Its beaches and nightlife are iconic.",
        funfact: "Lagos was Nigeria’s federal capital until 1991.",
    },

    NGBO: {
        name: "Borno - Capital: Maiduguri",
        slo: "Home of Peace ",
        text: "Borno occupies vast northeastern lands with deep historical legacy from the Kanem-Bornu Empire. Its landscapes mix savanna and desert edges. Maiduguri remains a central hub for people and traditions.",
        funfact: "Borno’s history stretches back over a millennium as a center of trade and scholarship.",
    },

    NGAD: {
        name: "Adamawa - Capital: Yola",
        slo: "Land of Beauty, Sunshine and Hospitality",
        text: "Adamawa has gentle hills, rivers, and wide, sunny landscapes in the northeast. The people are known for their hospitality and cultural diversity. Yola is both historic and welcoming.",
        funfact: "Adamawa borders Cameroon and has long been a crossroads for trade.",
    },

    NGTA: {
        name: "Taraba - Capital: Jalingo",
        slo: "Pride of the Sahel",
        text: "Yobe’s landscape transitions toward semi-arid Sahel terrain. Communities focus on farming and livestock. Tradition is strong across its towns.",
        funfact: "Taraba hosts Nigeria’s highest peak, Chappal Waddi.",
    },

    NGBE: {
        name: "Benue - Capital: Makurdi",
        slo: "Food Basket of the Nation ",
        text: "Benue is an agricultural powerhouse producing yams, grains, and fruits. The fertile floodplains support farming year-round. Makurdi is the administrative and cultural center.",
        funfact: "Benue grows a huge portion of Nigeria’s yam supply.",
    },

    NGCR: {
        name: "Cross River - Capital: Calabar",
        slo: "The People’s Paradise",
        text: "Cross River is rich in rainforests, waterfalls, and biodiversity. Calabar is clean, historic, and festival-filled. The state emphasizes tourism and cultural vibrancy.",
        funfact: "The Calabar Carnival is one of the largest street festivals in West Africa.",
    },

    NGSO: {
        name: "Sokoto - Capital: Sokoto",
        slo: "Seat of the Caliphate",
        text: "Sokoto is deeply rooted in Islamic history and scholarship. The city was the center of the Sokoto Caliphate. History and tradition remain core to life here.",
        funfact: "Sokoto is among Nigeria’s hottest regions climatically.",
    },

    NGZA: {
        name: "Zamfara - Capital: Gusau",
        slo: "Farming is Our Pride",
        text: "Zamfara’s economy is heavily agricultural with grains and livestock. Culture and tradition guide daily patterns. Gusau is steadily developing.",
        funfact: "Over 80% of Zamfara’s population is engaged in farming.",
    },

    NGYO: {
        name: "Yobe - Capital: Damaturu",
        slo: "Pride of the Sahel",
        text: "Yobe’s landscape transitions toward semi-arid Sahel terrain. Communities focus on farming and livestock. Tradition is strong across its towns.",
        funfact: "Yobe has yielded some of Nigeria’s oldest fossil finds.",
    },

    NGKT: {
        name: "Katsina - Capital: Kastina",
        slo: "Home of Hospitality",
        text: "Katsina’s communities are rooted in tradition and hospitality. Farming remains central to daily life. Its historic landmarks draw visitors.",
        funfact: "Katsina College, established early in the 20th century, is one of Nigeria’s oldest schools.",
    },

    NGJI: {
        name: "Jigawa - Capital: Dutse",
        slo: "The New World",
        text: "Jigawa is primarily rural with strong farming communities. Dutse is growing as a center of administration and trade. The state reflects calm, open landscapes.",
        funfact: "Jigawa has some of Nigeria’s most organized city layouts.",
    },

    NGON: {
        name: "Ondo - Capital: Akure",
        slo: "Sunshine State",
        text: "Ondo’s landscape includes forests, farms, and a coastal region. Cocoa farming drives much of its economy. Akure is calm and growing.",
        funfact: "Ondo is one of Nigeria’s largest cocoa-producing states.",
    },
    
    NGDE: {
        name: "Delta - Capital: Asaba",
        slo: "The Big Heart of the Nation",
        text: "Delta blends riverine life, oil industry, and diverse cultures. Cities like Warri contribute to commerce and entertainment. Its waterways and markets shape daily life.",
        funfact: "Delta has some of the deepest natural ports in West Africa.",
    },

    NGBY: {
        name: "Bayelsa - Capital: Yenagoa",
        slo: "Glory of All Lands",
        text: "Bayelsa is in the heart of the Niger Delta with rivers, creeks, and mangroves. Fishing and canoe culture shape daily life alongside oil production. Yenagoa is tranquil with cultural heritage.",
        funfact: "Bayelsa is one of Nigeria’s youngest states, created in 1996.",
    },

    NGRI: {
        name: "Rivers - Capital: Port Harcourt",
        slo: "Treasure Base of the Nation",
        text: "Rivers drives Nigeria’s energy economy with oil and gas. Port Harcourt is lively and industrial. Waterways influence local culture and cuisine.",
        funfact: "The Port Harcourt Carnival is one of Nigeria’s largest festivals.",
    },

    NGAK: {
        name: "Akwa Ibom - Capital: Uyo",
        slo: "Land of Promise",
        text: "Akwa Ibom lies on the Gulf of Guinea with oil, beaches, and growing urban development. Uyo is modern and expanding rapidly. It mixes coastal beauty with economic opportunity.",
        funfact: "The Godswill Akpabio International Stadium in Uyo is one of Africa’s largest sports venues.",
    },

    NGAB: {
        name: "Abia - Capital: Umuahia",
        slo: "God’s Own State",
        text: "Abia is a southeastern state known for entrepreneurship and strong markets, especially Aba. The region blends industrial activity with rich Igbo cultural heritage. The commercial energy is a key part of its identity.",
        funfact: "Aba is nicknamed the “Japan of Africa” for its manufacturing output.",
    },

    NGEB: {
        name: "Ebonyi - Capital: Abakaliki",
        slo: "Salt of the Nation",
        text: "Ebonyi produces salt and rice, with fertile land supporting farming. The state focuses on community and growth. Abakaliki is calm and culturally strong.",
        funfact: "Okposi Salt Lake in Ebonyi is a traditional source of salt for centuries.",
    },

    NGAN: {
        name: "Anambra - Capital: Awka",
        slo: "Light of the Nation",
        text: "Anambra is a commercial and cultural hub in the southeast with busy markets. Onitsha and Nnewi drive trade and industry. Its people are known for vibrant traditions and strong community ties.",
        funfact: "Nnewi is a major center for auto parts manufacturing.",
    },

    NGED: {
        name: "Edo - Capital: Benin City",
        slo: "Heartbeat of the Nation",
        text: "Edo holds the historic Benin Kingdom with rich bronze art and heritage. Benin City blends culture with modern growth. The state celebrates arts and tradition.",
        funfact: "The Benin Moat, ancient earthworks around the city, is one of the largest in the world.",
    },

    NGBA: {
        name: "Bauchi - Capital: Bauchi",
        slo: "Pearl of Tourism",
        text: "Bauchi boasts natural landscapes and cultural sites, including wildlife areas. Agriculture supports livelihoods across its rolling savanna. The city of Bauchi is historic and developing.",
        funfact: "Yankari Game Reserve, one of Nigeria’s largest wildlife parks, is in Bauchi.",
    },

    NGPL: {
        name: "Plateau - Capital: Jos",
        slo: "Home of Peace and Tourism",
        text: "Plateau’s climate is cool with rolling hills and rocky scenery. Jos is known for rock formations and cultural diversity. Tourism is a major attraction.",
        funfact: "Jos has one of Nigeria’s oldest museums.",
    },

    NGNA: {
        name: "Nassarawa - Capital: Lafia",
        slo: "Home of Solid Minerals",
        text: "Nasarawa has hills, mineral resources, and growing towns. Agriculture and quarrying support the local economy. Close proximity to Abuja fuels growth.",
        funfact: "Nasarawa has large limestone and mineral deposits.",
    },

    NGGO: {
        name: "Gombe - Capital: Gombe",
        slo: "Jewel in the Savannah",
        text: "Gombe is in northeastern savanna lands with agriculture at its core. Communities are culturally rich and welcoming. The capital is experiencing steady urban growth.",
        funfact: "The state is known for traditional pottery and crafts.",
    },

    NGEN: {
        name: "Enugu - Capital: Enugu",
        slo: "Coal City State",
        text: "Enugu’s history is tied to the coal industry, giving it the nickname “Coal City.” Today the state is lively, with music, arts, and business. The city’s relaxed vibe attracts people from across the Southeast.",
        funfact: "Enugu was central to early industrial development in Nigeria.",
    },

    NGKO: {
        name: "Kogi - Capital: Lokoja",
        slo: "The Confluence State",
        text: "Kogi is named for the meeting of the Niger and Benue Rivers. Lokoja has deep historical roots dating back to colonial times. The state connects northern and southern Nigeria.",
        funfact: "Nigeria’s first national flag was hoisted in Lokoja in 1914.",
    },

    NGOS: {
        name: "Osun - Capital: Osogbo",
        slo: "Land of Virtue",
        text: "Osun preserves Yoruba culture, sacred groves, and festivals. The Osun-Osogbo Grove is a UNESCO World Heritage site. Art and tradition thrive here.",
        funfact: "The annual Osun-Osogbo festival draws people from across the world.",
    },

    NGIM: {
        name: "Imo - Capital: Owerri",
        slo: "Eastern Heartland",
        text: "Imo is dynamic with industry, food culture, and entertainment thriving. Owerri is highly social and vibrant. Festivals and traditions define community life.",
        funfact: "Imo produces a significant share of Nigeria’s palm oil.",
    },

    NGEK: {
        name: "Ekiti - Capital: Ado-Ekiti",
        slo: "Land of Honour and Integrity",
        text: "Ekiti is hilly and scenic with a focus on education and community values. It has strong local traditions and academic culture. Ado-Ekiti is the administrative hub.",
        funfact: "Ekiti is known for having one of Nigeria’s highest literacy rates.",
    },

    NGKD: {
        name: "Kaduna - Capital: Kaduna",
        slo: "Centre of Learning",
        text: "Kaduna is a major hub for education, industry, and culture. Its universities and institutes are widely known. The city has diverse ethnic traditions and history.",
        funfact: "Kaduna’s textile industry was once one of the largest in West Africa.",
    },

    NGKN: {
        name: "Kano - Capital: Kano",
        slo: "Centre of Commerce",
        text: "Kano has a millennia-old trade legacy with bustling markets and crafts. The city is a melting pot of commerce and tradition. Agriculture and industry mix here.",
        funfact: "Kano’s Kurmi Market is one of Africa’s oldest surviving markets.",
    },

    NGFC: {
        name: "Federal Capital Territory - Abuja",
        slo: "Center of Unity",
        text: "Abuja is Nigeria’s purpose-built capital and political heart. It hosts the federal government and key national institutions. People from all Nigerian backgrounds live and work here.",
        funfact: "Abuja was chosen as capital because it sits near the geographic center of Nigeria.",
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

const infoCent = document.getElementById("info-center");
const exitButton = document.getElementById("close");

exitButton.addEventListener("click", () => {
    document.getElementById("info-center").classList.remove("show");
});