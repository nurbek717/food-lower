function tabs(tabsSelector , tabContensSelector, tabsParentSelector) {
     // Tabs
     const tabs = document.querySelectorAll(tabsSelector ),
     tabContens = document.querySelectorAll(tabContensSelector),
     tabsParent = document.querySelector(tabsParentSelector);
     
     
     function hideTabContens() {
        tabContens.forEach(tabContens =>{
           tabContens.classList.add('hide');
           tabContens.classList.remove('show' , 'fade');
        })
        
        tabs.forEach(tab => {
           tab.classList.remove('tabheader__item_active')
        })
     }
     
     function showTabContens(index = 0) {
        tabContens[index].classList.add('show', 'fade');
        tabContens[index].classList.remove('hide');
        tabs[index].classList.add('tabheader__item_active');
     }
     
     hideTabContens();
     showTabContens();
     
     tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')) {
           tabs.forEach((tab , index) => {
              if (target === tab) {
                 hideTabContens();
                 showTabContens(index);
              }
           })
        } 
     })
     
}


export default tabs;