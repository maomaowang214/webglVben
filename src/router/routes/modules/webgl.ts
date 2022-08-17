import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const webglRoute: AppRouteModule = {
  path: '/webgl',
  name: 'WebGL',
  component: LAYOUT,
  redirect: '/webgl/ciqu',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: t('routes.dashboard.dashboard'),
  },
  children: [
    {
      path: 'ciqu',
      name: 'ciquView',
      component: () => import('/@/views/webgl/ciquView.vue'),
      meta: {
        // affix: true,
        title: '磁驱3D模型',
      },
    },
  ],
};

export default webglRoute;
