module.exports = function(sequelize, DataTypes){
    var Resume = sequelize.define("Resume", {
        username: DataTypes.TEXT,
        email: DataTypes.TEXT,
        phone: DataTypes.TEXT,
        summary: DataTypes.STRING,
        education: DataTypes.STRING,
        employment: DataTypes.STRING,
        refs: DataTypes.STRING
    });
    return Resume;
};