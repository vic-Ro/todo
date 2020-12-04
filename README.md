# todo
hmr bug when using .browserslistrc

fix:

webpack-dev-server > lib > utils > addEntries.js > change to:    

const webTarget = [
        'browserslist',
        'web',