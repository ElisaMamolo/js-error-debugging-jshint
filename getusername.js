function getUserName(user) {
    if (!user.name) {
      throw new SyntaxError("Incomplete data: no name");
    }
    return user.name;
  }
  
  try {
    getUserName({ name: 'Raul', lastName: 'Lopez' });
  } catch (error) {
    console.log("Gets executed if there's an error.");
    console.log(error);
  } finally {
    console.log('Gets executed at the end no matter what.');
  }
  