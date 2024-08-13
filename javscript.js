
        // header menu toggling
        document.addEventListener('DOMContentLoaded', () => {
            const menuIcon = document.querySelector('.menu-icon');
            const header = document.querySelector('header');
            const nav =document.querySelector("nav");
        
            menuIcon.addEventListener('click', () => {
                if (!header.classList.contains('expanded')) {
                    header.classList.add('expanded');
                    nav.classList.add("show");
                    setTimeout(() => {
                        header.classList.add('stage2');
                    }, 300);
                } else {
                    header.classList.remove('stage2');
                    setTimeout(() => {
                        header.classList.remove('expanded');
                        nav.classList.remove("show");
                    }, 300);
                }
            });
        });
        
    // mistekakel
        window.addEventListener('scroll', function () {
            const header = document.querySelector('header');
            if (window.scrollY > 0) {
                header.classList.add('color');
            } else {
                header.classList.remove('color');
            }
        });

        let sections = document.querySelectorAll("section");
        let navlinks = document.querySelectorAll("header nav a");

        window.onscroll = () => {
            let top = window.scrollY;

            sections.forEach(sec => {
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                if (top >= offset && top < offset + height) {
                    navlinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').includes(id)) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        };


        document.addEventListener('DOMContentLoaded', () => {
            const firstLink = document.getElementById('first-link');

            firstLink.addEventListener('click', (event) => {
                event.preventDefault();
              
                document.body.style.transition = 'display 0.5s ease-out';
                document.body.style.display = "none";

                setTimeout(() => {
                    window.location.reload();
                }, 400); 
            });
          
        });

        const gallery = document.querySelectorAll(".product-box");
        const previewBox = document.querySelector(".preview-box");
        const previewImg = previewBox.querySelector(".preview-box .image-box img");
        const closeIcon = previewBox.querySelector(".image-box .icon");
        const currentImg = previewBox.querySelector(".current-img");
        const totalImg = previewBox.querySelector(".total-img");

        window.onload = () => {
            for (let i = 0; i < gallery.length; i++) {
                totalImg.textContent = gallery.length;
                let newIndex = i;
                let clickedImgIndex;

                gallery[i].onclick = () => {
                    clickedImgIndex = i;
                    function preview() {
                        currentImg.textContent = newIndex +1;
                        let imageURL = gallery[newIndex].querySelector("img").src;
                        previewImg.src = imageURL;
                    }
                    preview();

                    const prevBtn = document.querySelector(".prev");
                    const nextBtn = document.querySelector(".next");

                    prevBtn.onclick = () => {
                        newIndex--;
                        if (newIndex < 0) { newIndex = gallery.length-1; }
                        preview();

                    }
                    nextBtn.onclick = () => {
                        newIndex++;
                        if (newIndex > gallery.length-1) { newIndex = 0; }
                        preview();
                    }
                    previewImg.onclick = () => {
                        newIndex++;
                        if (newIndex > gallery.length-1) { newIndex = 0; }
                        
                        preview();
                    }
                    document.querySelector("body").style.overflow = "hidden";
                    previewBox.classList.add("show");

                    

                    closeIcon.onclick = () => {
                        newIndex = clickedImgIndex;
                        previewBox.classList.remove("show");
                        document.querySelector("body").style.overflow = "scroll";
                    }

                    
                }

            }
        }

        // for selecting service in section contact

        const btnlist = document.querySelectorAll(".check-title");

        btnlist.forEach(btnEL => {
            btnEL.addEventListener('click', () => {
                if (btnEL.classList.contains("border")) {
                    btnEL.classList.remove("border");
                } else {
                    btnEL.classList.add("border");
                }
            });
          
        });