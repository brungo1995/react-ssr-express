module.exports = {

    // Tell webpack to run babel on every 
    // file it runs through
    module: {
        rules: [
            {
                // test against only every file with the extension
                test: /\.js?$/,

                // use this loader
                loader: 'babel-loader',

                // do not run babel on any file inside node module
                exclude: /node_modules/,

                // options to be passed to the babel loader
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 versions'] } }]
                    ]
                }
            }
        ]
    }
}