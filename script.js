$(document).ready(function () {
    $(window).on('load', function () {
        setTimeout(function () {
            $('.preloader').fadeOut(700)

        }, 800)

        setTimeout(function () {
            $('#home h2').addClass('munculshean')
            $('.pkanan').addClass('muncultext');
            $('.pkiri').addClass('muncultext');
        }, 1300)
    });

    alert('Welcome to Your Todo List')
    let enterName = true;
    let name;

    while (enterName) {
        name = prompt('Who are you?')
        if (name == '' || name == null) {
            alert('Please insert your name')
        } else {
            enterName = confirm('Want to change your name?')
        }
    }

    const isi = document.querySelector('h1')
    isi.textContent = name + '\'s Todo list'

    //ambil input value
    const inputValue = document.querySelector('.input input')

    const plus = document.querySelector('.input img')

    plus.addEventListener('click', function () {
        const isiInput = inputValue.value;
        //condition
        console.log(isiInput)
        if (inputValue.value == '') {
            alert('Insert Your Todo List')
        } else {
            //ambil parent
            const parentIsi = document.querySelector('.isiList')

            //buat div
            const areaList = document.createElement('div')
            areaList.classList.add('contentIsi')

            //buat img satu
            const fImg = document.createElement('img')
            fImg.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Check_icon.svg/1200px-Check_icon.svg.png')
            fImg.classList.add('gmbrSatu')

            //buat img dua
            fImg.setAttribute('width', 55)
            const sImg = document.createElement('img')
            sImg.setAttribute('src', 'https://th.bing.com/th/id/R.f14144f4dbcf36bdf1afd429b05f782c?rik=eHsNGU7JKcsU1Q&riu=http%3a%2f%2fwww.newdesignfile.com%2fpostpic%2f2015%2f12%2fred-cross-icon_96454.png&ehk=yPNWTE5Ircebgqhc2DiY8PBs09Uar7c01XZgPOorOsY%3d&risl=&pid=ImgRaw&r=0')
            sImg.setAttribute('width', 55)
            sImg.classList.add('gmbrDua')

            //buat isi listnya
            const elemenTodo = document.createElement('h2')
            elemenTodo.classList.add('judul')
            const isiTodo = document.createTextNode(isiInput)

            //masuk masukin elemen
            elemenTodo.appendChild(isiTodo);
            areaList.appendChild(elemenTodo);
            areaList.appendChild(fImg)
            areaList.appendChild(sImg)
            parentIsi.appendChild(areaList)
            //reset value
            inputValue.value = '';
        }


    })

    //kalo ceklist dipencet
    const parentContentIsi = document.querySelector('.isiList');
    const parentContent = document.querySelectorAll('.contentIsi')
    const gmbrCek = document.getElementsByClassName('gmbrSatu')
    const gmbrSilang = document.getElementsByClassName('gmbrDua')


    parentContentIsi.addEventListener('click', function (e) {
        for (let i = 0; i < gmbrCek.length; i++) {
            if (e.target == gmbrCek[i]) {
                h2[i].classList.toggle('coret');
            } else if (e.target == gmbrSilang[i]) {
                h2[i].parentElement.remove()
            }
        }
    })

    const h2 = document.getElementsByClassName('judul')
    const option = document.querySelector('.select-box');
    const listIsi = document.querySelector('.isiList');
    const childIsi = listIsi.children;

    option.addEventListener('click', function (e) {
        for (let y = 0; y < childIsi.length; y++) {
            switch (e.target.value) {
                case 'all':
                    if (h2[y].classList.contains('coret')) {
                        h2[y].parentElement.style.display = 'flex'
                    } else {
                        h2[y].parentElement.style.display = 'flex'
                    }
                    break;
                case 'complete':
                    if (h2[y].classList.contains('coret')) {
                        h2[y].parentElement.style.display = 'flex'
                    } else {
                        h2[y].parentElement.style.display = 'none'
                    }
                    break;
                case 'notcom':
                    if (h2[y].classList.contains('coret')) {
                        h2[y].parentElement.style.display = 'none'
                    } else {
                        h2[y].parentElement.style.display = 'flex'
                    }
                    break;
            }

        }
    })
});