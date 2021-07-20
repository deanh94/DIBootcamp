//EX1


// let getCarHonda = [{make:"Honda ", model:123, yr:1992, japanese: true},
//                    {make:"BMW ", model:456, yr:1991, japanese: false}, 
//                    {make:"Audi ", model:789, yr:1990, japanese: false}];

//                    let carTrue = getCarHonda.filter(getCarHonda => getCarHonda.japanese ===true);
//                    let carInventory = getCarHonda.map((value, index, getCarHonda) => "This is a " + value.make + value.model + " from " + value.yr);
//                    console.log(carInventory);


//EX2
let inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

  let numbers = [2009, 2001, 1983, 2010, 1995];
  inventory.sort(function (x, y) {
    return x.car_year - y.car_year;
});

  console.log(inventory);
  numbers.sort();
  console.log(numbers);
  console.log(inventory);