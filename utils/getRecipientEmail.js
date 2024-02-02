const getRecipientEmail = (user, users) => {
  return users?.filter((userToFilter) => {
    return userToFilter !== user.email})[0];
};

export default getRecipientEmail;
