// BUDGET CONTROLLER
const budgetController = (() => {
  // Code to be written
})();

// UI CONTROLLER
const UIController = (() => {
  const DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getInput: () => {
      return {
        type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },

    getDOMstrings() {
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
const controller = ((budgetCtrl, UICtrl) => {
  const setupEventListeners = () => {
    const DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', e => {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  };

  const ctrlAddItem = () => {
    // 1. Get the field input data
    const input = UIController.getInput();

    // 2. Add item to the budget controller
    // 3. Add the new item to the UI
    // 4. Calculate the budget
    // 5. Display the budget
  };

  return {
    init: () => {
      console.log('Application has started.');
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
