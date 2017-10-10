
FROM node:8.6.0

ENV NPM_CONFIG_LOGLEVEL warn

# Install and configure `serve`.
RUN yarn global add serve
CMD serve -s build
EXPOSE 5000

# Install all dependencies of the current project.
COPY package.json package.json
COPY npm-shrinkwrap.json npm-shrinkwrap.json
RUN yarn install

# Copy all local files into the image.
COPY . .

# Build for production.
RUN yarn run build --production
