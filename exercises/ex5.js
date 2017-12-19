function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
  	const gooUsersId = goodUsers.map( good => good.id)
  	console.log(gooUsersId)
    return submittedUsers
    		.some( (user) => user.id in gooUsersId)
  };
}

module.exports = checkUsersValid