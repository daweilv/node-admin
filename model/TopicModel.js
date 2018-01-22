module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'Topic',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: DataTypes.STRING(30),
                title: 'ID',
                formType: 'TEXT'
            },
            title: {
                allowNull: false,
                type: DataTypes.STRING(255),
                title: '标题',
                formType: 'TEXT'
            },
            type: {
                allowNull: false,
                defaultValue: '1',
                type: DataTypes.INTEGER(4),
                title: '类型',
                formType: 'SELECT',
                formValue: {1: '周边', 2: '图文', 3: '约伴', 4: '活动'}
            },
            topiccategory_id0: {
                allowNull: true,
                type: DataTypes.STRING(30),
                title: '一级分类',
                formType: 'TEXT'
            },
            topiccategory_id1: {
                allowNull: true,
                type: DataTypes.STRING(30),
                title: '二级分类',
                formType: 'TEXT'
            },
            topiccategoryattr_id: {
                allowNull: true,
                type: DataTypes.STRING(30),
                title: '分类属性',
                formType: 'TEXT'
            },
            content: {
                allowNull: true,
                type: DataTypes.TEXT,
                title: '内容',
                formType: 'TEXT'
            },
            thumbnail: {
                allowNull: true,
                type: DataTypes.TEXT,
                title: '插图',
                formType: 'TEXT'
            },
            price: {
                allowNull: true,
                type: DataTypes.INTEGER(11),
                title: '金额(分)',
                formType: 'TEXT'
            },
            location: {
                allowNull: true,
                type: DataTypes.STRING(255),
                title: '位置',
                formType: 'TEXT'
            },
            recommend: {
                allowNull: true,
                defaultValue: '0',
                type: DataTypes.INTEGER(11),
                title: '推荐指数',
                formType: 'TEXT'
            },
            up_count: {
                allowNull: true,
                defaultValue: '0',
                type: DataTypes.INTEGER(11),
                title: '点赞数',
                formType: 'TEXT'
            },
            like_count: {
                allowNull: true,
                defaultValue: '0',
                type: DataTypes.INTEGER(11),
                title: '喜欢数',
                formType: 'TEXT'
            },
            visit_count: {
                allowNull: true,
                defaultValue: '0',
                type: DataTypes.INTEGER(11),
                title: '浏览数',
                formType: 'TEXT'
            },
            reply_count: {
                allowNull: true,
                defaultValue: '0',
                type: DataTypes.INTEGER(11),
                title: '回复数',
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
            },
            is_sold: {
                allowNull: false,
                defaultValue: '0',
                type: DataTypes.INTEGER(4),
                title: '售出状态',
                formType: 'SELECT',
                formValue: {0: '出售中', 1: '已售出'}
            },
            start_at: {
                allowNull: true,
                type: DataTypes.STRING(24),
                title: '活动开始日期',
                formType: 'TEXT'
            },
            end_at: {
                allowNull: true,
                type: DataTypes.STRING(24),
                title: '活动开始日期',
                formType: 'TEXT'
            }
        },
        {
            tableName: 't_topic',
            timestamps: false
        }
    );
};
