const closeBtn = document.querySelector(".close-btn")
const logInContainer = document.querySelector(".log-in-container")
const signLog = document.querySelector(".sign-log")


signLog.addEventListener("click", function () {
    logInContainer.classList.add("log-in-modal")
})

closeBtn.addEventListener("click", handleClose)

function handleClose() {
    logInContainer.classList.remove("log-in-modal")
    console.log('asdasd')
}

// logInContainer.addEventListener("click", ()=>{
//     logInContainer.classList.remove("log-in-modal")
// })