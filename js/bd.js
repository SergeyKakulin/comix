const heroesList = {
    "spiderman": {
        "id": 1,
        "image": "https://upload.wikimedia.org/wikipedia/ru/c/cb/AmazingSpiderMan50.jpg",
        "header": "Человек-Паук",
        "content": "Пи́тер Бе́нджамин Па́ркер"
    },
    "ironman": {
        "id": 2,
        "image": "https://pngimg.com/uploads/ironman/ironman_PNG33.png",
        "header": "Железный человек",
        "content": "Э́нтони Э́двард «То́ни» Старк"
    },
    "captainamerica": {
        "id": 3,
        "image": "https://img01.rl0.ru/afisha/e660x-i/daily.afisha.ru/uploads/images/e/67/e67601d1438d46938e90b531439b2b4b.jpg",
        "header": "Капитан Америка",
        "content": "Стив Ро́джерс"
    },
    "hulk": {
        "id": 4,
        "image": "https://cs10.pikabu.ru/post_img/2019/05/31/7/1559303286198612100.jpg",
        "header": "Халк",
        "content": "Ро́берт Брюс Бэ́ннер"
    }
    ,
    "antman": {
        "id": 5,
        "image": "https://upload.wikimedia.org/wikipedia/ru/9/90/Ant-man_Scott_Lang_2015.jpg",
        "header": "Человек-муравей",
        "content": "Скотт Лэнг"
    }
    ,
    "wolverine": {
        "id": 6,
        "image": "https://u.kanobu.ru/editor/images/25/d2da45b1-b1f7-4b33-8f74-370e0408f773.jpg",
        "header": "Росомаха",
        "content": "Джеймс Хоулетт aka Логан"
    }
    ,
    "punisher": {
        "id": 7,
        "image": "https://sun9-38.userapi.com/Fwh5Kqa4puEfKzf2O00m4rGh1yM_Af1tgnwU1A/DVORDeLjcLk.jpg",
        "header": "Каратель",
        "content": "Фрэнсис «Фрэнк» Касл"
    }
    ,
    "hawkeye": {
        "id": 8,
        "image": "https://www.strangearts.ru/sites/default/files/1798183-ultimate_comics_hawkeye_by_neal_adams_0.jpg",
        "header": "Соколи́ный глаз",
        "content": "Кли́нтон Фрэ́нсис Ба́ртон"
    }
    ,
    "hjhjgjhg": {
        "id": 9,
        "image": "https://klike.net/uploads/posts/2019-05/1556945414_2.jpg",
        "header": "hghghg",
        "content": "tftfyuhij"
    }
    ,
    "": {
        "id": 4,
        "image": "",
        "header": "",
        "content": ""
    }
    ,
    "": {
        "id": 4,
        "image": "",
        "header": "",
        "content": ""
    }
    ,
    "": {
        "id": 4,
        "image": "",
        "header": "",
        "content": ""
    }
    ,
    "": {
        "id": 4,
        "image": "",
        "header": "",
        "content": ""
    }

};

var out = '';
for(var key in heroesList) {
    out+='<div class="open-popup">'
    +'<card data-image="'+heroesList[key].image+'">'
    +'<h1 slot="header" class="card-header">'+heroesList[key].header+'</h1>'
    +'<p slot="content">'+heroesList[key].content+'</p></card></div>'
};

console.log(out);
document.getElementById('app').innerHTML = out;

// let container = document.getElementById('app');

// container.innerHTML = out;

console.log(app);


