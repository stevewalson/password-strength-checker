const pswd_input = document.querySelector('.password'),
        copy = document.querySelector('.copy'),
        strength_text = document.querySelector('.strength_text'),
        uppercase = document.querySelector('.uppercase_char'),
        special_char = document.querySelector('.special_char'),
        pswd_length = document.querySelector('.pswd_length'),
        number = document.querySelector('.number'),
        uppercase_letters = /[A-Z]/ ,
        digits = /[0-9]/ ,
        format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        

pswd_input.addEventListener("input",()=>{
    if(pswd_input.value.length === 0){
        strength_text.innerText = "";
        pswd_length.innerText = "• Use at least 15 characters long password.";
        uppercase.innerText = "• Use at least one uppercase letter.";
        special_char.innerText = "• Use special Characters (e.g. @%...).";
        number.innerText = "• Use digits.";
        copy.style.pointerEvents="none";
        copy.style.backgroundColor = "#9ba0c2";
    }
    else{
        copy.style.pointerEvents="initial";
        copy.style.backgroundColor = "#253df7";
    for(i = 0;pswd_input.value.length > i ;i++){
        var score = 0;
         if (pswd_input.value.length >= 15){
            pswd_length.innerText = "✅ Use at least 15 characters long password.";
            score++;
          }
        else{
            pswd_length.innerText = "• Use at least 15 characters long password.";
        }
        if(uppercase_letters.test(pswd_input.value)){
           uppercase.innerText = "✅ Use at least one uppercase letter.";
           score++;
        }
        else{
           uppercase.innerText = "• Use at least one uppercase letter.";
        }
        if (format.test(pswd_input.value)){
            special_char.innerText = "✅ Use special Characters (e.g. @%...).";
            score++;
          }
        else{
            special_char.innerText = "• Use special Characters (e.g. @%...).";
        }
        if(digits.test(pswd_input.value)){
            number.innerText = "✅ Use digits.";
            score++;
        }
        else{
            number.innerText = "• Use digits.";
        }
        if(score == 0){
            strength_text.innerText = "Bad 💩";
            strength_text.style.color = "#a00126";
        }
        else if(score == 1){
            strength_text.innerText = "Too Weak 👎";
            strength_text.style.color = "#ffcc01";
        }
        else if(score == 2){
            strength_text.innerText = "Still Weak 😑";
            strength_text.style.color = "#ff5e00";
        }
        else if(score == 3){
            strength_text.innerText = "Average 🙄";
            strength_text.style.color = "#00da8e";
        }
        else if(score == 4){
            strength_text.innerText = "Perfect 👌";
            strength_text.style.color = "#253df7";
        }
    }
    }
})

copy.addEventListener('click',()=>{
    pswd_input.select();
    document.execCommand('copy');
})