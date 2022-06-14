
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 150000,
    years: 15,
    rate: 6
  };
  expect(calculateMonthlyPayment(values)).toEqual('1265.79');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 200000,
    years: 30,
    rate: 3.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('898.09');
});

it("should return high monthly payment based on high rate", function() {
  const values = {
    amount: 250000,
    years: 15,
    rate: 12.5
  };
  expect(calculateMonthlyPayment(values)).toEqual('3081.31');
});
