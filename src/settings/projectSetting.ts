import type { ProjectConfig } from '/#/config';
import { MenuTypeEnum, MenuModeEnum, TriggerEnum, MixSidebarTriggerEnum } from '/@/enums/menuEnum';
import { CacheTypeEnum } from '/@/enums/cacheEnum';
import {
  ContentEnum,
  PermissionModeEnum,
  ThemeEnum,
  RouterTransitionEnum,
  SettingButtonPositionEnum,
  SessionTimeoutProcessingEnum,
} from '/@/enums/appEnum';
import { SIDE_BAR_BG_COLOR_LIST, HEADER_PRESET_BG_COLOR_LIST } from './designSetting';
import { primaryColor } from '../../build/config/themeConfig';

// ! You need to clear the browser cache after the change
// ! 改动后需要清空浏览器缓存
const setting: ProjectConfig = {
  // Whether to show the configuration button
  // 是否显示SettingButton
  showSettingButton: true,

  // Whether to show the theme switch button
  // 是否显示主题切换按钮
  showDarkModeToggle: true,

  // `Settings` button position
  // 设置按钮位置 可选项
  // SettingButtonPositionEnum.AUTO: 自动选择
  // SettingButtonPositionEnum.HEADER: 位于头部
  // SettingButtonPositionEnum.FIXED: 固定在右侧
  settingButtonPosition: SettingButtonPositionEnum.AUTO,

  // Permission mode
  // 权限模式,默认前端角色权限模式
  // ROUTE_MAPPING: 前端模式（菜单由路由生成，默认）
  // ROLE：前端模式（菜单路由分开）
  permissionMode: PermissionModeEnum.ROUTE_MAPPING,

  // Permission-related cache is stored in sessionStorage or localStorage
  // 权限缓存存放位置。默认存放于localStorage
  permissionCacheType: CacheTypeEnum.LOCAL,

  // Session timeout processing
  // 会话超时处理方案
  // SessionTimeoutProcessingEnum.ROUTE_JUMP: 路由跳转到登录页
  // SessionTimeoutProcessingEnum.PAGE_COVERAGE: 生成登录弹窗，覆盖当前页面
  sessionTimeoutProcessing: SessionTimeoutProcessingEnum.ROUTE_JUMP,

  // color
  // 项目主题色
  themeColor: primaryColor,

  // Website gray mode, open for possible mourning dates
  // 网站灰色模式，用于可能悼念的日期开启
  grayMode: false,

  // Color Weakness Mode
  // 色弱模式
  colorWeak: false,

  // Whether to cancel the menu, the top, the multi-tab page display, for possible embedded in other systems
  // 是否取消菜单,顶部,多标签页显示, 用于可能内嵌在别的系统内
  fullContent: false,

  // content mode
  // 主题内容宽度
  contentMode: ContentEnum.FULL,

  // Whether to display the logo
  // 是否显示logo
  showLogo: false,

  // Whether to show footer
  // 是否显示底部信息 copyright
  showFooter: false,

  // Header configuration
  // 头部配置
  headerSetting: {
    // header bg color 背景色
    bgColor: HEADER_PRESET_BG_COLOR_LIST[0],
    // 固定头部
    fixed: true,
    // 是否显示顶部
    show: true,
    // 主题
    theme: ThemeEnum.LIGHT,
    // 开启锁屏功能
    useLockPage: false,
    // 显示全屏按钮
    showFullScreen: true,
    // 显示文档按钮
    showDoc: false,
    // 显示消息中心按钮
    showNotice: false,
    // 显示菜单搜索按钮
    showSearch: true,
  },

  // 菜单配置
  menuSetting: {
    // 背景色
    bgColor: SIDE_BAR_BG_COLOR_LIST[0],
    //  是否固定住菜单
    fixed: true,
    // 菜单折叠
    collapsed: false,
    // When sider hide because of the responsive layout 当由于响应式布局而隐藏时
    siderHidden: false,
    // 折叠菜单时候是否显示菜单名
    collapsedShowTitle: false,
    // Whether it can be dragged
    // Only limited to the opening of the left menu, the mouse has a drag bar on the right side of the menu
    // 是否可拖拽
    canDrag: false,
    // Whether to show no dom 是否显示
    show: true,
    // Whether to show dom
    hidden: false,
    // Menu width 菜单宽度
    menuWidth: 210,
    // Menu mode 菜单模式
    mode: MenuModeEnum.HORIZONTAL,
    // Menu type 菜单类型
    type: MenuTypeEnum.TOP_MENU,
    // Menu theme 菜单主题
    theme: ThemeEnum.DARK,
    // Split menu 分割菜单
    split: false,
    // Top menu layout 顶部菜单布局
    topMenuAlign: 'center',
    // Fold trigger position 折叠触发器的位置
    trigger: TriggerEnum.HEADER,
    // Turn on accordion mode, only show a menu
    // 手风琴模式，只展示一个菜单
    accordion: true,
    // Switch page to close menu
    // 在路由切换的时候关闭左侧混合菜单展开菜单
    closeMixSidebarOnChange: false,
    // Module opening method ‘click’ |'hover'
    // 左侧混合菜单模块切换触发方式
    mixSideTrigger: MixSidebarTriggerEnum.CLICK,
    // Fixed expanded menu
    // 是否固定左侧混合菜单
    mixSideFixed: false,
  },

  // 多标签
  multiTabsSetting: {
    // 刷新后是否保留已经打开的标签页
    cache: false,
    // Turn on 开启
    show: false,
    // 是否可以拖拽
    canDrag: true,
    // Turn on quick actions 开启快速操作
    showQuick: true,
    // 是否显示刷新按钮
    showRedo: true,
    // 是否显示折叠按钮
    showFold: true,
  },

  // 动画配置
  transitionSetting: {
    //  Whether to open the page switching animation
    // The disabled state will also disable pageLoading
    // 是否开启切换动画
    enable: true,

    // Route basic switching animation 动画名
    basicTransition: RouterTransitionEnum.FADE_SIDE,

    // Whether to open page switching loading
    // Only open when enable=true
    // 是否打开页面切换loading
    openPageLoading: true,

    // Whether to open the top progress bar
    // 是否打开页面切换顶部进度条
    openNProgress: false,
  },

  // Whether to enable KeepAlive cache is best to close during development, otherwise the cache needs to be cleared every time
  // 是否开启KeepAlive缓存  开发时候最好关闭,不然每次都需要清除缓存
  openKeepAlive: true,

  // Automatic screen lock time, 0 does not lock the screen. Unit minute default 0
  // 自动锁屏时间，为0不锁屏。 单位分钟 默认1个小时
  lockTime: 0,

  // 显示面包屑
  showBreadCrumb: false,

  // 显示面包屑图标
  showBreadCrumbIcon: false,

  // 是否使用全局错误捕获
  useErrorHandle: false,

  // 是否开启回到顶部
  useOpenBackTop: true,

  //  是否可以嵌入iframe页面
  canEmbedIFramePage: true,

  // Whether to delete unclosed messages and notify when switching the interface
  // 切换界面的时候是否删除未关闭的message及notify
  closeMessageOnSwitch: true,

  // Whether to cancel the http request that has been sent but not responded when switching the interface.
  // If it is enabled, I want to overwrite a single interface. Can be set in a separate interface
  // 切换界面的时候是否取消已经发送但是未响应的http请求。
  // 如果开启,想对单独接口覆盖。可以在单独接口设置
  removeAllHttpPending: false,
};

export default setting;
