import { BaseModel } from '@/api/interface/baseModel';

/**
 * models.SysDept
 */
export interface SysDeptModel extends BaseModel {
  /**
   * 部门名称
   */
  deptName?: string;
  /**
   * 显示排序
   */
  deptSort?: number;
  /**
   * 负责人
   */
  leader?: string;
  /**
   * 父部门ID
   */
  parentId?: number;
  /**
   * 联系电话
   */
  phone?: string;
  /**
   * 备注
   */
  remark?: string;
  /**
   * 启用状态 0 启用 1 禁用
   */
  status?: number;
}

export type CreateSysDept = Omit<SysDeptModel, keyof BaseModel>;
export type UpdateSysDept = Omit<SysDeptModel, keyof BaseModel> & Pick<BaseModel, 'id'>;
