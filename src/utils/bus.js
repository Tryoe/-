// bus.js
import mitt from 'mitt';

// 创建事件总线
const bus = mitt();

// 导出 bus 供全局使用
export default bus;
