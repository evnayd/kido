/*  for reasons */

document.querySelectorAll('.reason').forEach(reason => {
  reason.addEventListener('click', () => {
    console.log(reason), reason
      const targetId = reason.id;
      const reasonBoxes = document.querySelectorAll('.reason-box');
      reason.classList.add('active');

      document.querySelectorAll('.reason').forEach(otherReason => {
        if (otherReason  !== reason) {
          otherReason.classList.remove('active');
        }
    });

    reasonBoxes.forEach((userbox) => {
      if (userbox.dataset.target === targetId) {
        userbox.classList.add('active');
      } else {
        userbox.classList.remove('active');
      }
  });
  })
})


    
/* for users silder */
  

document.querySelectorAll('.user').forEach(user => {
  user.addEventListener('click', () => {
      const targetId = user.id;
      const usercards = document.querySelectorAll('.user-card');
      let clickedIndex;

      document.querySelectorAll('.user').forEach(otherUser => {
        if (otherUser !== user) {
            otherUser.classList.remove('active');
        }
    });

    user.classList.add('active');

      usercards.forEach((usercard, index) => {
          if (usercard.dataset.target === targetId) {
              usercard.classList.add('active');
              usercard.classList.remove('prev', 'next');
              clickedIndex = index;
          } else {
              usercard.classList.remove('active', 'prev', 'next');
          }
      });

      const nextIndex = (clickedIndex + 1) % usercards.length;
      const prevIndex = (clickedIndex - 1 + usercards.length) % usercards.length;

      usercards[nextIndex].classList.add('next');
      usercards[prevIndex].classList.add('prev');
  });
});

function setActiveUser(usercards, index) {
  const targetId = usercards[index].dataset.target;
  document.querySelectorAll('.user').forEach(user => {
      if (user.id === targetId) {
          user.classList.add('active');
      } else {
          user.classList.remove('active');
      }
  });
}



document.querySelector('.button-left').addEventListener('click', () => {
  const usercards = document.querySelectorAll('.user-card');
  let clickedIndex;

  usercards.forEach((usercard, index) => {
      if (usercard.classList.contains('active')) {
          usercard.classList.remove('active');
          clickedIndex = index;
          console.log( clickedIndex )
      } else {
          usercard.classList.remove('prev', 'next');
      }
  });

  const prevIndex = (clickedIndex - 1 + usercards.length) % usercards.length;
  usercards[prevIndex].classList.add('active');
  usercards[(prevIndex - 1 + usercards.length) % usercards.length].classList.add('prev');
  usercards[(prevIndex + 1) % usercards.length].classList.add('next');
  setActiveUser(usercards, prevIndex);
});

document.querySelector('.button-right').addEventListener('click', () => {
  const usercards = document.querySelectorAll('.user-card');
  let clickedIndex;

  usercards.forEach((usercard, index) => {
      if (usercard.classList.contains('active')) {
          usercard.classList.remove('active');
          clickedIndex = index;
          console.log(clickedIndex)
      } else {
          usercard.classList.remove('prev', 'next');
      }
  });

  const nextIndex = (clickedIndex + 1 + usercards.length) % usercards.length;
  usercards[nextIndex].classList.add('active');
  usercards[(nextIndex  + 1 + usercards.length) % usercards.length].classList.add('prev');
  usercards[(nextIndex  + 2) % usercards.length].classList.add('next');

  setActiveUser(usercards, nextIndex);
});


/* for yearly/monthly button */

    const monthlyButton = document.getElementById('monthly-button');
    const yearlyButton = document.getElementById('yearly-button');
    const monthlyCard = document.getElementById('monthly-card');
    const yearlyCard = document.getElementById('yearly-card');

    monthlyButton.addEventListener('click', function() {
      monthlyCard.classList.add('active');
      yearlyCard.classList.remove('active');
      monthlyButton.classList.add('active');
      yearlyButton.classList.remove('active');
    });

    yearlyButton.addEventListener('click', function() {
      monthlyCard.classList.remove('active');
      yearlyCard.classList.add('active');
      monthlyButton.classList.remove('active');
      yearlyButton.classList.add('active');
    });


/* for accordion */

    const steps = document.querySelectorAll('.step');

// Function to toggle accordion items based on visibility
function toggleAccordion() {
  this.classList.toggle('active');
}

// Add click event listener to each step
steps.forEach((step) => {
  step.addEventListener('click', toggleAccordion);
});


    /*const steps = document.querySelectorAll('.step');

    // Function to toggle accordion items based on visibility
    function toggleAccordion() {
      steps.forEach((step) => {
        const rect = step.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });
    }

    // Initial call to toggleAccordion to set initial state
    toggleAccordion();

    // Listen for scroll event and call toggleAccordion
    window.addEventListener('scroll', toggleAccordion);*/



/* for custom select - languages */

    document.addEventListener("DOMContentLoaded", function() {
      const selected = document.querySelector(".select-selected");
      const items = document.querySelectorAll(".select-items div");
    
      // Toggle the dropdown
      selected.addEventListener("click", function() {
        document.querySelector(".select-items").style.display = "flex";
      });
    
      // Update the selected option
      items.forEach(function(item) {
        item.addEventListener("click", function() {
          selected.querySelector("span").textContent = item.textContent;
          document.querySelector(".select-items").style.display = "none";
        });
      });
    
      // Hide the dropdown when clicking outside
      document.addEventListener("click", function(e) {
        if (!selected.contains(e.target)) {
          document.querySelector(".select-items").style.display = "none";
        }
      });
    });
    
    