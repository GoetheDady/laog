import Laog from './laog';

// 创建一个默认实例
const defaultLaogInstance = new Laog();

const laog = () => {
  return Laog;
};

laog.log = defaultLaogInstance.log.bind(defaultLaogInstance);
laog.info = defaultLaogInstance.info.bind(defaultLaogInstance);
laog.warn = defaultLaogInstance.warn.bind(defaultLaogInstance);
laog.error = defaultLaogInstance.error.bind(defaultLaogInstance);

// 导出默认实例和类
export default laog();
