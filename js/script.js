// Ẩn hiện menu
const menuBtn = document.querySelector(".menu");
const navUl = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
  navUl.classList.toggle("active");
});

// Cuộn mượt
const viewWorkBtn = document.querySelector("#view-work");
const projectSection = document.querySelector("#projects");

viewWorkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  projectSection.scrollIntoView({ behavior: "smooth" });
});

// Validate
const form = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const successMsg = document.querySelector("#successMessage");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));
  // successMsg.textContent = "";
  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";
  successMsg.textContent = "";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  let valid = true;

  if (name === "") {
    nameError.textContent = "Vui lòng nhập tên";
    nameInput.focus();
    valid = false;
  }

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
  if (email === "") {
    emailError.textContent = "Vui lòng nhập email";
    emailInput.focus();
    valid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Email không hợp lệ! (ví dụ: example@gmail.com)";
    emailInput.focus();
    valid = false;
  }

  if (message.length < 10) {
    messageError.textContent = "Nội dung phải có ít nhất 10 ký tự";
    messageInput.focus();
    valid = false;
  }

  if (valid) {
    successMsg.textContent = "✅ Cảm ơn bạn đã gửi liên hệ!";

    // Lưu dữ liệu vào localStorage
    const formData = {
      name: name,
      email: email,
      message: message,
    };
    localStorage.setItem("contactForm", JSON.stringify(formData));
    console.log(formData);

    form.reset();
  }
});

// Mode
const themeBtn = document.querySelector("#btn-mode");
const body = document.body;

themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
});
