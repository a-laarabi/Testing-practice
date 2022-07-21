const calculator = {
  add: function (...numbers) {
    return numbers.reduce((pv, cv) => pv + cv, 0);
  },
  subtract: function (...numbers) {
    return numbers.reduce((pv, cv) => pv - cv);
  },
  divide: function (...numbers) {
    return numbers.reduce((pv, cv) => pv / cv);
  },
  multiply: function (...numbers) {
    return numbers.reduce((pv, cv) => pv * cv);
  },
};

module.exports = calculator;