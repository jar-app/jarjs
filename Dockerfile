FROM node:0.12

ENV APP_ROOT /usr/src/app
RUN mkdir -p /usr/src/app
WORKDIR $APP_ROOT

# Only cause Docker cache miss on packge.json change
COPY ./package.json $APP_ROOT/package.json
RUN npm install

# node_modules into global path so we don't need to keep
# referencing node_modules/module/bin/cmd
ENV PATH $APP_ROOT/node_modules/.bin:$PATH

# Only cause Docker cache miss on packge.json change
COPY ./typings.json $APP_ROOT/typings.json
RUN typings install
COPY . $APP_ROOT


# Compile the one-off webpack file along with the definitions required
RUN tsc webpack.config.ts typings/index.d.ts

# Default command to run webpack
CMD webpack --config webpack.config.js
