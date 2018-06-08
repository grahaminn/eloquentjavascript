function reliableMultiply(a, b) {
   try {
     return primitiveMultiply(a, b);
   }
   catch (error) {
   	  return reliableMultiply(a, b);
   }// Your code here.
}
