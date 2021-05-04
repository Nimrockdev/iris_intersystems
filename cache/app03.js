mydata.retrieve({global: "Customer", subscripts: [1]}, "array",
function(error, result) {
   if (error) {
      // error   (see result.ErrorMessage
      //       and result.ErrorCode)
   }
   else {
      // success
   }
}
);