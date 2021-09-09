/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

import { IRequestOptions, IRequestConfig, getConfigs, axios } from './serviceOptions';
export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class UsersService {
  /**
   *
   */
  static usersControllerCreate(
    params: {
      /** requestBody */
      body?: CreateUserDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/users';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static usersControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static usersControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateUserDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static usersControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/users/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class AlbumsService {
  /**
   *
   */
  static albumsControllerCreate(
    params: {
      /** requestBody */
      body?: CreateAlbumDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/albums';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static albumsControllerFindAll(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/albums';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static albumsControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/albums/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static albumsControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateAlbumDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/albums/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static albumsControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/albums/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ArticlesService {
  /**
   *
   */
  static articlesControllerCreate(
    params: {
      /** requestBody */
      body?: CreateArticleDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/articles';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static articlesControllerFindAll(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/articles';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static articlesControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/articles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static articlesControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateArticleDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/articles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static articlesControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/articles/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ProjectsService {
  /**
   *
   */
  static projectsControllerCreate(
    params: {
      /** requestBody */
      body?: CreateProjectDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/projects';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static projectsControllerFindAll(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/projects';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static projectsControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/projects/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static projectsControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateProjectDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/projects/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static projectsControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/projects/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class ResumeService {
  /**
   *
   */
  static resumeControllerCreate(
    params: {
      /** requestBody */
      body?: CreateResumeDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/resume';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static resumeControllerFindAll(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/resume';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static resumeControllerFindOne(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/resume/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static resumeControllerUpdate(
    params: {
      /**  */
      id: string;
      /** requestBody */
      body?: UpdateResumeDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/resume/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('patch', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
  /**
   *
   */
  static resumeControllerRemove(
    params: {
      /**  */
      id: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/resume/{id}';
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export class AuthService {
  /**
   *
   */
  static authControllerLogin(
    params: {
      /** requestBody */
      body?: LoginDto;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/api/v1/auth/login';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params.body;

      configs.data = data;
      axios(configs, resolve, reject);
    });
  }
}

export interface CreateUserDto {
  /** Họ và tên */
  name: string;

  /** Địa chỉ email */
  email: string;

  /** Mật khẩu định đạng MD5 */
  password: string;

  /** Đường dẫn ảnh avatar */
  avatar: string;

  /** Số điện thoại */
  phone: string;
}

export interface UpdateUserDto {
  /** Họ và tên */
  name?: string;

  /** Địa chỉ email */
  email?: string;

  /** Mật khẩu định đạng MD5 */
  password?: string;

  /** Đường dẫn ảnh avatar */
  avatar?: string;

  /** Số điện thoại */
  phone?: string;
}

export interface CreateAlbumDto {
  /**  */
  name: string;

  /**  */
  title: string;

  /**  */
  thumbnail: string;

  /**  */
  category: string[];
}

export interface UpdateAlbumDto {
  /**  */
  name?: string;

  /**  */
  title?: string;

  /**  */
  thumbnail?: string;

  /**  */
  category?: string[];
}

export interface CreateArticleDto {
  /**  */
  name: string;

  /**  */
  type: number;

  /**  */
  title: string;

  /**  */
  description: string;

  /**  */
  category: string;

  /**  */
  tag: string[];

  /**  */
  images: string[];

  /**  */
  cover: string;

  /**  */
  urlSound: string;

  /**  */
  urlYoutube: string;

  /**  */
  content: string;

  /**  */
  author: string;
}

export interface UpdateArticleDto {
  /**  */
  name?: string;

  /**  */
  type?: number;

  /**  */
  title?: string;

  /**  */
  description?: string;

  /**  */
  category?: string;

  /**  */
  tag?: string[];

  /**  */
  images?: string[];

  /**  */
  cover?: string;

  /**  */
  urlSound?: string;

  /**  */
  urlYoutube?: string;

  /**  */
  content?: string;

  /**  */
  author?: string;
}

export interface CreateProjectDto {
  /** Tên project */
  name: string;

  /** Mô tả */
  description: string;

  /** Mật khẩu định đạng MD5 */
  password: string;

  /** Ảnh cover */
  cover: string;

  /** Trang chủ */
  website: string;

  /** Link iOS */
  appleLink: string;

  /** Link Android */
  googleLink: string;

  /** Ảnh project */
  images: string[];
}

export interface UpdateProjectDto {
  /** Tên project */
  name?: string;

  /** Mô tả */
  description?: string;

  /** Mật khẩu định đạng MD5 */
  password?: string;

  /** Ảnh cover */
  cover?: string;

  /** Trang chủ */
  website?: string;

  /** Link iOS */
  appleLink?: string;

  /** Link Android */
  googleLink?: string;

  /** Ảnh project */
  images?: string[];
}

export interface CreateResumeDto {
  /** From Date */
  fromDate: number;

  /** To Date */
  toDate: number;

  /** Company Name */
  companyName: string;

  /** Position */
  position: string;

  /** Description job */
  description: string;
}

export interface UpdateResumeDto {
  /** From Date */
  fromDate?: number;

  /** To Date */
  toDate?: number;

  /** Company Name */
  companyName?: string;

  /** Position */
  position?: string;

  /** Description job */
  description?: string;
}

export interface LoginDto {
  /** Địa chỉ email */
  username: string;

  /** Mật khẩu định đạng MD5 */
  password: string;
}
