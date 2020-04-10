module.exports = {
    sessionChecker: function(req, res, next)  {
        console.log("midl")
        if (req.session.user && req.cookies.user_sid) {
            res.redirect('/ahome');
        } else {
         console.log("no cookies so need to check pw")
         next();
        }
      }
  }

  //idea: 2 types: 1for login, 2for nromal