// BUDGET CONTROLLER
const budgetController = (() => {
  const Expense = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  const Income = (id, description, value) => {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  let data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  };

  return {
    addItem: (type, des, val) => {
      let newItem, ID;

      // create new ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      // create new item based on inc or exp type
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      // push new item into data structure
      data.allItems[type].push(newItem);

      // return the new element
      return newItem;
    },

    testing: function() {
      console.log(data);
    }
  };
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
    let input, newItem;

    // 1. Get the field input data
    input = UIController.getInput();

    // 2. Add item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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
