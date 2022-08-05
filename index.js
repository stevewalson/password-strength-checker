const pswd_input = document.querySelector(".password"),
  copy = document.querySelector(".copy"),
  strength_text = document.querySelector(".strength_text"),
  uppercase = document.querySelector(".uppercase_char"),
  special_char = document.querySelector(".special_char"),
  pswd_length = document.querySelector(".pswd_length"),
  number = document.querySelector(".number"),
  uppercase_letters = /[A-Z]/,
  digits = /[0-9]/,
  format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
pswd_input.addEventListener("input", () => {
  if (0 === pswd_input.value.length)
    (strength_text.innerText = ""),
      (pswd_length.innerText =
        "\u2022 Use at least 15 characters long password."),
      (uppercase.innerText = "\u2022 Use at least one uppercase letter."),
      (special_char.innerText = "\u2022 Use special Characters (e.g. @%...)."),
      (number.innerText = "\u2022 Use digits."),
      (copy.style.pointerEvents = "none"),
      (copy.style.backgroundColor = "#9ba0c2");
  else
    for (
      i = 0,
        copy.style.pointerEvents = "initial",
        copy.style.backgroundColor = "#253df7";
      pswd_input.value.length > i;
      i++
    ) {
      var a = 0;
      pswd_input.value.length >= 15
        ? ((pswd_length.innerText =
            "\u2705 Use at least 15 characters long password."),
          a++)
        : (pswd_length.innerText =
            "\u2022 Use at least 15 characters long password."),
        uppercase_letters.test(pswd_input.value)
          ? ((uppercase.innerText =
              "\u2705 Use at least one uppercase letter."),
            a++)
          : (uppercase.innerText = "\u2022 Use at least one uppercase letter."),
        format.test(pswd_input.value)
          ? ((special_char.innerText =
              "\u2705 Use special Characters (e.g. @%...)."),
            a++)
          : (special_char.innerText =
              "\u2022 Use special Characters (e.g. @%...)."),
        digits.test(pswd_input.value)
          ? ((number.innerText = "\u2705 Use digits."), a++)
          : (number.innerText = "\u2022 Use digits."),
        0 == a
          ? ((strength_text.innerText = "Bad \u{1F4A9}"),
            (strength_text.style.color = "#a00126"))
          : 1 == a
          ? ((strength_text.innerText = "Too Weak \u{1F44E}"),
            (strength_text.style.color = "#ffcc01"))
          : 2 == a
          ? ((strength_text.innerText = "Still Weak \u{1F611}"),
            (strength_text.style.color = "#ff5e00"))
          : 3 == a
          ? ((strength_text.innerText = "Average \u{1F644}"),
            (strength_text.style.color = "#00da8e"))
          : 4 == a &&
            ((strength_text.innerText = "Perfect \u{1F44C}"),
            (strength_text.style.color = "#253df7"));
    }
}),
  copy.addEventListener("click", () => {
    pswd_input.select(), document.execCommand("copy");
  });
