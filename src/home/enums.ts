import { Item, Post } from "uq-app/uqs/JkMe";

interface Title {
    title: string;
    vice?: string;
    unit?: string;
    fixed?: number;
}

export const itemTitles:{[item in Item]: Title} = {
    [Item.orderDeliver]: {
        title: '发货',
        vice: '已发货金额',
        unit: '元',
    },
    [Item.orderReturn]: {
        title: '退货',
        unit: '元',
    },
    [Item.orderReceive]: {
        title: '收款',
        unit: '元',
    },
    [Item.orderReceiveReturn]: {
        title: '退款',
        unit: '元',
    },
    [Item.orderProfitCommission]: {
        title: '有效销售额',
        unit: '元',
    },
    [Item.orderAmountCommission]: {
        title: '销售提成',
        unit: '元',
    },
    [Item.orderCustomerPoint]: {
        title: '客户积分',
        unit: '点',
    },
};

export const postTitles:{[post in Post]: Title} = {
	[Post.staff]: {
        title: '职员',
    },
	[Post.staffSales]: {
        title: '销售员',
    },
    [Post.manager]: {
        title: '经理',
    },
	[Post.managerIT]: {
        title: 'IT总监',
    },
	[Post.client]: {
        title: '代理',
    },
	[Post.clientSales]: {
        title: '轻代理',
    },
	[Post.customer]: {
        title: '顾客',
    }
}
