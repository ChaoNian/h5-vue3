import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// 配置插件
import { PostCsspxToViewport } from './plugins/postcss-px-to-viewport'
import  unocss from 'unocss/vite'

// unocss 预设
import {presetIcons, presetAttributify, presetUno} from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    unocss({ // CSS 原子化
      presets:[presetIcons(),presetAttributify(),presetUno()],
      rules:[
        ['flex', {display: "flex"}],
        ['red', {color: 'red'}],
        // 动态原子化
        [/^m-(\d+)$/, ([, d]) =>({margin: `${Number(d) * 10}px`})]
      ],
      shortcuts: {
        cike: ['flex', 'red']
      }
    })
  ],
  css: {
    postcss: {
      plugins:[PostCsspxToViewport()]
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
