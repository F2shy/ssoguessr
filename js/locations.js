//Y,X
//let fixedMarkers = [
   // [-5255,2025,"1.png"],
  //]
  let fixedMarkers = [
    [351,141,"1.png"],
    [323,145,"2.png"],
    [339,104,"3.png"],
    [265,240,"4.png"],
    [250,236,"5.png"],
    [234,215,"6.png"],
    [217,188,"7.png"],
    [186,146,"8.png"],
    [162,125,"9.png"],
    [173,116,"10.png"],
  ]

// Extracting the coordinates (y, x) from the array
let transformedCoordinates = [];

// Iterate through each array in fixedMarkers
for (let i = 0; i < fixedMarkers.length; i++) {
    let [y, x, imageName] = fixedMarkers[i];

    // Multiply x and y by 2 four times
    for (let j = 0; j < 4; j++) {
        y *= 2;
        x *= 2;
    }

    // Subtract the original x and y
    let newY = y - fixedMarkers[i][0];
    let newX = x - fixedMarkers[i][1];

    // Subtract 10 from both coordinates
    newY -= 10;
    newX -= 10;

    // Ensure newY is always negative
    if (newY > 0) {
        newY = -newY;
    }

    // Store the transformed coordinates in the new array
    transformedCoordinates.push([newY, newX, imageName]);
}

// Output the results
console.log("Original Coordinates:");
console.log(fixedMarkers);
console.log("Transformed Coordinates:");
console.log(transformedCoordinates);

 // 4x2=2256
  //-5223,2021

  //4 szer beszorozzuk 2 vel aztan kivonjuk belole az eredeti ssos koordinata szamot= -5265,2115
  //42 
  // meg 50 et kivonni?

  //351x2x2x2x2=5616-351=5265-50=5215
  //141x2x2x2x2=2256-141=2115-50=2065

  //347=5552=5205-50=5155
  //153=2448=2295-50=2245

  //250
  //193
  //40ot kivonok 5215 2065

  //original coords 2x2x2x2;-original coords, -90
  //y bol eleg ha kivonok 10 et a vegen


 //146 2100
  //323 4835


  //NA Y BOL KELL KIVONNI 10ET ES A X BOL 90 ET ES FASZA