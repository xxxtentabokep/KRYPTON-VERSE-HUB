function copyScript() {
    const text = document.getElementById("scriptCode").innerText;
    navigator.clipboard.writeText(text).then(() => {
        const btn = document.querySelector(".copy-btn");
        btn.innerText = "COPIED TO CLIPBOARD!";
        setTimeout(() => {
            btn.innerText = "COPY KRYPTON VERSE SCRIPT";
        }, 2000);
    });
}