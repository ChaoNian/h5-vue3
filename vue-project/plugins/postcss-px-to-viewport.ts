// postcss 的插件 vite内置； postCss 无需安装
import {Plugin} from 'postcss'

const Options = {
    viewPortWidth:375 // UI设计稿的宽度 给多少写多少，默认375
}
interface Options {
    viewPortWidth?: number
}
export  const PostCsspxToViewport = (options:Options = Options):Plugin => {
    const opt = Object.assign({}, Options, options)
    return {
        postcssPlugin: 'postcss-px-to-viewport',
        // 钩子函数 获取css所有节点
        Declaration(node) {
            // px 转换成 vw
            // 设计稿 375px
            if (node.value.includes('px')) {
                console.log(node.prop,'---=-=-', node.value, 'suoyou ')
                // 获取到px的值
                const num = parseFloat(node.value) // 考虑到小数
                node.value = `${((num/opt.viewPortWidth) * 100).toFixed(2)}vw`
            }
        }
    }
}