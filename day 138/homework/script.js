document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        let count = 0;
        const minusIcon = button.querySelector(".fa-circle-minus");
        const plusIcon = button.querySelector(".fa-circle-plus");
        const countText = button.querySelector("p#spec");

        minusIcon.addEventListener("click", () => {
            if (count > 0) {
                count--;
                countText.textContent = count;
            }
        });

        plusIcon.addEventListener("click", () => {
            count++;
            countText.textContent = count;
        });
    });
});
