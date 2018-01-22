module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'User',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING(30),
                title: 'ID',
                formType: 'TEXT'
            },
            nickname: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '昵称',
                formType: 'TEXT'
            },
            phone: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '手机号',
                formType: 'TEXT'
            },
            email: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '邮箱',
                formType: 'TEXT'
            },
            password: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '密码',
                formType: 'TEXT'
            },
            signature: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '个性签名',
                formType: 'TEXT'
            },
            gender: {
                allowNull: false,
                defaultValue: '0',
                type: DataTypes.INTEGER(4),
                title: '性别',
                formType: 'SELECT',
                formValue: {0: '未知', 1: '男生', 2: '女生'}
            },
            born_at: {
                allowNull: true,
                type: DataTypes.STRING(24),
                title: '出生日期',
                formType: 'TEXT'
            },
            tags: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '标签',
                formType: 'TEXT'
            },
            avatar: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '头像',
                formType: 'TEXT'
            },
            wb_id: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '微博id',
                formType: 'TEXT'
            },
            wx_id: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '微信id',
                formType: 'TEXT'
            },
            following_count: {
                allowNull: true,
                defaultValue: '0',
                type: DataTypes.INTEGER(11),
                title: '关注数',
                formType: 'TEXT'
            },
            follower_count: {
                allowNull: true,
                defaultValue: '0',
                type: DataTypes.INTEGER(11),
                title: '粉丝数',
                formType: 'TEXT'
            },
            create_at: {
                allowNull: true,
                type: DataTypes.STRING(24),
                title: '创建日期',
                formType: 'TEXT'
            },
            create_by: {
                allowNull: true,
                type: DataTypes.STRING(30),
                title: '创建者',
                formType: 'TEXT'
            },
            update_at: {
                allowNull: true,
                type: DataTypes.STRING(24),
                title: '修改日期',
                formType: 'TEXT'
            },
            update_by: {
                allowNull: true,
                type: DataTypes.STRING(30),
                title: '修改者',
                formType: 'TEXT'
            },
            delete_at: {
                allowNull: true,
                type: DataTypes.STRING(24),
                title: '删除日期',
                formType: 'TEXT'
            },
            delete_by: {
                allowNull: true,
                type: DataTypes.STRING(30),
                title: '删除者',
                formType: 'TEXT'
            }
        },
        {
            tableName: 't_user',
            timestamps: false
        }
    );
};
