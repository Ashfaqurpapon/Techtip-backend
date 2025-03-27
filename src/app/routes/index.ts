import { Router } from 'express';
import { userRoutes } from '../modules/userNew/userRoutes';
import { PostRoutes } from '../modules/post/post.route';

import { PaymentRoute } from '../modules/payment/payment.route';
import { ProductRoutes } from '../modules/product/product.route';
import { ShopRoutes } from '../modules/Shop/shop.route';
import { CartRoute } from '../modules/cart/cart.router';
import { ProductCategoryRoutes } from '../modules/ProductCategory/ProductCategory.route';
import { OrderHistoryRoutes } from '../modules/OrderHistory/OrderHistory.route';
import { carCreateRoute } from '../modules/car/car_create_route';

import { BanglaRouter } from '../modules/Bangla/BanglaRoute';
import { CommentRoutes } from '../modules/comment/comment.route';
import { FollowerRoutes } from '../modules/follower/follower.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: userRoutes,
  },
  {
    path: '/post',
    route: PostRoutes,
  },
  {
    path: '/comment',
    route: CommentRoutes,
  },
  {
    path: '/follower',
    route: FollowerRoutes,
  },
  {
    path: '/payment',
    route: PaymentRoute,
  },
  {
    path: '/product',
    route: ProductRoutes,
  },
  {
    path: '/shop',
    route: ShopRoutes,
  },
  {
    path: '/cart',
    route: CartRoute,
  },
  {
    path: '/productCategory',
    route: ProductCategoryRoutes,
  },
  {
    path: '/orderHistory',
    route: OrderHistoryRoutes,
  },
  {
    path: '/cars',
    route: carCreateRoute,
  },
  {
    path: '/Bangla',
    route: BanglaRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
