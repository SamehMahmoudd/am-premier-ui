
document.getElementById("request-quote-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    axios.post('https://am-premier-server.onrender.com/submit-form', jsonData)
    .then(response => {
        // Handle success response
        console.log(response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error sending data:', error);
    });


       // Show modal popup
       const modal = document.getElementById("myModal");
       modal.style.display = "block";
       this.reset();
       console.log(jsonData)
   });
   
   // Close the modal when the user clicks on the close button
   const closeBtn = document.querySelector(".close");
   closeBtn.addEventListener("click", function() {
       const modal = document.getElementById("myModal");
       modal.style.display = "none";
   });
   
   // Close the modal when the user clicks anywhere outside of it
   window.addEventListener("click", function(event) {
       const modal = document.getElementById("myModal");
       if (event.target == modal) {
           modal.style.display = "none";
       }
   });
