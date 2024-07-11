"use strict";

const DATA = [
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./images/trainers/trainer-m1.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "8 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./images/trainers/trainer-f1.png",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./images/trainers/trainer-m2.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Тетяна",
    "last name": "Мороз",
    photo: "./images/trainers/trainer-f2.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
  },
  {
    "first name": "Сергій",
    "last name": "Коваленко",
    photo: "./images/trainers/trainer-m3.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
  },
  {
    "first name": "Олена",
    "last name": "Лисенко",
    photo: "./images/trainers/trainer-f3.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
  },
  {
    "first name": "Андрій",
    "last name": "Волков",
    photo: "./images/trainers/trainer-m4.jpg",
    specialization: "Бійцівський клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
  },
  {
    "first name": "Наталія",
    "last name": "Романенко",
    photo: "./images/trainers/trainer-f4.jpg",
    specialization: "Дитячий клуб",
    category: "спеціаліст",
    experience: "3 роки",
    description:
      "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
  },
  {
    "first name": "Віталій",
    "last name": "Козлов",
    photo: "./images/trainers/trainer-m5.jpg",
    specialization: "Тренажерний зал",
    category: "майстер",
    experience: "10 років",
    description:
      "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
  },
  {
    "first name": "Юлія",
    "last name": "Кравченко",
    photo: "./images/trainers/trainer-f5.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "4 роки",
    description:
      "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
  },
  {
    "first name": "Олег",
    "last name": "Мельник",
    photo: "./images/trainers/trainer-m6.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "12 років",
    description:
      "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
  },
  {
    "first name": "Лідія",
    "last name": "Попова",
    photo: "./images/trainers/trainer-f6.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
  },
  {
    "first name": "Роман",
    "last name": "Семенов",
    photo: "./images/trainers/trainer-m7.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
  },
  {
    "first name": "Анастасія",
    "last name": "Гончарова",
    photo: "./images/trainers/trainer-f7.jpg",
    specialization: "Басейн",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
  },
  {
    "first name": "Валентин",
    "last name": "Ткаченко",
    photo: "./images/trainers/trainer-m8.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
  },
  {
    "first name": "Лариса",
    "last name": "Петренко",
    photo: "./images/trainers/trainer-f8.jpg",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "7 років",
    description:
      "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
  },
  {
    "first name": "Олексій",
    "last name": "Петров",
    photo: "./images/trainers/trainer-m9.jpg",
    specialization: "Басейн",
    category: "майстер",
    experience: "11 років",
    description:
      "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
  },
  {
    "first name": "Марина",
    "last name": "Іванова",
    photo: "./images/trainers/trainer-f9.jpg",
    specialization: "Тренажерний зал",
    category: "спеціаліст",
    experience: "2 роки",
    description:
      "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
  },
  {
    "first name": "Ігор",
    "last name": "Сидоренко",
    photo: "./images/trainers/trainer-m10.jpg",
    specialization: "Дитячий клуб",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
  },
  {
    "first name": "Наталія",
    "last name": "Бондаренко",
    photo: "./images/trainers/trainer-f10.jpg",
    specialization: "Бійцівський клуб",
    category: "майстер",
    experience: "8 років",
    description:
      "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
  },
  {
    "first name": "Андрій",
    "last name": "Семенов",
    photo: "./images/trainers/trainer-m11.jpg",
    specialization: "Тренажерний зал",
    category: "інструктор",
    experience: "1 рік",
    description:
      "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
  },
  {
    "first name": "Софія",
    "last name": "Мельник",
    photo: "./images/trainers/trainer-f11.jpg",
    specialization: "Басейн",
    category: "спеціаліст",
    experience: "6 років",
    description:
      "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
  },
  {
    "first name": "Дмитро",
    "last name": "Ковальчук",
    photo: "./images/trainers/trainer-m12.png",
    specialization: "Дитячий клуб",
    category: "майстер",
    experience: "10 років",
    description:
      "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
  },
  {
    "first name": "Олена",
    "last name": "Ткаченко",
    photo: "./images/trainers/trainer-f12.jpg",
    specialization: "Бійцівський клуб",
    category: "спеціаліст",
    experience: "5 років",
    description:
      "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
  },
];
const dataCopy = [...DATA];
const sortingSection = document.querySelector('.sorting');
const filterSection = document.querySelector('.sidebar')
const containerCards = document.querySelector(".trainers-cards__container");
const sortButtons = document.querySelectorAll(".sorting__btn");
const categoriesForFilter = document.querySelectorAll(".filters__fieldset");
const directions = categoriesForFilter[0].childNodes;
const categories = categoriesForFilter[1].childNodes;

let sortButton = sessionStorage.getItem("sortButton")
  ? sessionStorage.getItem("sortButton")
  : "ЗА ЗАМОВЧУВАННЯМ";
let filtr = {
  direction: sessionStorage.getItem("direction")
    ? sessionStorage.getItem("direction")
    : "ВСІ",
  category: sessionStorage.getItem("category")
    ? sessionStorage.getItem("category")
    : "ВСІ",
};
// console.log("filtr", filtr, "sortButton", sortButton);
// preloader create
const preloader = document.createElement("div");
preloader.classList.add("load", "hidden");
preloader.setAttribute('id', 'preloader')
const hr = document.createElement("hr");
const hr1 = document.createElement("hr");
const hr2 = document.createElement("hr");
const hr3 = document.createElement("hr");

preloader.append(hr);
preloader.append(hr1);
preloader.append(hr2);
preloader.append(hr3);

document.body.prepend(preloader);

//====
window.addEventListener("load", () => {
    console.log('window.addEventListener("load")')
    // startPreloader()
    // containerCards.classList.add('hidden')

  if (sessionStorage.length > 0) {
    console.log("load session store");

    sortButtons.forEach((item) => {
      if (sessionStorage.getItem("sortButton")) {
        // console.log(sessionStorage.getItem("sortButton"));
        // console.log(item.textContent);
        const textConentButton = item.textContent.toUpperCase().trim();
        // console.log("textConentButton", textConentButton);
        if (textConentButton === sessionStorage.getItem("sortButton")) {
          item.classList.add("sorting__btn--active");
        } else {
          item.classList.remove("sorting__btn--active");
        }
      } else {
        console.log("open page");
        return;
      }
    });

    directions.forEach((item) => {
      if (sessionStorage.getItem("direction")) {
        // console.log(item);
        const radioLabel = document.querySelector(`label[for="${item.id}"]`);
        if (radioLabel) {
          // console.log(radioLabel, sessionStorage.getItem("direction"));
          const textLabel = radioLabel.textContent.trim();
          // console.log('radioLabel', item, textLabel)

          if (textLabel === sessionStorage.getItem("direction")) {
            const input = document.querySelector(`input[id=${item.id}`);
            input.checked = true;
          } else {
            // console.log(' item.checked = false', item)
            item.checked = false;
          }
        } else {
          return;
        }
      } else {
        return;
      }
    });
    categories.forEach((item) => {
      if (sessionStorage.getItem("category")) {
        // console.log(item);
        const radioLabel = document.querySelector(`label[for="${item.id}"]`);
        // console.log(radioLabel);
        if (radioLabel) {
          const textLabel = radioLabel.textContent.trim();
          //   console.log(radioLabel);
          if (textLabel === sessionStorage.getItem("category")) {
            const input = document.querySelector(`input[id=${item.id}`);
            input.checked = true;
          } else {
            item.checked = false;
          }
        } else {
          return;
        }
      } else {
        return;
      }
    });

    sortButtons.forEach((item) => {
      if (item.classList.contains("sorting__btn--active")) {
        console.log(sortButton, item);
        sortData();
      }
    });
  } else {
    console.log("sessionStorage.length", sessionStorage.length);
    showCards(DATA);
  }

  function getSortbutton() {
    console.log("getSortbutton");
    let value;
    sortButtons.forEach((item) => {
      if (item.classList.contains("sorting__btn--active")) {
        value = item.textContent.toUpperCase();
        value = value.trim();
      }
    });
    return value;
  }
  //   getSortbutton();

  function sortData() {
    const fitredData = checkFiltr();
    console.log("fitredData", fitredData);

    if (sortButton === "ЗА ПРІЗВИЩЕМ") {
      fitredData.sort((a, b) => a["last name"].localeCompare(b["last name"]));
      showCards(fitredData);
    } else if (sortButton === "ЗА ДОСВІДОМ") {
      fitredData.sort(
        (a, b) => parseInt(a.experience) - parseInt(b.experience)
      );
      showCards(fitredData);
    } else {
      console.log("sortData ЗА ЗАМОВЧУВАННЯМ");
      showCards(fitredData);
    }
  }
  document.querySelector('.sorting').addEventListener('click', handleClickSortCards)
//   sortButtons.forEach((item) => {
//     item.addEventListener("click", handleClickSortCards);
//   });

  function handleClickSortCards(e) {

    console.log("handleClickSortCards", e);
    sortingSection.setAttribute('hidden', 'true');
    filterSection.setAttribute('hidden', 'true')

    const button = e.target;
    if(button.tagName === "BUTTON" ) {
        sortButtons.forEach((item) => {
            if (button === item) {
              item.classList.add("sorting__btn--active");
            } else {
              item.classList.remove("sorting__btn--active");
            }
          });
          sortButton = getSortbutton();
          console.log("sortButton", sortButton);
          sortData();
      
        }
        else {
            return
        }

  }

  const filtrButton = document.querySelector(".filters__submit");
  filtrButton.addEventListener("click", handleClickFilterCards);

  function handleClickFilterCards(e) {
    containerCards.classList.add('hidden');
    sortingSection.setAttribute('hidden', 'true');
    filterSection.setAttribute('hidden', 'true')
    startPreloader();

    console.log("handleClickFilterCards");
    e.preventDefault();
    sortData();
  }

  function checkFiltr() {
    console.log("checkFiltr");

    directions.forEach((item) => {
      if (item.checked) {
        const radioLabel = document.querySelector(
          `label[for="${item.id}"]`
        ).textContent;
        filtr.direction = radioLabel.trim();
      }
    });
    categories.forEach((item) => {
      if (item.checked) {
        const radioLabel = document.querySelector(
          `label[for="${item.id}"]`
        ).textContent;
        filtr.category = radioLabel.trim();
      }
    });
    const newData = [...DATA];
    if (filtr.category === "ВСІ" && filtr.direction === "ВСІ") {
      console.log("checkFiltr Alllll", newData);
      return newData;
    } else {
      const dataFiltr = dataCopy.filter((item) => {
        if (filtr.category === "ВСІ") {
          //   console.log('category === "ВСІ"');
          return item.specialization.toUpperCase() === filtr.direction;
        } else if (filtr.direction === "ВСІ") {
          //   console.log('direction === "ВСІ"');
          return item.category.toUpperCase() === filtr.category;
        } else {
          console.log(" неВСІ неВСІ");
          return (
            item.category.toUpperCase() === filtr.category &&
            item.specialization.toUpperCase() === filtr.direction
          );
        }
      });
      console.log("checkFiltr dataFiltr", dataFiltr);
      return dataFiltr;
    }
  }
  // перевірити дані фільтру
  // отримати дані фільтру
  // перевірити сортування кнопки
  //відсортувати дані фільтра

  function showCards(data) {
    console.log('showCards')
    containerCards.classList.add('hidden');
    startPreloader();
    let imagesLoaded = 0;
    // console.log("showCards", data);
    containerCards.innerHTML = "";
    data.forEach((item, index) => {
      const li = document.createElement("li");
      li.classList.add("trainer");
      li.setAttribute("key", index);
      const image = document.createElement("img");
      image.setAttribute("src", `${item.photo}`);
      image.setAttribute("alt", `trainer ${item["first name"]}`);
      image.classList.add("trainer__img");


      image.style.height = "300px";
      image.style.width = "280px";

      image.onload = function() {
        console.log('image.onload')
        imagesLoaded++;
        
        image.style.display = 'block';
        if (imagesLoaded === data.length) {
            stopPreloader(); 
            containerCards.classList.remove('hidden');
            sortingSection.removeAttribute('hidden');
            filterSection.removeAttribute('hidden');

        }
    };

    image.onerror = function() {
        stopPreloader();
        console.error('Error load image');
    };

      const p = document.createElement("p");
      p.classList.add("trainer__name");
      p.textContent = `${item["last name"]} ${item["first name"]}`;

      const button = document.createElement("button");
      button.classList.add("trainer__show-more");
      button.setAttribute("type", "button");
      button.textContent = "ПОКАЗАТИ";

      li.append(image);
      li.append(p);
      li.append(button);
      containerCards.append(li);
    });
    activModal();

  }

  function activModal() {
    console.log("activModal");
    let trainers = document.querySelectorAll(".trainer");
    //   console.log(trainers);
    trainers.forEach((item) => {
      // console.log(item)
      item.addEventListener("click", (e) => {
        console.log('click on "показать"');
        if (e.target && e.target.classList.contains("trainer__show-more")) {
          const trainerImageSrc = item.querySelector(".trainer__img");
          const search = trainerImageSrc.getAttribute("src");
          openModalWindow(search);
        }
      });
    });

    function openModalWindow(item) {
      // console.log(item)
      const trainerSelected = DATA.find((el) => el.photo === item);
      // console.log('trainerSelected', trainerSelected)
      createModal(trainerSelected);
      document.body.style.overflow = "hidden";
    }

    function createModal(item) {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      const modalBody = document.createElement("div");
      modalBody.classList.add("modal__body");

      const image = document.createElement("img");
      image.classList.add("modal__img");
      image.setAttribute("src", item.photo);

      const modalDescription = document.createElement("div");
      modalDescription.classList.add("modal__description");

      const modalName = document.createElement("p");
      modalName.classList.add("modal__name");
      modalName.textContent = `${item["last name"]} ${item["first name"]}`;

      const category = document.createElement("p");
      category.classList.add("modal__point", "modal__point--category");
      category.textContent = `Категорія: ${item.category}`;

      const experience = document.createElement("p");
      experience.classList.add("modal__point", "modal__point--experience");
      experience.textContent = `Досвід: ${item.experience}`;

      const specialization = document.createElement("p");
      specialization.classList.add(
        "modal__point",
        "modal__point--specialization"
      );
      specialization.textContent = `Напрям тренера: ${item.specialization}`;

      const text = document.createElement("p");
      text.classList.add("modal__text");
      text.textContent = item.description;

      const buttonClose = document.createElement("button");
      buttonClose.classList.add("modal__close");
      buttonClose.addEventListener("click", closeModalWindow);
      buttonClose.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 72 72"><path d="M 19 15 C 17.977 15 16.951875 15.390875 16.171875 16.171875 C 14.609875 17.733875 14.609875 20.266125 16.171875 21.828125 L 30.34375 36 L 16.171875 50.171875 C 14.609875 51.733875 14.609875 54.266125 16.171875 55.828125 C 16.951875 56.608125 17.977 57 19 57 C 20.023 57 21.048125 56.609125 21.828125 55.828125 L 36 41.65625 L 50.171875 55.828125 C 51.731875 57.390125 54.267125 57.390125 55.828125 55.828125 C 57.391125 54.265125 57.391125 51.734875 55.828125 50.171875 L 41.65625 36 L 55.828125 21.828125 C 57.390125 20.266125 57.390125 17.733875 55.828125 16.171875 C 54.268125 14.610875 51.731875 14.609875 50.171875 16.171875 L 36 30.34375 L 21.828125 16.171875 C 21.048125 15.391875 20.023 15 19 15 z"></path></svg>';

      modalDescription.append(modalName);
      modalDescription.append(category);
      modalDescription.append(experience);
      modalDescription.append(specialization);
      modalDescription.append(text);

      modalBody.append(buttonClose);
      modalBody.append(image);
      modalBody.append(modalDescription);

      modal.append(modalBody);
      document.body.prepend(modal);

      function closeModalWindow() {
        modal.remove();
        document.body.style.overflow = "";
      }
    }
  }

});

window.addEventListener("beforeunload", () => {
    console.log("beforeunload");
    sessionStorage.setItem("direction", filtr.direction);
    sessionStorage.setItem("category", filtr.category);
    sessionStorage.setItem("sortButton", sortButton);
  });

// preloader
function startPreloader() {
    console.log('startPreloader')
  document.getElementById("preloader").classList.remove("hidden");
}

function stopPreloader() {
    console.log('stopPreloader')
  document.getElementById("preloader").classList.add("hidden");
}

// document.addEventListener('readystatechange' ,()=>{
//     console.log('readystatechange', document.readyState)
//     if(document.readyState === 'interactive') {
//         startPreloader()
//     } else if(document.readyState === 'complete') {
//         stopPreloader()
//     }

// })
// document.addEventListener("DOMContentLoaded", function() {
// //     // const loader = document.getElementById('preloader');
// startPreloader()
// const images = document.querySelectorAll('img');
// let imagesLoaded = 0;
// images.forEach((img) => {
//     img.addEventListener('load', () => {
//         imagesLoaded++;
//         if (imagesLoaded === images.length) {
//             console.log('DOMContentLoaded')
//             stopPreloader()
//         }
//     });
//     img.addEventListener('error', () => {
//         imagesLoaded++;
//         if (imagesLoaded === images.length) {
//             stopPreloader()
//         }
//     });
// });
// });
