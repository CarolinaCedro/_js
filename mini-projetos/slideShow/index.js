'use strict';



const images = [
    {
        'id': '1',
        'url': "https://s2-quem.glbimg.com/Eqz6i_OSgQbzxg3t0ivgc5lAsow=/0x0:1400x846/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2022/b/R/xeLaxuQGaWHRdwgXHFhA/blackpink.jpg",
    },
    {
        'id': '2',
        'url': "https://www.ofuxico.com.br/wp-content/uploads/2023/08/blackpink-1.jpg",
    },
    {
        'id': '3',
        'url': "https://portalpopline.com.br/wp-content/uploads/2022/11/the-album-blackpink-feito-historico-spotify.jpg",
    },
    {
        'id': '4',
        'url': "https://media.gettyimages.com/id/1482551706/pt/foto/indio-california-jisoo-lisa-jennie-and-ros%C3%A9-of-blackpink-perform-at-the-coachella-stage-during.jpg?s=612x612&w=gi&k=20&c=ZvXxxxMyzeHgM5otaLVpLcAAIdQagzdIw4D5BjdzENs=",
    },
    {
        'id': '5',
        'url': "https://k4us.com.br/wp-content/uploads/2020/05/music200122_blackpink_1-1920x1280-1.jpg"
    }
]



const containerItems = document.querySelector('#container-items');


const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    const firstItem = items[0];
    containerItems.insertBefore(firstItem, items[items.length - 1].nextSibling);
    items = document.querySelectorAll('.item');
}


const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);





