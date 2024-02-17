const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabContent = document.querySelectorAll('.js-tabcontent section')


if (tabMenu.length && tabContent.length) {
    //Adiciona no primeiro elemento ao entrar na pagina
    tabContent[0].classList.add('ativo')

    function tabContentSelected(index) {
        tabContent.forEach((element) => {
            element.classList.remove('ativo')
        })
        tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((element, index) => {
        element.addEventListener('click', () => {
            tabContentSelected(index)
        })
    })

}
// macetinho do seletor vim somente por condição definida

//nome da classe seletor[condiçãp]
//
// exemplo
// ('.js-menu a[href⁼"#"')

function initAccordion() {
    const accordionList = document.querySelectorAll('.faq-lista dt');
    const activeClass = 'openQuestionTab';

    if (accordionList.length) {
        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion() {
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();


const tabmenu = document.querySelectorAll('.js-menu a[href^="#"]')

function getTarget(event) {
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    const topo = section.offsetTop

    window.scrollTo({
        top: topo,
        behavior: "smooth"
    })
}

tabmenu.forEach((element) => {
    element.addEventListener('click', getTarget)
})

