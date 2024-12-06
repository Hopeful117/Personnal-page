let index=0;
const content=[
    {image:"img/selfie.webp",
    Text:"Hello, my name is Ludo and I'm 33 years old. Actually work as a delivery driver, I decided to teach myself programming to get a more fulfilling job and eventually achieve my dream to move to Thaïland.I stopped pursuing education after High school so I wasnt really sure if I would be able to learn but I'm having fun in CS50 so far !I always liked computer and video games but I always thought I wasnt smart enought to learn programming so I'm glad I gave it a go.",
    Title:"About me",
    },
    {
    image:"img/Thaïland.jpg",
    Text:"For the last two years, I spent a month in Phuket,Thaïland to train Muay Thaï and do some tourism. The people here are so friendly and the food is so good every time I have to leave I feel so sad.I hope that one day I can stay for good.",
    Title:"Thaïland",
    },
    {
    image:"img/muaythai.jpg",
    Text:"“Muay” translates to mean “boxing” in Thai, so Muay Thai is literally Thai boxing. Taking elements from Muay Boran, the traditional Thai martial arts, Muay Thai as a modern combat sport was first formalized in the early 20th century. The sport was influenced by British boxing where codified rules and the boxing ring were put in place. During this period, fighters also ditched wrapping hands with ropes (“Kard Chuek”) and began wearing boxing gloves in competitions.Muay Thai is a stand-up striking sport, with two competitors in the ring throwing punches, elbows, knees and kicks at each other. Clinching, sweeps and throws are also allowed. Besides the 8-point contact, a key difference between Muay Thai and many other stand-up combat sports is its emphasis on traditional elements such as the pre-fight dance ritual known as Wai Kru Ram Muay, the head dress (Mongkon) and the Sarama music that accompanies each fight.",
    Title:"Muay Thaï",
    },
    {
    image:"img/road.jpg",
    Text:"After CS50x, I plan to take CS50 Web programming before starting a year long course to obtain a professionnal certificate in France, and after that hopefuly find work or work on other certification/personnal projects.",
    Title:"The road ahead"
    }
    ]

const next=document.getElementById("next");
const previous=document.getElementById("previous");
const img=document.getElementById("selfie");
const text=document.getElementById("texte");
const chapter=document.getElementById("chapter");
previous.disabled=true;
const end = content.length-1;



next.addEventListener("click",()=>{

    index++
    img.src=content[index].image;
    text.innerHTML=content[index].Text;
    chapter.innerHTML=content[index].Title;
    previous.disabled=false;
    if (index === end)
    {
        next.disabled = true;

    }


})

previous.addEventListener("click",()=>{



    next.disabled = false;
    index--
    img.src=content[index].image;
    text.innerHTML=content[index].Text;
    chapter.innerHTML=content[index].Title;

    if (index===0)
        {
            previous.disabled=true;
        }

})

