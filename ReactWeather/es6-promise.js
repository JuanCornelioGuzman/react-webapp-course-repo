function getTempCallBack(location, callback){
  callback(undefined, 78);
  callback('City not found');
}

getTempCallBack('Philadephia', function(err, temp){
  if(err){
    console.log('error', err);
  }else{
    console.log('success', temp);
  }
});

function getTempPromise(location){
  return new Promise(function(resolve, reject){
    reject('City not found');
    resolve(79);
  });
}

getTempPromise('Philadephia').then(
    function(temp){
      console.log('promise success', temp);
    }, function(err){
      console.log('error', err);
    }
);

//Challenge Area
function addPromise(a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else {
      reject('input valid numbers');
    }
  });
}

addPromise(1,2).then(function(sum) {
  console.log('sucess', sum);
}, function(err){
  console.log('error', err);
});


addPromise('john',2).then(function(sum) {
  console.log('this should not show up', sum);
}, function(err){
  console.log('this should appear', err);
});
