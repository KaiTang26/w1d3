function calculateSalesTax(salesDate, taxRates){

  var results={};


  for(var i=0; i<salesDate.length; i++){

      if(!(salesDate[i].name in results)){

        results[salesDate[i].name]={
          totalSales:0,

          totalTaxes:0
        }

        sumSale(salesDate[i].name, salesDate[i].province,salesDate[i].sales,taxRates);

      }else if(salesDate[i].name in results){

        sumSale(salesDate[i].name, salesDate[i].province,salesDate[i].sales,taxRates);

      }

  }

  return results;

  function sumSale(br, pro, sales,rate){

    var sum=0;

    for(var j=0; j<=sales.length; j++){

      if(sales[j]){

        // console.log(sales[j])

        sum+=sales[j];

      }

    }

    var taxe=rate[pro]*sum;

    results[br].totalSales+=sum;

    results[br].totalTaxes+=taxe;

  }


}


var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};


console.log(calculateSalesTax(companySalesData, salesTaxRates))







