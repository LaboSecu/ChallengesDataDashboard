// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
    return async context => {
        context.result.data.map((item) => {
            item.name = item.firstName.charAt(0).toUpperCase() + item.firstName.slice(1) + " " + item.lastName.toUpperCase();
            delete item.firstName;
            delete item.lastName;
        });
        return context;
    };
};
