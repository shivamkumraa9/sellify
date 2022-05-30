function uploadFile(multerObj) {
  return (req, res, next) => {
    multerObj(req, res, (err) => {
      if (err) return res.status(400).json({ error: err.message });
      if (!req.file) return res.status(400).json({ error: 'Please upload the files' });
      return next();
    });
  };
}

module.exports = uploadFile;
// eslint-disable-next-line spaced-comment
//http -A bearer -a eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mjg0ZDgxODI1NTdmOTQ0NjQ1ZmQ5N2MiLCJpYXQiOjE2NTM1NTY3ODh9._XdpRVmOqnRBUXOW0p-kY4KwJ4YhD2gcQ4ZP8pLMTos -f POST http://localhost:5000/product/upload-file file@C:\Users\shiva\Desktop\test.txt
