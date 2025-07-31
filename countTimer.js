   function getNextBirthday(month, day){
   const now = new Date();
   let year = now.getFullYear();
   let nextBirthday = new Date(year, month - 1, day);

   if (now > nextBirthday){
    nextBirthday.setFullYear(year + 1);

   }
   return nextBirthday;

} 
 
 const birthMonth = 12;
 const birthDay = 29;

 const birthday = getNextBirthday(birthMonth, birthDay);

   function updateTimer(){
    const now = new Date();
    const diff = birthday - now;

    if (diff <= 0){
        document.getElementById("timer").innerHTML = "🎂 Happy Birthday! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 *60 *24));
    const hours = Math.floor((diff / (1000 * 60 *60 ))% 24);
    const minutes = Math.floor((diff / (1000 * 60 )) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    
   document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

setInterval(updateTimer, 1000);
updateTimer();
