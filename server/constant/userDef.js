module.exports = (user) => {
  const user_list = {
    'leijing': 'leijing',
    'test': 'tester',
  };
  return user_list[user] ? user_list[user] : 'nobody';
};