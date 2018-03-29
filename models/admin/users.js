/**
 * @param {discourseApi.DiscourseApiShuttle} api Discourse API instance
 */
module.exports = api => ({
  getById: id => api.authGet(`/admin/users/${id}.json`)(),
  search: ({ flag = 'active', order = 'username', ascending = false, page = 1, show_emails = false }) =>
    api.authGet(`/admin/users/list/${flag}.json`)({ order, ascending, page, show_emails }),
});