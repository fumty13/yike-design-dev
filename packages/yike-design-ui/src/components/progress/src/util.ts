import type { Status } from './progress';
import type { Size } from '../../utils/constant';

export const statusColor = {
  success: '#1fb4a2',
  error: '#fa5247',
  normal: '#2B5AED',
};

/**
 * 根据状态获取对应的 Icon 颜色
 */
export const getIconColor = (status: Status) =>
  statusColor[status] || statusColor['normal'];

/**
 * 根据状态获取对应的 Icon Name
 */
export const getIconName: (status: Status, isLinear?: boolean) => string = (
  status: Status,
  isLinear?: boolean,
) =>
  ({
    success: isLinear ? 'IconTickOutline' : 'IconTickFill',
    error: isLinear ? 'IconCloseOutline' : 'IconCrossFill',
  }[status]);

/**
 * 根据size获取对应的 svg大小
 */
export const getSvgSize: (size: Size) => string = (size: Size) =>
  ({
    s: '48',
    m: '64',
    l: '80',
  }[size]);
