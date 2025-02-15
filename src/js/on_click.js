document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".btn-toggle").forEach(button => {
        button.addEventListener("click", function () {
            let target = document.querySelector(this.dataset.target);
            if (target) {
                target.classList.toggle("active");
            }
        });
    });

    document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
        toggle.addEventListener("click", function () {
            let menu = this.nextElementSibling;
            if (menu && menu.classList.contains("dropdown-menu")) {
                menu.classList.toggle("show");
            }
        });
    });

    document.addEventListener("click", function (event) {
        document.querySelectorAll(".dropdown-menu.show").forEach(menu => {
            if (!menu.previousElementSibling.contains(event.target)) {
                menu.classList.remove("show");
            }
        });
    });

    document.querySelectorAll(".modal-toggle").forEach(button => {
        button.addEventListener("click", function () {
            let modal = document.querySelector(this.dataset.target);
            if (modal) {
                modal.classList.add("open");
            }
        });
    });

    document.querySelectorAll(".modal .close").forEach(button => {
        button.addEventListener("click", function () {
            this.closest(".modal").classList.remove("open");
        });
    });

    document.querySelectorAll(".tab-nav button").forEach(button => {
        button.addEventListener("click", function () {
            let parent = this.closest(".tab-container");
            let target = parent.querySelector(this.dataset.target);
            if (target) {
                parent.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
                target.classList.add("active");
            }
        });
    });
});