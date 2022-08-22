import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import AutoImport from "unplugin-auto-import/vite"
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import { resolve } from 'path'
// import {getThemeVariables} from 'ant-design-vue/dist/theme';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver({importStyle: 'less'})],
      dts: true,
      types: [{
        from: 'vue-router',
        names: ['RouterLink', 'RouterView']
      }]
    }),
    AutoImport({
      imports: ["vue", "vue-router", {"vuex": ["useStore"]}], // 自动导入vue和vue-router相关函数
      dts: false,
    }),
    VueSetupExtend()
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // hack: `${getThemeVariables({dark: true}).hack}; @import "${resolve('src/styles/index.less')}";`,
          'primary-color': '#00ac75',
          'link-color': '#00ac75',
          'border-radius-base': '2px',
        },
        javascriptEnabled: true,
      }
    }
  },
  server: {
    host: true,
    port: 3000,
    open: true,
    proxy: {
      '/dev-api': {
        target: 'http://vue.ruoyi.vip/prod-api',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
})
