const sendToken = async(user, statusCode, res) => {
  const token =await user.getJWTToken();
  

  // options for cookie
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };
  
  res.cookie("token",token,options)
  
  res.status(statusCode).json({
    success: true,
    user,
    token,
  });
};

module.exports = sendToken;