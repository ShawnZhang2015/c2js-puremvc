/**
 * Created by zxh on 15/10/12.
 */

//同步工程资源到mac应用程序中
function syncToMac() {
    return {
        files: [
            {
                cwd: 'res',
                src: ['**'],
                dest: 'runtime/mac/MyJSGame-desktop.app/Contents/Resources/res'
            },
            {
                cwd: 'src',
                src: ['app-all.js'],
                dest: 'runtime/mac/MyJSGame-desktop.app/Contents/Resources/src'
            }
        ],
        pretend: false,         //是否模拟
        verbose: true,         //显示日志
        updateAndDelete: true   //是否删除本地文件（在源目录中不存在的文件）
    };
}

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        sync: {
            mac: syncToMac()
        },

        shell:{
            mac: {
                command: "open runtime/mac/MyJSGame-desktop.app/Contents/MacOS/MyJSGame-desktop"
            },

            //使用browserify编译js文件
            browserify: {
                command: [
                    "browserify js/app.js -d > app-all.js",
                    "cp app-all.js src/app-all.js"
                ].join('&&')
            }
        }
    });

    // 加载包含任务的插件。
    grunt.loadNpmTasks('grunt-sync');
    grunt.loadNpmTasks('grunt-shell');

    grunt.registerTask('mac', [
        'sync:mac',
        'shell:mac'
    ]);
};