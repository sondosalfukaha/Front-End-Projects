const body = document.querySelector('body'),
        nav = document.querySelector('nav'),
        modeToggle = document.querySelector('.dark-light'),
        searchToggle = document.querySelector('.searchToggle'),
        siderbarClose = document.querySelector('.siderbarClose'),
        sidebarOpne = document.querySelector('.sidebarOpne');

        //Js code to toggle dark and night mode
        modeToggle.addEventListener('click', ()=>{
            modeToggle.classList.toggle('active');
            body.classList.toggle('dark')
        });

        //Js code to toggle search box
        searchToggle.addEventListener('click', () => {
            searchToggle.classList.toggle('active');
        });
        //js code to toggle sidebar
        sidebarOpne.addEventListener('click', ()=>{
            nav.classList.add('active');
        });
        body.addEventListener('click', e=>{
            let clickElm = e.target;
            if(!clickElm.classList.contains('sidebarOpne') && !clickElm.classList.contains('menu')){
                nav.classList.remove('active');
            
            };
        })

