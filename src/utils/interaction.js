// src/utils/interaction.js

import axios from 'axios'

export const IP = 'https://www.wxgoffice.cn/wxg/'

export const myAxios = axios.create({
  baseURL: IP
})
