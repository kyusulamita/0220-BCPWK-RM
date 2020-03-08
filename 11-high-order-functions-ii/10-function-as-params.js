
function cacheMyFunc (callbackFunc) {
  // hey, what if I save somthing once i see it?
  // so if someone asks me for it i already know where it is
  // and I dont have to look for it again

  const cache = {};

  return function (num) {
    // if ive already seen this number
    // im going to give you the answer i already have
    if (num in cache) {
      return cache[num];
    }

    // if not
    // ill calculate it, save it, then give it back to you
    const value = callbackFunc(num);
    cache[num] = value;

    return value;
  }

}


function square (num) {
  return num  *  num;
}


const cachedSquare = cacheMyFunc(square);
