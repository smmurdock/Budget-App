// BUDGET CONTROLLER
const budgetController = (function() {
  // Code to be written
})();

// UI CONTROLLER
const UIController = (function() {
  // Code to be written
})();

// GLOBAL APP CONTROLLER
const controller = (function(budgetCtrl, UICtrl) {
  const ctrlAddItem = function() {
    // 1. Get the field input data
    // 2. Add item to the budget controller
    // 3. Add the new item to the UI
    // 4. Calculate the budget
    // 5. Display the budget
  };

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(e) {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
